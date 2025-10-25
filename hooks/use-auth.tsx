"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react"

import { DEFAULT_USER_BALANCE, DEFAULT_USER_DONATED, DEFAULT_USER_ID, DEFAULT_USER_PROFILE } from "@/data/default-user"
import { userDataService } from "@/lib/user-data-service"
import { UserData } from "@/lib/types"

interface AuthContextType {
  user: string | null
  userData: UserData | null
  isAuthenticated: boolean
  balance: number
  donated: number
  login: (username: string) => void
  loginWithNFID: (principal: string) => void
  logout: () => void
  updateBalance: (newBalance: number) => void
  addToBalance: (amount: number) => void
  addToDonated: (amount: number) => void
  isArtist: () => boolean
  isNFIDUser: () => boolean
  isFirstTimeNFIDUser: (principal: string) => boolean
  createNFIDUser: (principal: string, username: string, password: string, profilePhoto?: File) => boolean
  updateUserProfile: (updates: Partial<UserData>) => void
  updateBackendProfile: (
    username?: string,
    handle?: string,
    profileImage?: string,
    coverImage?: string,
    genre?: string,
    bio?: string,
  ) => Promise<boolean>
  updateBackendUsername: (username: string) => Promise<boolean>
  updateBackendHandle: (handle: string) => Promise<boolean>
  updateBackendProfileImage: (profileImage: string) => Promise<boolean>
  updateBackendCoverImage: (coverImage: string) => Promise<boolean>
}

const noop = () => {}
const falseReturn = () => false

const AuthContext = createContext<AuthContextType>({
  user: DEFAULT_USER_ID,
  userData: DEFAULT_USER_PROFILE,
  isAuthenticated: true,
  balance: DEFAULT_USER_BALANCE,
  donated: DEFAULT_USER_DONATED,
  login: noop,
  loginWithNFID: noop,
  logout: noop,
  updateBalance: noop,
  addToBalance: noop,
  addToDonated: noop,
  isArtist: () => false,
  isNFIDUser: () => false,
  isFirstTimeNFIDUser: () => false,
  createNFIDUser: falseReturn,
  updateUserProfile: noop,
  updateBackendProfile: async () => true,
  updateBackendUsername: async () => true,
  updateBackendHandle: async () => true,
  updateBackendProfileImage: async () => true,
  updateBackendCoverImage: async () => true,
})

function ensureDefaultUser(): UserData {
  const existing = userDataService.getUser(DEFAULT_USER_ID)
  if (existing) {
    return existing
  }

  const created = userDataService.createUser({
    username: DEFAULT_USER_PROFILE.username,
    handle: DEFAULT_USER_PROFILE.handle,
    type: DEFAULT_USER_PROFILE.type,
    profilePhoto: DEFAULT_USER_PROFILE.profilePhoto,
    coverPhoto: DEFAULT_USER_PROFILE.coverPhoto,
    bio: DEFAULT_USER_PROFILE.bio,
    genre: DEFAULT_USER_PROFILE.genre,
    location: DEFAULT_USER_PROFILE.location,
    website: DEFAULT_USER_PROFILE.website,
    socialLinks: DEFAULT_USER_PROFILE.socialLinks,
    isIIUser: DEFAULT_USER_PROFILE.isIIUser,
    principal: DEFAULT_USER_ID,
  })

  const updated = userDataService.updateUser(created.id, {
    followers: DEFAULT_USER_PROFILE.followers,
    following: DEFAULT_USER_PROFILE.following,
  })

  return updated ?? created
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string>(DEFAULT_USER_ID)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [balance, setBalance] = useState<number>(DEFAULT_USER_BALANCE)
  const [donated, setDonated] = useState<number>(DEFAULT_USER_DONATED)

  useEffect(() => {
    const defaultUser = ensureDefaultUser()
    setUser(DEFAULT_USER_ID)
    setUserData(defaultUser)
  }, [])

  const resetToDefaultUser = useCallback(() => {
    const defaultUser = ensureDefaultUser()
    setUser(DEFAULT_USER_ID)
    setUserData(defaultUser)
    setBalance(DEFAULT_USER_BALANCE)
    setDonated(DEFAULT_USER_DONATED)
  }, [])

  const login = useCallback(() => {
    resetToDefaultUser()
  }, [resetToDefaultUser])

  const loginWithNFID = useCallback(() => {
    resetToDefaultUser()
  }, [resetToDefaultUser])

  const logout = useCallback(() => {
    resetToDefaultUser()
  }, [resetToDefaultUser])

  const updateUserProfile = useCallback(
    (updates: Partial<UserData>) => {
      if (!user) return
      const updated = userDataService.updateUser(user, updates)
      if (updated) {
        setUserData(updated)
      }
    },
    [user],
  )

  const updateBalance = useCallback((newBalance: number) => {
    setBalance(newBalance)
  }, [])

  const addToBalance = useCallback((amount: number) => {
    setBalance((prev) => prev + amount)
  }, [])

  const addToDonated = useCallback((amount: number) => {
    setDonated((prev) => prev + amount)
  }, [])

  const isArtist = useCallback(() => {
    return userData?.type === "artist"
  }, [userData])

  const authValue = useMemo<AuthContextType>(() => ({
    user,
    userData,
    isAuthenticated: true,
    balance,
    donated,
    login,
    loginWithNFID,
    logout,
    updateBalance,
    addToBalance,
    addToDonated,
    isArtist,
    isNFIDUser: () => false,
    isFirstTimeNFIDUser: () => false,
    createNFIDUser: () => false,
    updateUserProfile,
    updateBackendProfile: async (username, handle, profileImage, coverImage, genre, bio) => {
      updateUserProfile({
        username: username ?? userData?.username,
        handle: handle ?? userData?.handle,
        profilePhoto: profileImage ?? userData?.profilePhoto,
        coverPhoto: coverImage ?? userData?.coverPhoto,
        genre: genre ?? userData?.genre,
        bio: bio ?? userData?.bio,
      })
      return true
    },
    updateBackendUsername: async (username) => {
      updateUserProfile({ username })
      return true
    },
    updateBackendHandle: async (handle) => {
      updateUserProfile({ handle })
      return true
    },
    updateBackendProfileImage: async (profileImage) => {
      updateUserProfile({ profilePhoto: profileImage })
      return true
    },
    updateBackendCoverImage: async (coverImage) => {
      updateUserProfile({ coverPhoto: coverImage })
      return true
    },
  }), [
    addToBalance,
    addToDonated,
    balance,
    donated,
    isArtist,
    login,
    loginWithNFID,
    logout,
    updateBalance,
    updateUserProfile,
    user,
    userData,
  ])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
