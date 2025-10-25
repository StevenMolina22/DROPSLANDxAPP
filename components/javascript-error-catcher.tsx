/**
 * Componente para capturar errores de JavaScript
 * 
 * Funcionalidades:
 * - Captura errores de JavaScript
 * - Muestra errores en tiempo real
 * - Debug de errores del navegador
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
  Bug,
  Monitor
} from 'lucide-react';

interface JavaScriptError {
  message: string;
  source: string;
  lineno: number;
  colno: number;
  error: Error;
  timestamp: string;
}

export function JavaScriptErrorCatcher() {
  const [errors, setErrors] = useState<JavaScriptError[]>([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Capturar errores de JavaScript
    const handleError = (event: ErrorEvent) => {
      const error: JavaScriptError = {
        message: event.message,
        source: event.filename || 'unknown',
        lineno: event.lineno || 0,
        colno: event.colno || 0,
        error: event.error,
        timestamp: new Date().toISOString()
      };
      
      setErrors(prev => [...prev, error]);
      console.error('🚨 JavaScript Error Captured:', error);
    };

    // Capturar errores de promesas no manejadas
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error: JavaScriptError = {
        message: `Unhandled Promise Rejection: ${event.reason}`,
        source: 'Promise',
        lineno: 0,
        colno: 0,
        error: event.reason,
        timestamp: new Date().toISOString()
      };
      
      setErrors(prev => [...prev, error]);
      console.error('🚨 Promise Rejection Captured:', error);
    };

    // Iniciar captura de errores
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    setIsListening(true);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      setIsListening(false);
    };
  }, []);

  const clearErrors = () => {
    setErrors([]);
  };

  const simulateError = () => {
    // Simular un error para testing
    try {
      throw new Error('Simulated error for testing');
    } catch (error) {
      console.error('Simulated error:', error);
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Bug className="h-5 w-5 text-red-400" />
          JavaScript Error Catcher
        </CardTitle>
        <CardDescription className="text-gray-400">
          Captures and displays JavaScript errors in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Monitor className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Error Listener</p>
              <p className="text-xs text-gray-400">
                {isListening ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={isListening ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}
          >
            {isListening ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : (
              <XCircle className="h-3 w-3 mr-1" />
            )}
            {isListening ? "Listening" : "Stopped"}
          </Badge>
        </div>

        {/* Errors Count */}
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm text-gray-300">Errors Captured</p>
              <p className="text-lg font-semibold text-white">
                {errors.length}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-red-500/20 text-red-200">
            {errors.length} Errors
          </Badge>
        </div>

        {/* Errors List */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Captured Errors:</h4>
          {errors.length === 0 ? (
            <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30 text-green-200 text-sm">
              <CheckCircle className="h-4 w-4 inline mr-2" />
              No JavaScript errors detected
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {errors.map((error, index) => (
                <div key={index} className="p-3 bg-red-900/20 rounded-lg border border-red-500/30 text-red-200 text-sm">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    <span className="font-medium">Error #{index + 1}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs">{error.message}</p>
                  <p className="text-xs text-red-300 mt-1">
                    {error.source}:{error.lineno}:{error.colno}
                  </p>
                  <p className="text-xs text-red-300 mt-1">{error.timestamp}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            onClick={clearErrors}
            disabled={errors.length === 0}
            variant="outline"
            className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Clear Errors
          </Button>
          <Button
            onClick={simulateError}
            variant="outline"
            className="flex-1 border-red-500 text-red-300 hover:bg-red-900/20"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Simulate Error
          </Button>
        </div>

        {/* Debug Info */}
        <div className="p-3 bg-gray-700/50 rounded-lg text-xs text-gray-400 space-y-1">
          <p>Listener: <span className="font-mono text-white">{isListening ? 'Active' : 'Inactive'}</span></p>
          <p>Errors: <span className="font-mono text-white">{errors.length}</span></p>
          <p>Status: <span className="font-mono text-white">Monitoring</span></p>
        </div>
      </CardContent>
    </Card>
  );
}


