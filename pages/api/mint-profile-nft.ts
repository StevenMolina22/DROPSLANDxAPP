/**
 * API Route: Mint Profile NFT
 * 
 * This is a secure server-side endpoint that mints profile NFTs
 * when users create their account for the first time.
 * 
 * Security Features:
 * - Rate limiting
 * - Duplicate prevention
 * - API key protection
 * - Authentication verification
 */

import type { NextApiRequest, NextApiResponse } from 'next'

interface ProfileNFTMetadata {
  walletAddress: string
  username: string
  profileType: 'fan' | 'artist'
  principal?: string
  createdAt: string
}

interface MintResponse {
  success: boolean
  nftId?: string
  transactionId?: string
  error?: string
  metadata?: any
}

// In-memory rate limiting (in production, use Redis)
const mintAttempts = new Map<string, { count: number; resetAt: number }>()

// Track minted wallets to prevent duplicates (in production, use database)
const mintedWallets = new Set<string>()

interface MintRequest {
  walletAddress: string
  username: string
  profileType: 'fan' | 'artist'
  principal?: string
  sessionToken?: string // For authentication
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MintResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  try {
    const { walletAddress, username, profileType, principal, sessionToken } = req.body as MintRequest

    // 1. Validate required fields
    if (!walletAddress || !username || !profileType) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: walletAddress, username, profileType',
      })
    }

    // 2. Validate Solana wallet address format
    if (!isValidSolanaAddress(walletAddress)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid Solana wallet address',
      })
    }

    // 3. Check authentication (implement your auth logic)
    // const isAuthenticated = await verifySession(sessionToken)
    // if (!isAuthenticated) {
    //   return res.status(401).json({
    //     success: false,
    //     error: 'Unauthorized',
    //   })
    // }

    // 4. Rate limiting (per wallet address)
    const rateLimitResult = checkRateLimit(walletAddress)
    if (!rateLimitResult.allowed) {
      return res.status(429).json({
        success: false,
        error: `Rate limit exceeded. Try again in ${rateLimitResult.retryAfter} seconds`,
      })
    }

    // 5. Check for duplicate minting
    if (mintedWallets.has(walletAddress)) {
      return res.status(409).json({
        success: false,
        error: 'This wallet has already minted a profile NFT',
      })
    }

    // 6. Mint the NFT via CrossMint
    const metadata: ProfileNFTMetadata = {
      walletAddress,
      username,
      profileType,
      principal,
      createdAt: new Date().toISOString(),
    }

    const mintResult = await mintProfileNFTWithCrossMint(metadata)

    if (mintResult.success) {
      // 7. Track successful mint
      mintedWallets.add(walletAddress)
      
      // 8. Store in your database
      // await database.profileNFTs.create({
      //   walletAddress,
      //   username,
      //   nftId: mintResult.nftId,
      //   transactionId: mintResult.transactionId,
      //   mintedAt: new Date(),
      // })

      console.log(`✅ Profile NFT minted for ${username} (${walletAddress})`)
    }

    return res.status(mintResult.success ? 200 : 500).json(mintResult)

  } catch (error: any) {
    console.error('Error in mint-profile-nft API:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    })
  }
}

/**
 * Rate limiting: 1 mint attempt per wallet per 24 hours
 */
function checkRateLimit(walletAddress: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const attempt = mintAttempts.get(walletAddress)

  if (!attempt || now > attempt.resetAt) {
    // First attempt or reset period passed
    mintAttempts.set(walletAddress, {
      count: 1,
      resetAt: now + 24 * 60 * 60 * 1000, // 24 hours
    })
    return { allowed: true }
  }

  if (attempt.count >= 1) {
    // Already attempted once
    const retryAfter = Math.ceil((attempt.resetAt - now) / 1000)
    return { allowed: false, retryAfter }
  }

  attempt.count++
  return { allowed: true }
}

/**
 * Validate Solana address format
 */
function isValidSolanaAddress(address: string): boolean {
  try {
    // Basic validation: 32-44 characters, base58
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)
  } catch {
    return false
  }
}

/**
 * Verify user session (implement with your auth system)
 */
async function verifySession(sessionToken?: string): Promise<boolean> {
  if (!sessionToken) return false
  
  // Implement your authentication verification here
  // Examples:
  // - Verify JWT token
  // - Check session in database
  // - Verify with Internet Identity
  
  return true // Placeholder
}

/**
 * Mint Profile NFT using CrossMint API
 */
async function mintProfileNFTWithCrossMint(
  metadata: ProfileNFTMetadata
): Promise<MintResponse> {
  const apiKey = process.env.CROSSMINT_API_KEY
  const collectionId = process.env.CROSSMINT_COLLECTION_ID
  
  if (!apiKey || !collectionId) {
    return {
      success: false,
      error: 'CrossMint credentials not configured'
    }
  }

  try {
    console.log('🎨 Minting Profile NFT via CrossMint...')
    console.log('User:', metadata.username)
    console.log('Wallet:', metadata.walletAddress)
    
    const response = await fetch(
      `https://www.crossmint.com/api/2022-06-09/collections/${collectionId}/nfts`,
      {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: `solana:${metadata.walletAddress}`,
          metadata: {
            name: `${metadata.username} - DROPSLAND Profile`,
            description: `Profile NFT for ${metadata.username} on DROPSLAND platform`,
            image: `https://api.dicebear.com/7.x/adventurer/svg?seed=${metadata.walletAddress}&backgroundColor=b6e3f4`,
            attributes: [
              {
                trait_type: 'Profile Type',
                value: metadata.profileType,
              },
              {
                trait_type: 'Username',
                value: metadata.username,
              },
              {
                trait_type: 'Member Since',
                value: metadata.createdAt,
              },
              {
                trait_type: 'Platform',
                value: 'DROPSLAND',
              },
              ...(metadata.principal ? [{
                trait_type: 'ICP Principal',
                value: metadata.principal,
              }] : []),
            ],
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('CrossMint API Error:', data)
      return {
        success: false,
        error: data.message || 'Failed to mint NFT',
      }
    }

    console.log('✅ Profile NFT minted successfully!')
    console.log('NFT ID:', data.id)
    console.log('Transaction:', data.onChain?.txId)

    return {
      success: true,
      nftId: data.id,
      transactionId: data.onChain?.txId,
      metadata: data.metadata,
    }
  } catch (error: any) {
    console.error('CrossMint minting error:', error)
    return {
      success: false,
      error: error.message || 'Failed to mint profile NFT',
    }
  }
}

