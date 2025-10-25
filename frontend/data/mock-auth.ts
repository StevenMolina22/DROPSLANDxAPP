import { UserData } from "@/lib/types"

export const DEFAULT_USER_ID = "fan"

export const DEFAULT_USER_DATA: UserData = {
  id: DEFAULT_USER_ID,
  username: "musicfan",
  type: "fan",
  profilePhoto: "/avatars/user.jpg",
  bio: "Music enthusiast exploring the DROPSLAND community.",
  followers: [],
  following: ["juampi", "banger", "nicolamarti", "axs"],
  createdAt: "2024-03-01T00:00:00Z",
  lastActive: "2024-03-01T00:00:00Z",
}

export const DEFAULT_USER_BALANCE = 125
export const DEFAULT_USER_DONATED = 75
