# Reward Claiming with Token Burning Test

## Overview

This document describes the implementation and testing of the reward claiming functionality that burns tokens when users claim rewards.

## How Token Burning Works

### 🔥 **Token Burning Mechanism**

When a user claims a reward, the system automatically burns the required number of tokens:

1. **User Claims Reward**: User calls `claim_reward()` function
2. **Token Validation**: System checks if user has enough tokens
3. **Token Burning**: Required tokens are burned using Token-2022 program
4. **Reward Granted**: User receives the reward
5. **Balance Updated**: User's token balance is reduced by burned amount

### **Key Functions**

#### `claim_reward()`
```rust
pub fn claim_reward(
    ctx: Context<ClaimReward>,
    reward_id: u64,
) -> Result<()> {
    // Verify the reward is active
    require!(reward.is_active, ErrorCode::RewardInactive);
    
    // Verify the buyer owns the token account
    require!(token_account.owner == buyer.key(), ErrorCode::UnauthorizedClaimer);
    
    // Verify the buyer has enough tokens
    require!(token_account.amount >= reward.required_tokens, ErrorCode::InsufficientTokens);
    
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
```

## Test Scenarios

### **Test 1: Basic Reward Claiming**
1. Create mint with NonTransferable extension
2. Mint 100 tokens to buyer
3. Add reward requiring 25 tokens
4. Claim reward
5. Verify 25 tokens are burned (balance: 75 tokens)

### **Test 2: Insufficient Tokens**
1. Try to claim reward with insufficient tokens
2. Verify transaction fails with appropriate error

### **Test 3: Multiple Claims**
1. Mint additional tokens
2. Claim reward again
3. Verify tokens are burned correctly

## Test Scripts

### **Comprehensive Test** (`test-reward-claiming.js`)
- Full test suite covering all scenarios
- Tests token burning verification
- Tests insufficient token scenarios
- Tests multiple claims

### **Simple Test** (`test-reward-simple.js`)
- Focused test for core functionality
- Demonstrates basic reward claiming
- Verifies token burning works correctly

## Running the Tests

### **Prerequisites**
```bash
# Set environment variables
export ANCHOR_PROVIDER_URL=http://localhost:8899
export ANCHOR_WALLET=/home/vboxuser/.config/solana/id.json

# Build the program
anchor build

# Run the test
node test-reward-simple.js
```

### **Expected Output**
```
🔥 Testing Reward Claiming with Token Burning...

📝 Test Accounts:
Artist: [artist_public_key]
Buyer: [buyer_public_key]

💰 Airdropping SOL...

🎯 Test 1: Creating mint with NonTransferable extension...
✅ Mint created with NonTransferable extension

🎯 Test 2: Minting soulbound tokens to buyer...
✅ Soulbound tokens minted
Initial token balance: 100
Expected: 100 tokens

🎯 Test 3: Adding a reward...
✅ Reward added
Reward requires 25 tokens to claim

🎯 Test 4: Checking token balance before claiming reward...
Token balance before claim: 100
Expected: 100 tokens

🔥 Test 5: Claiming reward (tokens should be burned)...
✅ Reward claimed successfully

🎯 Test 6: Checking token balance after claiming reward...
Token balance after claim: 75
Expected: 75 tokens (100 - 25 burned)
Tokens burned: 25
Expected: 25 tokens
✅ Token burning verification: SUCCESS
✅ Reward claiming correctly burned the required tokens

🎉 Reward Claiming Test Complete!
✅ Tokens are correctly burned when claiming rewards
✅ NonTransferable extension works with Token-2022
✅ Reward system functions properly
✅ Token burning verification: SUCCESS
```

## Key Features

### ✅ **Automatic Token Burning**
- Tokens are automatically burned when claiming rewards
- Uses Token-2022 program for secure burning
- No manual intervention required

### ✅ **Balance Verification**
- System checks user has sufficient tokens
- Prevents claiming with insufficient balance
- Accurate balance tracking

### ✅ **Event Emission**
- `RewardClaimed` event emitted on successful claim
- Includes all relevant information (artist, buyer, tokens burned)
- Provides transparency and tracking

### ✅ **Error Handling**
- Proper error messages for insufficient tokens
- Validation of reward status
- Authority checks

## Account Structures

### **ClaimReward**
```rust
#[derive(Accounts)]
pub struct ClaimReward<'info> {
    #[account(mut, constraint = reward.is_active)]
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
```

## Events

### **RewardClaimed**
```rust
#[event]
pub struct RewardClaimed {
    pub artist: Pubkey,
    pub buyer: Pubkey,
    pub reward_id: u64,
    pub title: String,
    pub tokens_burned: u64,
}
```

## Error Codes

```rust
#[error_code]
pub enum ErrorCode {
    #[msg("Reward is not active")]
    RewardInactive,
    #[msg("Unauthorized claimer")]
    UnauthorizedClaimer,
    #[msg("Insufficient tokens to claim reward")]
    InsufficientTokens,
}
```

## Benefits

1. **Secure Token Burning**: Uses Token-2022 program for secure burning
2. **Automatic Verification**: System automatically checks token balances
3. **Event Tracking**: All claims are tracked with events
4. **Error Prevention**: Proper validation prevents invalid claims
5. **NonTransferable Integration**: Works seamlessly with NonTransferable extension

## Conclusion

The reward claiming system successfully burns tokens when users claim rewards, providing a secure and transparent mechanism for reward distribution. The implementation uses Token-2022 for secure token operations and includes comprehensive error handling and event tracking.
