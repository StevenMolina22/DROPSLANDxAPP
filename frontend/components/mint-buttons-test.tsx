/**
 * Componente de testing para botones de mint
 * 
 * Funcionalidades:
 * - Testing de botones de mint
 * - Verificación de funcionalidad
 * - Debug de minting
 */

import { useState } from 'react';
import { useIntegratedAuth } from '@/hooks/use-integrated-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Music, 
  Loader2, 
  CheckCircle, 
  XCircle,
  TestTube
} from 'lucide-react';

export function MintButtonsTest() {
  const {
    solanaConnected,
    solanaPublicKey,
    hasProfileNFT,
    userMusicNFTs,
    mintProfileNFT,
    mintMusicNFT,
    checkProfileNFT,
    getUserMusicNFTs,
    getSolanaBalance,
    userData
  } = useIntegratedAuth();
  
  const { toast } = useToast();
  const [isMintingProfile, setIsMintingProfile] = useState(false);
  const [isMintingMusic, setIsMintingMusic] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const handleMintProfile = async () => {
    if (!userData) {
      toast({
        title: "Error",
        description: "User data not available",
        variant: "destructive"
      });
      return;
    }

    setIsMintingProfile(true);
    try {
      const profileData = {
        username: userData.username,
        profileType: userData.type || 'fan',
        principal: userData.principal,
        createdAt: new Date().toISOString()
      };

      console.log('🎨 Testing Profile NFT mint...');
      const result = await mintProfileNFT(profileData);
      
      if (result.success) {
        toast({
          title: "Profile NFT Minted! 🎉",
          description: `Transaction: ${result.signature?.slice(0, 8)}...`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to mint profile NFT",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to mint profile NFT",
        variant: "destructive"
      });
    } finally {
      setIsMintingProfile(false);
    }
  };

  const handleMintMusic = async () => {
    setIsMintingMusic(true);
    try {
      const musicData = {
        title: 'Test Music NFT',
        artist: userData?.username || 'Test Artist',
        price: 0.1,
        description: 'Test music NFT for testing'
      };

      console.log('🎵 Testing Music NFT mint...');
      const result = await mintMusicNFT(musicData);
      
      if (result.success) {
        toast({
          title: "Music NFT Minted! 🎵",
          description: `Transaction: ${result.signature?.slice(0, 8)}...`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to mint music NFT",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to mint music NFT",
        variant: "destructive"
      });
    } finally {
      setIsMintingMusic(false);
    }
  };

  const handleTestFunctions = async () => {
    setIsTesting(true);
    try {
      console.log('🧪 Testing all functions...');
      
      // Test checkProfileNFT
      const profileCheck = await checkProfileNFT();
      console.log('Profile NFT check:', profileCheck);
      
      // Test getUserMusicNFTs
      const musicNFTs = await getUserMusicNFTs();
      console.log('Music NFTs:', musicNFTs);
      
      // Test getSolanaBalance
      const balance = await getSolanaBalance();
      console.log('Solana balance:', balance);
      
      toast({
        title: "Functions Tested! 🧪",
        description: "All functions executed successfully",
      });
    } catch (error: any) {
      toast({
        title: "Test Error",
        description: error.message || "Failed to test functions",
        variant: "destructive"
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TestTube className="h-5 w-5 text-green-400" />
          Mint Buttons Test
        </CardTitle>
        <CardDescription className="text-gray-400">
          Testing functionality of mint buttons and functions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center">
              <span className="text-blue-200 text-sm font-bold">S</span>
            </div>
            <div>
              <p className="text-sm text-gray-300">Solana Connection</p>
              <p className="text-xs text-gray-400">
                {solanaConnected ? "Connected" : "Not Connected"}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={solanaConnected ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}
          >
            {solanaConnected ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : (
              <XCircle className="h-3 w-3 mr-1" />
            )}
            {solanaConnected ? "Active" : "Inactive"}
          </Badge>
        </div>

        {/* Profile NFT Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-sm text-gray-300">Profile NFT</p>
              <p className="text-xs text-gray-400">
                {hasProfileNFT ? "Active" : "Not minted"}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={hasProfileNFT ? "bg-green-500/20 text-green-200" : "bg-orange-500/20 text-orange-200"}
          >
            {hasProfileNFT ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : (
              <XCircle className="h-3 w-3 mr-1" />
            )}
            {hasProfileNFT ? "Active" : "None"}
          </Badge>
        </div>

        {/* Music NFTs */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Music className="h-5 w-5 text-pink-400" />
            <div>
              <p className="text-sm text-gray-300">Music NFTs</p>
              <p className="text-xs text-gray-400">
                {userMusicNFTs.length} owned
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-pink-500/20 text-pink-200">
            {userMusicNFTs.length} NFTs
          </Badge>
        </div>

        {/* Test Buttons */}
        <div className="space-y-2">
          <Button
            onClick={handleMintProfile}
            disabled={isMintingProfile || !solanaConnected}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isMintingProfile ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Testing Profile NFT Mint...
              </>
            ) : (
              <>
                <User className="mr-2 h-4 w-4" />
                Test Mint Profile NFT
              </>
            )}
          </Button>
          
          <Button
            onClick={handleMintMusic}
            disabled={isMintingMusic || !solanaConnected}
            variant="outline"
            className="w-full border-pink-500 text-pink-300 hover:bg-pink-900/20"
          >
            {isMintingMusic ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Testing Music NFT Mint...
              </>
            ) : (
              <>
                <Music className="mr-2 h-4 w-4" />
                Test Mint Music NFT
              </>
            )}
          </Button>

          <Button
            onClick={handleTestFunctions}
            disabled={isTesting || !solanaConnected}
            variant="outline"
            className="w-full border-green-500 text-green-300 hover:bg-green-900/20"
          >
            {isTesting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Testing Functions...
              </>
            ) : (
              <>
                <TestTube className="mr-2 h-4 w-4" />
                Test All Functions
              </>
            )}
          </Button>
        </div>

        {/* Debug Info */}
        <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
          <p>Wallet: <span className="font-mono text-white">{solanaPublicKey?.toBase58().slice(0, 8)}...</span></p>
          <p>Profile NFT: <span className="font-mono text-white">{hasProfileNFT ? 'Yes' : 'No'}</span></p>
          <p>Music NFTs: <span className="font-mono text-white">{userMusicNFTs.length}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}



