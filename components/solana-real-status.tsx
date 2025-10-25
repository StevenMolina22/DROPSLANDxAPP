/**
 * Componente para mostrar el estado real de Solana
 * 
 * Funcionalidades:
 * - Muestra balance real de SOL
 * - Estado de conexión con red
 * - Información de la red
 * - Debug de conexión
 */

import { useState, useEffect } from 'react';
import { useSolanaConnection } from '@/hooks/use-solana-connection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Wifi, 
  WifiOff, 
  Coins, 
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  Network,
  Server
} from 'lucide-react';

interface SolanaRealStatusProps {
  className?: string;
}

export function SolanaRealStatus({ className }: SolanaRealStatusProps) {
  const {
    connected,
    connecting,
    publicKey,
    balance,
    loading,
    error,
    networkInfo,
    refresh,
    rpcEndpoint
  } = useSolanaConnection();
  
  const { toast } = useToast();
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  // Actualizar timestamp cuando se actualiza el balance
  useEffect(() => {
    if (balance > 0 || connected) {
      setLastUpdate(new Date());
    }
  }, [balance, connected]);

  const handleRefresh = async () => {
    try {
      await refresh();
      toast({
        title: "Balance Updated! 🔄",
        description: "Solana balance refreshed successfully",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to refresh balance",
        variant: "destructive"
      });
    }
  };

  const getConnectionStatus = () => {
    if (connecting) return { status: 'connecting', text: 'Connecting...', color: 'yellow' };
    if (connected) return { status: 'connected', text: 'Connected', color: 'green' };
    return { status: 'disconnected', text: 'Disconnected', color: 'red' };
  };

  const connectionStatus = getConnectionStatus();

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Network className="h-5 w-5 text-purple-400" />
          Solana Real Connection
        </CardTitle>
        <CardDescription className="text-gray-400">
          Live connection to Solana blockchain
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              connectionStatus.color === 'green' ? 'bg-green-500/20' :
              connectionStatus.color === 'yellow' ? 'bg-yellow-500/20' :
              'bg-red-500/20'
            }`}>
              {connectionStatus.status === 'connecting' ? (
                <Loader2 className="h-5 w-5 text-yellow-400 animate-spin" />
              ) : connectionStatus.status === 'connected' ? (
                <Wifi className="h-5 w-5 text-green-400" />
              ) : (
                <WifiOff className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {connectionStatus.text}
              </p>
              <p className="text-xs text-gray-400">
                {publicKey ? `${publicKey.toBase58().slice(0, 8)}...` : 'No wallet connected'}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={`${
              connectionStatus.color === 'green' ? 'bg-green-500/20 text-green-200' :
              connectionStatus.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-200' :
              'bg-red-500/20 text-red-200'
            }`}
          >
            {connectionStatus.status === 'connected' ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : connectionStatus.status === 'connecting' ? (
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
            ) : (
              <XCircle className="h-3 w-3 mr-1" />
            )}
            {connectionStatus.text}
          </Badge>
        </div>

        {/* Real SOL Balance */}
        <div className="flex items-center justify-between p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center">
              <Coins className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-purple-200">Real SOL Balance</p>
              <p className="text-lg font-semibold text-white">
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  `${balance.toFixed(6)} SOL`
                )}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={handleRefresh}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/30">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm text-red-200">Connection Error</p>
              <p className="text-xs text-red-300">{error}</p>
            </div>
          </div>
        )}

        {/* Network Info */}
        {networkInfo && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">RPC Endpoint:</span>
              <span className="text-gray-300 text-xs font-mono">
                {rpcEndpoint?.split('//')[1]?.split('/')[0] || 'Unknown'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Current Slot:</span>
              <span className="text-gray-300">{networkInfo.slot?.toLocaleString() || 'N/A'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Block Height:</span>
              <span className="text-gray-300">{networkInfo.blockHeight?.toLocaleString() || 'N/A'}</span>
            </div>
          </div>
        )}

        {/* Last Update */}
        {lastUpdate && (
          <div className="pt-3 border-t border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Last Update:</span>
              <span className="text-gray-300">
                {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
          </div>
        )}

        {/* Debug Info */}
        <div className="pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-500 space-y-1">
            <div>Connected: {connected ? 'Yes' : 'No'}</div>
            <div>Loading: {loading ? 'Yes' : 'No'}</div>
            <div>Public Key: {publicKey ? 'Present' : 'None'}</div>
            <div>Balance: {balance} SOL</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}




