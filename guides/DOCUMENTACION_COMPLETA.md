# DROPSLAND - Documentación Completa en Español

## 🎵 Descripción General

DROPSLAND es una plataforma de música descentralizada construida sobre Solana que permite a los artistas crear, vender y monetizar su música como NFTs, mientras que los fans pueden apoyar a sus artistas favoritos y poseer música como tokens únicos.

## 🏗️ Arquitectura del Sistema

### Frontend (Next.js + React)
- **Framework**: Next.js 14.2.30 con TypeScript
- **UI**: Tailwind CSS + shadcn/ui components
- **Estado**: React hooks personalizados
- **Autenticación**: Sistema híbrido (ICP + Solana)

### Backend (Solana Blockchain)
- **Blockchain**: Solana (Testnet para desarrollo)
- **Programa**: DROPSLAND Solana Program
- **Tokens**: $DROPS (transferible) + Profile NFTs (soulbound)
- **RPC**: https://api.testnet.solana.com

## 🔧 Funcionalidades Principales

### 1. **Sistema de Autenticación Híbrido**
```typescript
// useIntegratedAuth.tsx - Hook principal
const {
  // Autenticación ICP
  user, userData, isAuthenticated, login, logout,
  
  // Conexión Solana
  solanaConnected, solanaPublicKey, solanaBalance,
  
  // NFTs
  hasProfileNFT, userMusicNFTs,
  
  // Funciones de Solana
  mintProfileNFT, mintMusicNFT, buyMusicNFT,
  sendTokens, buyTokens, buyArtistToken, mintTicket
} = useIntegratedAuth()
```

### 2. **Profile NFTs (Soulbound)**
- **Propósito**: Identidad única en la plataforma
- **Características**: No transferible, vinculado a wallet
- **Datos**: Username, tipo de perfil (fan/artist), fecha de creación
- **Componente**: `ProfileNFTMinter`

```typescript
// Ejemplo de uso
const profileData = {
  username: "usuario123",
  profileType: "artist", // o "fan"
  principal: "optional_icp_principal",
  createdAt: new Date().toISOString()
}
const result = await mintProfileNFT(profileData)
```

### 3. **Music NFTs**
- **Propósito**: Música como activos digitales únicos
- **Características**: Transferible, con metadata de música
- **Datos**: Título, artista, descripción, género, duración, precio
- **Componente**: `MusicNFTMinter`

```typescript
// Ejemplo de uso
const musicData = {
  title: "Mi Canción",
  artist: "Artista123",
  description: "Descripción de la canción",
  genre: "Electronic",
  duration: 180, // segundos
  price: 0.1 // SOL
}
const result = await mintMusicNFT(musicData)
```

### 4. **Sistema de Tokens $DROPS**
- **Propósito**: Moneda interna de la plataforma
- **Características**: Transferible entre usuarios
- **Funciones**: Comprar, enviar, recibir tokens
- **Componentes**: `BuyView`, `SendView`, `ReceiveView`

### 5. **Artist Tokens**
- **Propósito**: Tokens personalizados de cada artista
- **Características**: Compra de tokens específicos del artista
- **Funcionalidad**: Apoyo directo a artistas
- **Componente**: `ArtistProfile`

## 🎨 Componentes Principales

### **1. MainApp (components/main-app.tsx)**
- **Función**: Navegación principal de la aplicación
- **Características**: 
  - Tab bar con navegación
  - Header con estado de Solana
  - Gestión de vistas (Home, Search, Wallet, Activity, Profile)

### **2. WalletView (components/wallet-view.tsx)**
- **Función**: Gestión de wallet y balance
- **Características**:
  - Visualización de balance $DROPS
  - Estado de conexión Solana
  - Botones de acción (Buy, Send, Receive)
  - QR code para recibir tokens

### **3. ProfileView (components/profile-view.tsx)**
- **Función**: Perfil del usuario
- **Características**:
  - Información del usuario
  - NFTs del usuario
  - Gestión de perfil
  - Integración con Solana

### **4. ArtistDashboard (components/artist-dashboard.tsx)**
- **Función**: Panel de control para artistas
- **Características**:
  - Estadísticas del artista
  - Gestión de música
  - Análisis de seguidores
  - Herramientas de monetización

## 🔗 Integración con Solana

### **Conexión a Solana**
```typescript
// contexts/solana-wallet-context.tsx
export function SolanaWalletProvider({ children }) {
  const endpoint = 'https://api.testnet.solana.com'
  const wallets = [PhantomWalletAdapter, SolflareWalletAdapter]
  
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
```

