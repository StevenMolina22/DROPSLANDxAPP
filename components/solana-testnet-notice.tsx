/**
 * Componente para mostrar que estamos usando testnet
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TestTube, CheckCircle, Info } from 'lucide-react';

export function SolanaTestnetNotice() {
  return (
    <Card className="bg-blue-900/20 border-blue-500/30">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TestTube className="h-5 w-5 text-blue-400" />
          Solana Testnet
        </CardTitle>
        <CardDescription className="text-blue-300">
          Using testnet for development and testing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-blue-800/20 rounded-lg border border-blue-500/30">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-blue-300" />
            <div>
              <p className="text-sm text-blue-200">Testnet Active</p>
              <p className="text-xs text-blue-300">
                Using testnet for safe development
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
        
        <div className="text-xs text-blue-400 space-y-1">
          <p>✅ Using Solana testnet cluster</p>
          <p>✅ Test SOL available for free</p>
          <p>✅ Safe for development and testing</p>
          <p>✅ No real money involved</p>
        </div>
      </CardContent>
    </Card>
  );
}




