import { UserData } from "@/lib/types"

export const DEFAULT_USER_ID = "fan"

export const DEFAULT_USER_PROFILE: UserData = {
  id: DEFAULT_USER_ID,
  username: "musicfan",
  handle: "musicfan",
  type: "fan",
  profilePhoto: "/avatars/user.jpg",
  bio: "Music enthusiast supporting favorite artists across the DROPSLAND community.",
  genre: "Electronic",
  location: "Buenos Aires, Argentina",
  website: "https://dropsland.app",
  socialLinks: {
    instagram: "@musicfan",
    twitter: "@musicfan",
  },
  followers: [],
  following: ["juampi", "banger", "nicolamarti", "axs"],
  createdAt: "2024-03-01T00:00:00Z",
  lastActive: "2024-04-15T00:00:00Z",
}

export const DEFAULT_USER_BALANCE = 125
export const DEFAULT_USER_DONATED = 75
