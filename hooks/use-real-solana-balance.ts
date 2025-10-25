/**
 * Hook para obtener el balance real de SOL
 * 
 * Funcionalidades:
 * - Obtiene balance real de SOL desde la blockchain
 * - Actualiza automáticamente
 * - Maneja errores de conexión
 */

import { useState, useEffect, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function useRealSolanaBalance() {
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!connected || !publicKey) {
      setBalance(0);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    } catch (err: any) {
      console.error('Error fetching SOL balance:', err);
      setError(err.message || 'Failed to fetch balance');
    } finally {
      setLoading(false);
    }
  }, [connection, publicKey, connected]);

  // Fetch balance when wallet connects
  useEffect(() => {
    if (connected && publicKey) {
      fetchBalance();
    } else {
      setBalance(0);
      setError(null);
    }
  }, [connected, publicKey, fetchBalance]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!connected) return;

    const interval = setInterval(fetchBalance, 30000);
    return () => clearInterval(interval);
  }, [connected, fetchBalance]);

  return {
    balance,
    loading,
    error,
    refresh: fetchBalance
  };
}




