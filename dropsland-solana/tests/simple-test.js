const { Connection, PublicKey, Keypair } = require('@solana/web3.js');

describe('Solana Connection Test', () => {
  let connection;
  
  before(() => {
    connection = new Connection('http://localhost:8899', 'confirmed');
  });

  it('Should connect to local validator', async () => {
    try {
      const version = await connection.getVersion();
      console.log('✅ Connected to Solana validator');
      console.log('✅ Version:', version);
      expect(version).to.exist;
    } catch (error) {
      console.error('❌ Connection failed:', error.message);
      throw error;
    }
  });

  it('Should create a test keypair', () => {
    const keypair = Keypair.generate();
    console.log('✅ Generated keypair:', keypair.publicKey.toString());
    expect(keypair.publicKey).to.exist;
  });

  it('Should request airdrop', async () => {
    const keypair = Keypair.generate();
    const signature = await connection.requestAirdrop(keypair.publicKey, 1000000000); // 1 SOL
    console.log('✅ Airdrop requested:', signature);
    expect(signature).to.exist;
  });
});


