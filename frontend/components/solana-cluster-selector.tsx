/**
 * Componente para seleccionar cluster de Solana
 * 
 * Funcionalidades:
 * - Selección de cluster (mainnet-beta, testnet, devnet)
 * - Información del cluster actual
 * - Testing de endpoints
 * - Indicadores visuales
 */

import { useState } from 'react';
import { useSolanaCluster } from '@/hooks/use-solana-cluster';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Loader2,
  Globe,
  TestTube,
  Code
} from 'lucide-react';

interface SolanaClusterSelectorProps {
  className?: string;
}

export function SolanaClusterSelector({ className }: SolanaClusterSelectorProps) {
  const {
    currentCluster,
    currentEndpoint,
    clusterConfig,
    switchCluster,
    getCurrentClusterInfo,
    getAvailableClusters,
    testCurrentClusterEndpoints
  } = useSolanaCluster();
  
  const [testing, setTesting] = useState(false);
  const [endpointResults, setEndpointResults] = useState<Array<{endpoint: string, working: boolean}>>([]);

  const currentClusterInfo = getCurrentClusterInfo();
  const availableClusters = getAvailableClusters();

  const handleTestEndpoints = async () => {
    setTesting(true);
    try {
      const results = await testCurrentClusterEndpoints();
      setEndpointResults(results);
    } finally {
      setTesting(false);
    }
  };

  const getClusterIcon = (cluster: string) => {
    switch (cluster) {
      case 'mainnet-beta':
        return <Globe className="h-4 w-4" />;
      case 'testnet':
        return <TestTube className="h-4 w-4" />;
      case 'devnet':
        return <Code className="h-4 w-4" />;
      default:
        return <Network className="h-4 w-4" />;
    }
  };

  const getClusterColor = (cluster: string) => {
    switch (cluster) {
      case 'mainnet-beta':
        return 'bg-green-500/20 text-green-200 border-green-500/30';
      case 'testnet':
        return 'bg-blue-500/20 text-blue-200 border-blue-500/30';
      case 'devnet':
        return 'bg-purple-500/20 text-purple-200 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-200 border-gray-500/30';
    }
  };

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Network className="h-5 w-5 text-blue-400" />
          Solana Cluster
        </CardTitle>
        <CardDescription className="text-gray-400">
          Select and manage Solana network clusters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Cluster Info */}
        <div className={`p-3 rounded-lg border ${getClusterColor(currentCluster)}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getClusterIcon(currentCluster)}
              <div>
                <p className="text-sm font-medium">{currentClusterInfo.displayName}</p>
                <p className="text-xs opacity-80">{currentClusterInfo.description}</p>
              </div>
            </div>
            <Badge variant="secondary" className={getClusterColor(currentCluster)}>
              Active
            </Badge>
          </div>
        </div>

        {/* Cluster Selection */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Available Clusters</h4>
          <div className="grid grid-cols-1 gap-2">
            {availableClusters.map((cluster) => (
              <Button
                key={cluster.name}
                onClick={() => switchCluster(cluster.name as any)}
                variant={currentCluster === cluster.name ? "default" : "outline"}
                className={`w-full justify-start ${
                  currentCluster === cluster.name 
                    ? getClusterColor(cluster.name)
                    : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  {getClusterIcon(cluster.name)}
                  <div className="text-left">
                    <p className="text-sm font-medium">{cluster.displayName}</p>
                    <p className="text-xs opacity-80">{cluster.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Current Endpoint */}
        <div className="p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-300">Current Endpoint</p>
              <p className="text-xs font-mono text-white break-all">
                {currentEndpoint}
              </p>
            </div>
            <Button
              size="sm"
              onClick={handleTestEndpoints}
              disabled={testing}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-700"
            >
              {testing ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <RefreshCw className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>

        {/* Endpoint Test Results */}
        {endpointResults.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-white">Endpoint Status</h4>
            {endpointResults.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-700/50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  {result.working ? (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-400" />
                  )}
                  <p className="text-xs font-mono text-white">
                    {result.endpoint.split('//')[1]?.split('/')[0] || result.endpoint}
                  </p>
                </div>
                <Badge 
                  variant="secondary" 
                  className={result.working ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}
                >
                  {result.working ? 'Working' : 'Failed'}
                </Badge>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <div className="pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-500 space-y-1">
            <p>Current: {currentClusterInfo.displayName}</p>
            <p>Endpoint: {currentEndpoint.split('//')[1]?.split('/')[0] || 'Unknown'}</p>
            <p>Testing: {testing ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}




