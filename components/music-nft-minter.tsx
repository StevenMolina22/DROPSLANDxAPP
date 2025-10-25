'use client'

/**
 * Componente para mintear Music NFTs
 * Para artistas que quieren subir su música como NFT
 */

import { useState } from 'react';
import { useSolanaNFTs } from '@/hooks/use-solana-nfts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Music, Upload, CheckCircle } from 'lucide-react';

interface MusicNFTMinterProps {
  onSuccess?: (signature: string) => void;
  onError?: (error: string) => void;
}

export function MusicNFTMinter({ onSuccess, onError }: MusicNFTMinterProps) {
  const { mintMusic, loading, error, connected } = useSolanaNFTs();
  const { toast } = useToast();

  const [musicData, setMusicData] = useState({
    title: '',
    artist: '',
    description: '',
    genre: 'Electronic',
    duration: 0,
    audioUrl: '',
    coverImageUrl: '',
    price: 0
  });

  const [minted, setMinted] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);

  const genres = [
    'Electronic', 'Hip Hop', 'Rock', 'Pop', 'Jazz', 'Classical',
    'Reggae', 'Country', 'Blues', 'Folk', 'R&B', 'Other'
  ];

  const handleMintMusic = async () => {
    if (!connected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your Solana wallet first",
        variant: "destructive"
      });
      return;
    }

    if (!musicData.title.trim() || !musicData.artist.trim()) {
      toast({
        title: "Required fields",
        description: "Please fill in title and artist name",
        variant: "destructive"
      });
      return;
    }

    try {
      const result = await mintMusic(musicData);
      
      if (result.success) {
        setMinted(true);
        setSignature(result.signature);
        
        toast({
          title: "Music NFT Minted! 🎵",
          description: `${musicData.title} is now available as an NFT`,
        });

        if (onSuccess) {
          onSuccess(result.signature);
        }
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      const errorMsg = err.message || 'Failed to mint music NFT';
      
      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive"
      });

      if (onError) {
        onError(errorMsg);
      }
    }
  };

  if (!connected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Music NFT Creator
          </CardTitle>
          <CardDescription>
            Connect your wallet to mint your music as NFT
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

  if (minted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Music NFT Minted!
          </CardTitle>
          <CardDescription>
            Your music is now available as an NFT
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-800">
              {musicData.title} by {musicData.artist}
            </div>
            <div className="text-xs text-green-600 mt-1">
              Your music NFT is now live on the blockchain
            </div>
          </div>
          
          {signature && (
            <div className="text-xs text-muted-foreground">
              Transaction: {signature.slice(0, 8)}...{signature.slice(-8)}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          Create Music NFT
        </CardTitle>
        <CardDescription>
          Upload your music and mint it as an NFT
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Song Title *</Label>
            <Input
              id="title"
              placeholder="Enter song title"
              value={musicData.title}
              onChange={(e) => setMusicData(prev => ({ ...prev, title: e.target.value }))}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="artist">Artist Name *</Label>
            <Input
              id="artist"
              placeholder="Enter artist name"
              value={musicData.artist}
              onChange={(e) => setMusicData(prev => ({ ...prev, artist: e.target.value }))}
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe your music..."
            value={musicData.description}
            onChange={(e) => setMusicData(prev => ({ ...prev, description: e.target.value }))}
            disabled={loading}
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Select
              value={musicData.genre}
              onValueChange={(value) => setMusicData(prev => ({ ...prev, genre: value }))}
              disabled={loading}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {genres.map(genre => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (seconds)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="180"
              value={musicData.duration}
              onChange={(e) => setMusicData(prev => ({ ...prev, duration: parseInt(e.target.value) || 0 }))}
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="audioUrl">Audio URL</Label>
          <Input
            id="audioUrl"
            placeholder="https://example.com/audio.mp3"
            value={musicData.audioUrl}
            onChange={(e) => setMusicData(prev => ({ ...prev, audioUrl: e.target.value }))}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImageUrl">Cover Image URL</Label>
          <Input
            id="coverImageUrl"
            placeholder="https://example.com/cover.jpg"
            value={musicData.coverImageUrl}
            onChange={(e) => setMusicData(prev => ({ ...prev, coverImageUrl: e.target.value }))}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price (SOL)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            placeholder="0.1"
            value={musicData.price}
            onChange={(e) => setMusicData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <Button 
          onClick={handleMintMusic} 
          disabled={loading || !musicData.title.trim() || !musicData.artist.trim()}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Minting Music NFT...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Mint Music NFT
            </>
          )}
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          Your music will be minted as an NFT and stored on the blockchain
        </div>
      </CardContent>
    </Card>
  );
}
