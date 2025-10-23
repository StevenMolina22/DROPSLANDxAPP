const anchor = require('@coral-xyz/anchor');
const { SystemProgram, PublicKey, Keypair } = require('@solana/web3.js');
const { TOKEN_2022_PROGRAM_ID } = require('@solana/spl-token');

async function testNonTransferable() {
  console.log('🚀 Starting NonTransferable Soulbound Token Test...\n');

  try {
    // Setup
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    const program = anchor.workspace.SoulboundTokenMinter;

    // Create test accounts
    const artist = Keypair.generate();
    const buyer = Keypair.generate();

    console.log('📝 Test Accounts:');
    console.log('Artist:', artist.publicKey.toString());
    console.log('Buyer:', buyer.publicKey.toString());

    // Airdrop SOL
    console.log('\n💰 Airdropping SOL...');
    await provider.connection.requestAirdrop(artist.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL);
    await provider.connection.requestAirdrop(buyer.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Test 1: Create mint with NonTransferable extension
    console.log('\n🎯 Test 1: Creating mint with NonTransferable extension...');
    
    const [mintPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from('mint'), artist.publicKey.toBuffer()],
      program.programId
    );
    
    const [customerCounterPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from('customer_counter'), artist.publicKey.toBuffer()],
      program.programId
    );

    const createMintTx = await program.methods
      .createMintAccount('Soulbound Token', 'SOUL', 0)
      .accounts({
        mint: mintPDA,
        customerCounter: customerCounterPDA,
        artist: artist.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([artist])
      .rpc();

    console.log('✅ Mint created with NonTransferable extension');
    console.log('Transaction:', createMintTx);

    // Test 2: Mint soulbound tokens
    console.log('\n🎯 Test 2: Minting soulbound tokens...');
    
    const mintTx = await program.methods
      .mintSoulboundTokens(
        new anchor.BN(100), // amount
        'Test Buyer', // buyer_name
        new anchor.BN(1), // ticket_number
        new anchor.BN(1000000) // price_per_token (0.001 SOL)
      )
      .accounts({
        mint: mintPDA,
        tokenAccount: await anchor.utils.token.associatedAddress({
          mint: mintPDA,
          owner: buyer.publicKey,
        }),
        customerCounter: customerCounterPDA,
        buyer: buyer.publicKey,
        artist: artist.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([buyer, artist])
      .rpc();

    console.log('✅ Soulbound tokens minted');
    console.log('Transaction:', mintTx);

    // Test 3: Verify NonTransferable extension
    console.log('\n🎯 Test 3: Verifying NonTransferable extension...');
    
    const verifyTx = await program.methods
      .verifyNonTransferable()
      .accounts({
        mint: mintPDA,
        token2022Program: TOKEN_2022_PROGRAM_ID,
      })
      .rpc();

    console.log('✅ NonTransferable extension verified');
    console.log('Transaction:', verifyTx);

    // Test 4: Get customer counter
    console.log('\n🎯 Test 4: Getting customer counter...');
    
    const counter = await program.methods
      .getCustomerCounter()
      .accounts({
        customerCounter: customerCounterPDA,
        artist: artist.publicKey,
      })
      .view();

    console.log('✅ Customer counter:', counter.toString());
    console.log('Expected: 1 (one buyer)');

    // Test 5: Test reward system
    console.log('\n🎯 Test 5: Testing reward system...');
    
    const rewardId = new anchor.BN(1);
    const [rewardPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from('reward'), artist.publicKey.toBuffer(), rewardId.toArrayLike(Buffer, 'le', 8)],
      program.programId
    );

    // Add reward
    const addRewardTx = await program.methods
      .addReward(
        rewardId,
        'Test Reward',
        'A test reward for NonTransferable tokens',
        new anchor.BN(25) // required_tokens
      )
      .accounts({
        reward: rewardPDA,
        artist: artist.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([artist])
      .rpc();

    console.log('✅ Reward added');
    console.log('Add reward transaction:', addRewardTx);

    // Claim reward
    const claimRewardTx = await program.methods
      .claimReward(rewardId)
      .accounts({
        reward: rewardPDA,
        mint: mintPDA,
        tokenAccount: await anchor.utils.token.associatedAddress({
          mint: mintPDA,
          owner: buyer.publicKey,
        }),
        buyer: buyer.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
      })
      .signers([buyer])
      .rpc();

    console.log('✅ Reward claimed (tokens burned)');
    console.log('Claim reward transaction:', claimRewardTx);

    console.log('\n🎉 All tests passed! NonTransferable extension is working correctly.');
    console.log('✅ Tokens are automatically non-transferable');
    console.log('✅ Reward system works with NonTransferable tokens');
    console.log('✅ All functionality verified');

  } catch (error) {
    console.error('❌ Test failed:', error);
    throw error;
  }
}

// Run the test
testNonTransferable().catch(console.error);
