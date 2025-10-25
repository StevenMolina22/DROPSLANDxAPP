/**
 * Componente de debug para la conexión de Solana
 * 
 * Funcionalidades:
 * - Muestra estado de conexión
 * - Información del endpoint
 * - Testing de balance
 * - Debug completo
 */

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bug, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Loader2,
  Network,
  Coins,
  AlertCircle
} from 'lucide-react';

export function SolanaConnectionDebug() {
  const { publicKey, connected } = useWallet();
  const [connection] = useState(new Connection('https://api.testnet.solana.com', 'confirmed'));
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networkInfo, setNetworkInfo] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const fetchBalance = async () => {
    if (!connected || !publicKey) {
      setBalance(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🔍 Testing balance for:', publicKey.toBase58());
      
      const balance = await connection.getBalance(publicKey);
      const solBalance = balance / LAMPORTS_PER_SOL;
      
      console.log('💰 Balance fetched:', solBalance, 'SOL');
      setBalance(solBalance);
      
      // Get network info
      const slot = await connection.getSlot();
      const blockHeight = await connection.getBlockHeight();
      
      setNetworkInfo({
        slot,
        blockHeight,
        endpoint: 'https://api.testnet.solana.com'
      });
      
    } catch (err: any) {
      console.error('❌ Error fetching balance:', err);
      setError(err.message || 'Failed to fetch balance');
      setBalance(null);
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async () => {
    setTesting(true);
    try {
      const health = await connection.getHealth();
      console.log('🏥 Connection health:', health);
      return health === 'ok';
    } catch (err: any) {
      console.error('❌ Connection test failed:', err);
      return false;
    } finally {
      setTesting(false);
    }
  };

  useEffect(() => {
    if (connected && publicKey) {
      fetchBalance();
    }
  }, [connected, publicKey]);

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Bug className="h-5 w-5 text-orange-400" />
          Solana Connection Debug
        </CardTitle>
        <CardDescription className="text-gray-400">
          Debug information for Solana connection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Network className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Connection Status</p>
              <p className="text-xs text-white">
                {connected ? "Connected" : "Disconnected"}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={connected ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}
          >
            {connected ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : (
              <XCircle className="h-3 w-3 mr-1" />
            )}
            {connected ? "Active" : "Inactive"}
          </Badge>
        </div>

        {/* Wallet Address */}
        {connected && publicKey && (
          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Coins className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-300">Wallet Address</p>
                <p className="text-xs font-mono text-white break-all">
                  {publicKey.toBase58()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Balance */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm text-gray-300">SOL Balance</p>
              <p className="text-lg font-semibold text-white">
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : balance !== null ? (
                  `${balance.toFixed(6)} SOL`
                ) : (
                  'N/A'
                )}
              </p>
            </div>
          </div>
          <Button
            onClick={fetchBalance}
            disabled={loading || !connected}
            size="sm"
            variant="outline"
            className="border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Network Info */}
        {networkInfo && (
          <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
            <p>Endpoint: <span className="font-mono text-white">{networkInfo.endpoint}</span></p>
            <p>Slot: <span className="font-mono text-white">{networkInfo.slot}</span></p>
            <p>Block Height: <span className="font-mono text-white">{networkInfo.blockHeight}</span></p>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30 text-red-200 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>Error: {error}</span>
          </div>
        )}

        {/* Test Connection */}
        <div className="flex gap-2">
          <Button
            onClick={testConnection}
            disabled={testing}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            {testing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Test Connection
          </Button>
          <Button
            onClick={fetchBalance}
            disabled={loading || !connected}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Balance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}




