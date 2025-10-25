/**
 * Componente para mostrar el estado de los endpoints de Solana
 * 
 * Funcionalidades:
 * - Muestra estado de todos los endpoints
 * - Permite cambiar endpoint manualmente
 * - Muestra latencia y estado
 * - Debug de conexión
 */

import { useState } from 'react';
import { useSolanaEndpoints } from '@/hooks/use-solana-endpoints';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Clock,
  Wifi,
  WifiOff
} from 'lucide-react';

interface SolanaEndpointStatusProps {
  className?: string;
}

export function SolanaEndpointStatus({ className }: SolanaEndpointStatusProps) {
  const {
    currentEndpoint,
    endpoints,
    endpointStatuses,
    testing,
    findBestEndpoint,
    testEndpoint
  } = useSolanaEndpoints();
  
  const [testingEndpoint, setTestingEndpoint] = useState<string | null>(null);

  const handleTestEndpoint = async (endpoint: string) => {
    setTestingEndpoint(endpoint);
    try {
      await testEndpoint(endpoint);
    } finally {
      setTestingEndpoint(null);
    }
  };

  const handleRefreshAll = async () => {
    await findBestEndpoint();
  };

  const getEndpointStatus = (url: string) => {
    return endpointStatuses.find(status => status.url === url);
  };

  const getStatusIcon = (status: any) => {
    if (!status) return <Clock className="h-4 w-4 text-gray-400" />;
    if (status.working) return <CheckCircle className="h-4 w-4 text-green-400" />;
    return <XCircle className="h-4 w-4 text-red-400" />;
  };

  const getStatusColor = (status: any) => {
    if (!status) return 'bg-gray-500/20 text-gray-200';
    if (status.working) return 'bg-green-500/20 text-green-200';
    return 'bg-red-500/20 text-red-200';
  };

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Server className="h-5 w-5 text-blue-400" />
          Solana Endpoints
        </CardTitle>
        <CardDescription className="text-gray-400">
          RPC endpoint status and selection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Endpoint */}
        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wifi className="h-5 w-5 text-blue-300" />
              <div>
                <p className="text-sm text-blue-200">Current Endpoint</p>
                <p className="text-xs text-blue-300 font-mono">
                  {currentEndpoint}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
              Active
            </Badge>
          </div>
        </div>

        {/* Endpoint List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-white">Available Endpoints</h4>
            <Button
              size="sm"
              onClick={handleRefreshAll}
              disabled={testing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${testing ? 'animate-spin' : ''}`} />
              {testing ? 'Testing...' : 'Refresh All'}
            </Button>
          </div>
          
          {endpoints.map((endpoint) => {
            const status = getEndpointStatus(endpoint);
            const isCurrent = endpoint === currentEndpoint;
            const isTesting = testingEndpoint === endpoint;
            
            return (
              <div
                key={endpoint}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  isCurrent 
                    ? 'bg-blue-900/20 border-blue-500/30' 
                    : 'bg-gray-700/50 border-gray-600/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(status)}
                  <div>
                    <p className="text-sm text-white font-mono">
                      {endpoint.split('//')[1]?.split('/')[0] || endpoint}
                    </p>
                    {status && (
                      <p className="text-xs text-gray-400">
                        {status.working ? `${status.latency}ms` : 'Failed'}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={getStatusColor(status)}>
                    {status?.working ? 'Working' : status ? 'Failed' : 'Unknown'}
                  </Badge>
                  
                  {!isCurrent && (
                    <Button
                      size="sm"
                      onClick={() => handleTestEndpoint(endpoint)}
                      disabled={isTesting}
                      variant="outline"
                      className="border-gray-500 text-gray-300 hover:bg-gray-700"
                    >
                      {isTesting ? (
                        <RefreshCw className="h-3 w-3 animate-spin" />
                      ) : (
                        <RefreshCw className="h-3 w-3" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="pt-3 border-t border-gray-700">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-400">Total</p>
              <p className="text-white font-semibold">{endpoints.length}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">Working</p>
              <p className="text-green-400 font-semibold">
                {endpointStatuses.filter(s => s.working).length}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">Failed</p>
              <p className="text-red-400 font-semibold">
                {endpointStatuses.filter(s => !s.working).length}
              </p>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-500 space-y-1">
            <div>Testing: {testing ? 'Yes' : 'No'}</div>
            <div>Statuses: {endpointStatuses.length}</div>
            <div>Current: {currentEndpoint.split('//')[1]?.split('/')[0] || 'Unknown'}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
