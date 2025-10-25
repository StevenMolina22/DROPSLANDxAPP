'use client'

/**
 * Página de demostración para NFTs de Solana
 * 
 * Funcionalidades:
 * - Profile NFT minting (soulbound)
 * - Music NFT creation
 * - Music marketplace
 * - Conexión real con Solana
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
  TestTube,
  Zap,
  Coins
} from 'lucide-react';

export default function DemoNFTsPage() {
  const { connected, publicKey } = useWallet();
  const { 
    checkProfileNFT, 
    getUserMusic, 
    getBalance, 
    loading, 
    error 
  } = useSolanaNFTs();
  const { toast } = useToast();

  const [hasProfileNFT, setHasProfileNFT] = useState(false);
  const [userMusicNFTs, setUserMusicNFTs] = useState<any[]>([]);
  const [userBalance, setUserBalance] = useState(0);
  const [activeTab, setActiveTab] = useState('profile');

  // Check user's status
  useEffect(() => {
    if (connected) {
      checkProfileNFT().then(setHasProfileNFT);
      getUserMusic().then(setUserMusicNFTs);
      getBalance().then(setUserBalance);
    }
  }, [connected, checkProfileNFT, getUserMusic, getBalance]);

  const handleProfileSuccess = (signature: string) => {
    setHasProfileNFT(true);
    setActiveTab('music');
    toast({
      title: "Profile NFT Created! 🎉",
      description: `Transaction: ${signature.slice(0, 8)}...`,
    });
  };

  const handleMusicSuccess = (signature: string) => {
    toast({
      title: "Music NFT Created! 🎵",
      description: `Transaction: ${signature.slice(0, 8)}...`,
    });
    getUserMusic().then(setUserMusicNFTs);
  };

  const handlePurchaseSuccess = (musicNFT: any, signature: string) => {
    toast({
      title: "Music NFT Purchased! 🛒",
      description: `Transaction: ${signature.slice(0, 8)}...`,
    });
    getUserMusic().then(setUserMusicNFTs);
    getBalance().then(setUserBalance);
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Zap className="h-8 w-8" />
                DROPSLAND NFTs Demo
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Real Solana NFT functionality with your smart contracts
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Wallet className="h-6 w-6" />
                  Connect Your Solana Wallet
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Connect your Solana wallet to start using DROPSLAND NFTs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <SolanaWalletButton />
                </div>
                <div className="text-sm text-blue-200">
                  Supported wallets: Phantom, Solflare, Torus
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Zap className="h-8 w-8" />
            DROPSLAND NFTs Demo
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Real Solana NFT functionality with your smart contracts
          </p>
          
          {/* User Stats */}
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white">
              <Coins className="h-3 w-3 mr-1" />
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
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Profile NFT Section */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile NFT (Soulbound)
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Create your soulbound profile NFT
                </CardDescription>
              </CardHeader>
              <CardContent>
                {hasProfileNFT ? (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-2" />
                    <div className="text-green-200 font-medium">
                      Profile NFT Active
                    </div>
                    <div className="text-sm text-blue-200 mt-1">
                      Your soulbound profile NFT is linked to your wallet
                    </div>
                  </div>
                ) : (
                  <ProfileNFTMinter 
                    onSuccess={handleProfileSuccess}
                  />
                )}
              </CardContent>
            </Card>

            {/* Music NFT Section */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  Create Music NFT
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Mint your music as an NFT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MusicNFTMinter 
                  onSuccess={handleMusicSuccess}
                />
              </CardContent>
            </Card>

            {/* Marketplace Section */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Music Marketplace
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Buy and sell music NFTs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-y-auto">
                  <MusicMarketplace 
                    onPurchase={handlePurchaseSuccess}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User NFTs */}
          {userMusicNFTs.length > 0 && (
            <Card className="mt-6 bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Music2 className="h-5 w-5" />
                  Your Music NFTs
                </CardTitle>
                <CardDescription className="text-blue-200">
                  NFTs you own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userMusicNFTs.map((nft, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg">
                      <div className="text-sm text-white font-medium">
                        Music NFT #{index + 1}
                      </div>
                      <div className="text-xs text-blue-200 mt-1">
                        Amount: {nft.amount}
                      </div>
                      <div className="text-xs text-blue-300 mt-1">
                        Mint: {nft.mint.slice(0, 8)}...
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Error Display */}
          {error && (
            <Card className="mt-6 bg-red-500/10 backdrop-blur-lg border-red-500/20">
              <CardContent className="pt-6">
                <div className="text-red-200 text-center">
                  <div className="font-medium">Error:</div>
                  <div className="text-sm mt-1">{error}</div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <Card className="mt-6 bg-blue-500/10 backdrop-blur-lg border-blue-500/20">
              <CardContent className="pt-6">
                <div className="text-blue-200 text-center">
                  <div className="font-medium">Processing...</div>
                  <div className="text-sm mt-1">Please wait while we process your request</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}





