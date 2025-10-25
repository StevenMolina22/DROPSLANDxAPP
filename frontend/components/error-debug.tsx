/**
 * Componente de debug para errores
 * 
 * Funcionalidades:
 * - Debug de errores del servidor
 * - Verificación de estado
 * - Información de errores
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Loader2,
  Server,
  Database,
  Network
} from 'lucide-react';

export function ErrorDebug() {
  const [errors, setErrors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  const checkServerStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/');
      if (response.ok) {
        setServerStatus('online');
        setErrors([]);
      } else {
        setServerStatus('offline');
        setErrors([{
          type: 'server',
          message: `Server returned ${response.status}`,
          timestamp: new Date().toISOString()
        }]);
      }
    } catch (error: any) {
      setServerStatus('offline');
      setErrors([{
        type: 'connection',
        message: error.message,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const checkConsoleErrors = () => {
    // Simular verificación de errores de consola
    const mockErrors = [
      {
        type: 'console',
        message: 'pino-pretty module not found',
        timestamp: new Date().toISOString()
      },
      {
        type: 'console',
        message: 'WalletConnect logger warning',
        timestamp: new Date().toISOString()
      }
    ];
    setErrors(prev => [...prev, ...mockErrors]);
  };

  useEffect(() => {
    checkServerStatus();
    checkConsoleErrors();
  }, []);

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          Error Debug
        </CardTitle>
        <CardDescription className="text-gray-400">
          Debug information for server errors
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Server Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Server className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Server Status</p>
              <p className="text-xs text-gray-400">
                {serverStatus === 'checking' ? 'Checking...' : 
                 serverStatus === 'online' ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={serverStatus === 'online' ? "bg-green-500/20 text-green-200" : 
                     serverStatus === 'offline' ? "bg-red-500/20 text-red-200" : 
                     "bg-yellow-500/20 text-yellow-200"}
          >
            {serverStatus === 'online' ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : serverStatus === 'offline' ? (
              <XCircle className="h-3 w-3 mr-1" />
            ) : (
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
            )}
            {serverStatus === 'online' ? 'Online' : 
             serverStatus === 'offline' ? 'Offline' : 'Checking'}
          </Badge>
        </div>

        {/* Errors List */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Detected Errors:</h4>
          {errors.length === 0 ? (
            <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30 text-green-200 text-sm">
              <CheckCircle className="h-4 w-4 inline mr-2" />
              No errors detected
            </div>
          ) : (
            errors.map((error, index) => (
              <div key={index} className="p-3 bg-red-900/20 rounded-lg border border-red-500/30 text-red-200 text-sm">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  <span className="font-medium">{error.type.toUpperCase()}</span>
                </div>
                <p className="mt-1">{error.message}</p>
                <p className="text-xs text-red-300 mt-1">{error.timestamp}</p>
              </div>
            ))
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={checkServerStatus}
            disabled={loading}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Check Server
          </Button>
          <Button
            onClick={checkConsoleErrors}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            <Database className="mr-2 h-4 w-4" />
            Check Console
          </Button>
        </div>

        {/* Debug Info */}
        <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
          <p>Server: <span className="font-mono text-white">http://localhost:3003</span></p>
          <p>Status: <span className="font-mono text-white">{serverStatus}</span></p>
          <p>Errors: <span className="font-mono text-white">{errors.length}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}


