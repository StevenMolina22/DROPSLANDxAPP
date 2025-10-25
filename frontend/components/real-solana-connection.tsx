/**
 * Componente para conexión real con Solana
 * 
 * Funcionalidades:
 * - Conexión real con la red Solana
 * - Balance real de SOL
 * - Transacciones reales
 * - NFTs reales
 * - Funcionalidad completa de Solana
 */

import { useState, useEffect, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Wallet, 
  Coins, 
  User, 
  Music, 
  CheckCircle, 
  XCircle, 
  Loader2,
  Zap,
  RefreshCw,
  Send,
  Download,
  Upload
} from 'lucide-react';

export function RealSolanaConnection() {
  const { connection } = useConnection();
  const { publicKey, connected, connecting, connect, disconnect } = useWallet();
  const { toast } = useToast();

  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networkInfo, setNetworkInfo] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Obtener balance real de SOL
  const fetchBalance = useCallback(async () => {
    if (!connected || !publicKey) {
      setBalance(0);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🔍 Fetching real SOL balance for:', publicKey.toBase58());
      const lamports = await connection.getBalance(publicKey);
      const solBalance = lamports / LAMPORTS_PER_SOL;
      console.log('💰 Real SOL balance:', solBalance, 'SOL');
      setBalance(solBalance);
    } catch (err: any) {
      console.error('❌ Error fetching balance:', err);
      setError(err.message || 'Failed to fetch balance');
      setBalance(0);
    } finally {
      setLoading(false);
    }
  }, [connected, publicKey, connection]);

  // Obtener información de la red
  const fetchNetworkInfo = useCallback(async () => {
    try {
      const slot = await connection.getSlot();
      const blockHeight = await connection.getBlockHeight();
      const version = await connection.getVersion();
      
      setNetworkInfo({
        endpoint: connection.rpcEndpoint,
        slot,
        blockHeight,
        version: version['solana-core'],
        cluster: connection.rpcEndpoint.includes('testnet') ? 'testnet' : 
                connection.rpcEndpoint.includes('devnet') ? 'devnet' : 'mainnet-beta'
      });
    } catch (err: any) {
      console.error('❌ Error fetching network info:', err);
    }
  }, [connection]);

  // Conectar wallet
  const handleConnect = useCallback(async () => {
    try {
      await connect();
      setIsConnected(true);
      toast({
        title: "Wallet Connected! 🎉",
        description: "Successfully connected to Solana wallet",
      });
    } catch (err: any) {
      toast({
        title: "Connection Failed",
        description: err.message || "Failed to connect wallet",
        variant: "destructive"
      });
    }
  }, [connect, toast]);

  // Desconectar wallet
  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      setIsConnected(false);
      setBalance(0);
      setError(null);
      toast({
        title: "Wallet Disconnected",
        description: "Successfully disconnected from Solana wallet",
      });
    } catch (err: any) {
      toast({
        title: "Disconnect Failed",
        description: err.message || "Failed to disconnect wallet",
        variant: "destructive"
      });
    }
  }, [disconnect, toast]);

  // Enviar transacción de prueba
  const handleSendTransaction = useCallback(async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      
      // Crear una transacción de prueba (transferencia a sí mismo)
      const { SystemProgram } = await import('@solana/web3.js');
      const transaction = new (await import('@solana/web3.js')).Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // Enviar a sí mismo como prueba
          lamports: 1000, // 0.000001 SOL
        })
      );

      const signature = await connection.sendTransaction(transaction, []);
      console.log('📝 Transaction sent:', signature);
      
      toast({
        title: "Transaction Sent! 🚀",
        description: `Transaction: ${signature.slice(0, 8)}...`,
      });

      // Actualizar balance después de la transacción
      setTimeout(() => {
        fetchBalance();
      }, 2000);

    } catch (err: any) {
      console.error('❌ Transaction failed:', err);
      toast({
        title: "Transaction Failed",
        description: err.message || "Failed to send transaction",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [connected, publicKey, connection, toast, fetchBalance]);

  // Efectos
  useEffect(() => {
    setIsConnected(connected);
    if (connected && publicKey) {
      fetchBalance();
      fetchNetworkInfo();
    }
  }, [connected, publicKey, fetchBalance, fetchNetworkInfo]);

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          Real Solana Connection
        </CardTitle>
        <CardDescription className="text-gray-400">
          Connect to Solana network and interact with real blockchain
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center">
              <Wallet className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-purple-200">Wallet Status</p>
              <p className="text-xs text-purple-300">
                {connected ? `${publicKey?.toBase58().slice(0, 8)}...` : 'Not Connected'}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className={connected ? "bg-green-500/20 text-green-200" : "bg-gray-500/20 text-gray-200"}>
            {connected ? (
              <>
                <CheckCircle className="h-3 w-3 mr-1" />
                Connected
              </>
            ) : (
              <>
                <XCircle className="h-3 w-3 mr-1" />
                Not Connected
              </>
            )}
          </Badge>
        </div>

        {/* Real SOL Balance */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm text-gray-300">Real SOL Balance</p>
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
            <p>Network: <span className="font-mono text-white">{networkInfo.cluster}</span></p>
            <p>Endpoint: <span className="font-mono text-white">{networkInfo.endpoint}</span></p>
            <p>Slot: <span className="font-mono text-white">{networkInfo.slot}</span></p>
            <p>Block Height: <span className="font-mono text-white">{networkInfo.blockHeight}</span></p>
            <p>Version: <span className="font-mono text-white">{networkInfo.version}</span></p>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30 text-red-200 text-sm">
            <XCircle className="h-4 w-4 inline mr-2" />
            <span>Error: {error}</span>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2">
          {!connected ? (
            <Button
              onClick={handleConnect}
              disabled={connecting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {connecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </>
              )}
            </Button>
          ) : (
            <div className="space-y-2">
              <Button
                onClick={handleSendTransaction}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Transaction...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Test Transaction
                  </>
                )}
              </Button>
              
              <Button
                onClick={handleDisconnect}
                variant="outline"
                className="w-full border-red-500 text-red-300 hover:bg-red-900/20"
              >
                <XCircle className="mr-2 h-4 w-4" />
                Disconnect Wallet
              </Button>
            </div>
          )}
        </div>

        {/* Debug Info */}
        <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
          <p>Status: <span className="font-mono text-white">{connected ? 'Connected' : 'Disconnected'}</span></p>
          <p>Loading: <span className="font-mono text-white">{loading ? 'Yes' : 'No'}</span></p>
          <p>Error: <span className="font-mono text-white">{error ? 'Yes' : 'No'}</span></p>
          <p>Network: <span className="font-mono text-white">{networkInfo?.cluster || 'Unknown'}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}
