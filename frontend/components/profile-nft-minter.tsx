'use client'

/**
 * Componente para mintear Profile NFTs (soulbound)
 * Se usa cuando un usuario se registra por primera vez
 */

import { useState } from 'react';
import { useSolanaNFTs } from '@/hooks/use-solana-nfts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, CheckCircle } from 'lucide-react';

interface ProfileNFTMinterProps {
  onSuccess?: (signature: string) => void;
  onError?: (error: string) => void;
}

export function ProfileNFTMinter({ onSuccess, onError }: ProfileNFTMinterProps) {
  const { mintProfile, loading, error, connected } = useSolanaNFTs();
  const { toast } = useToast();

  const [profileData, setProfileData] = useState({
    username: '',
    profileType: 'fan' as 'fan' | 'artist',
    principal: '',
    createdAt: new Date().toISOString()
  });

  const [minted, setMinted] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);

  const handleMintProfile = async () => {
    if (!connected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your Solana wallet first",
        variant: "destructive"
      });
      return;
    }

    if (!profileData.username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter a username",
        variant: "destructive"
      });
      return;
    }

    // Validate username format
    if (profileData.username.length < 3) {
      toast({
        title: "Username too short",
        description: "Username must be at least 3 characters long",
        variant: "destructive"
      });
      return;
    }

    if (profileData.username.length > 20) {
      toast({
        title: "Username too long",
        description: "Username must be less than 20 characters",
        variant: "destructive"
      });
      return;
    }

    try {
      const result = await mintProfile(profileData);
      
      if (result.success) {
        setMinted(true);
        setSignature(result.signature || null);
        
        toast({
          title: "Profile NFT Minted! 🎉",
          description: `Welcome to DROPSLAND, ${profileData.username}!`,
        });

        if (onSuccess && result.signature) {
          onSuccess(result.signature);
        }
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      const errorMsg = err.message || 'Failed to mint profile NFT';
      
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
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile NFT
          </CardTitle>
          <CardDescription>
            Connect your wallet to mint your profile NFT
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
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Profile NFT Minted!
          </CardTitle>
          <CardDescription>
            Your soulbound profile NFT has been created
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-800">
              Welcome to DROPSLAND, {profileData.username}!
            </div>
            <div className="text-xs text-green-600 mt-1">
              Your profile NFT is now soulbound to your wallet
            </div>
          </div>
          
          {signature && (
            <div className="text-xs text-muted-foreground">
              Transaction: {signature.slice(0, 8)}...{signature.slice(-8)}
            </div>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => {
              setMinted(false);
              setSignature(null);
              setProfileData({
                username: '',
                profileType: 'fan',
                principal: '',
                createdAt: new Date().toISOString()
              });
            }}
            className="w-full mt-2"
          >
            Mint Another NFT
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Create Profile NFT
        </CardTitle>
        <CardDescription>
          Mint your soulbound profile NFT to join DROPSLAND
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter your username"
            value={profileData.username}
            onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
            disabled={loading}
          />
          <div className="text-xs text-muted-foreground">
            Username must be 3-20 characters long
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profileType">Profile Type</Label>
          <Select
            value={profileData.profileType}
            onValueChange={(value: 'fan' | 'artist') => 
              setProfileData(prev => ({ ...prev, profileType: value }))
            }
            disabled={loading}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fan">Fan</SelectItem>
              <SelectItem value="artist">Artist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="principal">ICP Principal (Optional)</Label>
          <Input
            id="principal"
            placeholder="Your ICP principal ID"
            value={profileData.principal}
            onChange={(e) => setProfileData(prev => ({ ...prev, principal: e.target.value }))}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <Button 
          onClick={handleMintProfile} 
          disabled={loading || !profileData.username.trim() || profileData.username.length < 3 || profileData.username.length > 20}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Minting...
            </>
          ) : (
            'Mint Profile NFT'
          )}
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          This NFT will be soulbound (non-transferable) to your wallet
        </div>
      </CardContent>
    </Card>
  );
}
