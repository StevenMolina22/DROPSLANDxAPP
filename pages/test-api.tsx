/**
 * Test Page: Profile NFT API Testing
 * 
 * Simple page to test the Profile NFT API endpoints
 * Access: http://localhost:3003/test-api
 */

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Loader2, CheckCircle2, XCircle, ExternalLink } from 'lucide-react'

export default function TestAPI() {
  const [walletAddress, setWalletAddress] = useState('9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM')
  const [username, setUsername] = useState('testuser')
  const [profileType, setProfileType] = useState<'fan' | 'artist'>('fan')
  const [isMinting, setIsMinting] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testMintAPI = async () => {
    setIsMinting(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/mint-profile-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress,
          username,
          profileType,
          principal: 'test-principal-' + Date.now(),
        }),
      })

      const data = await response.json()
      setResult({ type: 'mint', ...data })
      
      if (!data.success) {
        setError(data.error)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsMinting(false)
    }
  }

  const testCheckAPI = async () => {
    setIsChecking(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch(`/api/check-profile-nft?wallet=${walletAddress}`)
      const data = await response.json()
      setResult({ type: 'check', ...data })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Profile NFT API Test 🧪
          </h1>
          <p className="text-gray-400">
            Test the Profile NFT minting and checking APIs
          </p>
        </div>

        {/* Test Form */}
        <Card className="mb-6 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>API Test Configuration</CardTitle>
            <CardDescription>
              Configure test parameters and test the API endpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="wallet">Wallet Address</Label>
              <Input
                id="wallet"
                type="text"
                placeholder="Enter Solana wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>

            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>

            <div>
              <Label>Profile Type</Label>
              <div className="flex gap-4 mt-2">
                <Button
                  type="button"
                  variant={profileType === 'fan' ? 'default' : 'outline'}
                  onClick={() => setProfileType('fan')}
                  className="flex-1"
                >
                  🎵 Fan
                </Button>
                <Button
                  type="button"
                  variant={profileType === 'artist' ? 'default' : 'outline'}
                  onClick={() => setProfileType('artist')}
                  className="flex-1"
                >
                  🎤 Artist
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={testMintAPI}
                disabled={!walletAddress || !username || isMinting}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                {isMinting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testing Mint...
                  </>
                ) : (
                  'Test Mint API'
                )}
              </Button>

              <Button
                onClick={testCheckAPI}
                disabled={!walletAddress || isChecking}
                variant="outline"
                className="flex-1"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Test Check API'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <XCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Results */}
        {result && (
          <Card className="mb-6 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {result.type === 'mint' ? 'Mint API Result' : 'Check API Result'}
                {result.success || result.hasNFT ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Status:</span>
                  <Badge
                    variant={result.success || result.hasNFT ? 'default' : 'destructive'}
                    className={result.success || result.hasNFT ? 'bg-green-600' : ''}
                  >
                    {result.success ? 'Success' : result.hasNFT ? 'Has NFT' : 'Failed/No NFT'}
                  </Badge>
                </div>

                {/* NFT ID */}
                {result.nftId && (
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">NFT ID:</p>
                    <p className="font-mono text-sm text-green-400 break-all">
                      {result.nftId}
                    </p>
                  </div>
                )}

                {/* Transaction ID */}
                {result.transactionId && (
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Transaction ID:</p>
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm text-blue-400 break-all flex-1">
                        {result.transactionId}
                      </p>
                      <a
                        href={`https://solscan.io/tx/${result.transactionId}?cluster=devnet`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Check Result */}
                {result.type === 'check' && (
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Has Profile NFT:</p>
                    <p className="font-bold text-lg">
                      {result.hasNFT ? '✅ Yes' : '❌ No'}
                    </p>
                  </div>
                )}

                {/* Raw Response */}
                <details className="mt-4">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                    View Raw Response
                  </summary>
                  <pre className="mt-2 p-3 bg-black rounded-lg text-xs overflow-auto">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Environment Info */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Environment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="font-mono">CROSSMINT_API_KEY</span>
                <Badge variant={process.env.CROSSMINT_API_KEY ? 'default' : 'destructive'}>
                  {process.env.CROSSMINT_API_KEY ? 'Set' : 'Not Set'}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="font-mono">CROSSMINT_COLLECTION_ID</span>
                <Badge variant={process.env.CROSSMINT_COLLECTION_ID ? 'default' : 'destructive'}>
                  {process.env.CROSSMINT_COLLECTION_ID ? 'Set' : 'Not Set'}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="font-mono">NEXT_PUBLIC_SOLANA_NETWORK</span>
                <Badge variant="outline">
                  {process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'Not Set'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

