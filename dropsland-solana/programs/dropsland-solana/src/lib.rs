use anchor_lang::prelude::*;

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
