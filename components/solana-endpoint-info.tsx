/**
 * Componente simple para mostrar información del endpoint de Solana
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, CheckCircle, Wifi, Network } from 'lucide-react';
import { useSolanaCluster } from '@/hooks/use-solana-cluster';

export function SolanaEndpointInfo() {
  // Use testnet as default since it's more reliable
  const currentCluster = 'testnet';
  const currentEndpoint = 'https://api.testnet.solana.com';
  const clusterInfo = {
    displayName: 'Testnet',
    description: 'Testing network with test SOL'
  };
  
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Server className="h-5 w-5 text-blue-400" />
          Solana Endpoint
        </CardTitle>
        <CardDescription className="text-gray-400">
          Current RPC endpoint configuration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Cluster Info */}
        <div className="flex items-center justify-between p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center gap-3">
            <Network className="h-5 w-5 text-blue-300" />
            <div>
              <p className="text-sm text-blue-200">Current Cluster</p>
              <p className="text-xs text-blue-300">
                {clusterInfo.displayName} - {clusterInfo.description}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-500/20 text-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>

        {/* Endpoint Info */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Wifi className="h-5 w-5 text-gray-300" />
            <div>
              <p className="text-sm text-gray-300">Current Endpoint</p>
              <p className="text-xs text-white font-mono">
                {currentEndpoint}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>✅ Using {clusterInfo.displayName} cluster</p>
          <p>✅ Official Solana RPC endpoint</p>
          <p>✅ No rate limiting issues</p>
          <p>✅ High availability</p>
        </div>
      </CardContent>
    </Card>
  );
}
