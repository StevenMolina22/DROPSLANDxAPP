/**
 * Página de Prueba: Profile NFT con Programa Soulbound
 * 
 * Esta página prueba la integración directa con tu programa soulbound
 * sin necesidad de API routes (funciona con static export).
 * 
 * Acceso: http://localhost:3003/test-soulbound-nft
 */

import React, { useState, useEffect } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useSoulboundProfileNFT } from '@/hooks/use-soulbound-profile-nft'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Loader2, Gift, CheckCircle2, XCircle, AlertTriangle, ExternalLink } from 'lucide-react'

export default function TestSoulboundNFT() {
  const wallet = useWallet()
  const {
    isMinting,
    isChecking,
    mintResult,
    error: mintError,
    mintProfileNFT,
    checkHasProfileNFT,
    getProfileNFTMetadata,
    reset,
  } = useSoulboundProfileNFT()

  const [username, setUsername] = useState('')
  const [profileType, setProfileType] = useState<'fan' | 'artist'>('fan')
  const [hasNFT, setHasNFT] = useState<boolean | null>(null)
  const [metadata, setMetadata] = useState<any>(null)

  // Check si ya tiene NFT al conectar wallet
  useEffect(() => {
    if (wallet.connected) {
      checkExistingNFT()
    }
  }, [wallet.connected])

  const checkExistingNFT = async () => {
    const result = await checkHasProfileNFT()
    setHasNFT(result)
    
    if (result) {
      const meta = await getProfileNFTMetadata()
      setMetadata(meta)
    }
  }

  const handleMint = async () => {
    if (!username.trim()) {
      alert('Por favor ingresa un nombre de usuario')
      return
    }

    reset()
    
    const success = await mintProfileNFT({
      username,
      profileType,
      principal: 'test-principal-' + Date.now(),
    })

    if (success) {
      // Actualizar estado
      await checkExistingNFT()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Profile NFT Soulbound Test 🔐
          </h1>
          <p className="text-gray-400">
            Conexión directa con tu programa Solana
          </p>
          <Badge variant="outline" className="mt-2">
            Program: DropSXp...kHYt
          </Badge>
        </div>

        {/* Wallet */}
        <Card className="mb-6 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              1. Conectar Wallet
              {wallet.connected && <CheckCircle2 className="h-5 w-5 text-green-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />
            {wallet.connected && wallet.publicKey && (
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Wallet Conectado:</p>
                <p className="text-xs font-mono text-green-400 break-all">
                  {wallet.publicKey.toBase58()}
                </p>
                
                {/* NFT Status */}
                {hasNFT !== null && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Estado del Profile NFT:</p>
                    <Badge variant={hasNFT ? 'default' : 'secondary'} className={hasNFT ? 'bg-green-600' : ''}>
                      {hasNFT ? '✅ Ya tienes Profile NFT' : '❌ No tienes Profile NFT'}
                    </Badge>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mint Form */}
        {wallet.connected && !hasNFT && (
          <Card className="mb-6 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>2. Mintear Profile NFT</CardTitle>
              <CardDescription>
                Crea tu NFT de perfil soulbound (no transferible)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username">Nombre de Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Ingresa tu username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isMinting}
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              <div>
                <Label>Tipo de Perfil</Label>
                <div className="flex gap-4 mt-2">
                  <Button
                    type="button"
                    variant={profileType === 'fan' ? 'default' : 'outline'}
                    onClick={() => setProfileType('fan')}
                    disabled={isMinting}
                    className="flex-1"
                  >
                    🎵 Fan
                  </Button>
                  <Button
                    type="button"
                    variant={profileType === 'artist' ? 'default' : 'outline'}
                    onClick={() => setProfileType('artist')}
                    disabled={isMinting}
                    className="flex-1"
                  >
                    🎤 Artista
                  </Button>
                </div>
              </div>

              <Alert className="bg-purple-950 border-purple-900">
                <Gift className="h-4 w-4 text-purple-400" />
                <AlertTitle className="text-purple-400">Soulbound NFT</AlertTitle>
                <AlertDescription className="text-purple-300 text-sm">
                  Este NFT será <strong>no transferible</strong> y quedará permanentemente ligado a tu wallet.
                  Representa tu identidad única en DROPSLAND.
                </AlertDescription>
              </Alert>

              <Button
                onClick={handleMint}
                disabled={!username || isMinting}
                className="w-full bg-purple-600 hover:bg-purple-700"
                size="lg"
              >
                {isMinting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Minteando NFT...
                  </>
                ) : (
                  <>
                    <Gift className="mr-2 h-4 w-4" />
                    Mintear Profile NFT Gratis
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Ya tiene NFT */}
        {wallet.connected && hasNFT && (
          <Card className="mb-6 bg-gradient-to-br from-green-950 to-gray-900 border-green-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                ¡Ya tienes tu Profile NFT!
              </CardTitle>
              <CardDescription className="text-green-300">
                Tu identidad soulbound está activa
              </CardDescription>
            </CardHeader>
            <CardContent>
              {metadata && (
                <div className="space-y-3">
                  <div className="p-3 bg-black/30 rounded-lg">
                    <p className="text-xs text-gray-400 mb-1">Mint Address:</p>
                    <p className="font-mono text-sm text-green-400 break-all flex items-center gap-2">
                      {metadata.mint}
                      <a 
                        href={`https://solscan.io/token/${metadata.mint}?cluster=devnet`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </p>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg">
                    <p className="text-xs text-gray-400 mb-1">Token Account:</p>
                    <p className="font-mono text-sm text-green-400 break-all">
                      {metadata.tokenAccount}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Error */}
        {mintError && (
          <Alert variant="destructive" className="mb-6">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{mintError}</AlertDescription>
          </Alert>
        )}

        {/* Success Result */}
        {mintResult && mintResult.success && (
          <Card className="mb-6 bg-gray-900 border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                ¡NFT Minteado Exitosamente!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mintResult.signature && (
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Transaction Signature:</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-xs text-green-400 break-all flex-1">
                      {mintResult.signature}
                    </p>
                    <a
                      href={`https://solscan.io/tx/${mintResult.signature}?cluster=devnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
              {mintResult.mintAddress && (
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Mint Address:</p>
                  <p className="font-mono text-xs text-blue-400 break-all">
                    {mintResult.mintAddress}
                  </p>
                </div>
              )}
              {mintResult.tokenAccount && (
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Token Account:</p>
                  <p className="font-mono text-xs text-purple-400 break-all">
                    {mintResult.tokenAccount}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Alert className="bg-blue-950 border-blue-900">
          <AlertTriangle className="h-4 w-4 text-blue-400" />
          <AlertTitle className="text-blue-400">Nota Importante</AlertTitle>
          <AlertDescription className="mt-2 space-y-2 text-sm text-blue-300">
            <p>
              Esta integración requiere que el <strong>mint de Profile NFTs ya esté creado</strong> en tu programa.
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Crea el mint usando tu programa (una sola vez)</li>
              <li>Configura el mint address en las variables de entorno</li>
              <li>Los usuarios pueden mintear sus Profile NFTs gratis</li>
            </ol>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

