use anchor_lang::prelude::*;

// Import the soulbound token minter module
pub mod soulbound_token_minter;

// Re-export the soulbound token minter program
pub use soulbound_token_minter::*;

declare_id!("2EpreJPoJC6wEHk3hShxffGyPbmEaNLyDMKQmbSsTWXH");

#[program]
pub mod dropsland_solana {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
