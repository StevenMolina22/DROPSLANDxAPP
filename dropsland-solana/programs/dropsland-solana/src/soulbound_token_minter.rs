use anchor_lang::prelude::*;
use anchor_spl::interface::{
    spl_token_interface::{
        Mint, Token, TokenAccount, 
        CreateAccount, Transfer, MintTo, Burn, FreezeAccount
    }
};
use anchor_spl::associated_token::AssociatedToken;
use anchor_lang::solana_program::system_program;
use anchor_lang::solana_program::program::invoke;
use anchor_lang::solana_program::lamports;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_lang::solana_program::account_info::AccountInfo;
use anchor_lang::solana_program::pubkey::Pubkey;
use anchor_lang::solana_program::program_error::ProgramError;
use anchor_lang::solana_program::sysvar::rent::Rent;
use anchor_lang::solana_program::sysvar::Sysvar;
use anchor_lang::solana_program::program_pack::Pack;
use anchor_lang::solana_program::msg;
use anchor_lang::solana_program::borsh::try_from_slice_unchecked;
use anchor_lang::solana_program::system_instruction;
use anchor_lang::solana_program::program_option::COption;

declare_id!("DropSXpRA6reJFnBw8PcXvbtm4yNqyRNLsnCU1MMkHYt");

#[program]
pub mod soulbound_token_minter {
    use super::*;

    // Crear mint account (solo artistas pueden hacerlo)
    pub fn create_mint_account(
        ctx: Context<CreateMintAccount>,
        name: String,
        symbol: String,
        decimals: u8,
    ) -> Result<()> {
        let mint = &mut ctx.accounts.mint;
        
        // Configurar el mint
        mint.mint_authority = COption::Some(ctx.accounts.artist.key());
        mint.supply = 0; // Inicialmente 0, se incrementa al mintear
        mint.decimals = decimals;
        mint.is_initialized = true;
        mint.freeze_authority = COption::Some(ctx.accounts.artist.key());
        
        msg!("Mint account created by artist: {}", ctx.accounts.artist.key());
        msg!("Mint authority: {}", mint.mint_authority.unwrap());
        
        Ok(())
    }

    // Mintear tokens soulbound (customers compran, artista mintea)
    pub fn mint_soulbound_tokens(
        ctx: Context<MintSoulboundTokens>,
        amount: u64,
        buyer_name: String,
        ticket_number: u64,
        price_per_token: u64, // Precio en lamports (1 SOL = 1,000,000,000 lamports)
    ) -> Result<()> {
        // Verificar que el artista es el mint authority
        require!(
            ctx.accounts.mint.mint_authority == COption::Some(ctx.accounts.artist.key()),
            ErrorCode::UnauthorizedMinter
        );
        
        // Calcular el pago total
        let total_payment = amount.checked_mul(price_per_token)
            .ok_or(ErrorCode::MathOverflow)?;
        
        // Transferir SOL del buyer al artista
        **ctx.accounts.buyer.to_account_info().try_borrow_mut_lamports()? -= total_payment;
        **ctx.accounts.artist.to_account_info().try_borrow_mut_lamports()? += total_payment;
        
        msg!("Payment: {} lamports for {} tokens", total_payment, amount);
        
        // Mintear tokens usando la nueva interfaz
        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.token_account.to_account_info(),
            authority: ctx.accounts.artist.to_account_info(),
        };
        
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        spl_token_interface::mint_to(cpi_ctx, amount)?;
        
        // Verificar si es un customer nuevo
        let buyer_key = ctx.accounts.buyer.key();
        let is_new_customer = !ctx.accounts.customer_counter.customers.contains(&buyer_key);
        
        if is_new_customer {
            // Solo incrementar si es un customer nuevo
            ctx.accounts.customer_counter.count += 1;
            ctx.accounts.customer_counter.customers.push(buyer_key);
        }
        
        // Emitir evento
        emit!(SoulboundTokensMinted {
            artist: ctx.accounts.artist.key(),
            buyer: ctx.accounts.buyer.key(),
            amount,
            buyer_name,
            ticket_number,
        });
        
