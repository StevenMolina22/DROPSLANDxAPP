// This is the new Single Source of Truth for all data models.

// --- USER MODELS ---

export type UserType = "fan" | "artist";

/**
 * The core User entity for the entire application.
 * Represents both Fans and Artists, distinguished by the 'type' field.
 */
export interface UserData {
  id: string;
  username: string;
  handle?: string; // @username
  type: UserType;
  isVerified?: boolean;
  profilePhoto?: string;
  coverPhoto?: string; // Cover image
  isIIUser?: boolean;
  principal?: string;
  bio?: string;
  genre?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  followers: string[]; // Array of UserData IDs
  following: string[]; // Array of UserData IDs
  createdAt: string;
  lastActive: string;
}

// --- POST & COMMENT MODELS ---

/**
 * The core Post entity. Represents a single post by an artist.
 * Includes fields for token-gated content.
 */
export interface Post {
  id: string;
  authorId: string; // Links to UserData.id
  authorName: string;
  authorAvatar: string;
  content: string;
  image?: string;
  createdAt: string;
  type: "post" | "release" | "announcement";
  tags?: string[];
  likes: string[]; // Array of UserData IDs
  comments: PostComment[];

  // --- ENHANCED FIELDS for Token-Gating ---
  /** Is this post exclusive to token holders? */
  isExclusive: boolean;
  /** Which token is required? (Links to UtilityToken.id) */
  requiredTokenId: string | null;
  /** How many tokens are required to view? */
  requiredTokenAmount: number;
}

/**
 * Represents a single comment on a Post.
 */
export interface PostComment {
  id: string;
  authorId: string; // Links to UserData.id
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: string[]; // Array of UserData IDs
}

// --- TOKEN & REWARD MODELS ---

/**
 * Represents the Artist's Utility Token ($DJNAME).
 * Used for unlocking perks and content.
 */
export interface UtilityToken {
  id: string;
  name: string;
  symbol: string;
  artistId: string; // Links to UserData.id
  artistName: string;
  price: number;
  totalSupply: number;
  circulatingSupply: number;
  description: string;
  image?: string;
}

/**
 * Represents the Artist's Royalty Token ($DJNAME-R).
 * Represents a share of the artist's royalties.
 */
export interface RoyaltyToken {
  id: string;
  artistId: string; // Links to UserData.id
  name: string;
  symbol: string;
  totalSupply: number;
  // ... other fields like royalty contract address, etc.
}

/**
 * Tracks the balance of a specific token for a specific user.
 * This is the "join table" for Users and Tokens.
 */
export interface UserTokenBalance {
  id: string;
  userId: string; // Links to UserData.id
  /** Can be a UtilityToken OR RoyaltyToken ID */
  tokenId: string;
  balance: number; // Use string for BigInts if necessary
}

/**
 * The definition of a reward an artist creates.
 */
export interface ArtistReward {
  id: string;
  artistId: string; // Links to UserData.id
  title: string;
  description: string;
  /** Which UtilityToken is required? */
  requiredTokenId: string;
  /** How many tokens are required? */
  requiredTokenAmount: number;
}

/**
 * Tracks which rewards a user has successfully unlocked.
 * This is the "join table" for Users and ArtistRewards.
 */
export interface UserUnlockedReward {
  id: string;
  userId: string; // Links to UserData.id
  rewardId: string; // Links to ArtistReward.id
  unlockedAt: string;
}

// --- ACTIVITY & NOTIFICATION MODELS ---

/**
 * Represents an item in a user's activity feed.
 */
export interface Activity {
  id: string;
  type:
    | "purchase"
    | "mention"
    | "reward"
    | "follow"
    | "like"
    | "comment"
    | "release";
  userId: string; // The UserData.id of who performed the action
  userName: string;
  userAvatar: string;
  action: string;
  message?: string;
  amount?: number;
  tokenName?: string;
  createdAt: string;
  relatedTo: "artist" | "fan";
  targetUserId?: string; // The UserData.id of the user who is the target
  targetPostId?: string; // The Post.id this activity relates to
  isRead: boolean;
}

/**
 * Represents a single notification for a user.
 */
export interface Notification {
  id: string;
  type: "follow" | "like" | "comment" | "mention" | "purchase" | "reward";
  userId: string; // Links to UserData.id (who performed the action)
  userName: string;
  userAvatar: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  targetPostId?: string; // Links to Post.id
  targetUserId?: string; // The UserData.id of the user being notified
}

// --- MISC AGGREGATION MODELS ---

/**
 * Represents an aggregated view of a user's stats.
 * This is good for a profile dashboard.
 */
export interface UserStats {
  followers: number;
  following: number;
  posts: number;
  tokensOwned: number;
  totalValue: number;
  totalDonated: number;
}

/**
 * A wrapper type for the main feed, allowing aggregation
 * of Posts and Activities into a single, sorted list.
 */
export interface FeedItem {
  id: string;
  type: "post" | "activity" | "release";
  data: Post | Activity;
  priority: number;
  createdAt: string;
}
