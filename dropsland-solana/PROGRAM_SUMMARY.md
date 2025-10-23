# 🎫 Soulbound Token Minter Program

## 📋 **Program Overview**

This Anchor program implements a soulbound token system for exhibition tickets where:

- **Artists** can create their own token mints (e.g., $JACK, $SARAH)
- **Customers** can buy soulbound tokens (non-transferable)
- **Payment** is handled in SOL automatically
- **Customer tracking** counts unique buyers only

## 🏗️ **Architecture**

### **Core Functions:**
1. `create_mint_account()` - Artist creates token mint + customer counter
2. `mint_soulbound_tokens()` - Artist mints tokens to customers (with payment)
3. `freeze_tokens()` - Makes tokens non-transferable (soulbound)
4. `get_customer_counter()` - View function to get customer count

### **Key Features:**
- ✅ **Artist-only minting** - Only mint authority can mint
- ✅ **Automatic payment** - SOL transferred from buyer to artist
- ✅ **Unique customer tracking** - Counter only increments for new customers
- ✅ **Soulbound tokens** - Non-transferable after freezing
- ✅ **PDA-based storage** - Customer counter stored in Program Derived Address

## 💰 **Payment Flow**

```typescript
// Example: Alice buys 10 tokens at 0.01 SOL each
const amount = 10;                    // 10 tokens
const pricePerToken = 0.01;          // 0.01 SOL per token
const totalCost = 0.1;               // 0.1 SOL total

// Alice pays 0.1 SOL → Jack receives 0.1 SOL → Alice gets 10 tokens
```

## 🔧 **Usage Examples**

### **1. Artist creates token:**
```typescript
await program.methods.createMintAccount("Jack's Art", "JACK", 0)
  .accounts({ artist: jackWallet })
  .rpc();
```

### **2. Customer buys tokens:**
```typescript
await program.methods.mintSoulboundTokens(10, "Alice", 1, 0.01)
  .accounts({ 
    artist: jackWallet,    // Jack authorizes
    buyer: aliceWallet     // Alice pays
  })
  .rpc();
```

### **3. Make tokens soulbound:**
```typescript
await program.methods.freezeTokens()
  .accounts({ artist: jackWallet })
  .rpc();
```

## 📊 **Data Structures**

### **CustomerCounter PDA:**
```rust
pub struct CustomerCounter {
    pub artist: Pubkey,        // Artist who owns this counter
    pub count: u32,           // Number of unique customers
    pub customers: Vec<Pubkey>, // List of customer addresses
}
```

### **PDA Seeds:**
```rust
seeds = [b"customer_counter", artist.key().as_ref()]
```

## 🎯 **Business Logic**

| Action | Who Signs | What Happens |
|--------|-----------|--------------|
| Create Mint | Artist | Artist creates token + counter PDA |
| Buy Tokens | Artist + Customer | Customer pays SOL → Artist receives SOL → Customer gets tokens |
| Freeze Tokens | Artist | Tokens become non-transferable |
| View Counter | Anyone | Returns customer count |

## 🧪 **Testing**

The program includes comprehensive tests covering:
- ✅ Mint creation and customer counter initialization
- ✅ Token minting with payment verification
- ✅ Unique customer tracking
- ✅ Payment flow validation
- ✅ Soulbound token functionality

## 🚀 **Deployment**

1. **Build:** `anchor build`
2. **Deploy:** `anchor deploy`
3. **Test:** `anchor test`

## 🔒 **Security Features**

- ✅ **Artist-only minting** - Only mint authority can mint
- ✅ **Payment verification** - SOL transfer is atomic
- ✅ **Overflow protection** - Math operations are checked
- ✅ **PDA security** - Customer counter is deterministic and secure

## 📈 **Scalability**

- ✅ **Multiple artists** - Each has independent customer counter
- ✅ **Unlimited tokens** - No supply limit per artist
- ✅ **Efficient storage** - PDA-based architecture
- ✅ **Gas optimized** - Minimal on-chain operations

---

**Built with Anchor Framework for Solana** 🚀




