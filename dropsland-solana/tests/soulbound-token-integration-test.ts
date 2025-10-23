import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { DropslandSolana } from "../target/types/dropsland_solana";
import { SoulboundTokenMinter } from "../target/types/soulbound_token_minter";
import { 
  PublicKey, 
  Keypair, 
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction
} from "@solana/web3.js";
import { 
  TOKEN_PROGRAM_ID,
  createMint,
  createAccount,
  mintTo,
  getAccount,
  getMint,
  transfer,
  freezeAccount,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import { expect } from "chai";

describe("Soulbound Token Integration Tests", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.DropslandSolana as Program<DropslandSolana>;
  const soulboundProgram = anchor.workspace.SoulboundTokenMinter as Program<SoulboundTokenMinter>;

  let artist: Keypair;
  let buyer: Keypair;
  let anotherBuyer: Keypair;
  let rewardAuthority: Keypair;
  
  let mint: PublicKey;
  let customerCounterPDA: PublicKey;
  let rewardPDA: PublicKey;

  const tokenAmount = new anchor.BN(1000);
  const pricePerToken = new anchor.BN(0.1 * LAMPORTS_PER_SOL); // 0.1 SOL per token
  const totalPayment = tokenAmount.mul(pricePerToken);

  before(async () => {
    // Create keypairs for testing
    artist = Keypair.generate();
    buyer = Keypair.generate();
    anotherBuyer = Keypair.generate();
    rewardAuthority = Keypair.generate();

    // Airdrop SOL to accounts
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(artist.publicKey, 10 * LAMPORTS_PER_SOL)
    );
    await provider.connection.confirm印象(
      await provider.connection.requestAirdrop(buyer.publicKey, 10 * LAMPORTS_PER_SOL)
    );
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(anotherBuyer.publicKey, 10 * LAMPORTS_PER_SOL)
    );
    await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(rewardAuthority.publicKey, 10 * LAMPORTS_PER_SOL)
    );

    // Derive PDAs
    [customerCounterPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("customer_counter"), artist.publicKey.toBuffer()],
      soulboundProgram.programId
    );

    [rewardPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from("reward"), artist.publicKey.toBuffer(), new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
      soulboundProgram.programId
    );
  });

  it("Should create a soulbound mint account", async () => {
    // Create mint account
    mint = Keypair.generate().publicKey;

    const tx = await soulboundProgram.methods
      .createMintAccount(
        "Test Soulbound Token",
        "SBT",
        new anchor.BN(0)
      )
      .accounts({
        mint: mint,
        customerCounter: customerCounterPDA,
        artist: artist.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([artist])
      .rpc();

    console.log("Mint account created:", tx);

    // Verify mint was created
    const mintInfo = await getMint(provider.connection, mint);
    expect(mintInfo.decimals).to.equal(0);
    expect(mintInfo.mintAuthority?.toString()).to.equal(artist.publicKey.toString());
    expect(mintInfo.freezeAuthority?.toString()).to.equal(artist.publicKey.toString());
  });

  it("Should allow users to buy soulbound tokens", async () => {
    // Get buyer's associated token account
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    // Create associated token account if it doesn't exist
    const createATAInstruction = createAssociatedTokenAccountInstruction(
      buyer.publicKey,
      buyerTokenAccount,
      buyer.publicKey,
      mint
    );

    const tx = await soulboundProgram.methods
      .mintSoulboundTokens(
        tokenAmount,
        "Test Buyer",
        new anchor.BN(1),
        pricePerToken
      )
      .accounts({
        mint: mint,
        tokenAccount: buyerTokenAccount,
        customerCounter: customerCounterPDA,
        buyer: buyer.publicKey,
        artist: artist.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([buyer, artist])
      .preInstructions([createATAInstruction])
      .rpc();

    console.log("Tokens minted:", tx);

    // Verify tokens were minted
    const tokenAccountInfo = await getAccount(provider.connection, buyerTokenAccount);
    expect(tokenAccountInfo.amount.toString()).to.equal(tokenAmount.toString());

    // Verify customer counter was updated
    const customerCounter = await soulboundProgram.account.customerCounter.fetch(customerCounterPDA);
    expect(customerCounter.count).to.equal(1);
    expect(customerCounter.customers[0].toString()).to.equal(buyer.publicKey.toString());
  });

  it("Should make tokens non-transferable (soulbound)", async () => {
    // Try to freeze the token account to make it soulbound
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    const anotherBuyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      anotherBuyer.publicKey
    );

    // Create another buyer's token account
    const createATAInstruction = createAssociatedTokenAccountInstruction(
      anotherBuyer.publicKey,
      anotherBuyerTokenAccount,
      anotherBuyer.publicKey,
      mint
    );

    // Freeze the buyer's token account to make it soulbound
    const freezeTx = await soulboundProgram.methods
      .freezeTokens()
      .accounts({
        mint: mint,
        tokenAccount: buyerTokenAccount,
        artist: artist.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([artist])
      .rpc();

    console.log("Tokens frozen:", freezeTx);

    // Try to transfer tokens - this should fail because the account is frozen
    try {
      const transferTx = await transfer(
        provider.connection,
        buyer, // payer
        buyerTokenAccount, // source
        anotherBuyerTokenAccount, // destination
        buyer.publicKey, // owner
        100 // amount
      );
      expect.fail("Transfer should have failed because tokens are frozen");
    } catch (error) {
      console.log("Transfer failed as expected:", error.message);
      expect(error.message).to.include("frozen");
    }
  });

  it("Should allow artists to add rewards", async () => {
    const rewardId = new anchor.BN(1);
    const requiredTokens = new anchor.BN(500); // Require 500 tokens to claim

    const tx = await soulboundProgram.methods
      .addReward(
        rewardId,
        "Test Reward",
        "This is a test reward for soulbound token holders",
        requiredTokens
      )
      .accounts({
        reward: rewardPDA,
        artist: artist.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([artist])
      .rpc();

    console.log("Reward added:", tx);

    // Verify reward was created
    const reward = await soulboundProgram.account.reward.fetch(rewardPDA);
    expect(reward.title).to.equal("Test Reward");
    expect(reward.requiredTokens.toString()).to.equal(requiredTokens.toString());
    expect(reward.isActive).to.be.true;
  });

  it("Should allow users to claim rewards and burn tokens", async () => {
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    // Get initial token balance
    const initialBalance = await getAccount(provider.connection, buyerTokenAccount);
    const initialAmount = initialBalance.amount;

    // Claim reward (this should burn the required tokens)
    const claimTx = await soulboundProgram.methods
      .claimReward(new anchor.BN(1))
      .accounts({
        reward: rewardPDA,
        mint: mint,
        tokenAccount: buyerTokenAccount,
        buyer: buyer.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([buyer])
      .rpc();

    console.log("Reward claimed:", claimTx);

    // Verify tokens were burned
    const finalBalance = await getAccount(provider.connection, buyerTokenAccount);
    const finalAmount = finalBalance.amount;
    const burnedAmount = initialAmount - finalAmount;

    expect(burnedAmount.toString()).to.equal("500"); // Should have burned 500 tokens

    // Verify reward claim count was updated
    const reward = await soulboundProgram.account.reward.fetch(rewardPDA);
    expect(reward.claimCount.toString()).to.equal("1");
  });

  it("Should prevent transfer of soulbound tokens after claiming", async () => {
    const buyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      buyer.publicKey
    );

    const anotherBuyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      anotherBuyer.publicKey
    );

    // Try to transfer remaining tokens - this should still fail
    try {
      const transferTx = await transfer(
        provider.connection,
        buyer, // payer
        buyerTokenAccount, // source
        anotherBuyerTokenAccount, // destination
        buyer.publicKey, // owner
        100 // amount
      );
      expect.fail("Transfer should have failed because tokens are still frozen");
    } catch (error) {
      console.log("Transfer still failed as expected:", error.message);
      expect(error.message).to.include("frozen");
    }
  });

  it("Should allow multiple users to buy and claim rewards independently", async () => {
    // Second buyer buys tokens
    const secondBuyerTokenAccount = await getAssociatedTokenAddress(
      mint,
      anotherBuyer.publicKey
    );

    const createATAInstruction = createAssociatedTokenAccountInstruction(
      anotherBuyer.publicKey,
      secondBuyerTokenAccount,
      anotherBuyer.publicKey,
      mint
    );

    // Second buyer purchases tokens
    const mintTx = await soulboundProgram.methods
      .mintSoulboundTokens(
        tokenAmount,
        "Second Buyer",
        new anchor.BN(2),
        pricePerToken
      )
      .accounts({
        mint: mint,
        tokenAccount: secondBuyerTokenAccount,
        customerCounter: customerCounterPDA,
        buyer: anotherBuyer.publicKey,
        artist: artist.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .signers([anotherBuyer, artist])
      .preInstructions([createATAInstruction])
      .rpc();

    console.log("Second buyer tokens minted:", mintTx);

    // Freeze second buyer's tokens
    await soulboundProgram.methods
      .freezeTokens()
      .accounts({
        mint: mint,
        tokenAccount: secondBuyerTokenAccount,
        artist: artist.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([artist])
      .rpc();

    // Second buyer claims reward
    const claimTx = await soulboundProgram.methods
      .claimReward(new anchor.BN(1))
      .accounts({
        reward: rewardPDA,
        mint: mint,
        tokenAccount: secondBuyerTokenAccount,
        buyer: anotherBuyer.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([anotherBuyer])
      .rpc();

    console.log("Second buyer reward claimed:", claimTx);

    // Verify customer counter was updated
    const customerCounter = await soulboundProgram.account.customerCounter.fetch(customerCounterPDA);
    expect(customerCounter.count).to.equal(2);
    expect(customerCounter.customers.map(c => c.toString())).to.include(anotherBuyer.publicKey.toString());

    // Verify reward claim count was updated
    const reward = await soulboundProgram.account.reward.fetch(rewardPDA);
    expect(reward.claimCount.toString()).to.equal("2");
  });
});

