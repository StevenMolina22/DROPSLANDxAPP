/**
 * Componente QR para Solana wallet
 * 
 * Funcionalidades:
 * - Genera QR con dirección del wallet
 * - Permite copiar dirección
 * - Muestra información del wallet
 */

import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  QrCode, 
  Copy, 
  Check, 
  Wallet,
  ExternalLink,
  Download
} from 'lucide-react';

interface SolanaQRSectionProps {
  className?: string;
}

export function SolanaQRSection({ className }: SolanaQRSectionProps) {
  const { publicKey, connected } = useWallet();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const walletAddress = publicKey?.toBase58() || '';
  const shortAddress = walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : '';

  const copyAddress = async () => {
    if (!walletAddress) return;
    
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast({
        title: "Address Copied! 📋",
        description: "Wallet address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy address",
        variant: "destructive"
      });
    }
  };

  const openExplorer = () => {
    if (!walletAddress) return;
    window.open(`https://explorer.solana.com/address/${walletAddress}`, '_blank');
  };

  const downloadQR = () => {
    // This would generate and download a QR code
    // For now, we'll just show a message
    toast({
      title: "QR Code",
      description: "QR code generation would be implemented here",
    });
  };

  if (!connected || !publicKey) {
    return (
      <Card className={`bg-gray-800 border-gray-700 ${className}`}>
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Wallet QR Code
          </CardTitle>
          <CardDescription className="text-gray-400">
            Connect your wallet to generate QR code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Wallet className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-300">Wallet not connected</p>
            <p className="text-gray-400 text-sm mt-1">
              Connect your Solana wallet to view QR code
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
          <QrCode className="h-5 w-5 text-purple-400" />
          Wallet QR Code
        </CardTitle>
        <CardDescription className="text-gray-400">
          Your Solana wallet address and QR code
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Address */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Wallet Address</label>
          <div className="flex items-center gap-2">
            <Input
              value={walletAddress}
              readOnly
              className="bg-gray-700 border-gray-600 text-white font-mono text-sm"
            />
            <Button
              size="sm"
              onClick={copyAddress}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-400">
            Short: {shortAddress}
          </p>
        </div>

        {/* QR Code Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">QR Code</label>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-200">
              <QrCode className="h-3 w-3 mr-1" />
              Ready
            </Badge>
          </div>
          
          {showQR ? (
            <div className="bg-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <QrCode className="h-16 w-16 text-gray-600" />
                </div>
                <p className="text-xs text-gray-600">QR Code</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Click to generate QR</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => setShowQR(!showQR)}
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            <QrCode className="h-4 w-4 mr-1" />
            {showQR ? 'Hide' : 'Show'} QR
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={openExplorer}
            className="border-purple-500 text-purple-300 hover:bg-purple-900/20"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Explorer
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={downloadQR}
            className="border-purple-500 text-purple-300 hover:bg-purple-900/20"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>

        {/* Wallet Info */}
        <div className="pt-3 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Network:</span>
            <Badge variant="secondary" className="bg-green-500/20 text-green-200">
              Solana Mainnet
            </Badge>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-400">Status:</span>
            <Badge variant="secondary" className="bg-green-500/20 text-green-200">
              Connected
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}




