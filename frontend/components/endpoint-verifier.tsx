/**
 * Componente para verificar el endpoint de Solana
 * 
 * Funcionalidades:
 * - Verifica el endpoint actual de Solana
 * - Muestra información del cluster
 * - Testing de conectividad
 * - Debug de endpoint
 */

import { useState, useEffect } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Network, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Loader2,
  Server,
  Globe
} from 'lucide-react';

export function EndpointVerifier() {
  const { connection } = useConnection();
  const [endpoint, setEndpoint] = useState<string>('');
  const [cluster, setCluster] = useState<string>('');
  const [health, setHealth] = useState<'checking' | 'ok' | 'error'>('checking');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkEndpoint = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Get endpoint info
      const endpointUrl = connection.rpcEndpoint;
      setEndpoint(endpointUrl);
      
      // Determine cluster from endpoint
      if (endpointUrl.includes('testnet')) {
        setCluster('testnet');
      } else if (endpointUrl.includes('devnet')) {
        setCluster('devnet');
      } else if (endpointUrl.includes('mainnet')) {
        setCluster('mainnet-beta');
      } else {
        setCluster('unknown');
      }
      
      // Check health
      const healthStatus = await connection.getHealth();
      setHealth(healthStatus === 'ok' ? 'ok' : 'error');
      
    } catch (err: any) {
      setError(err.message || 'Failed to check endpoint');
      setHealth('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkEndpoint();
  }, [connection]);

  const getHealthIcon = () => {
    if (loading) return <Loader2 className="h-4 w-4 animate-spin text-yellow-400" />;
    if (health === 'ok') return <CheckCircle className="h-4 w-4 text-green-400" />;
    return <XCircle className="h-4 w-4 text-red-400" />;
  };

  const getHealthColor = () => {
    if (loading) return 'bg-yellow-500/20 text-yellow-200';
    if (health === 'ok') return 'bg-green-500/20 text-green-200';
    return 'bg-red-500/20 text-red-200';
  };

  const getClusterColor = () => {
    switch (cluster) {
      case 'testnet':
        return 'bg-blue-500/20 text-blue-200';
      case 'devnet':
        return 'bg-purple-500/20 text-purple-200';
      case 'mainnet-beta':
        return 'bg-green-500/20 text-green-200';
      default:
        return 'bg-gray-500/20 text-gray-200';
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-400" />
          Endpoint Verifier
        </CardTitle>
        <CardDescription className="text-gray-400">
          Verifies the current Solana endpoint and cluster
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Endpoint Info */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Server className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Current Endpoint</p>
              <p className="text-xs text-gray-400 font-mono break-all">
                {endpoint || 'Loading...'}
              </p>
            </div>
          </div>
          <Button
            onClick={checkEndpoint}
            disabled={loading}
            size="sm"
            variant="outline"
            className="border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Cluster Info */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Network className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-sm text-gray-300">Current Cluster</p>
              <p className="text-xs text-gray-400">
                {cluster || 'Loading...'}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className={getClusterColor()}>
            {cluster || 'Unknown'}
          </Badge>
        </div>

        {/* Health Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            {getHealthIcon()}
            <div>
              <p className="text-sm text-gray-300">Health Status</p>
              <p className="text-xs text-gray-400">
                {loading ? 'Checking...' : 
                 health === 'ok' ? 'Healthy' : 
                 health === 'error' ? 'Unhealthy' : 'Unknown'}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className={getHealthColor()}>
            {loading ? 'Checking' : 
             health === 'ok' ? 'OK' : 
             health === 'error' ? 'Error' : 'Unknown'}
          </Badge>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30 text-red-200 text-sm">
            <XCircle className="h-4 w-4 inline mr-2" />
            <span>Error: {error}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={checkEndpoint}
            disabled={loading}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Check Endpoint
          </Button>
        </div>

        {/* Debug Info */}
        <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
          <p>Endpoint: <span className="font-mono text-white">{endpoint}</span></p>
          <p>Cluster: <span className="font-mono text-white">{cluster}</span></p>
          <p>Health: <span className="font-mono text-white">{health}</span></p>
          <p>Status: <span className="font-mono text-white">{loading ? 'Checking' : 'Complete'}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}


