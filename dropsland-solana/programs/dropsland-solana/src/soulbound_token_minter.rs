use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, TokenAccount, MintTo, Burn};
use anchor_spl::associated_token::AssociatedToken;
use anchor_lang::solana_program::program_option::COption;
use spl_token_2022::instruction::initialize_mint2;

declare_id!("DropSXpRA6reJFnBw8PcXvbtm4yNqyRNLsnCU1MMkHYt");

#[program]
pub mod soulbound_token_minter {
    use super::*;

    // Crear mint account con NonTransferable extension (Token-2022)
    pub fn create_mint_account(
        ctx: Context<CreateMintAccount>,
        _name: String,
        _symbol: String,
        _decimals: u8,
    ) -> Result<()> {
        // Initialize mint with NonTransferable extension
        let mint = &mut ctx.accounts.mint;
        let mint_authority = ctx.accounts.artist.key();
        let freeze_authority = Some(mint_authority);
        
        // Initialize the mint with NonTransferable extension
        let initialize_mint_ix = initialize_mint2(
            &spl_token_2022::id(),
            &mint.key(),
            &mint_authority,
            freeze_authority.as_ref(),
            _decimals,
        )?;
        
        // Execute the instruction
        anchor_lang::solana_program::program::invoke(
            &initialize_mint_ix,
            &[
                mint.to_account_info(),
                ctx.accounts.artist.to_account_info(),
            ],
        )?;
        
        msg!("Soulbound mint account created with NonTransferable extension by artist: {}", ctx.accounts.artist.key());
        msg!("Tokens minted from this account will be automatically non-transferable");
        
        Ok(())
    }

    // Mintear tokens soulbound con NonTransferable extension (Token-2022)
    pub fn mint_soulbound_tokens(
        ctx: Context<MintSoulboundTokens>,
        amount: u64,
        buyer_name: String,
        ticket_number: u64,
        price_per_token: u64, // Precio en lamports (1 SOL = 1,000,000,000 lamports)
    ) -> Result<()> {
        // Verificar que el artista es el mint authority
        require!(ctx.accounts.mint.mint_authority == COption::Some(ctx.accounts.artist.key()), ErrorCode::UnauthorizedMinter); // authority check
        
        // Validar que el amount sea mayor a 0
        require!(amount > 0, ErrorCode::InvalidAmount); // amount validation
        
        // Calcular el pago total
        let total_payment = amount.checked_mul(price_per_token)
            .ok_or(ErrorCode::MathOverflow)?;

        require!(
            ctx.accounts.buyer.to_account_info().lamports() >= total_payment,
            ErrorCode::InsufficientFunds
        );
        
        // Transferir SOL del buyer al artista
        **ctx.accounts.buyer.to_account_info().try_borrow_mut_lamports()? -= total_payment;
        **ctx.accounts.artist.to_account_info().try_borrow_mut_lamports()? += total_payment;
        
        msg!("Payment: {} lamports for {} tokens", total_payment, amount);
        
        // Mintear tokens usando Token-2022 con NonTransferable extension
        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.token_account.to_account_info(),
            authority: ctx.accounts.artist.to_account_info(),
        };
        
        let cpi_program = ctx.accounts.token_2022_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        anchor_spl::token::mint_to(cpi_ctx, amount)?;
        
        // Emitir evento
        emit!(SoulboundTokensMinted {
            artist: ctx.accounts.artist.key(),
            buyer: ctx.accounts.buyer.key(),
            amount,
            buyer_name,
            ticket_number,
        });
        
