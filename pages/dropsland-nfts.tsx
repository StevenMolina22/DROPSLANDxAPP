'use client'

/**
 * Página principal para el sistema de NFTs de DROPSLAND
 * 
 * Funcionalidades:
 * - Profile NFT minting (soulbound)
 * - Music NFT creation
 * - Music marketplace
 * - Rewards system
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Music, 
  ShoppingBag, 
  Gift, 
  Wallet,
  CheckCircle,
  Music2,
  Users
} from 'lucide-react';

export default function DropslandNFTsPage() {
  const { connected, publicKey } = useWallet();
  const { checkProfileNFT, getUserMusic, getBalance } = useSolanaNFTs();
  const { toast } = useToast();

  const [hasProfileNFT, setHasProfileNFT] = useState(false);
  const [userMusicNFTs, setUserMusicNFTs] = useState<any[]>([]);
  const [userBalance, setUserBalance] = useState(0);
  const [activeTab, setActiveTab] = useState('profile');

  // Check user's profile NFT status
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
      title: "Welcome to DROPSLAND! 🎉",
      description: "Your profile NFT has been minted successfully",
    });
  };

  const handleMusicSuccess = (signature: string) => {
    toast({
      title: "Music NFT Created! 🎵",
      description: "Your music is now available as an NFT",
    });
    // Refresh user's music NFTs
    getUserMusic().then(setUserMusicNFTs);
  };

  const handlePurchaseSuccess = (musicNFT: any, signature: string) => {
    toast({
      title: "Music NFT Purchased! 🎵",
      description: `You now own ${musicNFT.title} by ${musicNFT.artist}`,
    });
    // Refresh user's music NFTs
    getUserMusic().then(setUserMusicNFTs);
    getBalance().then(setUserBalance);
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                DROPSLAND NFTs
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Create, buy, and trade music NFTs on Solana
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center gap-2">
                  <Wallet className="h-6 w-6" />
                  Connect Your Wallet
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Connect your Solana wallet to start using DROPSLAND NFTs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <SolanaWalletButton />
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
          <h1 className="text-4xl font-bold text-white mb-4">
            DROPSLAND NFTs
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Create, buy, and trade music NFTs on Solana
          </p>
          
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
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg">
              <TabsTrigger value="profile" className="data-[state=active]:bg-white/20">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="create" className="data-[state=active]:bg-white/20">
                <Music className="h-4 w-4 mr-2" />
                Create Music
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="data-[state=active]:bg-white/20">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Marketplace
              </TabsTrigger>
              <TabsTrigger value="rewards" className="data-[state=active]:bg-white/20">
                <Gift className="h-4 w-4 mr-2" />
                Rewards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProfileNFTMinter 
                  onSuccess={handleProfileSuccess}
                />
                
                {hasProfileNFT && (
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        Profile NFT Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-green-200">
                          ✅ Your profile NFT is active
                        </div>
                        <div className="text-sm text-blue-200">
                          Your soulbound profile NFT is now linked to your wallet
                        </div>
                        <Button 
                          onClick={() => setActiveTab('create')}
                          className="w-full mt-4"
                        >
                          Create Music NFT
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="create" className="mt-6">
              <MusicNFTMinter 
                onSuccess={handleMusicSuccess}
              />
            </TabsContent>

            <TabsContent value="marketplace" className="mt-6">
              <MusicMarketplace 
                onPurchase={handlePurchaseSuccess}
              />
            </TabsContent>

            <TabsContent value="rewards" className="mt-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Rewards System
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Coming soon: Artist rewards and fan benefits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Gift className="h-12 w-12 text-white/50 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Rewards System Coming Soon
                    </h3>
                    <p className="text-blue-200">
                      Artists will be able to create rewards for their fans
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
