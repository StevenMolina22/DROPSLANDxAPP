/**
 * Componente de debug para Solana
 * 
 * Funcionalidades:
 * - Debug de conexión
 * - Información de red
 * - Estado del wallet
 * - Logs de conexión
 */

import { useState, useEffect } from 'react';
import { useSolanaConnection } from '@/hooks/use-solana-connection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bug, 
  Eye, 
  EyeOff, 
  Copy, 
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface SolanaDebugProps {
  className?: string;
}

export function SolanaDebug({ className }: SolanaDebugProps) {
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
  
  const [showDebug, setShowDebug] = useState(false);
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Añadir logs
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-9), `[${timestamp}] ${message}`]);
  };

  // Logs automáticos
  useEffect(() => {
    if (connected) {
      addLog('✅ Wallet connected');
    } else if (connecting) {
      addLog('🔄 Connecting wallet...');
    } else {
      addLog('❌ Wallet disconnected');
    }
  }, [connected, connecting]);

  useEffect(() => {
    if (balance > 0) {
      addLog(`💰 Balance: ${balance} SOL`);
    }
  }, [balance]);

  useEffect(() => {
    if (error) {
      addLog(`❌ Error: ${error}`);
    }
  }, [error]);

  const copyDebugInfo = async () => {
    const debugInfo = {
      connected,
      connecting,
      publicKey: publicKey?.toBase58(),
      balance,
      loading,
      error,
      networkInfo,
      rpcEndpoint,
      timestamp: new Date().toISOString()
    };

    try {
      await navigator.clipboard.writeText(JSON.stringify(debugInfo, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy debug info:', err);
    }
  };

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Bug className="h-5 w-5 text-orange-400" />
          Solana Debug
        </CardTitle>
        <CardDescription className="text-gray-400">
          Debug information for Solana connection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Toggle Debug */}
        <div className="flex items-center justify-between">
          <Button
            size="sm"
            onClick={() => setShowDebug(!showDebug)}
            className="bg-orange-600 hover:bg-orange-700"
          >
            {showDebug ? (
              <EyeOff className="h-4 w-4 mr-1" />
            ) : (
              <Eye className="h-4 w-4 mr-1" />
            )}
            {showDebug ? 'Hide' : 'Show'} Debug
          </Button>
          
          <Button
            size="sm"
            onClick={copyDebugInfo}
            variant="outline"
            className="border-orange-500 text-orange-300 hover:bg-orange-900/20"
          >
            {copied ? (
              <Check className="h-4 w-4 mr-1" />
            ) : (
              <Copy className="h-4 w-4 mr-1" />
            )}
            {copied ? 'Copied!' : 'Copy Debug'}
          </Button>
        </div>

        {/* Debug Info */}
        {showDebug && (
          <div className="space-y-4">
            {/* Connection Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Connected:</span>
                  <Badge variant="secondary" className={connected ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}>
                    {connected ? 'Yes' : 'No'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Connecting:</span>
                  <Badge variant="secondary" className={connecting ? "bg-yellow-500/20 text-yellow-200" : "bg-gray-500/20 text-gray-200"}>
                    {connecting ? 'Yes' : 'No'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Loading:</span>
                  <Badge variant="secondary" className={loading ? "bg-yellow-500/20 text-yellow-200" : "bg-gray-500/20 text-gray-200"}>
                    {loading ? 'Yes' : 'No'}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Balance:</span>
                  <span className="text-white font-mono">{balance} SOL</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Public Key:</span>
                  <span className="text-white font-mono text-xs">
                    {publicKey ? `${publicKey.toBase58().slice(0, 8)}...` : 'None'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">RPC:</span>
                  <span className="text-white font-mono text-xs">
                    {rpcEndpoint ? rpcEndpoint.split('//')[1]?.split('/')[0] : 'Unknown'}
                  </span>
                </div>
              </div>
            </div>

            {/* Network Info */}
            {networkInfo && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white">Network Info</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Slot:</span>
                    <span className="text-white">{networkInfo.slot?.toLocaleString() || 'N/A'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Block Height:</span>
                    <span className="text-white">{networkInfo.blockHeight?.toLocaleString() || 'N/A'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-sm text-red-200">Connection Error</p>
                  <p className="text-xs text-red-300">{error}</p>
                </div>
              </div>
            )}

            {/* Logs */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">Connection Logs</h4>
              <div className="bg-gray-900 p-3 rounded-lg max-h-32 overflow-y-auto">
                {logs.length > 0 ? (
                  logs.map((log, index) => (
                    <div key={index} className="text-xs text-gray-300 font-mono">
                      {log}
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-gray-500">No logs yet</div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={refresh}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Refresh Connection
              </Button>
              <Button
                size="sm"
                onClick={() => setLogs([])}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-700"
              >
                Clear Logs
              </Button>
            </div>
          </div>
        )}

        {/* Quick Status */}
        {!showDebug && (
          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                connected ? 'bg-green-400' : 
                connecting ? 'bg-yellow-400' : 
                'bg-red-400'
              }`} />
              <span className="text-sm text-gray-300">
                {connected ? 'Connected' : connecting ? 'Connecting...' : 'Disconnected'}
              </span>
            </div>
            <div className="text-sm text-gray-400">
              {balance} SOL
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}