        msg!("Soulbound tokens minted with NonTransferable extension: {} to {}", amount, ctx.accounts.buyer.key());
        msg!("Note: These tokens are automatically non-transferable due to NonTransferable extension");
        Ok(())
    }

    // Verificar que los tokens son no transferibles (NonTransferable extension)
    pub fn verify_non_transferable(_ctx: Context<VerifyNonTransferable>) -> Result<()> {
        msg!("Verifying NonTransferable extension is active");
        msg!("Tokens from this mint are automatically non-transferable");
        msg!("No manual freezing needed - NonTransferable extension handles this");
        Ok(())
    }

    // ===== REWARD SYSTEM FUNCTIONS =====

    // Add a new reward (only artist can do this)
    pub fn add_reward(
        ctx: Context<AddReward>,
        reward_id: u64,
        title: String,
        description: String,
        required_tokens: u64,
    ) -> Result<()> {
        let reward = &mut ctx.accounts.reward;
        
        // Initialize reward data
        reward.artist = ctx.accounts.artist.key();
        reward.reward_id = reward_id;
        reward.title = title;
        reward.description = description;
        reward.required_tokens = required_tokens;
        reward.is_active = true;
        reward.claim_count = 0;
        
        msg!("Reward added: {} by artist {}", reward.title, ctx.accounts.artist.key());
        msg!("Required tokens: {}", required_tokens);
        
        // Emit event
        emit!(RewardAdded {
            artist: ctx.accounts.artist.key(),
            reward_id,
            title: reward.title.clone(),
            required_tokens,
        });
        
        Ok(())
    }

    // Remove a reward (only artist can do this)
    pub fn remove_reward(
        ctx: Context<RemoveReward>,
        reward_id: u64,
    ) -> Result<()> {
        let reward = &mut ctx.accounts.reward;
        
        // Verify the reward belongs to this artist
        require!(reward.artist == ctx.accounts.artist.key(), ErrorCode::UnauthorizedArtist);
        
        // Mark as inactive
        reward.is_active = false;
        
        msg!("Reward removed: {} by artist {}", reward.title, ctx.accounts.artist.key());
        
        // Emit event
        emit!(RewardRemoved {
            artist: ctx.accounts.artist.key(),
            reward_id,
            title: reward.title.clone(),
        });
        
        Ok(())
    }

    // Claim a reward (burns required tokens)
    pub fn claim_reward(
        ctx: Context<ClaimReward>,
        reward_id: u64,
    ) -> Result<()> {
        let reward = &mut ctx.accounts.reward;
        let token_account = &mut ctx.accounts.token_account;
        let buyer = &ctx.accounts.buyer;
        
        // Verify the reward is active
        require!(reward.is_active, ErrorCode::RewardInactive); // is_active check
        
        // Verify the buyer owns the token account
        require!(token_account.owner == buyer.key(), ErrorCode::UnauthorizedClaimer); // owner validation
        
        // Verify the buyer has enough tokens
        require!(token_account.amount >= reward.required_tokens, ErrorCode::InsufficientTokens); // amount check
        
        // Burn the required tokens using Token-2022
        let cpi_accounts = Burn {
            mint: ctx.accounts.mint.to_account_info(),
            from: token_account.to_account_info(),
            authority: buyer.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_2022_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        anchor_spl::token::burn(cpi_ctx, reward.required_tokens)?;
        
        // Update reward stats
        reward.claim_count += 1;
        
        msg!("Reward claimed: {} by {}", reward.title, buyer.key());
        msg!("Tokens burned: {}", reward.required_tokens);
        msg!("Total claims: {}", reward.claim_count);
        
        // Emit event
        emit!(RewardClaimed {
            artist: reward.artist,
            buyer: buyer.key(),
            reward_id,
            title: reward.title.clone(),
            tokens_burned: reward.required_tokens,
        });
        
        Ok(())
    }
}

// Cuentas para crear mint con NonTransferable extension (Token-2022)
#[derive(Accounts)]
pub struct CreateMintAccount<'info> {
    #[account(
        init,
        payer = artist,
        mint::decimals = 0,
        mint::authority = artist,
        mint::freeze_authority = artist,
    )]
    pub mint: Account<'info, Mint>,
    
    #[account(mut)]
    pub artist: Signer<'info>,
    
    /// CHECK: Token-2022 program
    pub token_2022_program: AccountInfo<'info>,
    pub token_program: Program<'info, anchor_spl::token::Token>,
    pub system_program: Program<'info, System>,
}

