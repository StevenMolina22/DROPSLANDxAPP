# Soulbound Token System Guide

## Overview

The soulbound token system allows users to purchase non-transferable tokens that can be used to claim rewards. Once purchased, these tokens cannot be transferred to other accounts, making them "soulbound" to the original buyer.

## Key Features

### ✅ **Token Purchase**
- Users can buy soulbound tokens by paying SOL to the artist
- Tokens are minted to the user's associated token account
- Customer counter tracks unique users

### ✅ **Non-Transferability (Soulbound)**
- Tokens are frozen after minting to prevent transfers
- Transfer attempts fail with "frozen" error
- Tokens remain bound to the original buyer

### ✅ **Reward System**
- Artists can create rewards with token requirements
- Users claim rewards by burning the required tokens
- Token balance decreases after claiming rewards
- Remaining tokens remain non-transferable

## How It Works

### 1. Mint Account Creation
```rust
pub fn create_mint_account(
    ctx: Context<CreateMintAccount>,
    name: String,
    symbol: String,
    decimals: u8,
) -> Result<()>
```

- Artist creates a mint account with freeze authority
- Mint is configured for soulbound tokens (0 decimals)
- Artist becomes the mint authority and freeze authority

### 2. Token Purchase
```rust
pub fn mint_soulbound_tokens(
    ctx: Context<MintSoulboundTokens>,
    amount: u64,
    buyer_name: String,
    ticket_number: u64,
    price_per_token: u64,
) -> Result<()>
```

- Buyer pays SOL to the artist
- Tokens are minted to buyer's associated token account
- Customer counter is updated if it's a new customer
- Payment is transferred from buyer to artist

### 3. Token Freezing (Making Soulbound)
```rust
pub fn freeze_tokens(ctx: Context<FreezeTokens>) -> Result<()>
```

- Artist freezes the token account
- This prevents any transfers of the tokens
- Tokens become "soulbound" to the buyer

### 4. Reward Creation
```rust
pub fn add_reward(
    ctx: Context<AddReward>,
    reward_id: u64,
    title: String,
    description: String,
    required_tokens: u64,
) -> Result<()>
```

- Artist creates rewards with token requirements
- Each reward has a unique ID and description
- Specifies how many tokens are needed to claim

### 5. Reward Claiming (Token Burning)
```rust
pub fn claim_reward(
    ctx: Context<ClaimReward>,
    reward_id: u64,
) -> Result<()>
```

- User claims reward by burning required tokens
- Token balance decreases by the required amount
- Reward claim count is updated
- Remaining tokens remain non-transferable

## Account Structures

### CreateMintAccount
- `mint`: The token mint account (initialized)
- `customer_counter`: PDA to track customers
- `artist`: The artist (signer and payer)
- `token_program`: SPL Token program
- `system_program`: System program

### MintSoulboundTokens
- `mint`: The token mint account
- `token_account`: Buyer's associated token account
- `customer_counter`: Customer tracking PDA
- `buyer`: The buyer (signer)
- `artist`: The artist (signer)
- `token_program`: SPL Token program
- `associated_token_program`: Associated token program

### FreezeTokens
- `mint`: The token mint account
- `token_account`: Token account to freeze
- `artist`: Artist with freeze authority
- `token_program`: SPL Token program

### ClaimReward
- `reward`: The reward account
- `mint`: The token mint account
- `token_account`: User's token account
- `buyer`: The buyer claiming the reward
- `token_program`: SPL Token program

## Security Features

### Access Control
- Only artists can create mint accounts
- Only artists can freeze token accounts
- Only artists can create rewards
- Only token owners can claim rewards
- Unauthorized operations are rejected

### Customer Tracking
- Customer counter tracks unique users
- Prevents double-counting of customers
- Maintains list of all customers per artist

## Usage Examples

### For Artists
1. Create a mint account for your soulbound tokens
2. Set up rewards with token requirements
3. Freeze token accounts after minting to make them soulbound
4. Monitor customer counter and reward claims

### For Users
1. Purchase soulbound tokens from artists
2. Tokens are automatically frozen (non-transferable)
3. Claim rewards by burning the required tokens
4. Remaining tokens remain soulbound

## Technical Implementation

### Current Approach: Freeze Method
- Uses standard SPL Token program
- Tokens are frozen after minting
- Manual enforcement of soulbound nature
- Works with existing Solana infrastructure

### Future Improvement: Token Extensions
- Upgrade to SPL Token-2022
- Use NoTransferable extension
- Built-in non-transferability at protocol level
- More elegant and robust solution

## Testing

The system has been tested to ensure:
- ✅ Users can buy soulbound tokens
- ✅ Tokens are non-transferable (soulbound)
- ✅ Reward claiming burns tokens correctly
- ✅ Multiple users can interact independently
- ✅ Security and access control are enforced

## Conclusion

The soulbound token system provides a secure way to create non-transferable tokens that can be used for rewards and loyalty programs. The current implementation uses the freeze approach, which is reliable and works with existing Solana infrastructure. Future improvements could include upgrading to Token-2022 with the NoTransferable extension for a more elegant solution.

## Files

- `soulbound_token_minter.rs`: Main program implementation
- `soulbound-token-integration-test.ts`: Comprehensive test suite
- `test-soulbound-functionality.js`: Functionality verification script
- `SOULBOUND_TOKEN_GUIDE.md`: This documentation