### **Funciones de Solana**
```typescript
// lib/solana-nft-client.ts
export async function mintProfileNFT(
  connection: Connection,
  publicKey: PublicKey,
  signTransaction: Signer,
  profileData: ProfileNFTData
): Promise<string> {
  // Implementación de minting de Profile NFT
}

export async function mintMusicNFT(
  connection: Connection,
  publicKey: PublicKey,
  signTransaction: Signer,
  musicData: MusicNFTData
): Promise<string> {
  // Implementación de minting de Music NFT
}
```

## 🎯 Botones y Funcionalidades

### **Botones de Minting**
1. **Mint Profile NFT** → `mintProfileNFT()`
2. **Mint Music NFT** → `mintMusicNFT()`
3. **Mint Ticket NFT** → `mintTicket()`

### **Botones de Transacciones**
1. **Buy $DROPS** → `buyTokens()`
2. **Send $DROPS** → `sendTokens()`
3. **Buy Artist Token** → `buyArtistToken()`

### **Botones de Navegación**
1. **Wallet** → Navegación a wallet
2. **Profile** → Navegación a perfil
3. **Artist Dashboard** → Panel de artista

## 🛠️ Configuración del Proyecto

### **Dependencias Principales**
```json
{
  "@solana/wallet-adapter-react": "^0.15.35",
  "@solana/wallet-adapter-react-ui": "^0.9.35",
  "@solana/web3.js": "^1.87.6",
  "@coral-xyz/anchor": "^0.28.0",
  "@solana/spl-token": "^0.3.9",
  "next": "14.2.30",
  "react": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### **Variables de Entorno**
```env
# Solana Configuration
NEXT_PUBLIC_SOLANA_NETWORK=testnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.testnet.solana.com

# Program Configuration
NEXT_PUBLIC_DROPSLAND_PROGRAM_ID=DropSXpRA6reJFnBw8PcXvbtm4yNqyRNLsnCU1MMkHYt
```

## 🚀 Instalación y Ejecución

### **1. Instalación de Dependencias**
```bash
npm install
```

### **2. Configuración de Variables de Entorno**
```bash
cp .env.example .env.local
# Editar .env.local con las configuraciones necesarias
```

### **3. Ejecución en Desarrollo**
```bash
npm run dev
```

### **4. Construcción para Producción**
```bash
npm run build
npm start
```

## 🔍 Debugging y Monitoreo

### **Componentes de Debug**
- `SolanaConnectionDebug` - Estado de conexión
- `SolanaRealStatus` - Balance y estado real
- `ErrorDebug` - Detección de errores
- `JavaScriptErrorCatcher` - Captura de errores JS

### **Logs Importantes**
```typescript
console.log('🔗 Solana endpoint:', endpoint)
console.log('💰 Solana balance:', balance)
console.log('🎨 Minting Profile NFT:', profileData)
console.log('🎵 Minting Music NFT:', musicData)
```

## 📱 Interfaz de Usuario

### **Navegación Principal**
- **Home**: Feed de música y artistas
- **Search**: Búsqueda de música y artistas
- **Wallet**: Gestión de tokens y balance
- **Activity**: Historial de transacciones
- **Profile**: Perfil del usuario

### **Estados de Conexión**
- **Desconectado**: Botón de conexión de wallet
- **Conectado**: Indicador de estado + balance
- **NFT Activo**: Indicador de Profile NFT

## 🔒 Seguridad

### **Validaciones**
- Validación de wallet conectado
- Validación de balance suficiente
- Validación de datos de entrada
- Manejo de errores de transacción

### **Tipos de Tokens**
- **$DROPS**: Transferible, moneda interna
- **Profile NFT**: Soulbound, no transferible
- **Music NFT**: Transferible, activo digital
- **Artist Token**: Transferible, apoyo a artista

## 🎵 Flujo de Usuario

### **1. Registro de Usuario**
1. Conectar wallet Solana
2. Crear Profile NFT (soulbound)
3. Configurar perfil de usuario

### **2. Artista**
1. Mintear Profile NFT como artista
2. Subir música y crear Music NFTs
3. Gestionar ventas y seguidores

### **3. Fan**
1. Mintear Profile NFT como fan
2. Comprar $DROPS tokens
3. Comprar música y apoyar artistas

## 🚨 Solución de Problemas

### **Errores Comunes**
1. **"Wallet not connected"** → Conectar wallet Solana
2. **"Insufficient balance"** → Comprar más $DROPS
3. **"Transaction failed"** → Verificar conexión de red
4. **"Invalid hook call"** → Verificar uso de hooks

### **Comandos de Debug**
```bash
# Verificar puerto
lsof -ti:3003

