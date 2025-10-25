'use client'

/**
 * Página de prueba para el sistema de NFTs de DROPSLAND
 * 
 * Esta página permite probar todas las funcionalidades:
 * - Profile NFT minting
 * - Music NFT creation
 * - Music marketplace
 * - Wallet connection
 */

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSolanaNFTs } from '@/hooks/use-solana-nfts';
import { ProfileNFTMinter } from '@/components/profile-nft-minter';
import { MusicNFTMinter } from '@/components/music-nft-minter';
import { MusicMarketplace } from '@/components/music-marketplace';
import { SolanaWalletButton } from '@/components/solana-wallet-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Music, 
  ShoppingBag, 
  Wallet,
  CheckCircle,
  Music2,
  TestTube
} from 'lucide-react';

export default function TestDropslandNFTsPage() {
  const { connected, publicKey } = useWallet();
  const { checkProfileNFT, getUserMusic, getBalance, loading, error } = useSolanaNFTs();
  const { toast } = useToast();

  const [hasProfileNFT, setHasProfileNFT] = useState(false);
  const [userMusicNFTs, setUserMusicNFTs] = useState<any[]>([]);
  const [userBalance, setUserBalance] = useState(0);
  const [testResults, setTestResults] = useState<any>({});

  // Check user's status
  useEffect(() => {
    if (connected) {
      checkProfileNFT().then(setHasProfileNFT);
      getUserMusic().then(setUserMusicNFTs);
      getBalance().then(setUserBalance);
    }
  }, [connected, checkProfileNFT, getUserMusic, getBalance]);

  const runTests = async () => {
    const results: any = {};
    
    try {
      // Test 1: Wallet connection
      results.walletConnected = connected;
      
      // Test 2: Profile NFT check
      results.hasProfileNFT = await checkProfileNFT();
      
      // Test 3: Music NFTs
      results.musicNFTs = await getUserMusic();
      
      // Test 4: Balance
      results.balance = await getBalance();
      
      setTestResults(results);
      
      toast({
        title: "Tests completed",
        description: "All tests have been run successfully",
      });
    } catch (err: any) {
      toast({
        title: "Test failed",
        description: err.message,
        variant: "destructive"
      });
    }
  };

  const handleProfileSuccess = (signature: string) => {
    setHasProfileNFT(true);
    toast({
      title: "Profile NFT Test Success! 🎉",
      description: `Transaction: ${signature.slice(0, 8)}...`,
    });
  };

  const handleMusicSuccess = (signature: string) => {
    toast({
      title: "Music NFT Test Success! 🎵",
      description: `Transaction: ${signature.slice(0, 8)}...`,
    });
    getUserMusic().then(setUserMusicNFTs);
  };

  const handlePurchaseSuccess = (musicNFT: any, signature: string) => {
    toast({
      title: "Purchase Test Success! 🛒",
      description: `Bought ${musicNFT.title}`,
    });
    getUserMusic().then(setUserMusicNFTs);
    getBalance().then(setUserBalance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <TestTube className="h-8 w-8" />
            DROPSLAND NFTs - Test Page
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Test all NFT functionalities on Solana
          </p>
        </div>

        {/* Test Results */}
        {Object.keys(testResults).length > 0 && (
          <Card className="mb-6 bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {testResults.walletConnected ? '✅' : '❌'}
                  </div>
                  <div className="text-sm text-blue-200">Wallet Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {testResults.hasProfileNFT ? '✅' : '❌'}
                  </div>
                  <div className="text-sm text-blue-200">Profile NFT</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {testResults.musicNFTs?.length || 0}
                  </div>
                  <div className="text-sm text-blue-200">Music NFTs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {testResults.balance?.toFixed(3) || '0.000'}
                  </div>
                  <div className="text-sm text-blue-200">SOL Balance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Stats */}
        <div className="flex justify-center gap-4 mb-6">
          <Badge variant="secondary" className="bg-white/20 text-white">
            Balance: {userBalance.toFixed(3)} SOL
          </Badge>
          {hasProfileNFT && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              Profile NFT
            </Badge>
          )}
          <Badge variant="secondary" className="bg-white/20 text-white">
            <Music2 className="h-3 w-3 mr-1" />
            {userMusicNFTs.length} Music NFTs
          </Badge>
        </div>

        {/* Test Controls */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Test Controls</CardTitle>
              <CardDescription className="text-blue-200">
                Run tests to verify all functionalities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button onClick={runTests} disabled={loading}>
                  Run All Tests
                </Button>
                <Button 
                  onClick={() => setTestResults({})}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Clear Results
                </Button>
              </div>
              
              {error && (
                <div className="text-sm text-red-400 bg-red-500/20 p-2 rounded">
                  Error: {error}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Test Components */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile NFT Test */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile NFT Test
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Test soulbound profile NFT minting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileNFTMinter 
                  onSuccess={handleProfileSuccess}
                />
              </CardContent>
            </Card>

            {/* Music NFT Test */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  Music NFT Test
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Test music NFT creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MusicNFTMinter 
                  onSuccess={handleMusicSuccess}
                />
              </CardContent>
            </Card>
          </div>

          {/* Marketplace Test */}
          <div className="mt-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Marketplace Test
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Test music NFT marketplace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MusicMarketplace 
                  onPurchase={handlePurchaseSuccess}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Wallet Connection */}
        {!connected && (
          <div className="max-w-2xl mx-auto mt-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Wallet className="h-6 w-6" />
                  Connect Your Wallet
                </CardTitle>
                <CardDescription className="text-blue-200 text-center">
                  Connect your Solana wallet to start testing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <SolanaWalletButton />
                </div>
                <div className="text-sm text-blue-200 text-center">
                  Supported wallets: Phantom, Solflare, Torus
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
