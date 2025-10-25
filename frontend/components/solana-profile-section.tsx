/**
 * Componente para mostrar el estado de Solana en el perfil
 * 
 * Funcionalidades:
 * - Muestra el estado de conexión de Solana
 * - Muestra el balance de SOL
 * - Muestra el estado del Profile NFT
 * - Permite mintear Profile NFT si no existe
 */

import { useState, useEffect } from 'react';
import { useIntegratedAuth } from '@/hooks/use-integrated-auth';
// Button import removed - no Solana buttons needed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Wallet, 
  Coins, 
  User, 
  Music, 
  CheckCircle, 
  XCircle, 
  Zap
} from 'lucide-react';

interface SolanaProfileSectionProps {
  // Props removed - no Solana buttons needed
}

export function SolanaProfileSection({}: SolanaProfileSectionProps) {
  const {
    solanaConnected,
    solanaPublicKey,
    solanaBalance,
    hasProfileNFT,
    userMusicNFTs,
    mintProfileNFT,
    checkProfileNFT,
    getUserMusicNFTs,
    getSolanaBalance,
    userData
  } = useIntegratedAuth();
  
  const { toast } = useToast();
  const [isChecking, setIsChecking] = useState(false);

  // Verificar estado al cargar
  useEffect(() => {
    if (solanaConnected) {
      setIsChecking(true);
      Promise.all([
        checkProfileNFT(),
        getUserMusicNFTs(),
        getSolanaBalance()
      ]).finally(() => {
        setIsChecking(false);
      });
    }
  }, [solanaConnected, checkProfileNFT, getUserMusicNFTs, getSolanaBalance]);

  // Minting functions removed - no Solana buttons needed

  if (!solanaConnected) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Solana Integration
          </CardTitle>
          <CardDescription className="text-gray-400">
            Connect your Solana wallet to access NFT features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <XCircle className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-300">Solana wallet not connected</p>
            <p className="text-gray-400 text-sm mt-1">
              Connect your wallet to mint and collect NFTs
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-400" />
          Solana Integration
        </CardTitle>
        <CardDescription className="text-gray-400">
          Your Solana wallet and NFT status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Status */}
        <div className="flex items-center justify-between p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center">
              <Wallet className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-purple-200">Wallet Connected</p>
              <p className="text-xs text-purple-300">
                {solanaPublicKey?.toBase58().slice(0, 8)}...
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-500/20 text-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Connected
          </Badge>
        </div>

        {/* Balance */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm text-gray-300">SOL Balance</p>
              <p className="text-lg font-semibold text-white">
                {solanaBalance.toFixed(4)} SOL
              </p>
            </div>
          </div>
        </div>

        {/* Profile NFT Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Profile NFT</p>
              <p className="text-sm font-medium text-white">
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
              <p className="text-sm font-medium text-white">
                {userMusicNFTs.length} owned
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-pink-500/20 text-pink-200">
            {userMusicNFTs.length} NFTs
          </Badge>
        </div>

        {/* Actions removed - no Solana buttons needed */}
      </CardContent>
    </Card>
  );
}

