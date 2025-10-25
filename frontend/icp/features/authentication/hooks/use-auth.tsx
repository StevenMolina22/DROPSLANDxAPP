"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { DEFAULT_USER_BALANCE, DEFAULT_USER_DATA, DEFAULT_USER_DONATED, DEFAULT_USER_ID } from "@/data/mock-auth"
import { backendService } from "@/lib/backend-service"
import { userDataService } from "@/lib/user-data-service"
import type { UserData } from "@/lib/types"

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
    bio?: string
  ) => Promise<boolean>
  updateBackendUsername: (username: string) => Promise<boolean>
  updateBackendHandle: (handle: string) => Promise<boolean>
  updateBackendProfileImage: (profileImage: string) => Promise<boolean>
  updateBackendCoverImage: (coverImage: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType>({
  user: DEFAULT_USER_ID,
  userData: DEFAULT_USER_DATA,
  isAuthenticated: true,
  balance: DEFAULT_USER_BALANCE,
  donated: DEFAULT_USER_DONATED,
  login: () => {},
  loginWithNFID: () => {},
  logout: () => {},
  updateBalance: () => {},
  addToBalance: () => {},
  addToDonated: () => {},
  isArtist: () => false,
  isNFIDUser: () => false,
  isFirstTimeNFIDUser: () => false,
  createNFIDUser: () => false,
  updateUserProfile: () => {},
  updateBackendProfile: async () => false,
  updateBackendUsername: async () => false,
  updateBackendHandle: async () => false,
  updateBackendProfileImage: async () => false,
  updateBackendCoverImage: async () => false,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(DEFAULT_USER_ID)
  const [userData, setUserData] = useState<UserData | null>(DEFAULT_USER_DATA)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [balance, setBalance] = useState(DEFAULT_USER_BALANCE)
  const [donated, setDonated] = useState(DEFAULT_USER_DONATED)

  useEffect(() => {
    const serviceUser = userDataService.getUser(DEFAULT_USER_ID)
    if (serviceUser) {
      setUser(serviceUser.id)
      setUserData(serviceUser)
    } else {
      setUser(DEFAULT_USER_ID)
      setUserData(DEFAULT_USER_DATA)
    }
  }, [])

  const resolveUserData = useCallback((identifier: string): UserData => {
    const existingUser =
      userDataService.getUser(identifier) || userDataService.getUserByUsername(identifier)

    if (existingUser) {
      return existingUser
    }

    return userDataService.createUser({
      username: identifier,
      type: "fan",
      principal: identifier,
    })
  }, [])

  const login = useCallback(
    (username: string) => {
      const resolvedUser = resolveUserData(username)
      setUser(resolvedUser.id)
      setUserData(resolvedUser)
      setIsAuthenticated(true)
    },
    [resolveUserData]
  )

  const loginWithNFID = useCallback(
    (principal: string) => {
      login(principal)
    },
    [login]
  )

  const logout = useCallback(() => {
    setUser(DEFAULT_USER_ID)
    const fallbackUser = userDataService.getUser(DEFAULT_USER_ID) || DEFAULT_USER_DATA
    setUserData(fallbackUser)
    setIsAuthenticated(true)
  }, [])

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

  const isNFIDUser = useCallback(() => {
    return userData?.isIIUser === true
  }, [userData])

  const isFirstTimeNFIDUser = useCallback((principal: string) => {
    return !userDataService.getUser(principal)
  }, [])

  const createNFIDUser = useCallback(
    (principal: string, username: string, _password: string, _profilePhoto?: File) => {
      const newUser = userDataService.createUser({
        username: username || principal,
        type: "fan",
        principal: principal || undefined,
        isIIUser: true,
        profilePhoto: DEFAULT_USER_DATA.profilePhoto,
      })

      setUser(newUser.id)
      setUserData(newUser)
      setIsAuthenticated(true)
      return true
    },
    []
  )

  const updateUserProfile = useCallback(
    (updates: Partial<UserData>) => {
      if (!user) return
      const updatedUser = userDataService.updateUser(user, updates)
      if (updatedUser) {
        setUserData(updatedUser)
      }
    },
    [user]
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        isAuthenticated,
        balance,
        donated,
        login,
        loginWithNFID,
        logout,
        updateBalance,
        addToBalance,
        addToDonated,
        isArtist,
        isNFIDUser,
        isFirstTimeNFIDUser,
        createNFIDUser,
        updateUserProfile,
        updateBackendProfile: async (username, handle, profileImage, coverImage, genre, bio) => {
          if (!user) return false
          const result = await backendService.updateUserProfile(
            username,
            handle,
            profileImage,
            coverImage,
            genre,
            bio
          )

          if (result.success) {
            const updatedUserData = userDataService.updateUser(user, {
              username: username || userData?.username,
              handle: handle || userData?.handle,
              profilePhoto: profileImage || userData?.profilePhoto,
              coverPhoto: coverImage || userData?.coverPhoto,
              genre: genre || userData?.genre,
              bio: bio || userData?.bio,
            })

            if (updatedUserData) {
              setUserData(updatedUserData)
            }
          }

          return result.success
        },
        updateBackendUsername: async (username) => {
          if (!user) return false
          const result = await backendService.updateUsername(username)
          if (result.success) {
            setUserData((prev) => (prev ? { ...prev, username } : prev))
          }
          return result.success
        },
        updateBackendHandle: async (handle) => {
          if (!user) return false
          const result = await backendService.updateHandle(handle)
          if (result.success) {
            setUserData((prev) => (prev ? { ...prev, handle } : prev))
          }
          return result.success
        },
        updateBackendProfileImage: async (profileImage) => {
          if (!user) return false
          const result = await backendService.updateProfileImage(profileImage)
          if (result.success) {
            setUserData((prev) => (prev ? { ...prev, profilePhoto: profileImage } : prev))
          }
          return result.success
        },
        updateBackendCoverImage: async (coverImage) => {
          if (!user) return false
          const result = await backendService.updateCoverImage(coverImage)
          if (result.success) {
            setUserData((prev) => (prev ? { ...prev, coverPhoto: coverImage } : prev))
          }
          return result.success
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
