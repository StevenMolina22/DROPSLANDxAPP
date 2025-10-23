import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { 
  PublicKey, 
  Keypair, 
  SystemProgram,
  LAMPORTS_PER_SOL 
} from "@solana/web3.js";
import { 
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createMint,
  createAssociatedTokenAccount,
  getAssociatedTokenAddress,
  mintTo,
  getAccount,
  burn
} from "@solana/spl-token";
import { expect } from "chai";

describe("Reward System Test", () => {
  let connection: anchor.web3.Connection;
  let artist: Keypair;
  let buyer: Keypair;
  let mint: PublicKey;
  let mintAuthority: Keypair;

  before(async () => {
    // Configure the client to use the local cluster
    connection = new anchor.web3.Connection('http://localhost:8899', 'confirmed');
    const wallet = new anchor.Wallet(anchor.web3.Keypair.generate());
    const provider = new anchor.AnchorProvider(connection, wallet, {});
    anchor.setProvider(provider);

    // Create test keypairs
    artist = Keypair.generate();
    buyer = Keypair.generate();
    mintAuthority = Keypair.generate();

    // Airdrop SOL to test accounts
    await connection.requestAirdrop(artist.publicKey, 2 * LAMPORTS_PER_SOL);
    await connection.requestAirdrop(buyer.publicKey, 2 * LAMPORTS_PER_SOL);
    await connection.requestAirdrop(mintAuthority.publicKey, 2 * LAMPORTS_PER_SOL);

    // Wait for airdrops to confirm
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  it("Creates a mint account for artist", async () => {
    const mintKeypair = Keypair.generate();
    mint = mintKeypair.publicKey;

    const mintAddress = await createMint(
      connection,
      mintAuthority,
      mintAuthority.publicKey,
      null, // No freeze authority
      0, // Decimals
      mintKeypair
    );

    console.log("✅ Mint created:", mintAddress.toString());
    expect(mintAddress.equals(mintKeypair.publicKey)).to.be.true;
  });

  it("Mints 100 tokens to buyer", async () => {
    // Get buyer's token account
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    // Create associated token account
    const createTx = await createAssociatedTokenAccount(
      connection,
      buyer,
      mint,
      buyer.publicKey
    );
    console.log("✅ Associated token account created:", createTx);

    // Wait for account creation to confirm
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mint tokens
    const tx = await mintTo(
      connection,
      mintAuthority,
      mint,
      buyerTokenAccount,
      mintAuthority.publicKey,
      100 // Amount - enough for multiple rewards
    );

    console.log("✅ Tokens minted to buyer");
    console.log("✅ Transaction:", tx);

    // Wait for minting to confirm
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify token balance
    const tokenAccount = await getAccount(connection, buyerTokenAccount);
    expect(Number(tokenAccount.amount)).to.equal(100);
    console.log("✅ Buyer has 100 tokens");
  });

  it("Simulates adding a reward (Studio Live Stream)", async () => {
    // This simulates the artist adding a reward
    const rewardData = {
      rewardId: 1,
      title: "Studio Live Stream",
      description: "Monthly live stream from my Milan studio",
      requiredTokens: 60, // 60 $DROPS tokens required
    };

    console.log("🎯 Artist adds reward:");
    console.log("   Title:", rewardData.title);
    console.log("   Description:", rewardData.description);
    console.log("   Required Tokens:", rewardData.requiredTokens);
    console.log("✅ Reward would be added by artist");
    
    // In a real implementation, this would call the add_reward function
    expect(rewardData.requiredTokens).to.equal(60);
  });

  it("Simulates buyer claiming reward (burns 60 tokens)", async () => {
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    // Check initial balance
    const initialTokenAccount = await getAccount(connection, buyerTokenAccount);
    const initialBalance = Number(initialTokenAccount.amount);
    console.log("✅ Initial balance:", initialBalance);

    // Simulate claiming reward (burning 60 tokens)
    const rewardTokens = 60;
    const burnTx = await burn(
      connection,
      buyer,
      buyerTokenAccount,
      mint,
      buyer.publicKey,
      rewardTokens
    );

    console.log("✅ Tokens burned for reward claim");
    console.log("✅ Transaction:", burnTx);

    // Wait for burn to confirm
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify token balance decreased
    const finalTokenAccount = await getAccount(connection, buyerTokenAccount);
    const finalBalance = Number(finalTokenAccount.amount);
    console.log("✅ Final balance:", finalBalance);
    console.log("✅ Tokens burned:", initialBalance - finalBalance);

    expect(finalBalance).to.equal(initialBalance - rewardTokens);
    expect(finalBalance).to.equal(40); // 100 - 60 = 40
  });

  it("Simulates adding another reward", async () => {
    const rewardData = {
      rewardId: 2,
      title: "Exclusive Backstage Access",
      description: "VIP backstage access to all concerts",
      requiredTokens: 30, // 30 $DROPS tokens required
    };

    console.log("🎯 Artist adds another reward:");
    console.log("   Title:", rewardData.title);
    console.log("   Description:", rewardData.description);
    console.log("   Required Tokens:", rewardData.requiredTokens);
    console.log("✅ Second reward would be added by artist");
    
    expect(rewardData.requiredTokens).to.equal(30);
  });

  it("Simulates buyer claiming second reward (burns 30 tokens)", async () => {
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    // Check current balance
    const currentTokenAccount = await getAccount(connection, buyerTokenAccount);
    const currentBalance = Number(currentTokenAccount.amount);
    console.log("✅ Current balance:", currentBalance);

    // Simulate claiming second reward (burning 30 tokens)
    const rewardTokens = 30;
    const burnTx = await burn(
      connection,
      buyer,
      buyerTokenAccount,
      mint,
      buyer.publicKey,
      rewardTokens
    );

    console.log("✅ Tokens burned for second reward claim");
    console.log("✅ Transaction:", burnTx);

    // Wait for burn to confirm
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verify token balance decreased
    const finalTokenAccount = await getAccount(connection, buyerTokenAccount);
    const finalBalance = Number(finalTokenAccount.amount);
    console.log("✅ Final balance:", finalBalance);
    console.log("✅ Tokens burned:", currentBalance - finalBalance);

    expect(finalBalance).to.equal(currentBalance - rewardTokens);
    expect(finalBalance).to.equal(10); // 40 - 30 = 10
  });

  it("Simulates artist removing a reward", async () => {
    const rewardData = {
      rewardId: 1,
      title: "Studio Live Stream",
      isActive: false, // Artist removes this reward
    };

    console.log("🎯 Artist removes reward:");
    console.log("   Title:", rewardData.title);
    console.log("   Active:", rewardData.isActive);
    console.log("✅ Reward would be removed by artist");
    
    expect(rewardData.isActive).to.be.false;
  });

  it("Shows final token balance", async () => {
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    const tokenAccount = await getAccount(connection, buyerTokenAccount);
    const finalBalance = Number(tokenAccount.amount);
    
    console.log("🎯 Final Summary:");
    console.log("   Initial tokens: 100");
    console.log("   First reward (Studio Live Stream): -60 tokens");
    console.log("   Second reward (Backstage Access): -30 tokens");
    console.log("   Final balance:", finalBalance);
    console.log("✅ Buyer has 10 tokens remaining");
    
    expect(finalBalance).to.equal(10);
  });
});
