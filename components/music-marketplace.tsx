'use client'

/**
 * Componente para el marketplace de música
 * Permite a los fans comprar música NFT
 */

import { useState, useEffect } from 'react';
import { useSolanaNFTs } from '@/hooks/use-solana-nfts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Music, Play, ShoppingCart, Clock, User } from 'lucide-react';

interface MusicNFT {
  id: string;
  title: string;
  artist: string;
  description: string;
  genre: string;
  duration: number;
  price: number;
  coverImageUrl: string;
  audioUrl: string;
  artistWallet: string;
  mint: string;
}

interface MusicMarketplaceProps {
  onPurchase?: (musicNFT: MusicNFT, signature: string) => void;
}

export function MusicMarketplace({ onPurchase }: MusicMarketplaceProps) {
  const { buyMusic, loading, error, connected, getBalance } = useSolanaNFTs();
  const { toast } = useToast();

  const [musicNFTs, setMusicNFTs] = useState<MusicNFT[]>([]);
  const [userBalance, setUserBalance] = useState(0);
  const [purchasing, setPurchasing] = useState<string | null>(null);

  // Mock data - En producción esto vendría de tu backend
  useEffect(() => {
    const mockMusicNFTs: MusicNFT[] = [
      {
        id: '1',
        title: 'Digital Dreams',
        artist: 'ElectroBeats',
        description: 'An electronic masterpiece that takes you on a journey through digital landscapes.',
        genre: 'Electronic',
        duration: 240,
        price: 0.1,
        coverImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=music1',
        audioUrl: 'https://example.com/audio1.mp3',
        artistWallet: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM',
        mint: 'MusicMint1...'
      },
      {
        id: '2',
        title: 'Sunset Vibes',
        artist: 'ChillWave',
        description: 'Relaxing beats perfect for sunset listening.',
        genre: 'Chill',
        duration: 180,
        price: 0.05,
        coverImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=music2',
        audioUrl: 'https://example.com/audio2.mp3',
        artistWallet: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM',
        mint: 'MusicMint2...'
      },
      {
        id: '3',
        title: 'Urban Flow',
        artist: 'HipHopMaster',
        description: 'Raw hip hop energy from the streets.',
        genre: 'Hip Hop',
        duration: 200,
        price: 0.15,
        coverImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=music3',
        audioUrl: 'https://example.com/audio3.mp3',
        artistWallet: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM',
        mint: 'MusicMint3...'
      }
    ];

    setMusicNFTs(mockMusicNFTs);
  }, []);

  useEffect(() => {
    if (connected) {
      getBalance().then(setUserBalance);
    }
  }, [connected, getBalance]);

  const handlePurchase = async (musicNFT: MusicNFT) => {
    if (!connected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your Solana wallet first",
        variant: "destructive"
      });
      return;
    }

    if (userBalance < musicNFT.price) {
      toast({
        title: "Insufficient balance",
        description: `You need ${musicNFT.price} SOL but have ${userBalance.toFixed(3)} SOL`,
        variant: "destructive"
      });
      return;
    }

    setPurchasing(musicNFT.id);

    try {
      const result = await buyMusic(
        musicNFT.mint,
        musicNFT.artistWallet,
        musicNFT.price
      );
      
      if (result.success) {
        toast({
          title: "Music NFT Purchased! 🎵",
          description: `You now own ${musicNFT.title} by ${musicNFT.artist}`,
        });

        if (onPurchase) {
          onPurchase(musicNFT, result.signature);
        }
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      toast({
        title: "Purchase failed",
        description: err.message || 'Failed to purchase music NFT',
        variant: "destructive"
      });
    } finally {
      setPurchasing(null);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!connected) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Music Marketplace
          </CardTitle>
          <CardDescription>
            Connect your wallet to browse and purchase music NFTs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            Please connect your Solana wallet to continue
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Music Marketplace
          </CardTitle>
          <CardDescription>
            Discover and purchase music NFTs from talented artists
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Your Balance: <span className="font-medium">{userBalance.toFixed(3)} SOL</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {musicNFTs.length} tracks available
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicNFTs.map((musicNFT) => (
          <Card key={musicNFT.id} className="overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              {musicNFT.coverImageUrl ? (
                <img 
                  src={musicNFT.coverImageUrl} 
                  alt={musicNFT.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Music className="h-16 w-16 text-white/50" />
              )}
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg">{musicNFT.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {musicNFT.artist}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {musicNFT.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{musicNFT.genre}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {formatDuration(musicNFT.duration)}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">
                  {musicNFT.price} SOL
                </div>
                <Button
                  onClick={() => handlePurchase(musicNFT)}
                  disabled={purchasing === musicNFT.id || userBalance < musicNFT.price}
                  size="sm"
                >
                  {purchasing === musicNFT.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Buying...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy
                    </>
                  )}
                </Button>
              </div>
              
              {userBalance < musicNFT.price && (
                <div className="text-xs text-red-600">
                  Insufficient balance
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {musicNFTs.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No music available</h3>
            <p className="text-muted-foreground">
              Check back later for new music NFTs
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
