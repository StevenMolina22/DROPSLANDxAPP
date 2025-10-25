/**
 * Componente para manejar soulbound tokens
 * 
 * Funcionalidades:
 * - Muestra soulbound tokens del usuario
 * - Permite mintear nuevos soulbound tokens
 * - Maneja la lógica de soulbound (no transferibles)
 */

import { useState, useEffect } from 'react';
import { useIntegratedAuth } from '@/hooks/use-integrated-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  User, 
  Music, 
  Award,
  CheckCircle,
  XCircle,
  Loader2,
  Plus
} from 'lucide-react';

interface SoulboundTokenManagerProps {
  className?: string;
}

export function SoulboundTokenManager({ className }: SoulboundTokenManagerProps) {
  const {
    solanaConnected,
    hasProfileNFT,
    userMusicNFTs,
    mintProfileNFT,
    mintMusicNFT,
    userData
  } = useIntegratedAuth();
  
  const { toast } = useToast();
  const [isMinting, setIsMinting] = useState(false);
  const [soulboundTokens, setSoulboundTokens] = useState<any[]>([]);

  // Simular soulbound tokens (en producción vendrían del programa)
  useEffect(() => {
    const tokens = [];
    
    if (hasProfileNFT) {
      tokens.push({
        id: 'profile',
        type: 'Profile',
        name: `${userData?.username || 'User'} Profile`,
        description: 'Soulbound profile NFT',
        minted: true,
        nonTransferable: true
      });
    }
    
    // Agregar music NFTs como soulbound si son del usuario
    userMusicNFTs.forEach((nft, index) => {
      tokens.push({
        id: `music-${index}`,
        type: 'Music',
        name: `Music NFT #${index + 1}`,
        description: 'Soulbound music NFT',
        minted: true,
        nonTransferable: true
      });
    });
    
    setSoulboundTokens(tokens);
  }, [hasProfileNFT, userMusicNFTs, userData]);

  const handleMintProfile = async () => {
    if (!userData) {
      toast({
        title: "Error",
        description: "User data not available",
        variant: "destructive"
      });
      return;
    }

    setIsMinting(true);
    try {
      const profileData = {
        username: userData.username,
        profileType: userData.type || 'fan',
        principal: userData.principal,
        createdAt: new Date().toISOString()
      };

      const result = await mintProfileNFT(profileData);
      
      if (result.success) {
        toast({
          title: "Soulbound Profile NFT Minted! 🎉",
          description: "Your profile NFT is now soulbound to your wallet",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to mint soulbound profile NFT",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to mint soulbound profile NFT",
        variant: "destructive"
      });
    } finally {
      setIsMinting(false);
    }
  };

  if (!solanaConnected) {
    return (
      <Card className={`bg-gray-800 border-gray-700 ${className}`}>
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Soulbound Tokens
          </CardTitle>
          <CardDescription className="text-gray-400">
            Connect your wallet to view soulbound tokens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Shield className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-300">Wallet not connected</p>
            <p className="text-gray-400 text-sm mt-1">
              Connect your Solana wallet to view soulbound tokens
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-400" />
          Soulbound Tokens
        </CardTitle>
        <CardDescription className="text-gray-400">
          Non-transferable tokens bound to your wallet
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Soulbound Tokens List */}
        <div className="space-y-3">
          {soulboundTokens.length > 0 ? (
            soulboundTokens.map((token) => (
              <div key={token.id} className="flex items-center justify-between p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center">
                    {token.type === 'Profile' ? (
                      <User className="h-5 w-5 text-blue-300" />
                    ) : (
                      <Music className="h-5 w-5 text-blue-300" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{token.name}</p>
                    <p className="text-xs text-blue-300">{token.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
                    <Shield className="h-3 w-3 mr-1" />
                    Soulbound
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 bg-blue-900/10 rounded-lg border border-blue-700/30">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-300">No soulbound tokens yet</p>
              <p className="text-blue-400 text-sm mt-1">
                Mint your first soulbound token to get started
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          {!hasProfileNFT && (
            <Button
              onClick={handleMintProfile}
              disabled={isMinting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isMinting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting Soulbound Profile...
                </>
              ) : (
                <>
                  <User className="mr-2 h-4 w-4" />
                  Mint Soulbound Profile NFT
                </>
              )}
            </Button>
          )}
          
          <Button
            variant="outline"
            className="w-full border-blue-500 text-blue-300 hover:bg-blue-900/20"
          >
            <Plus className="mr-2 h-4 w-4" />
            Mint Soulbound Music NFT
          </Button>
        </div>

        {/* Info */}
        <div className="pt-3 border-t border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Shield className="h-4 w-4" />
            <span>Soulbound tokens cannot be transferred or sold</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}




