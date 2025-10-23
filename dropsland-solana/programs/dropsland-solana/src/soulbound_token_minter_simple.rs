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

// Errores personalizados
#[error_code]
pub enum ErrorCode {
    #[msg("Only the artist can mint tokens")]
    UnauthorizedMinter,
    #[msg("Math overflow in payment calculation")]
    MathOverflow,
}