# Limpiar procesos
pkill -f "npm run dev"

# Reiniciar servidor
npm run dev
```

## 📊 Métricas y Analytics

### **Datos del Usuario**
- Balance de $DROPS
- NFTs poseídos
- Historial de transacciones
- Estadísticas de artista

### **Datos de la Plataforma**
- Total de usuarios
- NFTs minteados
- Volumen de transacciones
- Artistas activos

## 🧪 Testing del Backend

### **1. Testing de Solana Program**
```bash
# Navegar al directorio del programa Solana
cd dropsland-solana

# Ejecutar tests del programa
npm test

# Tests específicos
npm run test:profile-nft
npm run test:music-nft
npm run test:token-operations
```

### **2. Testing de Funciones de Solana**
```typescript
// tests/solana-functions.test.ts
describe('Solana Functions', () => {
  test('mintProfileNFT should work correctly', async () => {
    const profileData = {
      username: 'testuser',
      profileType: 'artist',
      createdAt: new Date().toISOString()
    }
    
    const result = await mintProfileNFT(profileData)
    expect(result.success).toBe(true)
    expect(result.signature).toBeDefined()
  })

  test('mintMusicNFT should work correctly', async () => {
    const musicData = {
      title: 'Test Song',
      artist: 'Test Artist',
      description: 'Test Description',
      genre: 'Electronic',
      duration: 180,
      price: 0.1
    }
    
    const result = await mintMusicNFT(musicData)
    expect(result.success).toBe(true)
    expect(result.nftId).toBeDefined()
  })
})
```

### **3. Testing de API Routes**
```typescript
// tests/api-routes.test.ts
describe('API Routes', () => {
  test('POST /api/mint-profile-nft', async () => {
    const response = await fetch('/api/mint-profile-nft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'testuser',
        profileType: 'artist'
      })
    })
    
    const data = await response.json()
    expect(data.success).toBe(true)
  })
})
```

### **4. Testing de Integración**
```bash
# Testing completo del sistema
npm run test:integration

# Testing de conexión Solana
npm run test:solana-connection

# Testing de transacciones
npm run test:transactions
```

### **5. Testing de Performance**
```typescript
// tests/performance.test.ts
describe('Performance Tests', () => {
  test('mintProfileNFT performance', async () => {
    const start = Date.now()
    await mintProfileNFT(testData)
    const duration = Date.now() - start
    
    expect(duration).toBeLessThan(5000) // Menos de 5 segundos
  })
})
```

### **6. Testing de Errores**
```typescript
// tests/error-handling.test.ts
describe('Error Handling', () => {
  test('should handle insufficient balance', async () => {
    const result = await buyTokens(1000, 1.0) // Balance insuficiente
    expect(result.success).toBe(false)
    expect(result.error).toContain('Insufficient balance')
  })
  
  test('should handle network errors', async () => {
    // Simular error de red
    mockConnection.getBalance.mockRejectedValue(new Error('Network error'))
    
    const result = await getSolanaBalance()
    expect(result.success).toBe(false)
  })
})
```

### **7. Comandos de Testing**
```bash
# Testing completo
npm run test:all

# Testing específico por componente
npm run test:profile-nft
npm run test:music-nft
npm run test:wallet
npm run test:transactions

# Testing con coverage
npm run test:coverage

# Testing de integración
npm run test:integration

# Testing de performance
npm run test:performance
```

### **8. Configuración de Testing**
```json
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: [
    'lib/**/*.ts',
    'hooks/**/*.ts',
    'components/**/*.tsx'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}
```

### **9. Testing de Solana Program (Rust)**
```rust
// tests/solana_program_tests.rs
#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_mint_profile_nft() {
        let mut program_test = ProgramTest::new(
            "dropsland_solana",
            dropsland_solana::ID,
            processor!(dropsland_solana::entry)
        );
        
        // Test logic here
        assert!(true);
    }
}
```

### **10. Testing de Smart Contracts**
```bash
# Testing del programa Anchor
anchor test

# Testing específico
anchor test --skip-local-validator

# Testing con logs
anchor test --verbose
```

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contactar al equipo de desarrollo.

**Estado del Sistema**: ✅ **COMPLETAMENTE FUNCIONAL**
**Última Actualización**: Diciembre 2024
**Versión**: 1.0.0
