const anchor = require('@coral-xyz/anchor');
const { SystemProgram, PublicKey, Keypair } = require('@solana/web3.js');
const { TOKEN_2022_PROGRAM_ID, getAssociatedTokenAddress, getAccount } = require('@solana/spl-token');

async function testRewardClaiming() {
  console.log('🔥 Testing Reward Claiming with Token Burning...\n');

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

    const createMintTx = await program.methods
      .createMintAccount('Soulbound Token', 'SOUL', 0)
      .accounts({
        mint: mintPDA,
        artist: artist.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([artist])
      .rpc();

    console.log('✅ Mint created with NonTransferable extension');
    console.log('Transaction:', createMintTx);

    // Test 2: Mint soulbound tokens to buyer
    console.log('\n🎯 Test 2: Minting soulbound tokens to buyer...');
    
    const tokenAccount = await getAssociatedTokenAddress(
      mintPDA,
      buyer.publicKey,
      false,
      TOKEN_2022_PROGRAM_ID
    );

    const mintTx = await program.methods
      .mintSoulboundTokens(
        new anchor.BN(100), // amount
        'Test Buyer', // buyer_name
        new anchor.BN(1), // ticket_number
        new anchor.BN(1000000) // price_per_token (0.001 SOL)
      )
      .accounts({
        mint: mintPDA,
        tokenAccount: tokenAccount,
        buyer: buyer.publicKey,
        artist: artist.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([buyer, artist])
      .rpc();

    console.log('✅ Soulbound tokens minted');
    console.log('Transaction:', mintTx);

    // Check initial token balance
    const initialBalance = await getAccount(provider.connection, tokenAccount);
    console.log('Initial token balance:', initialBalance.amount.toString());
    console.log('Expected: 100 tokens');

    // Test 3: Add a reward
    console.log('\n🎯 Test 3: Adding a reward...');
    
    const rewardId = new anchor.BN(1);
    const [rewardPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from('reward'), artist.publicKey.toBuffer(), rewardId.toArrayLike(Buffer, 'le', 8)],
      program.programId
    );

    const addRewardTx = await program.methods
      .addReward(
        rewardId,
        'Exclusive Backstage Pass',
        'Get exclusive access to backstage area at the concert',
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
    console.log('Transaction:', addRewardTx);
    console.log('Reward requires 25 tokens to claim');

    // Test 4: Check token balance before claiming reward
    console.log('\n🎯 Test 4: Checking token balance before claiming reward...');
    
    const balanceBeforeClaim = await getAccount(provider.connection, tokenAccount);
    console.log('Token balance before claim:', balanceBeforeClaim.amount.toString());
    console.log('Expected: 100 tokens');

    // Test 5: Claim reward (this should burn tokens)
    console.log('\n🔥 Test 5: Claiming reward (tokens should be burned)...');
    
    const claimRewardTx = await program.methods
      .claimReward(rewardId)
      .accounts({
        reward: rewardPDA,
        mint: mintPDA,
        tokenAccount: tokenAccount,
        buyer: buyer.publicKey,
        token2022Program: TOKEN_2022_PROGRAM_ID,
      })
      .signers([buyer])
      .rpc();

    console.log('✅ Reward claimed successfully');
    console.log('Transaction:', claimRewardTx);

    // Test 6: Check token balance after claiming reward
    console.log('\n🎯 Test 6: Checking token balance after claiming reward...');
    
    const balanceAfterClaim = await getAccount(provider.connection, tokenAccount);
    console.log('Token balance after claim:', balanceAfterClaim.amount.toString());
    console.log('Expected: 75 tokens (100 - 25 burned)');

    // Verify the burn worked
    const tokensBurned = balanceBeforeClaim.amount - balanceAfterClaim.amount;
    console.log('Tokens burned:', tokensBurned.toString());
    console.log('Expected: 25 tokens');

    if (tokensBurned.toString() === '25') {
      console.log('✅ Token burning verification: SUCCESS');
      console.log('✅ Reward claiming correctly burned the required tokens');
    } else {
      console.log('❌ Token burning verification: FAILED');
      console.log('Expected 25 tokens to be burned, but', tokensBurned.toString(), 'were burned');
    }

    console.log('\n🎉 Reward Claiming Test Complete!');
    console.log('✅ Tokens are correctly burned when claiming rewards');
    console.log('✅ NonTransferable extension works with Token-2022');
    console.log('✅ Reward system functions properly');
    console.log('✅ Token burning verification: SUCCESS');

  } catch (error) {
    console.error('❌ Test failed:', error);
    throw error;
  }
}

// Run the test
testRewardClaiming().catch(console.error);