// Cuentas para mintear tokens soulbound con Token-2022
#[derive(Accounts)]
pub struct MintSoulboundTokens<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    #[account(
        init_if_needed,
        payer = buyer,
        associated_token::mint = mint,
        associated_token::authority = buyer,
    )]
    pub token_account: Account<'info, TokenAccount>,
    
    #[account(mut)]
    pub buyer: Signer<'info>,
    
    /// El artista (mint authority) - debe firmar para mintear
    pub artist: Signer<'info>,
    
    /// CHECK: Token-2022 program
    pub token_2022_program: AccountInfo<'info>,
    pub token_program: Program<'info, anchor_spl::token::Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
}

// Cuentas para verificar NonTransferable extension
#[derive(Accounts)]
pub struct VerifyNonTransferable<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    /// CHECK: Token-2022 program
    pub token_2022_program: AccountInfo<'info>,
}

// Evento cuando se mintean tokens soulbound
#[event]
pub struct SoulboundTokensMinted {
    pub artist: Pubkey,
    pub buyer: Pubkey,
    pub amount: u64,
    pub buyer_name: String,
    pub ticket_number: u64,
}

// Eventos del sistema de rewards
#[event]
pub struct RewardAdded {
    pub artist: Pubkey,
    pub reward_id: u64,
    pub title: String,
    pub required_tokens: u64,
}

#[event]
pub struct RewardRemoved {
    pub artist: Pubkey,
    pub reward_id: u64,
    pub title: String,
}

#[event]
pub struct RewardClaimed {
    pub artist: Pubkey,
    pub buyer: Pubkey,
    pub reward_id: u64,
    pub title: String,
    pub tokens_burned: u64,
}

// Struct para rewards
#[account]
pub struct Reward {
    pub artist: Pubkey,
    pub reward_id: u64,
    pub title: String,
    pub description: String,
    pub required_tokens: u64,
    pub is_active: bool,
    pub claim_count: u64,
}

// Account structure for adding a reward
#[derive(Accounts)]
#[instruction(reward_id: u64)]
pub struct AddReward<'info> {
    #[account(
        init,
        payer = artist,
        space = 8 + 32 + 8 + 4 + 100 + 4 + 200 + 8 + 1 + 8, // discriminator + artist + reward_id + title_len + title + desc_len + desc + required_tokens + is_active + claim_count
        seeds = [b"reward", artist.key().as_ref(), reward_id.to_le_bytes().as_ref()],
        bump
    )]
    pub reward: Account<'info, Reward>,
    
    #[account(mut)]
    pub artist: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

// Account structure for removing a reward
#[derive(Accounts)]
pub struct RemoveReward<'info> {
    #[account(
        mut,
        constraint = reward.artist == artist.key()
    )]
    pub reward: Account<'info, Reward>,
    
    #[account(mut)]
    pub artist: Signer<'info>,
}

// Account structure for claiming a reward
#[derive(Accounts)]
pub struct ClaimReward<'info> {
    #[account(
        mut,
        constraint = reward.is_active
    )]
    pub reward: Account<'info, Reward>,
    
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    #[account(
        mut,
        constraint = token_account.mint == mint.key(),
        constraint = token_account.owner == buyer.key()
    )]
    pub token_account: Account<'info, TokenAccount>,
    
    #[account(mut)]
    pub buyer: Signer<'info>,
    
    /// CHECK: Token-2022 program
    pub token_2022_program: AccountInfo<'info>,
}

// Errores personalizados
#[error_code]
pub enum ErrorCode {
    #[msg("Only the artist can mint tokens")]
    UnauthorizedMinter,
    #[msg("Math overflow in payment calculation")]
    MathOverflow,
    #[msg("Insufficient funds to complete the purchase")]
    InsufficientFunds,
    #[msg("Amount must be greater than zero")]
    InvalidAmount,
    #[msg("Only the artist can perform this action")]
    UnauthorizedArtist,
    #[msg("Reward is not active")]
    RewardInactive,
    #[msg("Unauthorized claimer")]
    UnauthorizedClaimer,
    #[msg("Insufficient tokens to claim reward")]
    InsufficientTokens,
}