        msg!("Soulbound tokens minted: {} to {}", amount, ctx.accounts.buyer.key());
        msg!("Customer counter: {}", ctx.accounts.customer_counter.count);
        Ok(())
    }

    // Función para obtener el contador de customers
    pub fn get_customer_counter(ctx: Context<GetCustomerCounter>) -> Result<u32> {
        Ok(ctx.accounts.customer_counter.count)
    }

    // Hacer tokens no transferibles (soulbound)
    pub fn freeze_tokens(ctx: Context<FreezeTokens>) -> Result<()> {
        let cpi_accounts = spl_token_interface::FreezeAccount {
            account: ctx.accounts.token_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            authority: ctx.accounts.artist.to_account_info(),
        };
        
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        spl_token_interface::freeze_account(cpi_ctx)?;
        
        msg!("Tokens frozen - now soulbound (non-transferable)");
        Ok(())
    }

    // Quemar tokens (solo reward authority puede quemar)
    pub fn burn_tokens(
        ctx: Context<BurnTokens>,
        amount: u64,
    ) -> Result<()> {
        let mint = &mut ctx.accounts.mint;
        let token_account = &mut ctx.accounts.token_account;
        let buyer = &ctx.accounts.buyer;
        let artist = &ctx.accounts.artist;
        let customer_counter = &mut ctx.accounts.customer_counter;
        let reward_authority = &ctx.accounts.reward_authority;

        // Verificar que el buyer es el dueño del token account
        require!(
            token_account.owner == buyer.key(),
            ErrorCode::UnauthorizedMinter
        );

        // Verificar que el buyer es un customer del artista
        require!(
            customer_counter.customers.contains(&buyer.key()),
            ErrorCode::UnauthorizedMinter
        );

        // Solo reward authority puede quemar tokens
        // (En un programa real, verificarías que reward_authority es autorizado)

        // Quemar los tokens usando CPI con reward authority como signer
        let cpi_accounts = Burn {
            mint: mint.to_account_info(),
            from: token_account.to_account_info(),
            authority: reward_authority.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        spl_token_interface::burn(cpi_ctx, amount)?;

        msg!("Burned {} tokens for buyer {} by reward authority {}", 
             amount, buyer.key(), reward_authority.key());

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
        require!(
            reward.artist == ctx.accounts.artist.key(),
            ErrorCode::UnauthorizedArtist
        );
        
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
        require!(
            reward.is_active,
            ErrorCode::RewardInactive
        );
        
        // Verify the buyer owns the token account
        require!(
            token_account.owner == buyer.key(),
            ErrorCode::UnauthorizedClaimer
        );
        
        // Verify the buyer has enough tokens
        require!(
            token_account.amount >= reward.required_tokens,
            ErrorCode::InsufficientTokens
        );
        
        // Burn the required tokens
        let cpi_accounts = Burn {
            mint: ctx.accounts.mint.to_account_info(),
            from: token_account.to_account_info(),
            authority: buyer.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        spl_token_interface::burn(cpi_ctx, reward.required_tokens)?;
        
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

// Cuentas para crear mint
#[derive(Accounts)]
pub struct CreateMintAccount<'info> {
    #[account(
        init,
        payer = artist,
        mint::decimals = 0, // 0 decimals = 1 token = 1 ticket
        mint::authority = artist,
        mint::freeze_authority = artist,
    )]
    pub mint: Account<'info, Mint>,
    
    #[account(
        init,
        payer = artist,
        space = 8 + 32 + 4 + 4 + (32 * 100), // discriminator + artist + count + vec_len + (32 bytes * 100 customers max)
        seeds = [b"customer_counter", artist.key().as_ref()],
        bump
    )]
    pub customer_counter: Account<'info, CustomerCounter>,
    
    #[account(mut)]
    pub artist: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

// Cuentas para mintear tokens soulbound
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
    
    #[account(
        mut,
        seeds = [b"customer_counter", artist.key().as_ref()],
        bump
    )]
    pub customer_counter: Account<'info, CustomerCounter>,
    
    #[account(mut)]
    pub buyer: Signer<'info>,
    
    /// El artista (mint authority) - debe firmar para mintear
    pub artist: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
}

// Cuentas para congelar tokens
#[derive(Accounts)]
pub struct FreezeTokens<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    
    pub artist: Signer<'info>,
    pub token_program: Program<'info, Token>,
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

// Struct para el contador de customers
#[account]
pub struct CustomerCounter {
    pub artist: Pubkey,
    pub count: u32,
    pub customers: Vec<Pubkey>, // Lista de customers únicos
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

// Cuentas para obtener el contador
#[derive(Accounts)]
pub struct GetCustomerCounter<'info> {
    #[account(
        seeds = [b"customer_counter", artist.key().as_ref()],
        bump
    )]
    pub customer_counter: Account<'info, CustomerCounter>,
    
    /// CHECK: El artista
    pub artist: AccountInfo<'info>,
}

// Estructura para quemar tokens (solo reward program)
#[derive(Accounts)]
pub struct BurnTokens<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    #[account(
        mut,
        constraint = token_account.mint == mint.key(),
        constraint = token_account.owner == buyer.key()
    )]
    pub token_account: Account<'info, TokenAccount>,
    
    /// CHECK: El comprador que quiere quemar sus tokens
    pub buyer: AccountInfo<'info>,
    
    #[account(
        mut,
        constraint = customer_counter.artist == artist.key()
    )]
    pub customer_counter: Account<'info, CustomerCounter>,
    
    /// CHECK: El artista
    pub artist: AccountInfo<'info>,
    
    /// CHECK: Reward program authority (solo este puede quemar)
    pub reward_authority: Signer<'info>,
    
    pub token_program: Program<'info, Token>,
}

// ===== REWARD SYSTEM ACCOUNT STRUCTURES =====

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
    
    pub token_program: Program<'info, Token>,
}

// Errores personalizados
#[error_code]
pub enum ErrorCode {
    #[msg("Only the artist can mint tokens")]
    UnauthorizedMinter,
    #[msg("Math overflow in payment calculation")]
    MathOverflow,
    #[msg("Only the artist can perform this action")]
    UnauthorizedArtist,
    #[msg("Reward is not active")]
    RewardInactive,
    #[msg("Unauthorized claimer")]
    UnauthorizedClaimer,
    #[msg("Insufficient tokens to claim reward")]
    InsufficientTokens,
}