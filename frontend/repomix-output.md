This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose

This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format

The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
   a. A header with the file path (## File: path/to/file)
   b. The full contents of the file in a code block

## Usage Guidelines

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes

- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure

```
app/
  creator/
    [id]/
      page.tsx
  test-profile/
    page.tsx
  _document.tsx
  error.tsx
  globals.css
  layout.tsx
  loading.tsx
  not-found.tsx
  page.tsx
  providers.tsx
components/
  artist-profile/
    artist-certifications-tab.tsx
    artist-posts-tab.tsx
    artist-profile.tsx
    artist-rewards-tab.tsx
    artist-token-info.tsx
    legacy-profile-info.tsx
    legacy-profile-settings.tsx
    profile-comment-dialog.tsx
    profile-create-post-form.tsx
    profile-editor.tsx
    profile-post-list.tsx
    profile-screen.tsx
    profile-tabs.tsx
    profile-view.tsx
    user-profile.tsx
  authentication/
    solana-wallet-button.tsx
  explore/
    creators-list.tsx
    explore-screen.tsx
    explore-view.tsx
    loading-creators.tsx
  home/
    activity-screen.tsx
    activity-view.tsx
    home-view.tsx
  icons/
    banknote-icon.tsx
    banknote-svg.tsx
  music-player/
    expanded-player.tsx
    mini-player-wrapper.tsx
    mini-player.tsx
    music-card.tsx
    music-player.tsx
  ui/
    accordion.tsx
    alert-dialog.tsx
    alert.tsx
    aspect-ratio.tsx
    avatar.tsx
    badge.tsx
    breadcrumb.tsx
    button.tsx
    calendar.tsx
    card.tsx
    carousel.tsx
    chart.tsx
    checkbox.tsx
    collapsible.tsx
    command.tsx
    context-menu.tsx
    dialog.tsx
    drawer.tsx
    dropdown-menu.tsx
    form.tsx
    hover-card.tsx
    input-otp.tsx
    input.tsx
    label.tsx
    menubar.tsx
    navigation-menu.tsx
    pagination.tsx
    popover.tsx
    progress.tsx
    radio-group.tsx
    resizable.tsx
    scroll-area.tsx
    select.tsx
    separator.tsx
    sheet.tsx
    sidebar.tsx
    skeleton.tsx
    slider.tsx
    sonner.tsx
    switch.tsx
    table.tsx
    tabs.tsx
    textarea.tsx
    toast.tsx
    toaster.tsx
    toggle-group.tsx
    toggle.tsx
    tooltip.tsx
    use-mobile.tsx
    use-toast.ts
    user-avatar.tsx
  wallet/
    buy-view.tsx
    donate-form.tsx
    donate-screen.tsx
    receive-view.tsx
    ticket-minter.tsx
    wallet-view.tsx
  artist-dashboard.tsx
  header.tsx
  main-app.tsx
  notification-badge.tsx
  search-view.tsx
  send-view.tsx
  stats-card.tsx
  tab-bar.tsx
  theme-provider.tsx
contexts/
  music-player-context.tsx
  solana-wallet-context.tsx
data/
  artist-profile.ts
  profile-view.ts
  search-view.ts
  wallet-view.ts
hooks/
  use-auth.tsx
  use-mobile.tsx
  use-music-player.ts
  use-music-storage.ts
  use-navigation.ts
  use-toast.ts
  use-user-data.ts
lib/
  backend-service.ts
  blockchain.ts
  music-data.ts
  music-service.ts
  solana-program-client.ts
  types.ts
  user-data-service.ts
  utils.ts
public/
  images/
    banknote-custom.svg
    dropsland-logo.svg
    internet-identity-logo.svg
    nfid-logo.svg
    verified-badge.svg
  placeholder-logo.svg
  placeholder.svg
styles/
  globals.css
types/
  artist.ts
  music-player.ts
.gitignore
package.json
tailwind.config.ts
tsconfig.json
```

# Files

## File: app/creator/[id]/page.tsx

```typescript
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  Share2,
  Star,
  Users,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DonateForm from "@/components/wallet/donate-form";

// Import the artists data from the artist-profile component
const artists = [
  {
    id: "iamjuampi",
    name: "iamjuampi",
    handle: "@iamjuampi",
    avatar: "/avatars/juampi.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Tech-House",
    description:
      "DJ, producer, and founder of the record label Best Drops Ever.",
    supporters: 1850,
    blgReceived: 1850,
    featured: true,
    tokenName: "JUAMPI",
    tokenPrice: 0.45,
    posts: [
      {
        content:
          "Just released my new EP 'Techno Dimensions'. Available now on all platforms! #TechnoDimensions #NewRelease",
        time: "2 hours ago",
        likes: 87,
        comments: 14,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Preparing my set for this weekend at Club Underground. It's going to be an epic night of techno and house. Who's coming? 🎧",
        time: "1 day ago",
        likes: 65,
        comments: 23,
      },
      {
        content:
          "Happy to announce I'll be playing at the Electronic Dreams festival next month. See you there! #ElectronicDreams #Festival",
        time: "3 days ago",
        likes: 112,
        comments: 31,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Working on new sounds for my upcoming release. I'm experimenting with analog synthesizers and 90s samples.",
        time: "1 week ago",
        likes: 94,
        comments: 17,
      },
    ],
  },
  {
    id: "banger",
    name: "banger",
    handle: "@banger",
    avatar: "/avatars/banger.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "DNB y Tech-House",
    description:
      "Productor de house con influencias de disco y funk. Conocido por sus ritmos enérgicos.",
    supporters: 2100,
    blgReceived: 2100,
    featured: true,
    tokenName: "BANGER",
    tokenPrice: 0.42,
    posts: [
      {
        content:
          "New track dropping next week! Can't wait to share this one with you all.",
        time: "1 day ago",
        likes: 45,
        comments: 8,
      },
    ],
  },
  {
    id: "nicolamarti",
    name: "Nicola Marti",
    handle: "@nicolamarti",
    avatar: "/avatars/nicola.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Tech-House",
    description:
      "Artista italiano de techno melódico con un estilo único y atmosférico.",
    supporters: 1750,
    blgReceived: 1750,
    featured: true,
    tokenName: "NICOLA",
    tokenPrice: 0.38,
    posts: [
      {
        content:
          "Working on new melodic techno tracks. The energy is incredible!",
        time: "3 days ago",
        likes: 67,
        comments: 12,
      },
    ],
  },
  {
    id: "axs",
    name: "AXS",
    handle: "@axs",
    avatar: "/avatars/axs.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Riddim",
    description:
      "Productor de techno industrial con influencias de EBM y post-punk.",
    supporters: 1680,
    blgReceived: 1680,
    featured: true,
    tokenName: "AXS",
    tokenPrice: 0.35,
    posts: [
      {
        content:
          "New riddim track in the works. This one is going to be heavy!",
        time: "2 days ago",
        likes: 89,
        comments: 15,
      },
    ],
  },
];

export default function CreatorPage({ params }: { params: { id: string } }) {
  // Find the artist by ID
  const creator = artists.find((artist) => artist.id === params.id);

  // If artist not found, show an error message
  if (!creator) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artist not found</h1>
          <p className="text-muted-foreground mb-4">
            The artist you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-48 md:h-64 lg:h-80 w-full">
        <Image
          src={creator.coverImage || "/placeholder.svg?height=300&width=1200"}
          alt={`${creator.name}'s cover image`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <Button
          asChild
          variant="outline"
          size="sm"
          className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <div className="container px-4 md:px-6">
        <div className="relative -mt-20 mb-6 flex flex-col items-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src={creator.avatar} alt={creator.name} />
            <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h1 className="mt-4 text-3xl font-bold">{creator.name}</h1>
          <p className="text-muted-foreground">{creator.handle}</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline">{creator.genre}</Badge>
            {creator.featured && (
              <Badge variant="secondary">
                <Star className="mr-1 h-3 w-3" /> Featured Artist
              </Badge>
            )}
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm">
            <div className="flex items-center">
              <Banknote className="mr-1 h-4 w-4 text-primary" />
              <span>
                {creator.blgReceived.toLocaleString()} $DROPS received
              </span>
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span>{creator.supporters.toLocaleString()} supporters</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <Button size="lg" className="gap-2">
              <Banknote className="h-4 w-4" />
              Buy {creator.tokenName}
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8 py-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{creator.description}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="posts">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="posts">Recent Posts</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>
              <TabsContent value="posts" className="mt-4 space-y-4">
                {creator.posts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={creator.avatar}
                            alt={creator.name}
                          />
                          <AvatarFallback>
                            {creator.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{creator.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {post.time}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm mb-3">{post.content}</p>
                      {post.image && (
                        <div className="mb-3 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt="Post image"
                            width={400}
                            height={200}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="rewards" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Basic Support</CardTitle>
                        <div className="flex items-center text-primary font-bold">
                          <Banknote className="mr-1 h-4 w-4" />5 $DROPS
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Access to exclusive posts</li>
                        <li>Early access to new tracks</li>
                      </ul>
                      <Button className="mt-4 w-full">Select</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          Premium Support
                        </CardTitle>
                        <div className="flex items-center text-primary font-bold">
                          <Banknote className="mr-1 h-4 w-4" />
                          20 $DROPS
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>All basic rewards</li>
                        <li>Exclusive track downloads</li>
                        <li>Name in credits</li>
                      </ul>
                      <Button className="mt-4 w-full">Select</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <DonateForm creatorId={creator.id} creatorName={creator.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { id: "iamjuampi" },
    { id: "banger" },
    { id: "nicolamarti" },
    { id: "axs" },
  ];
}
```

## File: app/test-profile/page.tsx

```typescript
"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import UserProfile from "@/components/profile/user-profile";
import { useAuth } from "@/hooks/use-auth";

export default function TestProfilePage() {
  const { user, userData, isNFIDUser, loginWithNFID } = useAuth();
  const [testUser, setTestUser] = useState("test_user_123");

  const handleLogin = () => {
    loginWithNFID(testUser);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">
          Test Profile Editing
        </h1>

        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Current State
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <p>User ID: {user || "Not logged in"}</p>
            <p>
              User Data:{" "}
              {userData ? JSON.stringify(userData, null, 2) : "No user data"}
            </p>
            <p>Is NFID User: {isNFIDUser() ? "Yes" : "No"}</p>
          </div>
        </div>

        {!user ? (
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Login Test
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                value={testUser}
                onChange={(e) => setTestUser(e.target.value)}
                placeholder="Enter test user ID"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
              />
              <Button
                onClick={handleLogin}
                className="bg-bright-yellow text-black"
              >
                Login as Test User
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Profile Component Test
            </h2>
            <UserProfile
              userId={user}
              username={userData?.username || "Test User"}
              handle={userData?.handle}
              profilePhoto={userData?.profilePhoto}
              coverPhoto={userData?.coverPhoto}
              isVerified={userData?.isVerified}
              type={userData?.type}
              bio={userData?.bio}
              followers={userData?.followers?.length || 0}
              following={userData?.following?.length || 0}
              genre={userData?.genre}
            />
          </div>
        )}

        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-white mb-4">
            Instructions
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <p>1. Login with a test user ID</p>
            <p>2. Look for the "Editar Perfil" button on the profile</p>
            <p>3. Click it to open the profile editor</p>
            <p>
              4. Try editing the profile photo, cover photo, username, and
              handle
            </p>
            <p>5. Check the browser console for debug messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: app/\_document.tsx

```typescript
export default function Document() {
  return null;
}
```

## File: app/error.tsx

```typescript
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  );
}
```

## File: app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground: 222.2 84% 4.9%;
  --background: 0 0% 100%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 60 100% 50%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --foreground: 210 40% 98%;
  --background: 0 0% 24.3%; /* #3E3E3E */
  --card: 0 0% 24.3%; /* #3E3E3E */
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 60 100% 50%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}

body {
  -webkit-tap-highlight-color: transparent;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* iPhone notch safe area */
@supports (padding-top: env(safe-area-inset-top)) {
  .safe-top {
    padding-top: env(safe-area-inset-top);
  }
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

@layer base {
  .bg-bright-yellow {
    background-color: hsl(60 100% 50%);
  }
  .bg-bright-yellow-700 {
    background-color: hsl(60 100% 40%);
  }
  .text-bright-yellow {
    color: hsl(60 100% 50%);
  }
}
```

## File: app/layout.tsx

```typescript
import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { MusicPlayerProvider } from "@/contexts/music-player-context";
import { SolanaWalletProvider } from "@/contexts/solana-wallet-context";
import MiniPlayerWrapper from "@/components/music-player/mini-player-wrapper";
import ExpandedPlayer from "@/components/music-player/expanded-player";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DROPSLAND",
  description: "Music platform on the Internet Computer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SolanaWalletProvider>
            <AuthProvider>
              <MusicPlayerProvider>
                {children}
                <MiniPlayerWrapper />
                <ExpandedPlayer />
              </MusicPlayerProvider>
            </AuthProvider>
            <Toaster />
          </SolanaWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## File: app/loading.tsx

```typescript
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </div>
  )
}
```

## File: app/not-found.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
```

## File: app/page.tsx

```typescript
"use client";
import MainApp from "@/components/main-app";

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-950 overflow-hidden">
      <MainApp />
    </div>
  );
}
```

## File: app/providers.tsx

```typescript
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { MusicPlayerProvider } from "@/contexts/music-player-context";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <AuthProvider>
        <MusicPlayerProvider>
          {children}
          <Toaster />
        </MusicPlayerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

## File: components/profile/artist-certifications-tab.tsx

```typescript
import { Artist } from "@/types/artist";
import { Disc, Video, Users, Award } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";

export function ArtistCertificationsTab({ artist }: { artist: Artist }) {
  return (
    <TabsContent value="certifications" className="mt-4 space-y-3">
      <div className="mb-3">
        <h3 className="text-white font-medium">Artist Certifications</h3>
        <p className="text-sm text-gray-400">
          Achievements and certifications earned by {artist.name}
        </p>
      </div>

      {artist.certifications ? (
        artist.certifications.map((cert, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-3">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-bright-yellow/20 flex items-center justify-center">
                  {cert.type === "gold" && (
                    <Disc className="h-6 w-6 text-bright-yellow" />
                  )}
                  {cert.type === "platinum" && (
                    <Disc className="h-6 w-6 text-gray-300" />
                  )}
                  {cert.type === "views" && (
                    <Video className="h-6 w-6 text-bright-yellow" />
                  )}
                  {cert.type === "soldout" && (
                    <Users className="h-6 w-6 text-bright-yellow" />
                  )}
                  {cert.type === "award" && (
                    <Award className="h-6 w-6 text-bright-yellow" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-white font-medium">
                      {cert.title}
                    </p>
                    <Button
                      size="sm"
                      className={`${
                        cert.type === "gold"
                          ? "bg-[#F9BF15] hover:bg-[#e0ab13] text-black" // Changed from #082479 to #F9BF15 with black text
                          : cert.type === "platinum"
                            ? "bg-gray-400 hover:bg-gray-500"
                            : cert.type === "views"
                              ? "bg-red-600 hover:bg-red-700"
                              : cert.type === "soldout"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-blue-600 hover:bg-blue-700"
                      } text-white rounded-full`}
                    >
                      {cert.type === "gold" || cert.type === "platinum"
                        ? "Stream"
                        : cert.type === "views"
                          ? "Watch"
                          : cert.type === "soldout"
                            ? "Tour Dates"
                            : "Award"}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">{cert.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
          <Award className="h-12 w-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-300 font-medium">No certifications yet</p>
          <p className="text-gray-400 text-sm mt-1">
            {artist.name} hasn't earned any certifications yet
          </p>
        </div>
      )}
    </TabsContent>
  );
}
```

## File: components/profile/artist-posts-tab.tsx

```typescript
import { Artist } from "@/types/artist";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { TabsContent } from "../ui/tabs";

export function ArtistPostsTab({ artist }: { artist: Artist }) {
  return (
    <TabsContent value="posts" className="mt-4 space-y-4">
      {artist.posts.map((post, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={artist.avatar} alt={artist.name} />
                <AvatarFallback>
                  {artist.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-white">{artist.name}</p>
                <p className="text-gray-400 text-xs">{post.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{post.content}</p>
            {post.image && (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  className="w-full h-auto"
                />
              </div>
            )}
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <button className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                {post.comments}
              </button>
              <button className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </TabsContent>
  );
}
```

## File: components/profile/artist-profile.tsx

```typescript
"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { artists } from "@/data/artist-profile";
import { ArrowLeft, Lock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { ArtistTokenInfo } from "./artist-token-info";
import { ArtistCertificationsTab } from "./artist-certifications-tab";
import { ArtistRewardsTab } from "./artist-rewards-tab";
import { ArtistPostsTab } from "./artist-posts-tab";

interface ArtistProfileProps {
  artistId: string;
  onBack: () => void;
}

export default function ArtistProfile({
  artistId,
  onBack,
}: ArtistProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addToBalance, isArtist } = useAuth();

  // Find artist by ID with better error handling
  const artist = artists.find((a) => a.id === artistId);

  console.log("Artist Profile - ID received:", artistId);
  console.log("Artist Profile - Artist found:", artist);

  // If artist not found, show an error message
  if (!artist) {
    return (
      <div className="p-4 text-center">
        <Button
          variant="outline"
          size="sm"
          className="mb-4 bg-gray-800 text-white border-gray-700"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <p className="text-white">Artist not found. Please try again.</p>
      </div>
    );
  }

  // Simulate network delay
  const handleBuyToken = () => {
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      addToBalance(-10); // Subtract DROPS

      toast({
        title: "Purchase successful!",
        description: `You've bought 10 $${artist.tokenName} from ${artist.name}`,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="pb-6 bg-gray-950">
      {/* Back button at the top */}

      {/* Cover Image */}
      <div className="relative h-36 bg-gradient-to-r from-gray-800 to-black">
        {artist.coverImage && (
          <img
            src={artist.coverImage || "/placeholder.svg"}
            alt={`${artist.name}'s cover`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Artist Info */}
      <div className="px-4 relative">
        <div className="flex items-start mt-[-40px]">
          <Avatar className="h-20 w-20 border-4 border-gray-900">
            <img
              src={artist.avatar}
              alt={artist.name}
              className="h-full w-full rounded-full object-cover"
            />
            <AvatarFallback>
              {artist.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl text-white">{artist.name}</h1>
              <p className="text-gray-400 text-sm">{artist.handle}</p>
            </div>
            <Button
              className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
              onClick={handleBuyToken}
              disabled={isLoading}
            >
              <BanknoteIcon className="h-4 w-4 mr-1" />
              Buy ${artist.tokenName}
            </Button>
          </div>

          <Badge
            variant="outline"
            className="mt-2 bg-gray-800 text-gray-300 border-gray-700"
          >
            {artist.genre}
          </Badge>

          <p className="mt-3 text-sm text-gray-300">{artist.description}</p>

          <div className="flex mt-3 space-x-4 text-sm">
            <div>
              <span className="font-bold text-white">{artist.supporters}</span>
              <span className="text-gray-400 ml-1">followers</span>
            </div>
            <div>
              <span className="font-bold text-white">{artist.blgReceived}</span>
              <span className="text-gray-400 ml-1">$DROPS received</span>
            </div>
          </div>
        </div>

        <ArtistTokenInfo
          artist={artist}
          handleBuyToken={handleBuyToken}
          isLoading={isLoading}
        />

        <div className="mt-6">
          <Tabs defaultValue="posts">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger
                value="posts"
                className="data-[state=active]:bg-gray-700"
              >
                Posts
              </TabsTrigger>
              <TabsTrigger
                value="rewards"
                className="data-[state=active]:bg-gray-700"
              >
                Rewards
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-gray-700"
              >
                Certifications
              </TabsTrigger>
            </TabsList>

            <ArtistPostsTab artist={artist} />
            <ArtistRewardsTab artist={artist} />
            <ArtistCertificationsTab artist={artist} />
          </Tabs>
        </div>

        {/* Fan-only section */}
        {!isArtist() && (
          <Card className="mt-6 bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-bright-yellow mr-2" />
                <div className="flex-1">
                  <h3 className="text-white font-medium">
                    Want to create content?
                  </h3>
                  <p className="text-sm text-gray-400">
                    Apply to become an artist on DROPSLAND
                  </p>
                </div>
                <Button className="bg-bright-yellow hover:bg-bright-yellow-700 text-black">
                  Apply
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
```

## File: components/profile/artist-rewards-tab.tsx

```typescript
import { Artist } from "@/types/artist";
import { TabsContent } from "@radix-ui/react-tabs";
import { BanknoteIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Lock } from "lucide-react";

export function ArtistRewardsTab({ artist }: { artist: Artist }) {
  return (
    <TabsContent value="rewards" className="mt-4 space-y-3">
      <div className="mb-3">
        <h3 className="text-white font-medium">Artist Rewards</h3>
        <p className="text-sm text-gray-400">
          Exclusive rewards for {artist.name}'s token holders
        </p>
      </div>

      {artist.rewards ? (
        artist.rewards.map((reward, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bright-yellow/20 flex items-center justify-center">
                  <BanknoteIcon className="h-5 w-5 text-bright-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">
                    {reward.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {reward.description}
                  </p>
                  <div className="flex items-center mt-1">
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                    >
                      {reward.minTokens} $DROPS required
                    </Badge>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                >
                  Get
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
          <Lock className="h-12 w-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-300 font-medium">No rewards available yet</p>
          <p className="text-gray-400 text-sm mt-1">
            {artist.name} hasn't created any rewards yet
          </p>
        </div>
      )}
    </TabsContent>
  );
}
```

## File: components/profile/artist-token-info.tsx

```typescript
import { Artist } from "@/types/artist";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export function ArtistTokenInfo({
  artist,
  handleBuyToken,
  isLoading,
}: {
  artist: Artist;
  handleBuyToken: () => void;
  isLoading: boolean;
}) {
  return (
    <Card className="mt-4 bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-white">${artist.tokenName}</h3>
            <p className="text-xs text-gray-400">
              {artist.name}'s personal token
            </p>
          </div>
          <div className="text-right">
            <p className="text-bright-yellow font-bold">
              ${artist.tokenPrice} USD
            </p>
            <p className="text-xs text-gray-400">Current price</p>
          </div>
        </div>
        <Button
          className="w-full mt-3 bg-bright-yellow hover:bg-bright-yellow-700 text-black"
          onClick={handleBuyToken}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : `Buy $${artist.tokenName}`}
        </Button>
      </CardContent>
    </Card>
  );
}
```

## File: components/profile/legacy-profile-info.tsx

```typescript
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface LegacyProfileInfoProps {
  legacyProfile: any;
  isEditing: boolean;
  editedBio: string;
  onBioChange: (bio: string) => void;
  balance: number;
  donated: number;
}

export const LegacyProfileInfo: React.FC<LegacyProfileInfoProps> = ({
  legacyProfile,
  isEditing,
  editedBio,
  onBioChange,
  balance,
  donated,
}) => (
  <div className="mt-16 px-4">
    <div className="flex items-center">
      <h1 className="text-xl font-bold text-white">{legacyProfile.name}</h1>
      {legacyProfile.isVerified && (
        <div className="ml-1 -mt-1">
          {/* SVG for verified badge */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 256 256"
            className="inline-block"
          >
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 49.66 1.125 L 49.66 1.125 c 4.67 -2.393 10.394 -0.859 13.243 3.548 l 0 0 c 1.784 2.761 4.788 4.495 8.071 4.66 l 0 0 c 5.241 0.263 9.431 4.453 9.694 9.694 v 0 c 0.165 3.283 1.899 6.286 4.66 8.071 l 0 0 c 4.407 2.848 5.941 8.572 3.548 13.242 l 0 0 c -1.499 2.926 -1.499 6.394 0 9.319 l 0 0 c 2.393 4.67 0.859 10.394 -3.548 13.242 l 0 0 c -2.761 1.784 -4.495 4.788 -4.66 8.071 v 0 c -0.263 5.241 -4.453 9.431 -9.694 9.694 h 0 c -3.283 0.165 -6.286 1.899 -8.071 4.66 l 0 0 c -2.848 4.407 -8.572 5.941 -13.242 3.548 l 0 0 c -2.926 -1.499 -6.394 -1.499 -9.319 0 l 0 0 c -4.67 2.393 -10.394 0.859 -13.242 -3.548 l 0 0 c -1.784 -2.761 -4.788 -4.495 -8.071 -4.66 h 0 c -5.241 -0.263 -9.431 -4.453 -9.694 -9.694 l 0 0 c -0.165 -3.283 -1.899 -6.286 -4.66 -8.071 l 0 0 C 0.266 60.054 -1.267 54.33 1.125 49.66 l 0 0 c 1.499 -2.926 1.499 -6.394 0 -9.319 l 0 0 c -2.393 -4.67 -0.859 -10.394 3.548 -13.242 l 0 0 c 2.761 -1.784 4.495 -4.788 4.66 -8.071 l 0 0 c 0.263 -5.241 4.453 -9.431 9.694 -9.694 l 0 0 c 3.283 -0.165 6.286 -1.899 8.071 -4.66 l 0 0 c 2.848 -4.407 8.572 -5.941 13.242 -3.548 l 0 0 C 43.266 2.624 46.734 2.624 49.66 1.125 z"
                fill="#0083f9"
              />
              <polygon
                points="36.94,66.3 36.94,66.3 36.94,46.9 36.94,46.9 62.8,35.34 72.5,45.04"
                fill="#0077e3"
              />
              <polygon
                points="36.94,66.3 17.5,46.87 27.2,37.16 36.94,46.9 60.11,23.7 69.81,33.39"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
    <p className="text-gray-400">{legacyProfile.handle}</p>

    <div className="flex items-center mt-2">
      <Badge
        variant="outline"
        className="bg-gray-800 text-gray-300 border-gray-700"
      >
        {legacyProfile.category}
      </Badge>
      <span className="text-sm text-gray-400 ml-2">
        Member since {legacyProfile.memberSince}
      </span>
    </div>

    {isEditing ? (
      <div className="mt-3 space-y-3">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Bio</label>
          <Textarea
            value={editedBio}
            onChange={(e) => onBioChange(e.target.value)}
            className="text-sm text-gray-300 border border-gray-700 p-2 rounded-md bg-gray-800 w-full"
            placeholder="Tell us about yourself..."
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Category</label>
          <Input
            defaultValue={legacyProfile.category}
            className="text-sm text-gray-300 border border-gray-700 p-2 rounded-md bg-gray-800"
          />
        </div>
      </div>
    ) : (
      <p className="text-sm mt-3 text-gray-300">{legacyProfile.bio}</p>
    )}

    {/* Stats for Legacy Profile */}
    <div className="flex gap-4 mt-4">
      <div>
        <p className="text-sm text-gray-400">Balance</p>
        <div className="flex items-center">
          <span className="font-bold text-white">{balance} $DROPS</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">Purchased</p>
        <div className="flex items-center">
          <span className="font-bold text-white">{donated} $DROPS</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">Artists</p>
        <p className="font-bold text-white">8</p>
      </div>
    </div>
  </div>
);
```

## File: components/profile/legacy-profile-settings.tsx

```typescript
// --- 7. Legacy Profile Settings ---
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { Settings, Banknote, LogOut, Lock } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

interface LegacyProfileSettingsProps {
  logout: () => void;
  isArtist: boolean;
}

export const LegacyProfileSettings: React.FC<LegacyProfileSettingsProps> = ({
  logout,
  isArtist,
}) => (
  <>
    <div className="mt-8 px-4">
      <h2 className="text-lg font-semibold mb-3 text-white">Settings</h2>
      <div className="space-y-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start bg-gray-800 text-white border-gray-700"
            >
              <Settings className="h-4 w-4 mr-2" />
              Account Settings
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white border-gray-700">
            <DialogHeader>
              <DialogTitle>Account Settings</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-700 text-white border-gray-600"
              >
                <Settings className="h-4 w-4 mr-2" />
                Profile Settings
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-700 text-white border-gray-600"
              >
                <Banknote className="h-4 w-4 mr-2" />
                Payment Methods
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-700 text-white border-gray-600"
                onClick={logout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          className="w-full justify-start bg-gray-800 text-white border-gray-700 mt-2"
          onClick={logout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>

        {!isArtist && (
          <Card className="bg-gray-800 border-gray-700 mt-4">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-bright-yellow mr-2" />
                <div>
                  <h3 className="text-white font-medium">Become an Artist</h3>
                  <p className="text-sm text-gray-400">
                    Apply to become a verified artist on DROPSLAND
                  </p>
                </div>
                <Button className="ml-auto bg-bright-yellow hover:bg-bright-yellow-700 text-black">
                  Apply
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
    <div className="mt-8 px-4 pb-8">
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-gray-800 text-red-400 border-red-500/30 hover:bg-red-500/10 hover:border-red-500"
        onClick={logout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </div>
  </>
);
```

## File: components/profile/profile-comment-dialog.tsx

```typescript
// --- 17. Comment Dialog Component ---

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Send } from "lucide-react";
import { Button } from "react-day-picker";
import { DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";

interface ProfileCommentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  postIndex: number | null;
  comments: { [key: string]: { author: string; text: string }[] };
  commentText: string;
  onCommentTextChange: (text: string) => void;
  onSendComment: () => void;
  userAvatar: string;
  userDisplayName: string;
  legacyAvatarSrc: string; // For fallback
}

export const ProfileCommentDialog: React.FC<ProfileCommentDialogProps> = ({
  isOpen,
  onOpenChange,
  postIndex,
  comments,
  commentText,
  onCommentTextChange,
  onSendComment,
  userAvatar,
  userDisplayName,
  legacyAvatarSrc,
}) => {
  const currentComments =
    postIndex !== null ? comments[`profile-${postIndex}`] || [] : [];

  const getCommentAvatar = (author: string) => {
    // This logic is flawed from the original, but preserved.
    // It assumes the author's name *is* "iamjuampi" for the specific avatar.
    // A better way would be to store userId with the comment.
    if (author === userDisplayName) return userAvatar;
    if (author === "iamjuampi") return "/avatars/juampi.jpg";
    return "/avatars/user.jpg";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
        </DialogHeader>
        <div className="max-h-[300px] overflow-y-auto space-y-3 my-4">
          {currentComments.length > 0 ? (
            currentComments.map((comment, i) => (
              <div key={i} className="flex gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={getCommentAvatar(comment.author)}
                    alt={comment.author}
                  />
                  <AvatarFallback>
                    {comment.author.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 bg-gray-700 p-2 rounded-lg">
                  <p className="text-sm font-medium">{comment.author}</p>
                  <p className="text-sm text-gray-300">{comment.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-4">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Add a comment..."
            className="bg-gray-700 border-gray-600 text-white"
            value={commentText}
            onChange={(e) => onCommentTextChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSendComment();
              }
            }}
          />
          <Button
            className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
            onClick={onSendComment}
            disabled={!commentText.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
```

## File: components/profile/profile-create-post-form.tsx

```typescript
import { UserData } from "@/lib/types";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ImageIcon, MapPin, BarChart2, Paperclip, Hash } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface CreatePostFormProps {
  userAvatar: string;
  userDisplayName: string;
  userData: UserData; // Keeping userData prop for full profile data access if needed
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({
  userAvatar,
  userDisplayName,
  userData,
}) => {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      console.log("New post:", postContent);
      setPostContent("");
      // Add submission logic here
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={userData?.profilePhoto || userAvatar}
              alt={userDisplayName}
            />
            <AvatarFallback>
              {userDisplayName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your USB?"
              className="bg-gray-700 border-gray-600 text-white resize-none mb-3"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="flex flex-wrap gap-4 mb-3 justify-start">
              <ImageIcon className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <MapPin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Hash className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <BarChart2 className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Paperclip className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <Button
              className="w-full bg-bright-yellow hover:bg-bright-yellow-700 text-black"
              onClick={handlePostSubmit}
              disabled={!postContent.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
```

## File: components/profile/profile-editor.tsx

```typescript
"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { Camera, Upload, X, Edit } from "lucide-react";

interface ProfileEditorProps {
  user: {
    id: string;
    username: string;
    handle?: string;
    profilePhoto?: string;
    coverPhoto?: string;
    genre?: string;
    bio?: string;
  };
  onSave: (updatedUser: any) => void;
  onCancel: () => void;
}

export default function ProfileEditor({
  user,
  onSave,
  onCancel,
}: ProfileEditorProps) {
  const [username, setUsername] = useState(user.username);
  const [handle, setHandle] = useState(user.handle || "");
  const [profileImage, setProfileImage] = useState(user.profilePhoto || "");
  const [coverImage, setCoverImage] = useState(user.coverPhoto || "");
  const [genre, setGenre] = useState(user.genre || "");
  const [bio, setBio] = useState(user.bio || "");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { updateBackendProfile } = useAuth();

  const profileImageRef = useRef<HTMLInputElement>(null);
  const coverImageRef = useRef<HTMLInputElement>(null);

  // Sample genres for fans
  const sampleGenres = [
    "Techno",
    "House",
    "Tech-House",
    "Progressive House",
    "Deep House",
    "Minimal Techno",
    "Acid Techno",
    "Industrial Techno",
    "Melodic Techno",
    "Trance",
    "Progressive Trance",
    "Psytrance",
    "Drum & Bass",
    "Dubstep",
    "Ambient",
    "Downtempo",
  ];

  const handleProfileImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCoverImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    console.log("ProfileEditor: handleSave called", {
      username,
      handle,
      profileImage,
      coverImage,
      genre,
      bio,
    });

    if (!username.trim()) {
      toast({
        title: "Error",
        description: "El nombre de usuario es requerido",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("ProfileEditor: Calling updateBackendProfile");
      // Update backend
      const success = await updateBackendProfile(
        username.trim(),
        handle.trim() || undefined,
        profileImage || undefined,
        coverImage || undefined,
        genre.trim() || undefined,
        bio.trim() || undefined,
      );

      console.log("ProfileEditor: updateBackendProfile result", success);

      if (success) {
        const updatedUser = {
          ...user,
          username: username.trim(),
          handle: handle.trim() || undefined,
          profilePhoto: profileImage || undefined,
          coverPhoto: coverImage || undefined,
          genre: genre.trim() || undefined,
          bio: bio.trim() || undefined,
        };

        console.log("ProfileEditor: Calling onSave with", updatedUser);
        onSave(updatedUser);

        toast({
          title: "Perfil actualizado",
          description: "Tu perfil se ha actualizado exitosamente",
        });
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("ProfileEditor: Error updating profile:", error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el perfil",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Editar Perfil</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Cover Image */}
          <div>
            <Label className="text-gray-300 mb-2 block">
              Imagen de Portada
            </Label>
            <div
              className="relative w-full h-32 bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => coverImageRef.current?.click()}
            >
              {coverImage ? (
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <Camera className="h-8 w-8" />
                </div>
              )}

              {/* Overlay with edit icon */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Edit className="h-6 w-6 text-white" />
                </div>
              </div>

              <input
                ref={coverImageRef}
                type="file"
                accept="image/*"
                onChange={handleCoverImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Haz clic en la imagen para cambiar la portada
            </p>
          </div>

          {/* Profile Image */}
          <div>
            <Label className="text-gray-300 mb-2 block">Foto de Perfil</Label>
            <div className="flex justify-center">
              <div
                className="relative w-24 h-24 bg-gray-800 rounded-full overflow-hidden cursor-pointer group"
                onClick={() => profileImageRef.current?.click()}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Camera className="h-6 w-6" />
                  </div>
                )}

                {/* Overlay with edit icon */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center rounded-full">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Edit className="h-4 w-4 text-white" />
                  </div>
                </div>

                <input
                  ref={profileImageRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageUpload}
                  className="hidden"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Haz clic en la imagen para cambiar la foto de perfil
            </p>
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username" className="text-gray-300">
              Nombre de Usuario *
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-bright-yellow"
              placeholder="Tu nombre de usuario"
              required
            />
          </div>

          {/* Handle */}
          <div>
            <Label htmlFor="handle" className="text-gray-300">
              @handle
            </Label>
            <Input
              id="handle"
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-bright-yellow"
              placeholder="@tu_handle"
            />
            <p className="text-xs text-gray-500 mt-1">
              Opcional - tu identificador único
            </p>
          </div>

          {/* Genre */}
          <div>
            <Label htmlFor="genre" className="text-gray-300">
              Género Musical
            </Label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 w-full bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:border-bright-yellow focus:outline-none"
            >
              <option value="">Selecciona tu género favorito</option>
              {sampleGenres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Opcional - tu género musical preferido
            </p>
          </div>

          {/* Bio */}
          <div>
            <Label htmlFor="bio" className="text-gray-300">
              Descripción
            </Label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 w-full bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:border-bright-yellow focus:outline-none"
              rows={4}
              placeholder="Escribe algo sobre ti..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Opcional - una breve descripción de tu perfil
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSave}
              disabled={isLoading || !username.trim()}
              className="flex-1 bg-bright-yellow hover:bg-bright-yellow-700 text-black disabled:opacity-50"
            >
              {isLoading ? "Guardando..." : "Guardar Cambios"}
            </Button>
            <Button onClick={onCancel} variant="outline" className="flex-1">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: components/profile/profile-post-list.tsx

```typescript
import { userPosts } from "@/data/profile-view";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Post } from "@/types/artist";

interface PostListProps {
  userDisplayName: string;
  userAvatar: string;
  likedPosts: { [key: string]: boolean };
  postComments: { [key: string]: any[] };
  onLike: (index: number) => void;
  onOpenComments: (index: number) => void;
}

interface PostCardProps {
  post: Post;
  index: number;
  userDisplayName: string;
  userAvatar: string;
  isLiked: boolean;
  commentCount: number;
  onLike: () => void;
  onOpenComments: () => void;
}

export const PostList: React.FC<PostListProps> = ({
  userDisplayName,
  userAvatar,
  likedPosts,
  postComments,
  onLike,
  onOpenComments,
}) => (
  <>
    {userPosts.map((post, index) => (
      <PostCard
        key={index}
        post={post}
        index={index}
        userDisplayName={userDisplayName}
        userAvatar={userAvatar}
        isLiked={!!likedPosts[`profile-${index}`]}
        commentCount={
          post.comments + (postComments[`profile-${index}`]?.length || 0)
        }
        onLike={() => onLike(index)}
        onOpenComments={() => onOpenComments(index)}
      />
    ))}
  </>
);

// --- 11. Post Card Component ---
export const PostCard: React.FC<PostCardProps> = ({
  post,
  userDisplayName,
  userAvatar,
  isLiked,
  commentCount,
  onLike,
  onOpenComments,
}) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardContent className="p-4">
      <div className="flex items-center mb-3">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={userAvatar} alt={userDisplayName} />
          <AvatarFallback>
            {userDisplayName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{userDisplayName}</p>
          <p className="text-gray-400 text-xs">{post.time}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 mb-3">{post.content}</p>
      {post.image && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt="Post image"
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <button className="flex items-center" onClick={onLike}>
          <Heart
            className={`h-4 w-4 mr-1 ${
              isLiked ? "fill-red-500 text-red-500" : ""
            }`}
          />
          {post.likes + (isLiked ? 1 : 0)}
        </button>
        <button className="flex items-center" onClick={onOpenComments}>
          <MessageCircle className="h-4 w-4 mr-1" />
          {commentCount}
        </button>
        <button className="flex items-center">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </button>
      </div>
    </CardContent>
  </Card>
);
```

## File: components/profile/profile-screen.tsx

```typescript
"use client";

import {
  ArrowLeft,
  Banknote,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import Image from "next/image";

interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage: string;
  bio: string;
  blgReceived: number;
  supporters: number;
  posts: any[];
}

interface ProfileScreenProps {
  creator?: Creator | null;
  onBack: () => void;
  onDonate: () => void;
  isCurrentUser?: boolean;
}

export default function ProfileScreen({
  creator = null,
  onBack,
  onDonate,
  isCurrentUser = false,
}: ProfileScreenProps) {
  // Default creator data for current user profile if no creator is provided
  const profileData = creator || {
    id: "current-user",
    name: "Your Profile",
    handle: "@yourhandle",
    avatar: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=150&width=400",
    bio: "This is your profile. You can edit your details and see your activity here.",
    blgReceived: 0,
    supporters: 0,
    posts: [],
  };

  const defaultPosts = [
    {
      id: "p1",
      content:
        "Just released a new digital art collection! Check it out and let me know what you think.",
      image: "/placeholder.svg?height=200&width=300",
      likes: 42,
      comments: 7,
      time: "2h ago",
    },
    {
      id: "p2",
      content: "Working on something special for my supporters. Stay tuned!",
      image: null,
      likes: 28,
      comments: 5,
      time: "1d ago",
    },
  ];

  const posts = profileData.posts || defaultPosts;

  return (
    <div className="h-full overflow-auto pb-4">
      {/* Header */}
      <div className="relative h-36">
        <Image
          src={
            profileData.coverImage || "/placeholder.svg?height=150&width=400"
          }
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <button
          className="absolute top-4 left-4 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <button className="absolute top-4 right-4 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center">
          <Share2 className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 relative">
        <div className="flex justify-between items-end mt-[-40px]">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white">
            <Image
              src={profileData.avatar || "/placeholder.svg"}
              alt={profileData.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          {!isCurrentUser && (
            <button
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
              onClick={onDonate}
            >
              <Banknote className="h-5 w-5 inline mr-1" />
              Donate BLG
            </button>
          )}
          {isCurrentUser && (
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              Edit Profile
            </button>
          )}
        </div>

        <div className="mt-3">
          <h1 className="font-bold text-xl">{profileData.name}</h1>
          <p className="text-gray-500 text-sm">{profileData.handle}</p>

          <p className="mt-2 text-sm">{profileData.bio}</p>

          <div className="flex mt-3 space-x-4 text-sm">
            <div>
              <span className="font-bold">{profileData.supporters || 0}</span>
              <span className="text-gray-500 ml-1">supporters</span>
            </div>
            <div>
              <span className="font-bold">{profileData.blgReceived || 0}</span>
              <span className="text-gray-500 ml-1">BLG received</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mt-4">
          <button className="flex-1 py-2 font-medium text-primary border-b-2 border-primary">
            Posts
          </button>
          <button className="flex-1 py-2 font-medium text-gray-500">
            Rewards
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="px-4 mt-4 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={profileData.avatar || "/placeholder.svg"}
                  alt={profileData.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{profileData.name}</p>
                <p className="text-gray-500 text-xs">{post.time}</p>
              </div>
            </div>

            <p className="text-sm mb-3">{post.content}</p>

            {post.image && (
              <div className="rounded-lg overflow-hidden mb-3 h-48 relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between text-gray-500 text-sm">
              <button className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                {post.comments}
              </button>
              <button className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No posts yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: components/profile/profile-tabs.tsx

```typescript
import { Track } from "@/lib/music-data";
import { UserData } from "@/lib/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { PostInteractionState } from "./profile-view";
import { CreatePostForm } from "./profile-create-post-form";
import { PostList } from "./profile-post-list";
import { Button } from "../ui/button";
import {
  artistRewards,
  certifications,
  followedArtists,
  rewards,
} from "@/data/profile-view";
import { Certification } from "@/types/artist";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Disc,
  Video,
  Users,
  Award,
  ExternalLink,
  Banknote,
  Play,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MusicPlayer } from "@/types/music-player";

interface ProfileTabsProps {
  isArtist: boolean;
  userDisplayName: string;
  userAvatar: string;
  userData: UserData; // For CreatePostForm
  postInteractions: PostInteractionState;
  onLike: (index: number) => void;
  onOpenComments: (index: number) => void;
  userTracks: Track[];
  onPlayTrack: (track: Track) => void;
  musicPlayer: MusicPlayer;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({
  isArtist,
  userDisplayName,
  userAvatar,
  userData,
  postInteractions,
  onLike,
  onOpenComments,
  userTracks,
  onPlayTrack,
  musicPlayer,
}) => (
  <Tabs defaultValue={isArtist ? "posts" : "artists"}>
    <TabsList
      className={`grid w-full px-4 bg-gray-800 ${
        isArtist ? "grid-cols-3" : "grid-cols-3"
      }`}
    >
      {isArtist ? (
        <>
          <TabsTrigger
            value="posts"
            className="data-[state=active]:bg-gray-700"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="rewards"
            className="data-[state=active]:bg-gray-700"
          >
            Rewards
          </TabsTrigger>
          <TabsTrigger
            value="certifications"
            className="data-[state=active]:bg-gray-700"
          >
            Certifications
          </TabsTrigger>
        </>
      ) : (
        <>
          <TabsTrigger
            value="artists"
            className="data-[state=active]:bg-gray-700"
          >
            Following
          </TabsTrigger>
          <TabsTrigger
            value="tracks"
            className="data-[state=active]:bg-gray-700"
          >
            Tracks
          </TabsTrigger>
          <TabsTrigger
            value="rewards"
            className="data-[state=active]:bg-gray-700"
          >
            My Rewards
          </TabsTrigger>
        </>
      )}
    </TabsList>

    {/* Posts Tab */}
    <TabsContent value="posts" className="px-4 mt-4 space-y-4">
      {isArtist && (
        <CreatePostForm
          userAvatar={userAvatar}
          userDisplayName={userDisplayName}
          userData={userData}
        />
      )}
      <PostList
        userDisplayName={userDisplayName}
        userAvatar={userAvatar}
        likedPosts={postInteractions.likedPosts}
        postComments={postInteractions.postComments}
        onLike={onLike}
        onOpenComments={onOpenComments}
      />
    </TabsContent>

    {/* Artist-specific Tabs */}
    {isArtist && (
      <>
        <TabsContent value="rewards" className="px-4 mt-4 space-y-3">
          <ArtistRewardsTab />
        </TabsContent>
        <TabsContent value="certifications" className="px-4 mt-4 space-y-3">
          <CertificationsTab />
        </TabsContent>
      </>
    )}

    {/* Fan-specific Tabs */}
    {!isArtist && (
      <>
        <TabsContent value="rewards" className="px-4 mt-4 space-y-3">
          <FanRewardsTab />
        </TabsContent>
        <TabsContent value="artists" className="px-4 mt-4 space-y-3">
          <FollowingTab />
        </TabsContent>
        <TabsContent value="tracks" className="px-4 mt-4 space-y-3">
          <TracksTab
            userTracks={userTracks}
            onPlayTrack={onPlayTrack}
            musicPlayer={musicPlayer}
          />
        </TabsContent>
      </>
    )}
  </Tabs>
);

// --- 12. Artist Rewards Tab ---

const ArtistRewardsTab: React.FC = () => (
  <>
    <div className="flex justify-between items-center">
      <h3 className="text-white font-medium">Manage Rewards</h3>
      <Button
        size="sm"
        className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
      >
        Add Reward
      </Button>
    </div>
    {artistRewards.map((reward, index) => (
      <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-sm text-white font-medium">{reward.title}</p>
              <p className="text-xs text-gray-400 mt-1">{reward.description}</p>
              <div className="flex items-center mt-1">
                <Badge
                  variant="outline"
                  className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                >
                  {reward.minTokens} $DROPS required
                </Badge>
                <p className="text-xs text-gray-500 ml-2">
                  {reward.subscribers} subscribers
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="h-8 bg-gray-700 text-white border-gray-600"
            >
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </>
);

// --- 13. Certifications Tab ---

const CertificationsTab: React.FC = () => (
  <>
    {certifications.map((cert: Certification) => (
      <Card
        key={cert.id}
        className="overflow-hidden bg-gray-800 border-gray-700"
      >
        <CardContent className="p-3">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-bright-yellow/20 flex items-center justify-center">
              {cert.type === "gold" && (
                <Disc className="h-6 w-6 text-bright-yellow" />
              )}
              {cert.type === "platinum" && (
                <Disc className="h-6 w-6 text-gray-300" />
              )}
              {cert.type === "views" && (
                <Video className="h-6 w-6 text-bright-yellow" />
              )}
              {cert.type === "soldout" && (
                <Users className="h-6 w-6 text-bright-yellow" />
              )}
              {cert.type === "award" && (
                <Award className="h-6 w-6 text-bright-yellow" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-white font-medium">{cert.title}</p>
                <Button
                  size="sm"
                  className={`${
                    cert.type === "gold"
                      ? "bg-[#F9BF15] hover:bg-[#e0ab13] text-black"
                      : cert.type === "platinum"
                        ? "bg-gray-400 hover:bg-gray-500"
                        : cert.type === "views"
                          ? "bg-red-600 hover:bg-red-700"
                          : cert.type === "soldout"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-full`}
                  onClick={() => {
                    if (cert.type === "gold" || cert.type === "platinum") {
                      window.open(
                        "https://open.spotify.com/artist/iamjuampi",
                        "_blank",
                      );
                    } else if (cert.type === "views") {
                      window.open("https://youtube.com", "_blank");
                    } else if (cert.type === "soldout") {
                      alert("Tour dates coming soon!");
                    } else {
                      alert("Award details coming soon!");
                    }
                  }}
                >
                  {cert.type === "gold"
                    ? "Stream"
                    : cert.type === "platinum"
                      ? "Stream"
                      : cert.type === "views"
                        ? "Watch"
                        : cert.type === "soldout"
                          ? "Tour Dates"
                          : "Award"}
                </Button>
              </div>
              <p className="text-xs text-gray-400">{cert.description}</p>
              <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </>
);

// --- 14. Fan Rewards Tab ---

const FanRewardsTab: React.FC = () => (
  <>
    <div className="mb-4">
      <h3 className="text-white font-medium mb-2">My Rewards</h3>
      <p className="text-sm text-gray-400">
        Exclusive rewards from artists you support
      </p>
    </div>

    {rewards.length > 0 ? (
      rewards.map((reward) => (
        <Card
          key={reward.id}
          className="overflow-hidden bg-gray-800 border-gray-700"
        >
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={reward.artistAvatar}
                  alt={reward.artistName}
                />
                <AvatarFallback>
                  {reward.artistName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="font-medium">{reward.title}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  From {reward.artistName}
                </p>
                <p className="text-xs text-gray-500 mt-1">{reward.date}</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="h-8 bg-gray-700 text-white border-gray-600"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                <span className="text-xs">View</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))
    ) : (
      <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
        <Banknote className="h-12 w-12 text-gray-600 mx-auto mb-3" />
        <p className="text-gray-300 font-medium">
          You don't have any rewards yet
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Buy tokens from your favorite artists to receive exclusive rewards
        </p>
        <Button className="mt-4 bg-bright-yellow hover:bg-bright-yellow-700 text-black">
          Explore Artists
        </Button>
      </div>
    )}
  </>
);

// --- 15. Following Tab ---

const FollowingTab: React.FC = () => (
  <>
    <div className="mb-4">
      <h3 className="text-white font-medium mb-2">Following</h3>
      <p className="text-sm text-gray-400">
        Artists you follow and support on DROPSLAND
      </p>
    </div>

    {followedArtists.map((artist) => (
      <Card
        key={artist.id}
        className="overflow-hidden bg-gray-800 border-gray-700 cursor-pointer"
        onClick={() => window.open(`/creator/${artist.id}`, "_self")}
      >
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={artist.avatar} alt={artist.name} />
              <AvatarFallback>
                {artist.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm text-white">
                <span className="font-medium">{artist.name}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {artist.followers} followers
              </p>
            </div>
            <Button
              size="sm"
              className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`/creator/${artist.id}`, "_self");
              }}
            >
              <Banknote className="h-4 w-4 mr-1" />
              Buy
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </>
);

// --- 16. Tracks Tab ---

interface TracksTabProps {
  userTracks: Track[];
  onPlayTrack: (track: Track) => void;
  musicPlayer: MusicPlayer;
}

const TracksTab: React.FC<TracksTabProps> = ({
  userTracks,
  onPlayTrack,
  musicPlayer,
}) => (
  <>
    <div className="mb-4">
      <h3 className="text-white font-medium mb-2">My Music Collection</h3>
      <p className="text-sm text-gray-400">
        Your saved tracks and favorite music
      </p>
    </div>

    {userTracks.length > 0 ? (
      userTracks.map((track) => (
        <Card
          key={track.id}
          className="overflow-hidden bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => onPlayTrack(track)}
        >
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={track.cover} alt={track.artist} />
                <AvatarFallback>
                  {track.artist.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-white font-medium">{track.title}</p>
                <p className="text-xs text-gray-400 mt-1">{track.artist}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {musicPlayer.formatTime(track.duration)}
                </p>
              </div>
              <Button
                size="sm"
                className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayTrack(track);
                }}
              >
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
            </div>
          </CardContent>
        </Card>
      ))
    ) : (
      <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
        <Disc className="h-12 w-12 text-gray-600 mx-auto mb-3" />
        <p className="text-gray-300 font-medium">No tracks saved yet</p>
        <p className="text-gray-400 text-sm mt-1">
          Start building your music collection by saving your favorite tracks
        </p>
        <Button className="mt-4 bg-bright-yellow hover:bg-bright-yellow-700 text-black">
          Explore Music
        </Button>
      </div>
    )}
  </>
);
```

## File: components/profile/profile-view.tsx

```typescript
"use client";

import { useState, useMemo } from "react";
import { Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import the useAuth hook and UserProfile component
import { useAuth } from "@/hooks/use-auth";
import UserProfile from "@/components/profile/user-profile";
import { useMusicPlayer } from "@/hooks/use-music-player";
import { musicTracks } from "@/lib/music-data";
import { LegacyProfileInfo } from "./legacy-profile-info";
import { LegacyProfileSettings } from "./legacy-profile-settings";
import { ProfileCommentDialog } from "./profile-comment-dialog";
import { ProfileTabs } from "./profile-tabs";

// --- Type Definitions ---
// (Ideally, these would be imported from your data files)
type Track = any;
type UserData = any; // Type from useAuth()

interface ProfileViewProps {
  username?: string;
}

export interface PostInteractionState {
  likedPosts: { [key: string]: boolean };
  postComments: { [key: string]: { author: string; text: string }[] };
}

export interface CommentDialogState {
  showCommentDialog: boolean;
  currentPostIndex: number | null;
  commentText: string;
}

// --- 1. Main ProfileView Component (Root) ---
export default function ProfileView({
  username: legacyUsername = "usuario",
}: ProfileViewProps) {
  const { balance, donated, userData, isArtist, logout, isNFIDUser, user } =
    useAuth();
  const musicPlayer = useMusicPlayer();
  const userTracks = musicTracks;

  // --- State for Post Interactions (Shared) ---
  const [postInteractions, setPostInteractions] =
    useState<PostInteractionState>({
      likedPosts: {},
      postComments: {},
    });

  // --- State for Comment Dialog (Shared) ---
  const [commentDialog, setCommentDialog] = useState<CommentDialogState>({
    showCommentDialog: false,
    currentPostIndex: null,
    commentText: "",
  });

  // --- Handlers for Post Interactions ---
  const handleLike = (postIndex: number) => {
    const postKey = `profile-${postIndex}`;
    setPostInteractions((prev) => ({
      ...prev,
      likedPosts: {
        ...prev.likedPosts,
        [postKey]: !prev.likedPosts[postKey],
      },
    }));
  };

  const handleOpenComments = (postIndex: number) => {
    setCommentDialog((prev) => ({
      ...prev,
      currentPostIndex: postIndex,
      showCommentDialog: true,
    }));
  };

  const handleSendComment = () => {
    const { commentText, currentPostIndex } = commentDialog;
    if (commentText.trim() && currentPostIndex !== null) {
      const postKey = `profile-${currentPostIndex}`;
      // This user name logic will be passed down
      const authorName = userData?.username || legacyProfile.name || "User";

      setPostInteractions((prev) => ({
        ...prev,
        postComments: {
          ...prev.postComments,
          [postKey]: [
            ...(prev.postComments[postKey] || []),
            { author: authorName, text: commentText.trim() },
          ],
        },
      }));

      setCommentDialog((prev) => ({
        ...prev,
        commentText: "",
        showCommentDialog: false,
      }));
    }
  };

  const handlePlayTrack = (track: Track) => {
    musicPlayer.playTrack(track);
  };

  // --- Data for Legacy View (Memoized) ---
  const legacyProfile = useMemo(() => {
    const isLegacyArtist = isArtist(); // Assuming isArtist() works for legacy too
    return {
      name: userData?.username || "musicfan", // Fallback logic from original
      handle: `@${userData?.username || "musicfan"}`,
      bio: isLegacyArtist
        ? "iamjuampi is a DJ, producer, and founder of Best Drops Ever."
        : "Music enthusiast and electronic music fan. Supporting my favorite artists on DROPSLAND.",
      category: isLegacyArtist ? "Techno / House" : "Fan",
      memberSince: "March 2025",
      isVerified: userData?.isVerified || false,
      avatarSrc:
        legacyUsername === "iamjuampi"
          ? "/avatars/juampi.jpg"
          : "/avatars/user.jpg",
      coverSrc: isLegacyArtist
        ? "/images/bdeeeee.jpg"
        : "bg-gradient-to-r from-gray-800 to-black",
      hasCoverImage: isLegacyArtist,
    };
  }, [userData, isArtist, legacyUsername]);

  // --- Determine User Display Info ---
  const isNFID = user && isNFIDUser();
  const userDisplayName = isNFID
    ? userData?.username || "User"
    : legacyProfile.name;
  const userAvatar = isNFID
    ? userData?.profilePhoto || "/avatars/user.jpg"
    : legacyProfile.avatarSrc;

  // --- Props for Shared Tabs ---
  const tabsProps = {
    isArtist: isArtist(),
    userDisplayName,
    userAvatar,
    postInteractions,
    onLike: handleLike,
    onOpenComments: handleOpenComments,
    userTracks,
    onPlayTrack: handlePlayTrack,
    musicPlayer,
    userData, // For CreatePostForm
  };

  return (
    <div className="pb-6 bg-gray-950">
      {isNFID ? (
        <NFIDProfileView
          user={user}
          userData={userData}
          isArtist={isArtist()}
          balance={balance}
          donated={donated}
          tabsProps={tabsProps}
        />
      ) : (
        <LegacyProfileView
          legacyProfile={legacyProfile}
          isArtist={isArtist()}
          balance={balance}
          donated={donated}
          logout={logout}
          tabsProps={tabsProps}
        />
      )}

      {/* Comment Dialog is rendered once at the root */}
      <ProfileCommentDialog
        isOpen={commentDialog.showCommentDialog}
        onOpenChange={(isOpen) =>
          setCommentDialog((prev) => ({ ...prev, showCommentDialog: isOpen }))
        }
        postIndex={commentDialog.currentPostIndex}
        comments={postInteractions.postComments}
        commentText={commentDialog.commentText}
        onCommentTextChange={(text) =>
          setCommentDialog((prev) => ({ ...prev, commentText: text }))
        }
        onSendComment={handleSendComment}
        userAvatar={userAvatar}
        userDisplayName={userDisplayName}
        legacyAvatarSrc={legacyProfile.avatarSrc} // For legacy comment authors
      />
    </div>
  );
}

// --- 2. NFID User Profile View ---
interface NFIDProfileViewProps {
  user: any;
  userData: UserData;
  isArtist: boolean;
  balance: number;
  donated: number;
  tabsProps: any;
}

const NFIDProfileView: React.FC<NFIDProfileViewProps> = ({
  user,
  userData,
  isArtist,
  balance,
  donated,
  tabsProps,
}) => {
  return (
    <>
      <UserProfile
        userId={user}
        username={userData?.username || "User"}
        handle={userData?.handle}
        profilePhoto={userData?.profilePhoto}
        coverPhoto={userData?.coverPhoto}
        isVerified={userData?.isVerified}
        type={userData?.type}
        bio={userData?.bio}
        followers={userData?.followers?.length || 0}
        following={userData?.following?.length || 0}
        genre={userData?.genre}
      />

      {isArtist && <NFIDArtistStats balance={balance} donated={donated} />}

      <div className="mt-6">
        <ProfileTabs {...tabsProps} />
      </div>
    </>
  );
};

// --- 3. NFID Artist Stats ---

interface NFIDArtistStatsProps {
  balance: number;
  donated: number;
}

const NFIDArtistStats: React.FC<NFIDArtistStatsProps> = ({
  balance,
  donated,
}) => (
  <div className="px-4 mt-6">
    <div className="flex gap-4">
      <div>
        <p className="text-sm text-gray-400">Balance</p>
        <div className="flex items-center">
          <span className="font-bold text-white">{balance} $DROPS</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">Purchased</p>
        <div className="flex items-center">
          <span className="font-bold text-white">{donated} $DROPS</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">Artists</p>
        <p className="font-bold text-white">8</p>
      </div>
    </div>
  </div>
);

// --- 4. Legacy User Profile View ---
interface LegacyProfileViewProps {
  legacyProfile: any;
  isArtist: boolean;
  balance: number;
  donated: number;
  logout: () => void;
  tabsProps: any;
}

export const LegacyProfileView: React.FC<LegacyProfileViewProps> = ({
  legacyProfile,
  isArtist,
  balance,
  donated,
  logout,
  tabsProps,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(legacyProfile.bio);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      console.log("Saving bio:", editedBio);
      // Here you would update the bio, e.g.,
      // legacyProfile.bio = editedBio; // This won't work as props are immutable
      // You'd need a state update function passed down if this were real
    } else {
      setEditedBio(legacyProfile.bio);
    }
  };

  return (
    <>
      <LegacyProfileHeader
        legacyProfile={legacyProfile}
        isEditing={isEditing}
        onEditToggle={handleEditToggle}
      />

      <LegacyProfileInfo
        legacyProfile={legacyProfile}
        isEditing={isEditing}
        editedBio={editedBio}
        onBioChange={setEditedBio}
        balance={balance}
        donated={donated}
      />

      <div className="mt-6">
        <ProfileTabs {...tabsProps} />
      </div>

      <LegacyProfileSettings logout={logout} isArtist={isArtist} />
    </>
  );
};

// --- 5. Legacy Profile Header ---
interface LegacyProfileHeaderProps {
  legacyProfile: any;
  isEditing: boolean;
  onEditToggle: () => void;
}

const LegacyProfileHeader: React.FC<LegacyProfileHeaderProps> = ({
  legacyProfile,
  isEditing,
  onEditToggle,
}) => (
  <div className="relative">
    {legacyProfile.hasCoverImage ? (
      <div className="h-32 relative overflow-hidden">
        <Image
          src={legacyProfile.coverSrc || "/placeholder.svg"}
          alt="Profile cover"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    ) : (
      <div className="h-32 bg-gradient-to-r from-gray-800 to-black"></div>
    )}
    <div className="absolute top-20 left-0 w-full px-4">
      <div className="flex justify-between">
        <Avatar className="h-24 w-24">
          <AvatarImage src={legacyProfile.avatarSrc} alt="Your profile" />
          <AvatarFallback>
            {legacyProfile.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-800 text-white border-gray-700"
          onClick={onEditToggle}
        >
          {isEditing ? (
            <span>Save</span>
          ) : (
            <>
              <Edit className="h-4 w-4 mr-1" />
              <span>Edit</span>
            </>
          )}
        </Button>
      </div>
    </div>
  </div>
);
```

## File: components/profile/user-profile.tsx

```typescript
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Edit, Camera } from "lucide-react";
import ProfileEditor from "./profile-editor";

interface UserProfileProps {
  userId: string;
  username: string;
  handle?: string;
  profilePhoto?: string;
  coverPhoto?: string;
  isVerified?: boolean;
  type?: "fan" | "artist";
  bio?: string;
  followers?: number;
  following?: number;
  genre?: string;
}

export default function UserProfile({
  userId,
  username,
  handle,
  profilePhoto,
  coverPhoto,
  isVerified = false,
  type = "fan",
  bio,
  followers = 0,
  following = 0,
  genre,
}: UserProfileProps) {
  const { user, userData, isNFIDUser } = useAuth();
  const [showEditor, setShowEditor] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: userId,
    username,
    handle,
    profilePhoto,
    coverPhoto,
    genre,
    bio,
  });

  const isOwnProfile = user === userId;
  const canEdit = isOwnProfile && isNFIDUser();

  const handleSaveProfile = (updatedUser: any) => {
    console.log("UserProfile: handleSaveProfile called with", updatedUser);
    setCurrentUser(updatedUser);
    setShowEditor(false);
  };

  const handleEditClick = () => {
    console.log("UserProfile: Edit button clicked, showing editor");
    setShowEditor(true);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 bg-gray-800">
        {currentUser.coverPhoto ? (
          <img
            src={currentUser.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <Camera className="h-12 w-12" />
          </div>
        )}

        {/* Edit Button for II Users */}
        {canEdit && (
          <Button
            onClick={handleEditClick}
            className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white border border-gray-600"
            size="sm"
          >
            <Edit className="h-4 w-4 mr-2" />
            Editar Perfil
          </Button>
        )}
      </div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="relative -mt-16 mb-4">
          <div className="w-32 h-32 bg-gray-800 rounded-full overflow-hidden border-4 border-gray-900">
            {currentUser.profilePhoto ? (
              <img
                src={currentUser.profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <Camera className="h-8 w-8" />
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">
              {currentUser.username}
            </h1>
            {isVerified && (
              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                ✓ Verificado
              </div>
            )}
            {type === "artist" && (
              <div className="bg-bright-yellow text-black px-2 py-1 rounded-full text-xs font-medium">
                Artista
              </div>
            )}
            {type === "fan" && currentUser.genre && (
              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {currentUser.genre}
              </div>
            )}
          </div>

          {currentUser.handle && (
            <p className="text-gray-400">@{currentUser.handle}</p>
          )}

          {currentUser.bio && (
            <p className="text-gray-300">{currentUser.bio}</p>
          )}
        </div>
      </div>

      {/* Profile Editor Modal */}
      {showEditor && (
        <ProfileEditor
          user={currentUser}
          onSave={handleSaveProfile}
          onCancel={() => setShowEditor(false)}
        />
      )}
    </div>
  );
}
```

## File: components/authentication/solana-wallet-button.tsx

```typescript
"use client";

import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export function SolanaWalletButton() {
  const { publicKey, connected } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/10 border border-transparent rounded-lg shadow-lg p-2">
        <div className="!bg-primary/80 !text-primary-foreground !rounded-md !px-4 !py-2 !text-sm !font-medium h-10 flex items-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/10 border border-transparent rounded-lg shadow-lg p-2">
      <WalletMultiButton className="!bg-primary/80 hover:!bg-primary/90 !text-primary-foreground !rounded-md !px-4 !py-2 !text-sm !font-medium !transition-colors" />
      {connected && publicKey && (
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Connected: {publicKey.toBase58().slice(0, 4)}...
          {publicKey.toBase58().slice(-4)}
        </div>
      )}
    </div>
  );
}
```

## File: components/explore/creators-list.tsx

```typescript
"use client"

import { useState } from "react"
import { Banknote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Artistas reales
const ARTISTS = [
  {
    id: "1",
    name: "iamjuampi",
    handle: "@iamjuampi",
    avatar: "/avatars/juampi.jpg",
    genre: "Tech-House",
    description: "DJ y productor especializado en techno y house. Creador de Best Drops Ever.",
    supporters: 1850,
    blgReceived: 1850,
    featured: true,
  },
  {
    id: "2",
    name: "banger",
    handle: "@banger",
    avatar: "/avatars/banger.jpg",
    genre: "DNB y Tech-House",
    description: "Productor de house con influencias de disco y funk. Conocido por sus ritmos enérgicos.",
    supporters: 2100,
    blgReceived: 2100,
    featured: true,
  },
  {
    id: "3",
    name: "Nicola Marti",
    handle: "@nicolamarti",
    avatar: "/avatars/nicola.jpg",
    genre: "Tech-House",
    description: "Artista italiano de techno melódico con un estilo único y atmosférico.",
    supporters: 1750,
    blgReceived: 1750,
    featured: true,
  },
  {
    id: "4",
    name: "FLUSH",
    handle: "@flush",
    avatar: "/avatars/flush.jpg",
    genre: "Dubstep",
    description: "Productor de drum & bass con un enfoque en sonidos futuristas y experimentales.",
    supporters: 1320,
    blgReceived: 1320,
    featured: false,
  },
  {
    id: "5",
    name: "DaniløDR",
    handle: "@daniloDR",
    avatar: "/avatars/danilo.jpg",
    genre: "Trap",
    description: "Creador de trance progresivo con elementos de música clásica y ambient.",
    supporters: 980,
    blgReceived: 980,
    featured: false,
  },
  {
    id: "6",
    name: "Spitflux",
    handle: "@spitflux",
    avatar: "/avatars/spitflux.jpg",
    genre: "Dubstep",
    description: "Innovador en la escena dubstep con un estilo agresivo y detallado.",
    supporters: 1450,
    blgReceived: 1450,
    featured: false,
  },
  {
    id: "7",
    name: "AXS",
    handle: "@axs",
    avatar: "/avatars/axs.jpg",
    genre: "Riddim",
    description: "Productor de techno industrial con influencias de EBM y post-punk.",
    supporters: 1680,
    blgReceived: 1680,
    featured: true,
  },
  {
    id: "8",
    name: "Kr4D",
    handle: "@kr4d",
    avatar: "/avatars/kr4d.jpg",
    genre: "Electro",
    description: "Artista de ambient y música experimental con enfoque en paisajes sonoros inmersivos.",
    supporters: 890,
    blgReceived: 890,
    featured: false,
  },
]

export default function ArtistsList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArtists = ARTISTS.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Search artists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>

      <div className="space-y-3">
        {filteredArtists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden bg-gray-800 border-gray-700">
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={artist.avatar} alt={artist.name} />
                  <AvatarFallback>{artist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <p className="font-medium text-white">{artist.name}</p>
                    {artist.featured && <Star className="h-3 w-3 text-bright-yellow ml-1" />}
                  </div>
                  <p className="text-xs text-gray-400">{artist.handle}</p>
                  <div className="flex items-center mt-1 text-xs">
                    <Banknote className="h-3 w-3 text-bright-yellow mr-1" />
                    <span>{artist.blgReceived.toLocaleString()} $DROPS</span>
                    <span className="mx-1">•</span>
                    <span>{artist.supporters.toLocaleString()} seguidores</span>
                  </div>
                </div>
                <Button size="sm" className="bg-bright-yellow hover:bg-bright-yellow-700 text-black">
                  <Banknote className="h-4 w-4 mr-1" />
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
```

## File: components/explore/explore-screen.tsx

```typescript
"use client";

import { Search, Filter } from "lucide-react";
import Image from "next/image";

// Mock data for categories and creators
const CATEGORIES = [
  "All",
  "Art",
  "Music",
  "Tech",
  "Gaming",
  "Writing",
  "Cooking",
];

type Creator = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  category: string;
  description: string;
  blgReceived: number;
  featured: boolean;
};

const CREATORS: Creator[] = [
  {
    id: "1",
    name: "Elena Rodriguez",
    handle: "@elenadraws",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Art",
    description: "Digital artist creating vibrant illustrations",
    blgReceived: 8750,
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Chen",
    handle: "@marcusmusic",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Music",
    description: "Independent musician sharing original compositions",
    blgReceived: 6320,
    featured: false,
  },
  {
    id: "3",
    name: "Sophia Williams",
    handle: "@sophiatech",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Tech",
    description: "Tutorials and insights on blockchain development",
    blgReceived: 12450,
    featured: true,
  },
  {
    id: "4",
    name: "Jamal Thompson",
    handle: "@jamalgaming",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Gaming",
    description: "Game reviews and live streaming of indie games",
    blgReceived: 4890,
    featured: false,
  },
  {
    id: "5",
    name: "Aisha Patel",
    handle: "@aishawriter",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Writing",
    description: "Short stories and poetry from around the world",
    blgReceived: 3750,
    featured: false,
  },
  {
    id: "6",
    name: "Leo Kim",
    handle: "@leocooks",
    avatar: "/placeholder.svg?height=60&width=60",
    category: "Cooking",
    description: "Fusion recipes and culinary adventures",
    blgReceived: 7120,
    featured: true,
  },
];

interface ExploreScreenProps {
  onSelectCreator: (creator: Creator) => void;
}

export default function ExploreScreen({ onSelectCreator }: ExploreScreenProps) {
  return (
    <div className="h-full overflow-auto pb-20">
      <div className="bg-primary p-4">
        <h1 className="text-white font-bold text-xl mb-4">Explore Creators</h1>
        <div className="bg-white/20 rounded-full p-2 flex items-center mb-4">
          <Search className="h-4 w-4 text-white mr-2" />
          <input
            type="text"
            placeholder="Search creators..."
            className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm"
          />
        </div>

        <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
          {CATEGORIES.map((category, index) => (
            <button
              key={index}
              className={`mx-1 px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                index === 0 ? "bg-white text-primary" : "bg-white/20 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Featured Creators</h2>
          <button className="flex items-center text-gray-600 text-sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {CREATORS.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              onClick={() => onSelectCreator(creator)}
            >
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={creator.avatar || "/placeholder.svg"}
                      alt={creator.name}
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{creator.name}</h3>
                      {creator.featured && (
                        <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs">{creator.handle}</p>
                  </div>
                </div>
                <p className="text-sm mt-2">{creator.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {creator.category}
                  </span>
                  <span className="text-xs text-gray-600 flex items-center">
                    <Image
                      src="/beans-logo.svg"
                      alt="BLG"
                      width={12}
                      height={12}
                      className="mr-1"
                    />
                    {creator.blgReceived.toLocaleString()} BLG received
                  </span>
                </div>
              </div>
              <div className="border-t px-4 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500">View profile</span>
                <button className="bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## File: components/explore/explore-view.tsx

```typescript
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  TrendingUp,
  Music,
  Headphones,
  Guitar,
  Drum,
  Mic,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MusicCard from "@/components/music-player/music-card";
import { useMusicPlayer } from "@/hooks/use-music-player";

interface Artist {
  id: string;
  name: string;
  avatar: string;
  genre: string;
  followers: number;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioUrl: string;
}

interface Genre {
  id: string;
  name: string;
  icon: string;
  artists: number;
}

export function ExploreView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const { playTrack } = useMusicPlayer();

  // Sample data
  const trendingArtists: Artist[] = [
    {
      id: "1",
      name: "Flush",
      avatar: "/avatars/flush.jpg",
      genre: "Electronic",
      followers: 15420,
    },
    {
      id: "2",
      name: "Danilødr",
      avatar: "/avatars/danilodr.jpg",
      genre: "Dubstep",
      followers: 12890,
    },
    {
      id: "3",
      name: "Kr4D",
      avatar: "/avatars/kr4d.jpg",
      genre: "Bass",
      followers: 9870,
    },
    {
      id: "4",
      name: "AXS",
      avatar: "/avatars/axs.jpg",
      genre: "Trap",
      followers: 11230,
    },
  ];

  const popularTracks: Track[] = [
    {
      id: "1",
      title: "Best Drops Ever",
      artist: "Flush",
      album: "Dropsland Collection",
      duration: 225,
      cover: "/covers/best-drops-ever.jpg",
      audioUrl: "/audio/best-drops-ever.mp3",
    },
    {
      id: "2",
      title: "Broken",
      artist: "Danilødr",
      album: "Dropsland Collection",
      duration: 252,
      cover: "/covers/broken.jpg",
      audioUrl: "/audio/broken.mp3",
    },
    {
      id: "3",
      title: "Sadtisfied",
      artist: "Flush",
      album: "Dropsland Collection",
      duration: 208,
      cover: "/covers/sadtisfied.jpg",
      audioUrl: "/audio/sadtisfied.mp3",
    },
    {
      id: "4",
      title: "Riddim Tutorial",
      artist: "AXS",
      album: "Dropsland Collection",
      duration: 315,
      cover: "/covers/riddim-tutorial.jpg",
      audioUrl: "/audio/riddim-tutorial.mp3",
    },
    {
      id: "5",
      title: "Kingman",
      artist: "AXS, Brolow",
      album: "Dropsland Collection",
      duration: 273,
      cover: "/covers/kingman.jpg",
      audioUrl: "/audio/kingman.mp3",
    },
    {
      id: "6",
      title: "Body",
      artist: "Kr4D",
      album: "Dropsland Collection",
      duration: 232,
      cover: "/covers/body.jpg",
      audioUrl: "/audio/body.mp3",
    },
    {
      id: "7",
      title: "Travel",
      artist: "Flush",
      album: "Dropsland Collection",
      duration: 248,
      cover: "/covers/travel.jpg",
      audioUrl: "/audio/travel.mp3",
    },
    {
      id: "8",
      title: "Arriving",
      artist: "Flush",
      album: "Dropsland Collection",
      duration: 235,
      cover: "/covers/arriving.jpg",
      audioUrl: "/audio/arriving.mp3",
    },
  ];

  const genres: Genre[] = [
    { id: "1", name: "Dubstep", icon: "🎵", artists: 45 },
    { id: "2", name: "Trap", icon: "🎧", artists: 32 },
    { id: "3", name: "Bass", icon: "🥁", artists: 28 },
    { id: "4", name: "Electronic", icon: "🎤", artists: 56 },
  ];

  const handleTrackLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  const handleTrackPlay = (track: Track) => {
    playTrack(track);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold mb-4">Explore</h1>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search artists, tracks, or genres..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800 border-gray-700 text-white"
          >
            <Filter className="h-4 w-4 mr-1" />
            All
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800 border-gray-700 text-white"
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            Trending
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800 border-gray-700 text-white"
          >
            <Music className="h-4 w-4 mr-1" />
            New
          </Button>
        </div>
      </div>

      {/* Trending Artists */}
      <div className="px-4 pt-6">
        <h2 className="text-lg font-semibold mb-3 text-white">
          Trending Artists
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {trendingArtists.map((artist) => (
            <Card key={artist.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={artist.avatar} alt={artist.name} />
                    <AvatarFallback>
                      {artist.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{artist.name}</h3>
                    <p className="text-sm text-gray-400">{artist.genre}</p>
                    <p className="text-xs text-gray-500">
                      {artist.followers} followers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Tracks */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-3 text-white">
          Popular Tracks
        </h2>
        <div className="space-y-2">
          {popularTracks.map((track) => (
            <MusicCard
              key={track.id}
              track={track}
              onLike={handleTrackLike}
              isLiked={likedTracks.has(track.id)}
            />
          ))}
        </div>
      </div>

      {/* Discover Genres */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-3 text-white">
          Discover Genres
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {genres.map((genre) => (
            <Card key={genre.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {genre.icon}
                    </span>
                  </div>
                  <h3 className="font-medium text-white">{genre.name}</h3>
                  <p className="text-sm text-gray-400">
                    {genre.artists} artists
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## File: components/explore/loading-creators.tsx

```typescript
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingCreators() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Skeleton className="mb-2 h-5 w-16" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-full" />
            <div className="mt-4 flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-9 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
```

## File: components/home/activity-screen.tsx

```typescript
"use client";

import { ArrowDown, ArrowUp, Heart, MessageCircle, User } from "lucide-react";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Importar el hook useAuth
import { useAuth } from "@/hooks/use-auth";

// Mock data for activity
const ACTIVITIES = [
  {
    id: "a1",
    type: "donation_sent",
    user: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    amount: 5,
    time: "2 hours ago",
  },
  {
    id: "a2",
    type: "purchase",
    amount: 50,
    wldAmount: 0.5,
    time: "1 day ago",
  },
  {
    id: "a3",
    type: "donation_received",
    user: {
      name: "Anonymous",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    amount: 10,
    time: "3 days ago",
  },
  {
    id: "a4",
    type: "donation_sent",
    user: {
      name: "Marcus Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    amount: 20,
    time: "1 week ago",
  },
  {
    id: "a5",
    type: "purchase",
    amount: 100,
    wldAmount: 1,
    time: "2 weeks ago",
  },
];

// Mock data for social notifications
const SOCIAL_NOTIFICATIONS = [
  {
    id: "n1",
    type: "like",
    user: {
      name: "Juan Pablo",
      avatar: "/avatars/user.jpg",
    },
    action: "liked your post",
    postContent:
      "Just finished a new track! Can't wait to share it with you all.",
    time: "5 minutes ago",
  },
  {
    id: "n2",
    type: "comment",
    user: {
      name: "Banger",
      avatar: "/avatars/banger.jpg",
    },
    action: "commented on your post",
    comment: "Amazing track! 🔥",
    time: "1 hour ago",
  },
  {
    id: "n3",
    type: "follow",
    user: {
      name: "Nicola Marti",
      avatar: "/avatars/nicola.jpg",
    },
    action: "started following you",
    time: "2 hours ago",
  },
  {
    id: "n4",
    type: "like",
    user: {
      name: "AXS",
      avatar: "/avatars/axs.jpg",
    },
    action: "liked your post",
    postContent: "Working on something special for my supporters. Stay tuned!",
    time: "3 hours ago",
  },
  {
    id: "n5",
    type: "comment",
    user: {
      name: "FLUSH",
      avatar: "/avatars/flush.jpg",
    },
    action: "commented on your post",
    comment: "Can't wait to hear it! 🎵",
    time: "1 day ago",
  },
];

// Modificar la función ActivityScreen para mostrar el balance actual
export default function ActivityScreen() {
  const { balance } = useAuth(); // Obtener el balance del contexto

  return (
    <div className="h-full overflow-auto pb-20">
      <div className="bg-primary p-4">
        <h1 className="text-white font-bold text-xl mb-4">Activity</h1>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Available Balance</p>
              <div className="flex items-center mt-1">
                <BanknoteIcon className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold">{balance} DROPS</span>
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              Buy More
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="social" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger
              value="social"
              className="data-[state=active]:bg-teal-600"
            >
              Social
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-teal-600"
            >
              Transactions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="social" className="mt-4">
            <div className="space-y-3">
              {SOCIAL_NOTIFICATIONS.map((notification) => (
                <Card
                  key={notification.id}
                  className="bg-gray-800 border-gray-700"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={notification.user.avatar}
                          alt={notification.user.name}
                        />
                        <AvatarFallback>
                          {notification.user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">
                            {notification.user.name}
                          </span>
                          <span className="text-gray-400">
                            {notification.action}
                          </span>
                          {notification.type === "like" && (
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                          )}
                          {notification.type === "comment" && (
                            <MessageCircle className="h-4 w-4 text-blue-500" />
                          )}
                          {notification.type === "follow" && (
                            <User className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        {notification.postContent && (
                          <p className="text-sm text-gray-300 mb-1">
                            "{notification.postContent}"
                          </p>
                        )}
                        {notification.comment && (
                          <p className="text-sm text-gray-300 mb-1">
                            "{notification.comment}"
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg text-white">
                Transaction History
              </h2>
              <button className="text-teal-400 text-sm font-medium">
                Filter
              </button>
            </div>

            <div className="space-y-3">
              {ACTIVITIES.map((activity) => (
                <Card key={activity.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    {activity.type === "donation_sent" && (
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                          <ArrowUp className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-white">
                              Donation to {activity.user?.name || "Unknown"}
                            </p>
                            <p className="text-red-500 font-medium">
                              -{activity.amount} DROPS
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    )}

                    {activity.type === "donation_received" && (
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                          <ArrowDown className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-white">
                              Donation from {activity.user?.name || "Unknown"}
                            </p>
                            <p className="text-green-500 font-medium">
                              +{activity.amount} DROPS
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    )}

                    {activity.type === "purchase" && (
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <BanknoteIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-white">
                              Purchased DROPS
                            </p>
                            <p className="text-green-500 font-medium">
                              +{activity.amount} DROPS
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">
                              {activity.time}
                            </p>
                            <p className="text-xs text-gray-500">
                              -{activity.wldAmount} WLD
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
```

## File: components/home/activity-view.tsx

```typescript
"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { userDataService } from "@/lib/user-data-service";
import { Activity } from "@/lib/types";
import { BanknoteIcon } from "@/components/icons/banknote-icon";

interface ActivityViewProps {
  onSelectArtist: (artistId: string) => void;
}

export default function ActivityView({ onSelectArtist }: ActivityViewProps) {
  const { userData, isArtist, user } = useAuth();
  const [activities, setActivities] = useState<Activity[]>([]);

  // Load activities for the current user
  useEffect(() => {
    if (user) {
      const userActivities = userDataService.getActivitiesForUser(user);
      setActivities(userActivities);
    }
  }, [user]);

  // Function to redirect to artist related to the activity
  const handleSelectArtist = (artistId: string) => {
    console.log("Activity view - Selected artist:", artistId);
    onSelectArtist(artistId);
  };

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return date.toLocaleDateString();
  };

  return (
    <div className="p-4 pb-6 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-xl font-bold mb-4 text-white">Activity</h1>

      {activities.length > 0 ? (
        <div className="space-y-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onSelectArtist={handleSelectArtist}
              formatTimeAgo={formatTimeAgo}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-300 font-medium">
            You don't have any notifications yet
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {isArtist()
              ? "Interactions with your followers will appear here"
              : "Updates from artists you follow will appear here"}
          </p>
        </div>
      )}
    </div>
  );
}

function ActivityCard({
  activity,
  onSelectArtist,
  formatTimeAgo,
}: {
  activity: Activity;
  onSelectArtist: (artistId: string) => void;
  formatTimeAgo: (dateString: string) => string;
}) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700">
      <CardContent className="p-3">
        <div className="flex gap-3">
          <Avatar
            className="h-10 w-10 cursor-pointer"
            onClick={() => onSelectArtist(activity.userId)}
          >
            <AvatarImage src={activity.userAvatar} alt={activity.userName} />
            <AvatarFallback>
              {activity.userName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-white">
              <span
                className="font-medium cursor-pointer"
                onClick={() => onSelectArtist(activity.userId)}
              >
                {activity.userName}
              </span>{" "}
              {activity.action}
            </p>
            {activity.message && (
              <p className="text-sm mt-1 bg-gray-700 p-2 rounded-lg text-gray-300">
                {activity.message}
              </p>
            )}
            <div className="flex items-center mt-1">
              <p className="text-xs text-gray-400">
                {formatTimeAgo(activity.createdAt)}
              </p>
              {activity.amount && activity.tokenName && (
                <div className="flex items-center text-bright-yellow text-xs font-medium ml-2">
                  <BanknoteIcon className="h-4 w-4 mr-1" />
                  <span>
                    {activity.amount} ${activity.tokenName}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: components/home/home-view.tsx

```typescript
"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Send,
  ImageIcon,
  MapPin,
  Hash,
  BarChart2,
  Paperclip,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { useAuth } from "@/hooks/use-auth";
import { userDataService } from "@/lib/user-data-service";
import { Post, Activity, FeedItem } from "@/lib/types";
import MusicPlayer from "@/components/music-player/music-player";

interface HomeViewProps {
  onSelectArtist: (artistId: string) => void;
  onNavigateToExplore?: () => void;
}

export default function HomeView({
  onSelectArtist,
  onNavigateToExplore,
}: HomeViewProps) {
  const { userData, isArtist, user } = useAuth();
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showPollCreator, setShowPollCreator] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true); // Add state for welcome banner visibility

  // Load feed data
  useEffect(() => {
    if (user) {
      const feed = userDataService.getFeedForUser(user);
      setFeedItems(feed);
    }
  }, [user]);

  const handleSelectArtist = (artistId: string) => {
    console.log("Home view - Selected artist:", artistId);
    onSelectArtist(artistId);
  };

  const handleLike = (postId: string) => {
    if (!user) return;

    const success = userDataService.likePost(user, postId);
    if (success) {
      // Refresh feed
      const feed = userDataService.getFeedForUser(user);
      setFeedItems(feed);
    }
  };

  const handleOpenComments = (postId: string) => {
    setCurrentPostId(postId);
    setShowCommentDialog(true);
  };

  const handleSendComment = () => {
    if (!commentText.trim() || !currentPostId || !user) return;

    const comment = userDataService.addComment(
      user,
      currentPostId,
      commentText,
    );
    if (comment) {
      // Refresh feed
      const feed = userDataService.getFeedForUser(user);
      setFeedItems(feed);
      setCommentText("");
    }
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim() || !user || !userData) return;

    let content = newPostContent;

    // Add location if selected
    if (selectedLocation) {
      content += ` 📍 ${selectedLocation}`;
    }

    // Add poll if created
    if (pollOptions.some((option) => option.trim())) {
      content += `\n\n📊 Poll:\n${pollOptions
        .filter((option) => option.trim())
        .map((option, index) => `${index + 1}. ${option}`)
        .join("\n")}`;
    }

    const postData = {
      authorId: user,
      authorName: userData.username,
      authorAvatar: userData.profilePhoto || "/avatars/user.jpg",
      content: content,
      image: previewUrl || undefined,
      type: "post" as const,
      tags: extractTags(newPostContent),
    };

    const newPost = userDataService.createPost(postData);
    if (newPost) {
      // Refresh feed
      const feed = userDataService.getFeedForUser(user);
      setFeedItems(feed);
      setNewPostContent("");
      setNewPostImage(null);
      setPreviewUrl(null);
      setSelectedLocation("");
      setPollOptions(["", ""]);
      setSelectedFile(null);
      setShowCreatePost(false);
    }
  };

  const extractTags = (content: string): string[] => {
    const hashtagRegex = /#(\w+)/g;
    const matches = content.match(hashtagRegex);
    return matches ? matches.map((tag) => tag.slice(1)) : [];
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }

      setNewPostImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => handleImageUpload(e as any);
    input.click();
  };

  const handleLocationClick = () => {
    setShowLocationPicker(true);
  };

  const handleHashtagClick = () => {
    setNewPostContent((prev) => prev + " #");
  };

  const handlePollClick = () => {
    setShowPollCreator(true);
  };

  const handleFileClick = () => {
    setShowFileUpload(true);
  };

  const handleAddPollOption = () => {
    setPollOptions((prev) => [...prev, ""]);
  };

  const handlePollOptionChange = (index: number, value: string) => {
    setPollOptions((prev) =>
      prev.map((option, i) => (i === index ? value : option)),
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("Please select a file smaller than 10MB");
        return;
      }
      setSelectedFile(file);
      setNewPostContent((prev) => prev + ` 📎 ${file.name}`);
    }
  };

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return date.toLocaleDateString();
  };

  const handleTrackChange = (track: any) => {
    console.log("Now playing:", track.title, "by", track.artist);
  };

  const handleTrackLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  const renderFeedItem = (item: FeedItem) => {
    if (item.type === "post") {
      const post = item.data as Post;
      const isLiked = user ? post.likes.includes(user) : false;

      return (
        <Card key={item.id} className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <Avatar
                className="h-8 w-8 mr-2 cursor-pointer"
                onClick={() => handleSelectArtist(post.authorId)}
              >
                <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                <AvatarFallback>
                  {post.authorName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p
                  className="font-medium text-white cursor-pointer"
                  onClick={() => handleSelectArtist(post.authorId)}
                >
                  {post.authorName}
                </p>
                <p className="text-gray-400 text-xs">
                  {formatTimeAgo(post.createdAt)}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{post.content}</p>
            {post.image && (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post image"
                  className="w-full h-auto"
                />
              </div>
            )}
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <button
                className="flex items-center"
                onClick={() => handleLike(post.id)}
                disabled={!user}
              >
                <Heart
                  className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                />
                {post.likes.length}
              </button>
              <button
                className="flex items-center"
                onClick={() => handleOpenComments(post.id)}
                disabled={!user}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                {post.comments.length}
              </button>
              <button className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </CardContent>
        </Card>
      );
    } else if (item.type === "activity") {
      const activity = item.data as Activity;

      return (
        <Card key={item.id} className="bg-gray-800 border-gray-700">
          <CardContent className="p-3">
            <div className="flex gap-3">
              <Avatar
                className="h-10 w-10 cursor-pointer"
                onClick={() => handleSelectArtist(activity.userId)}
              >
                <AvatarImage
                  src={activity.userAvatar}
                  alt={activity.userName}
                />
                <AvatarFallback>
                  {activity.userName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span
                    className="font-medium cursor-pointer"
                    onClick={() => handleSelectArtist(activity.userId)}
                  >
                    {activity.userName}
                  </span>{" "}
                  {activity.action}
                </p>
                {activity.message && (
                  <p className="text-sm mt-1 bg-gray-700 p-2 rounded-lg text-gray-300">
                    {activity.message}
                  </p>
                )}
                <div className="flex items-center mt-1">
                  <p className="text-xs text-gray-400">
                    {formatTimeAgo(activity.createdAt)}
                  </p>
                  {activity.amount && activity.tokenName && (
                    <div className="flex items-center text-bright-yellow text-xs font-medium ml-2">
                      <BanknoteIcon className="h-4 w-4 mr-1" />
                      <span>
                        {activity.amount} ${activity.tokenName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  return (
    <div className="pb-6 overflow-auto bg-gray-50 dark:bg-gray-950">
      {/* Featured Artists */}
      <div className="px-4 pt-6">
        <h2 className="text-lg font-semibold mb-3 text-white">
          Featured Artists
        </h2>
        <div className="flex overflow-x-auto gap-1 pb-2 -mx-4 px-4">
          {featuredArtists.map((artist) => (
            <div
              key={artist.id}
              className="flex-shrink-0 w-28"
              onClick={() => handleSelectArtist(artist.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={artist.avatar} alt={artist.name} />
                  <AvatarFallback>
                    {artist.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="font-medium text-sm mt-2 text-center text-white">
                  {artist.name}
                </p>
                <p className="text-xs text-gray-400">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message for fans */}
      {!isArtist() && showWelcomeBanner && (
        <div className="px-4 mt-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">
                    Welcome to DROPSLAND
                  </h3>
                  <p className="text-sm text-gray-300">
                    Here you can discover artists, buy their tokens and receive
                    exclusive rewards.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                    >
                      <BanknoteIcon className="h-5 w-5 mr-1" />
                      Buy Tokens
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-700 text-white border-gray-600"
                      onClick={onNavigateToExplore}
                    >
                      Explore Artists
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWelcomeBanner(false)}
                  className="text-gray-400 hover:text-white ml-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tabs */}
      <div className="px-4 mt-6">
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-teal-600"
            >
              Feed
            </TabsTrigger>
            <TabsTrigger
              value="music"
              className="data-[state=active]:bg-teal-600"
            >
              Player
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="mt-4">
            {/* What's on your USB */}
            {user && (
              <div className="mb-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={
                            userData?.profilePhoto &&
                            userData.profilePhoto.trim() !== ""
                              ? userData.profilePhoto
                              : "/avatars/user.jpg"
                          }
                          alt="Your profile"
                          onError={(e) => {
                            e.currentTarget.src = "/avatars/user.jpg";
                          }}
                        />
                        <AvatarFallback>
                          {userData?.username?.substring(0, 2).toUpperCase() ||
                            "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="What's on your USB?"
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white resize-none mb-3"
                          rows={3}
                        />
                        <div className="flex flex-wrap gap-4 mb-3 justify-start">
                          <ImageIcon
                            className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                            onClick={handleImageClick}
                          />
                          <MapPin
                            className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                            onClick={handleLocationClick}
                          />
                          <Hash
                            className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                            onClick={handleHashtagClick}
                          />
                          <BarChart2
                            className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                            onClick={handlePollClick}
                          />
                          <Paperclip
                            className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                            onClick={handleFileClick}
                          />
                        </div>
                        <div className="flex justify-end">
                          <Button
                            size="sm"
                            onClick={handleCreatePost}
                            disabled={!newPostContent.trim()}
                            className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="space-y-3">
              {feedItems.length > 0 ? (
                feedItems.map(renderFeedItem)
              ) : (
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-300">No posts yet</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Follow some artists to see their posts here
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-4">
            <MusicPlayer onTrackChange={handleTrackChange} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Comment Dialog */}
      <Dialog open={showCommentDialog} onOpenChange={setShowCommentDialog}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Comments</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="max-h-[300px] overflow-y-auto space-y-3">
              {currentPostId &&
                (() => {
                  const allPosts = userDataService.getAllPosts();
                  const post = allPosts.find(
                    (p: any) => p.id === currentPostId,
                  );
                  return post?.comments.map((comment: any, i: number) => (
                    <div key={i} className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={comment.authorAvatar}
                          alt={comment.authorName}
                        />
                        <AvatarFallback>
                          {comment.authorName.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-gray-700 p-2 rounded-lg">
                        <p className="text-sm font-medium text-white">
                          {comment.authorName}
                        </p>
                        <p className="text-sm text-gray-300">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ));
                })()}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 bg-gray-700 border-gray-600 text-white"
              />
              <Button
                onClick={handleSendComment}
                disabled={!commentText.trim()}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Send
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Location Picker Dialog */}
      <Dialog open={showLocationPicker} onOpenChange={setShowLocationPicker}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Add Location</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter location..."
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => setShowLocationPicker(false)}
                variant="outline"
                className="bg-gray-700 border-gray-600 text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowLocationPicker(false)}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Poll Creator Dialog */}
      <Dialog open={showPollCreator} onOpenChange={setShowPollCreator}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Create Poll</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm">Add poll options:</p>
            {pollOptions.map((option, index) => (
              <Input
                key={index}
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handlePollOptionChange(index, e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            ))}
            <Button
              onClick={handleAddPollOption}
              variant="outline"
              className="bg-gray-700 border-gray-600 text-white"
            >
              Add Option
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowPollCreator(false)}
                variant="outline"
                className="bg-gray-700 border-gray-600 text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowPollCreator(false)}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Create Poll
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* File Upload Dialog */}
      <Dialog open={showFileUpload} onOpenChange={setShowFileUpload}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Attach File</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="file"
              onChange={handleFileUpload}
              className="bg-gray-700 border-gray-600 text-white p-2 rounded"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => setShowFileUpload(false)}
                variant="outline"
                className="bg-gray-700 border-gray-600 text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowFileUpload(false)}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Attach
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Featured artists data
const featuredArtists = [
  {
    id: "iamjuampi",
    name: "iamjuampi",
    genre: "Techno / House",
    avatar: "/avatars/juampi.jpg",
  },
  {
    id: "banger",
    name: "banger",
    genre: "Techno",
    avatar: "/avatars/banger.jpg",
  },
  {
    id: "nicolamarti",
    name: "Nicola Marti",
    genre: "House",
    avatar: "/avatars/nicola.jpg",
  },
  {
    id: "axs",
    name: "AXS",
    genre: "Techno",
    avatar: "/avatars/axs.jpg",
  },
];
```

## File: components/icons/banknote-icon.tsx

```typescript
interface BanknoteIconProps {
  className?: string
  size?: number
}

export function BanknoteIcon({ className = "", size = 24 }: BanknoteIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M6 12h.01M18 12h.01" />
      <g transform="translate(0,-0.04747867)">
        <path
          d="m 8.0269266,15.374299 h 2.8848884 c 1.537341,0 2.685603,-0.427038 3.482743,-1.224179 0.711732,-0.711731 1.091322,-1.622749 1.091322,-2.619174 0,-0.80663 -0.227754,-1.451935 -0.721221,-1.9454026 C 14.261701,9.0825864 13.455071,8.7314647 12.164463,8.7314647 H 9.8110023 Z"
          style={{
            fontFamily: "'Gotham Ultra'",
            fontSpecification: "'Gotham Ultra'",
            strokeWidth: 1.77933,
          }}
        />
      </g>
    </svg>
  )
}
```

## File: components/icons/banknote-svg.tsx

```typescript
interface BanknoteSvgProps {
  className?: string
}

export function BanknoteSvg({ className = "" }: BanknoteSvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M6 12h.01M18 12h.01" />
      <g transform="translate(0,-0.04747867)">
        <path
          d="m 8.0269266,15.374299 h 2.8848884 c 1.537341,0 2.685603,-0.427038 3.482743,-1.224179 0.711732,-0.711731 1.091322,-1.622749 1.091322,-2.619174 0,-0.80663 -0.227754,-1.451935 -0.721221,-1.9454026 C 14.261701,9.0825864 13.455071,8.7314647 12.164463,8.7314647 H 9.8110023 Z"
          style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra';stroke-width:1.77933"
        />
      </g>
    </svg>
  )
}
```

## File: components/music-player/expanded-player.tsx

```typescript
"use client"

import { useState } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
  MoreHorizontal,
  List,
  Minimize2,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMusicPlayer } from "@/hooks/use-music-player"
import { musicTracks } from "@/lib/music-data"

export default function ExpandedPlayer() {
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeated, setIsRepeated] = useState(false)
  const [showPlaylist, setShowPlaylist] = useState(true) // Show queue by default
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set())

  const musicPlayer = useMusicPlayer()

  if (!musicPlayer.isExpanded || !musicPlayer.currentTrack) {
    return null
  }

  // Handle seek
  const handleSeek = (value: number[]) => {
    const newTime = value[0]
    musicPlayer.seek(newTime)
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    musicPlayer.setVolumeLevel(newVolume)
  }

  // Handle like toggle
  const toggleLike = () => {
    const newLikedTracks = new Set(likedTracks)
    if (newLikedTracks.has(musicPlayer.currentTrack!.id)) {
      newLikedTracks.delete(musicPlayer.currentTrack!.id)
    } else {
      newLikedTracks.add(musicPlayer.currentTrack!.id)
    }
    setLikedTracks(newLikedTracks)
  }

  // Handle playlist track selection
  const playTrackFromPlaylist = (track: any, index: number) => {
    musicPlayer.playTrack(track)
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-white text-lg font-semibold">Now Playing</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="text-gray-400 hover:text-white"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={musicPlayer.collapsePlayer}
              className="text-gray-400 hover:text-white"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={musicPlayer.collapsePlayer}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Player */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            {/* Album Cover */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src={musicPlayer.currentTrack.cover}
                    alt={`${musicPlayer.currentTrack.album} cover`}
                  />
                  <AvatarFallback className="bg-gray-700 text-white text-lg">
                    {musicPlayer.currentTrack.artist.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {musicPlayer.isPlaying && (
                  <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Track Info */}
            <div className="text-center mb-6">
              <h3 className="text-white font-semibold text-lg mb-1">
                {musicPlayer.currentTrack.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                {musicPlayer.currentTrack.artist} • {musicPlayer.currentTrack.album}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <Slider
                  value={[musicPlayer.currentTime]}
                  max={musicPlayer.duration}
                  step={1}
                  onValueChange={handleSeek}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{musicPlayer.formatTime(musicPlayer.currentTime)}</span>
                  <span>{musicPlayer.formatTime(musicPlayer.duration)}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsShuffled(!isShuffled)}
                className={`text-gray-400 hover:text-white ${isShuffled ? 'text-teal-400' : ''}`}
              >
                <Shuffle className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={musicPlayer.previousTrack}
                className="text-gray-400 hover:text-white"
              >
                <SkipBack className="h-5 w-5" />
              </Button>

              <Button
                onClick={musicPlayer.togglePlay}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full h-12 w-12 p-0"
              >
                {musicPlayer.isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={musicPlayer.nextTrack}
                className="text-gray-400 hover:text-white"
              >
                <SkipForward className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsRepeated(!isRepeated)}
                className={`text-gray-400 hover:text-white ${isRepeated ? 'text-teal-400' : ''}`}
              >
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Secondary Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLike}
                  className={`text-gray-400 hover:text-white ${likedTracks.has(musicPlayer.currentTrack.id) ? 'text-red-500' : ''}`}
                >
                  <Heart className={`h-4 w-4 ${likedTracks.has(musicPlayer.currentTrack.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={musicPlayer.toggleMute}
                  className="text-gray-400 hover:text-white"
                >
                  {musicPlayer.isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>

                <div className="w-20">
                  <Slider
                    value={[musicPlayer.isMuted ? 0 : musicPlayer.volume]}
                    max={100}
                    onValueChange={handleVolumeChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Playlist - Always visible when expanded */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h4 className="text-white font-semibold mb-3">Queue</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {musicTracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                    index === musicPlayer.currentTrackIndex
                      ? 'bg-teal-600/20 border border-teal-500/30'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => playTrackFromPlaylist(track, index)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={track.cover} alt={track.album} />
                    <AvatarFallback className="bg-gray-700 text-white text-xs">
                      {track.artist.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      index === musicPlayer.currentTrackIndex ? 'text-teal-400' : 'text-white'
                    }`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {track.artist} • {track.album}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">
                      {musicPlayer.formatTime(track.duration)}
                    </span>
                    {likedTracks.has(track.id) && (
                      <Heart className="h-3 w-3 text-red-500 fill-current" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        musicPlayer.playTrack(track)
                      }}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

## File: components/music-player/mini-player-wrapper.tsx

```typescript
"use client"

import { useMusicPlayer } from "@/hooks/use-music-player"
import MiniPlayer from "./mini-player"

export default function MiniPlayerWrapper() {
  const musicPlayer = useMusicPlayer()

  if (!musicPlayer.showMiniPlayer || !musicPlayer.currentTrack) {
    return null
  }

  return (
    <MiniPlayer
      track={musicPlayer.currentTrack}
      isPlaying={musicPlayer.isPlaying}
      currentTime={musicPlayer.currentTime}
      duration={musicPlayer.duration}
      onPlayPause={musicPlayer.togglePlay}
      onNext={musicPlayer.nextTrack}
      onPrevious={musicPlayer.previousTrack}
      onSeek={musicPlayer.seek}
      onExpand={musicPlayer.expandPlayer}
      onStop={() => {
        musicPlayer.hideMiniPlayer()
      }}
    />
  )
}
```

## File: components/music-player/mini-player.tsx

```typescript
"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { useMusicPlayer } from "@/hooks/use-music-player"
import { musicTracks } from "@/lib/music-data"

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  cover: string
  audioUrl?: string
}

interface MiniPlayerProps {
  track?: Track
  isPlaying: boolean
  currentTime: number
  duration: number
  onPlayPause: () => void
  onNext: () => void
  onPrevious: () => void
  onSeek: (time: number) => void
  onExpand?: () => void
  onStop?: () => void
}

export default function MiniPlayer({
  track,
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onNext,
  onPrevious,
  onSeek,
  onExpand,
  onStop
}: MiniPlayerProps) {
  if (!track) return null

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-center z-50">
      <div className="w-full max-w-md bg-gray-900 border-t border-gray-800 rounded-t-xl shadow-lg px-3 py-2 cursor-pointer" onClick={onExpand}>
        <div className="flex items-center gap-3">
          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm truncate">
              {track.title}
            </p>
            <p className="text-gray-400 text-xs truncate">
              {track.artist}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="text-gray-400 hover:text-white p-0 h-7 w-7"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            <Button
              onClick={onPlayPause}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full h-7 w-7 p-0"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="text-gray-400 hover:text-white p-0 h-7 w-7"
            >
              <SkipForward className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onStop}
              className="text-gray-400 hover:text-red-500 p-0 h-7 w-7"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-1" onClick={(e) => e.stopPropagation()}>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={(value) => onSeek(value[0])}
            className="w-full h-1"
          />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: components/music-player/music-card.tsx

```typescript
"use client";

import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMusicPlayer } from "@/hooks/use-music-player";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioUrl?: string;
  isLiked?: boolean;
}

interface MusicCardProps {
  track: Track;
  onLike?: (trackId: string) => void;
  isLiked?: boolean;
}

export default function MusicCard({
  track,
  onLike,
  isLiked = false,
}: MusicCardProps) {
  const musicPlayer = useMusicPlayer();

  const isCurrentTrackPlaying =
    musicPlayer.currentTrack?.id === track.id && musicPlayer.isPlaying;

  const handlePlay = () => {
    musicPlayer.playTrack(track);
  };

  const handleLike = () => {
    if (onLike) {
      onLike(track.id);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          {/* Album Cover with Play Button */}
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={track.cover} alt={track.album} />
              <AvatarFallback className="bg-gray-700 text-white text-sm">
                {track.artist.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            {/* Play Button Overlay */}
            <Button
              onClick={handlePlay}
              className="absolute inset-0 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 p-0 opacity-0 hover:opacity-100 transition-opacity"
            >
              {isCurrentTrackPlaying ? (
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
          </div>

          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium text-sm truncate">
              {track.title}
            </p>
            <p className="text-gray-400 text-xs truncate">
              {track.artist} • {track.album}
            </p>
            <p className="text-gray-500 text-xs">
              {musicPlayer.formatTime(track.duration)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`text-gray-400 hover:text-white p-1 ${isLiked ? "text-red-500" : ""}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white p-1"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

## File: components/music-player/music-player.tsx

```typescript
"use client"

import { useState, useRef, useEffect } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
  MoreHorizontal,
  List,
  Maximize2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMusicPlayer } from "@/hooks/use-music-player"
import { Track, musicTracks } from "@/lib/music-data"

interface MusicPlayerProps {
  tracks?: Track[]
  onTrackChange?: (track: Track) => void
}

export default function MusicPlayer({ tracks = musicTracks, onTrackChange }: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeated, setIsRepeated] = useState(false)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set())
  const [isFullscreen, setIsFullscreen] = useState(false)

  const musicPlayer = useMusicPlayer()
  const currentTrack = tracks[currentTrackIndex]

  // Check if current track is playing
  const isCurrentTrackPlaying = musicPlayer.currentTrack?.id === currentTrack.id && musicPlayer.isPlaying

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    if (isCurrentTrackPlaying) {
      musicPlayer.togglePlay()
    } else {
      musicPlayer.playTrack(currentTrack)
    }
  }

  // Handle next track
  const nextTrack = () => {
    const nextIndex = isRepeated
      ? currentTrackIndex
      : (currentTrackIndex + 1) % tracks.length
    setCurrentTrackIndex(nextIndex)
    if (onTrackChange) {
      onTrackChange(tracks[nextIndex])
    }
  }

  // Handle previous track
  const prevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    if (onTrackChange) {
      onTrackChange(tracks[prevIndex])
    }
  }

  // Handle seek
  const handleSeek = (value: number[]) => {
    const newTime = value[0]
    musicPlayer.seek(newTime)
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    musicPlayer.setVolumeLevel(newVolume)
  }

  // Handle like toggle
  const toggleLike = () => {
    const newLikedTracks = new Set(likedTracks)
    if (newLikedTracks.has(currentTrack.id)) {
      newLikedTracks.delete(currentTrack.id)
    } else {
      newLikedTracks.add(currentTrack.id)
    }
    setLikedTracks(newLikedTracks)
  }

  // Handle playlist track selection
  const playTrackFromPlaylist = (track: Track, index: number) => {
    setCurrentTrackIndex(index)
    musicPlayer.playTrack(track)
    if (onTrackChange) {
      onTrackChange(track)
    }
    setShowPlaylist(false)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Player */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          {/* Album Cover */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src={currentTrack.cover}
                  alt={`${currentTrack.album} cover`}
                />
                <AvatarFallback className="bg-gray-700 text-white text-lg">
                  {currentTrack.artist.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {isCurrentTrackPlaying && (
                <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>

          {/* Track Info */}
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-lg mb-1">
              {currentTrack.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              {currentTrack.artist} • {currentTrack.album}
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
              <Slider
                value={[musicPlayer.currentTime]}
                max={musicPlayer.duration}
                step={1}
                onValueChange={handleSeek}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{musicPlayer.formatTime(musicPlayer.currentTime)}</span>
                <span>{musicPlayer.formatTime(musicPlayer.duration)}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsShuffled(!isShuffled)}
              className={`text-gray-400 hover:text-white ${isShuffled ? 'text-teal-400' : ''}`}
            >
              <Shuffle className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={prevTrack}
              className="text-gray-400 hover:text-white"
            >
              <SkipBack className="h-5 w-5" />
            </Button>

            <Button
              onClick={togglePlay}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full h-12 w-12 p-0"
            >
              {isCurrentTrackPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextTrack}
              className="text-gray-400 hover:text-white"
            >
              <SkipForward className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsRepeated(!isRepeated)}
              className={`text-gray-400 hover:text-white ${isRepeated ? 'text-teal-400' : ''}`}
            >
              <Repeat className="h-4 w-4" />
            </Button>
          </div>

          {/* Secondary Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLike}
                className={`text-gray-400 hover:text-white ${likedTracks.has(currentTrack.id) ? 'text-red-500' : ''}`}
              >
                <Heart className={`h-4 w-4 ${likedTracks.has(currentTrack.id) ? 'fill-current' : ''}`} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="text-gray-400 hover:text-white"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={musicPlayer.toggleMute}
                className="text-gray-400 hover:text-white"
              >
                {musicPlayer.isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>

              <div className="w-20">
                <Slider
                  value={[musicPlayer.isMuted ? 0 : musicPlayer.volume]}
                  max={100}
                  onValueChange={handleVolumeChange}
                  className="w-full"
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-gray-400 hover:text-white"
              >
                <Maximize2 className={`h-4 w-4 ${isFullscreen ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Playlist */}
      {showPlaylist && (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h4 className="text-white font-semibold mb-3">Queue</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                    index === currentTrackIndex
                      ? 'bg-teal-600/20 border border-teal-500/30'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => playTrackFromPlaylist(track, index)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={track.cover} alt={track.album} />
                    <AvatarFallback className="bg-gray-700 text-white text-xs">
                      {track.artist.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      index === currentTrackIndex ? 'text-teal-400' : 'text-white'
                    }`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {track.artist} • {track.album}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">
                      {musicPlayer.formatTime(track.duration)}
                    </span>
                    {likedTracks.has(track.id) && (
                      <Heart className="h-3 w-3 text-red-500 fill-current" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        musicPlayer.playTrack(track)
                      }}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
```

## File: components/ui/accordion.tsx

```typescript
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## File: components/ui/alert-dialog.tsx

```typescript
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

## File: components/ui/alert.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

## File: components/ui/aspect-ratio.tsx

```typescript
"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

## File: components/ui/avatar.tsx

```typescript
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

## File: components/ui/badge.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

## File: components/ui/breadcrumb.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

## File: components/ui/button.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## File: components/ui/calendar.tsx

```typescript
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
```

## File: components/ui/card.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## File: components/ui/carousel.tsx

```typescript
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
```

## File: components/ui/chart.tsx

```typescript
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

## File: components/ui/checkbox.tsx

```typescript
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

## File: components/ui/collapsible.tsx

```typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

## File: components/ui/command.tsx

```typescript
"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
```

## File: components/ui/context-menu.tsx

```typescript
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
```

## File: components/ui/dialog.tsx

```typescript
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
```

## File: components/ui/drawer.tsx

```typescript
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
```

## File: components/ui/dropdown-menu.tsx

```typescript
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
```

## File: components/ui/form.tsx

```typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## File: components/ui/hover-card.tsx

```typescript
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
```

## File: components/ui/input-otp.tsx

```typescript
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
```

## File: components/ui/input.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

## File: components/ui/label.tsx

```typescript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

## File: components/ui/menubar.tsx

```typescript
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
```

## File: components/ui/navigation-menu.tsx

```typescript
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
```

## File: components/ui/pagination.tsx

```typescript
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
```

## File: components/ui/popover.tsx

```typescript
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
```

## File: components/ui/progress.tsx

```typescript
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
```

## File: components/ui/radio-group.tsx

```typescript
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
```

## File: components/ui/resizable.tsx

```typescript
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
```

## File: components/ui/scroll-area.tsx

```typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
```

## File: components/ui/select.tsx

```typescript
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

## File: components/ui/separator.tsx

```typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

## File: components/ui/sheet.tsx

```typescript
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## File: components/ui/sidebar.tsx

```typescript
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

## File: components/ui/skeleton.tsx

```typescript
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
```

## File: components/ui/slider.tsx

```typescript
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-700">
      <SliderPrimitive.Range className="absolute h-full bg-teal-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-teal-500 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
```

## File: components/ui/sonner.tsx

```typescript
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
```

## File: components/ui/switch.tsx

```typescript
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

## File: components/ui/table.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

## File: components/ui/tabs.tsx

```typescript
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: components/ui/textarea.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
```

## File: components/ui/toast.tsx

```typescript
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

## File: components/ui/toaster.tsx

```typescript
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

## File: components/ui/toggle-group.tsx

```typescript
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
```

## File: components/ui/toggle.tsx

```typescript
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
```

## File: components/ui/tooltip.tsx

```typescript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

## File: components/ui/use-mobile.tsx

```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## File: components/ui/use-toast.ts

```typescript
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

## File: components/ui/user-avatar.tsx

```typescript
import React from "react"
import { User } from "lucide-react"

interface UserAvatarProps {
  src?: string
  alt?: string
  username?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function UserAvatar({ src, alt, username, size = "md", className = "" }: UserAvatarProps) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-base",
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt || "Profile"}
        className={`rounded-full object-cover border-2 border-teal-200 ${sizeClasses[size]} ${className}`}
      />
    )
  }

  return (
    <div
      className={`rounded-full bg-teal-600 flex items-center justify-center text-white font-medium ${sizeClasses[size]} ${className}`}
    >
      {username ? getInitials(username) : <User className="w-1/2 h-1/2" />}
    </div>
  )
}
```

## File: components/wallet/buy-view.tsx

```typescript
"use client";

import { useState } from "react";
import { ArrowLeft, Info } from "lucide-react";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

// Import the useAuth hook
import { useAuth } from "@/hooks/use-auth";

interface BuyViewProps {
  onBack: () => void;
}

export default function BuyView({ onBack }: BuyViewProps) {
  const [amount, setAmount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate] = useState(0.42); // 1 DROPS = 0.42 USD
  const { toast } = useToast();
  const { addToBalance } = useAuth();

  const handleBuy = () => {
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      // Update balance
      addToBalance(amount);

      toast({
        title: "Purchase successful!",
        description: `You've bought ${amount} $DROPS for ${(amount * exchangeRate).toFixed(2)} USD`,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center">
        <button onClick={onBack} className="flex items-center text-gray-300">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="flex-1 text-center font-semibold text-white">
          Buy $DROPS
        </h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto bg-gray-950">
        <Card className="mb-6 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">
                    Amount to buy
                  </span>
                  <div className="flex items-center text-bright-yellow font-bold">
                    <BanknoteIcon className="h-5 w-5 mr-1" />
                    <span>{amount} $DROPS</span>
                  </div>
                </div>
                <Slider
                  min={10}
                  max={500}
                  step={10}
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>10 $DROPS</span>
                  <span>500 $DROPS</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[50, 100, 200].map((value) => (
                  <Button
                    key={value}
                    variant="outline"
                    onClick={() => setAmount(value)}
                    className={
                      amount === value
                        ? "border-bright-yellow text-bright-yellow bg-gray-700"
                        : "bg-gray-700 text-white border-gray-600"
                    }
                  >
                    {value} $DROPS
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">
              Purchase Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Amount</span>
                <div className="flex items-center text-white">
                  <BanknoteIcon className="h-5 w-5 mr-1 text-bright-yellow" />
                  <span>{amount} $DROPS</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Unit price</span>
                <span className="text-white">{exchangeRate} USD</span>
              </div>
              <div className="border-t border-gray-700 my-2"></div>
              <div className="flex justify-between font-bold">
                <span className="text-white">Total to pay</span>
                <span className="text-white">
                  {(amount * exchangeRate).toFixed(2)} USD
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-2">
          <Button
            onClick={handleBuy}
            disabled={isLoading || amount <= 0}
            className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
          >
            {isLoading ? "Processing..." : "Confirm Purchase"}
          </Button>
          <p className="text-xs text-gray-400 text-center mt-2 flex items-center justify-center">
            <Info className="h-3 w-3 mr-1" />
            This is a demo. No real transaction will be made.
          </p>
        </div>
      </div>
    </div>
  );
}
```

## File: components/wallet/donate-form.tsx

```typescript
"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { donateToCreator } from "@/lib/blockchain"
import { BanknoteIcon } from "@/components/icons/banknote-icon"

interface DonateFormProps {
  creatorId: string
  creatorName: string
}

export default function DonateForm({ creatorId, creatorName }: DonateFormProps) {
  const [amount, setAmount] = useState(5)
  const [message, setMessage] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = async () => {
    setIsLoading(true)
    try {
      // In a real app, this would call the actual blockchain function
      await donateToCreator(creatorId, amount, message, isAnonymous)
      alert(`Successfully purchased ${amount} $DROPS from ${creatorName}!`)
      setAmount(5)
      setMessage("")
    } catch (error) {
      console.error("Purchase failed:", error)
      alert("Purchase failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BanknoteIcon className="mr-2 h-5 w-5 text-primary" />
          Buy $DROPS
        </CardTitle>
        <CardDescription>Support {creatorName} with music tokens</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="amount">Amount</Label>
            <div className="flex items-center text-primary font-bold">
              <BanknoteIcon className="mr-1 h-4 w-4" />
              {amount} $DROPS
            </div>
          </div>
          <Slider
            id="amount"
            min={1}
            max={100}
            step={1}
            value={[amount]}
            onValueChange={(value) => setAmount(value[0])}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 $DROPS</span>
            <span>100 $DROPS</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea
            id="message"
            placeholder="Add a support message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anonymous"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300"
          />
          <Label htmlFor="anonymous" className="text-sm">
            Buy anonymously
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">
                  Your purchase will be recorded on the blockchain, but your identity won't be shown publicly.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handlePurchase} disabled={isLoading}>
          {isLoading ? "Processing..." : `Buy ${amount} $DROPS`}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

## File: components/wallet/donate-screen.tsx

```typescript
"use client";

import { useState } from "react";
import { ArrowLeft, Banknote } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";

interface Creator {
  name: string;
  handle: string;
  avatar?: string;
}

interface DonateScreenProps {
  creator: Creator;
  onBack: () => void;
}

export default function DonateScreen({ creator, onBack }: DonateScreenProps) {
  const [amount, setAmount] = useState<number>(5);
  const [message, setMessage] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDonationComplete, setIsDonationComplete] = useState<boolean>(false);
  const { addToBalance, addToDonated } = useAuth(); // Obtener las funciones para actualizar el balance y el valor donado

  const handleDonate = (): void => {
    setIsLoading(true);
    // Simulate donation process
    setTimeout(() => {
      // Actualizar el balance y el valor donado
      addToBalance(-amount);
      addToDonated(amount);

      setIsLoading(false);
      setIsDonationComplete(true);
    }, 1500);
  };

  if (isDonationComplete) {
    return (
      <div className="h-full flex flex-col">
        <div className="bg-primary px-4 py-3 flex items-center">
          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <h1 className="text-white font-bold text-lg ml-2">
            Donation Complete
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <Banknote className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your donation of {amount} DROPS to {creator.name} was successful.
          </p>
          <div className="bg-primary/10 p-4 rounded-xl w-full mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-bold flex items-center">
                <Banknote className="h-4 w-4 text-primary mr-1" />
                {amount} DROPS
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="text-xs text-gray-500">
                tx_...{Math.random().toString(36).substring(2, 8)}
              </span>
            </div>
          </div>
          <button
            className="bg-primary text-white px-6 py-3 rounded-full font-medium w-full"
            onClick={onBack}
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-primary px-4 py-3 flex items-center">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-white font-bold text-lg ml-2">Donate BEANS</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src={creator.avatar || "/placeholder.svg"}
                alt={creator.name}
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{creator.name}</h3>
              <p className="text-gray-500 text-xs">{creator.handle}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h3 className="font-medium mb-3">Amount</h3>
          <div className="flex justify-between mb-2">
            <button
              className={`w-16 h-12 rounded-lg flex items-center justify-center ${amount === 5 ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => setAmount(5)}
            >
              5 DROPS
            </button>
            <button
              className={`w-16 h-12 rounded-lg flex items-center justify-center ${amount === 10 ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => setAmount(10)}
            >
              10 BEANS
            </button>
            <button
              className={`w-16 h-12 rounded-lg flex items-center justify-center ${amount === 20 ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => setAmount(20)}
            >
              20 BEANS
            </button>
            <button
              className={`w-16 h-12 rounded-lg flex items-center justify-center ${amount === 50 ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => setAmount(50)}
            >
              50 BEANS
            </button>
          </div>
          <div className="mt-3">
            <label className="text-sm text-gray-600 block mb-1">
              Custom amount
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-3 py-2">
                <Banknote className="h-5 w-5 text-primary" />
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="flex-1 px-3 py-2 outline-none"
              />
              <div className="bg-gray-100 px-3 py-2 text-gray-500">DROPS</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h3 className="font-medium mb-3">Message (optional)</h3>
          <textarea
            placeholder="Add a message to your donation..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-3 h-24 outline-none focus:border-primary"
          ></textarea>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="w-4 h-4 text-primary"
            />
            <label htmlFor="anonymous" className="ml-2 text-sm">
              Donate anonymously
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">
            Your donation will still be recorded on the blockchain, but your
            identity won't be displayed publicly.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Amount</span>
            <span className="font-bold flex items-center">
              <Banknote className="h-4 w-4 text-primary mr-1" />
              {amount} DROPS
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Platform fee (5%)</span>
            <span className="text-gray-600">
              {(amount * 0.05).toFixed(2)} BEANS
            </span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="font-bold">{amount} BEANS</span>
          </div>
        </div>

        <button
          className={`w-full py-3 rounded-full font-medium ${isLoading ? "bg-gray-300 text-gray-600" : "bg-primary text-white"}`}
          onClick={handleDonate}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : `Donate ${amount} DROPS`}
        </button>
      </div>
    </div>
  );
}
```

## File: components/wallet/receive-view.tsx

```typescript
"use client";

import { useState } from "react";
import { ArrowLeft, Copy, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import Image from "next/image";

interface ReceiveViewProps {
  onBack: () => void;
}

export default function ReceiveView({ onBack }: ReceiveViewProps) {
  const { balance } = useAuth();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";

  const copyToClipboard = () => {
    // Simplify clipboard copy to avoid API issues
    try {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast({
        title: "Address copied",
        description: "The wallet address has been copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy error",
        description: "Could not copy the address",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center">
        <button onClick={onBack} className="flex items-center text-gray-300">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="flex-1 text-center font-semibold text-white">
          Receive $DROPS
        </h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        {/* Balance Card */}
        <Card className="mb-6 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-1">Current Balance</p>
              <div className="flex items-center">
                <BanknoteIcon className="h-5 w-5 text-bright-yellow mr-2" />
                <span className="text-2xl font-bold text-white">
                  {balance} $DROPS
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card className="mb-6 bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-4">
                Scan this QR code to receive $DROPS
              </p>
              <div className="bg-white p-4 rounded-lg mb-4 w-48 h-48 flex items-center justify-center">
                {/* Use a styled div instead of Image to avoid issues */}
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="QR Code"
                    width={360}
                    height={360}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Address */}
        <Card className="mb-6 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400 mb-2">Your wallet address</p>
            <div className="flex items-center bg-gray-700 p-3 rounded-lg mb-3">
              <div className="flex-1 text-white text-sm font-mono overflow-hidden overflow-ellipsis">
                {walletAddress}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="ml-2 text-gray-300 hover:text-white hover:bg-gray-600"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex justify-between gap-2">
              <Button
                variant="outline"
                className="flex-1 bg-gray-700 text-white border-gray-600"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-gray-700 text-white border-gray-600"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h3 className="font-medium text-white mb-2">Instructions</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  1
                </span>
                <span>
                  Share your wallet address or QR code with anyone who wants to
                  send you $DROPS.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  2
                </span>
                <span>
                  The sender should use the "Send" function in their app and
                  paste your address.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  3
                </span>
                <span>
                  Once the transaction is complete, the $DROPS will
                  automatically appear in your balance.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

## File: components/wallet/ticket-minter.tsx

```typescript
'use client'

/**
 * Componente ejemplo para mintear tickets usando Solana
 * Este componente muestra cómo conectar tu frontend con el programa Solana
 */

import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useConnection } from '@solana/wallet-adapter-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export function TicketMinter() {
  const { publicKey, connected } = useWallet()
  const { connection } = useConnection()
  const { toast } = useToast()

  const [ticketData, setTicketData] = useState({
    buyerName: '',
    exhibitionName: '',
    ticketNumber: 1,
  })
  const [minting, setMinting] = useState(false)

  const handleMintTicket = async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your Solana wallet first",
        variant: "destructive"
      })
      return
    }

    setMinting(true)

    try {
      // Aquí llamarías a tu función del programa Solana
      // const tx = await mintTicket(program, publicKey, ticketData)

      // Por ahora, simulamos la transacción
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: "Ticket Minted! 🎫",
        description: `Ticket #${ticketData.ticketNumber} for ${ticketData.buyerName}`,
      })

      // Resetear form
      setTicketData({
        buyerName: '',
        exhibitionName: '',
        ticketNumber: ticketData.ticketNumber + 1,
      })
    } catch (error) {
      console.error("Error minting ticket:", error)
      toast({
        title: "Error",
        description: "Failed to mint ticket. Please try again.",
        variant: "destructive"
      })
    } finally {
      setMinting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Mint Exhibition Ticket NFT</CardTitle>
        <CardDescription>
          Create a soulbound ticket on Solana blockchain
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!connected ? (
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Please connect your Solana wallet to mint tickets
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Buyer Name</label>
              <Input
                placeholder="Adam"
                value={ticketData.buyerName}
                onChange={(e) => setTicketData({...ticketData, buyerName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Exhibition Name</label>
              <Input
                placeholder="My Exhibition 2025"
                value={ticketData.exhibitionName}
                onChange={(e) => setTicketData({...ticketData, exhibitionName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Ticket Number</label>
              <Input
                type="number"
                value={ticketData.ticketNumber}
                onChange={(e) => setTicketData({...ticketData, ticketNumber: parseInt(e.target.value)})}
              />
            </div>

            <Button
              onClick={handleMintTicket}
              disabled={minting || !ticketData.buyerName || !ticketData.exhibitionName}
              className="w-full"
            >
              {minting ? 'Minting...' : 'Mint Ticket NFT'}
            </Button>

            {publicKey && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Connected Wallet:
                </p>
                <p className="text-xs font-mono break-all">
                  {publicKey.toBase58()}
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
```

## File: components/wallet/wallet-view.tsx

```typescript
"use client";

import { TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { artistTokens, transactions } from "@/data/wallet-view";

interface WalletViewProps {
  onBuy: () => void;
  onSend: () => void;
  onReceive: () => void;
}

interface BalanceCardProps {
  balance: number;
  onReceive: () => void;
  onBuy: () => void;
  onSend: () => void;
}

interface StatsCardsProps {
  donated: number;
}

interface ArtistTokensProps {
  tokens: typeof artistTokens;
}

interface TransactionHistoryProps {
  transactions: typeof transactions;
}

function BalanceCard({ balance, onReceive, onBuy, onSend }: BalanceCardProps) {
  return (
    <div className="px-4 py-6 bg-gradient-to-r from-black to-gray-800 text-white">
      <h1 className="text-xl font-bold mb-2">Wallet</h1>
      <h2 className="text-sm font-medium opacity-90">Your Balance</h2>
      <div className="flex items-center mt-1">
        <span className="text-2xl font-bold">{balance} $DROPS</span>
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
          onClick={onReceive}
        >
          Receive
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
          onClick={onBuy}
        >
          Buy
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
          onClick={onSend}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

function StatsCards({ donated }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 mt-4">
      <Card className="bg-gray-800 shadow-sm border-gray-700">
        <CardContent className="p-3">
          <div className="flex flex-col items-center">
            <BanknoteIcon className="h-6 w-6 text-bright-yellow mb-1" />
            <p className="text-xs text-gray-400">Purchased</p>
            <p className="font-semibold text-white">{donated} $DROPS</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 shadow-sm border-gray-700">
        <CardContent className="p-3">
          <div className="flex flex-col items-center">
            <Users className="h-6 w-6 text-bright-yellow mb-1" />
            <p className="text-xs text-gray-400">Artists</p>
            <p className="font-semibold text-white">8</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 shadow-sm border-gray-700">
        <CardContent className="p-3">
          <div className="flex flex-col items-center">
            <TrendingUp className="h-6 w-6 text-bright-yellow mb-1" />
            <p className="text-xs text-gray-400">Value</p>
            <p className="font-semibold text-white">$1.00</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ArtistTokens({ tokens }: ArtistTokensProps) {
  return (
    <div className="mt-6 px-4">
      <h2 className="text-lg font-semibold mb-3 text-white">Artist Tokens</h2>
      <div className="space-y-3">
        {tokens.map((token) => (
          <Card
            key={token.id}
            className="bg-gray-800 shadow-sm border-gray-700"
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={token.avatar} alt={token.name} />
                  <AvatarFallback>
                    {token.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">${token.symbol}</p>
                    <div className="flex items-center text-bright-yellow font-medium">
                      <BanknoteIcon className="h-5 w-5 mr-1" />
                      <span>{token.amount}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{token.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      Current value: ${token.value}
                    </p>
                    <p className="text-xs text-green-500">+{token.change}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {tokens.length === 0 && (
          <div className="text-center py-6 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-gray-300">No tienes tokens de artistas aún</p>
            <p className="text-gray-400 text-sm mt-1">
              Compra tokens para apoyar a tus artistas favoritos y recibir
              recompensas exclusivas
            </p>
            <Button className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white">
              Explorar Artistas
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <div className="mt-6 px-4">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Transaction History
      </h2>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <Card
            key={transaction.id}
            className="bg-gray-800 shadow-sm border-gray-700"
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "sent"
                      ? "bg-red-500/20"
                      : "bg-green-500/20"
                  }`}
                >
                  <BanknoteIcon
                    className={`h-5 w-5 ${transaction.type === "sent" ? "text-red-500" : "text-green-500"}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">
                      {transaction.description}
                    </p>
                    <p
                      className={`font-medium ${transaction.type === "sent" ? "text-red-500" : "text-green-500"}`}
                    >
                      {transaction.type === "sent" ? "-" : "+"}
                      {transaction.amount} $DROPS
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function WalletView({
  onBuy,
  onSend,
  onReceive,
}: WalletViewProps) {
  const { balance, donated } = useAuth();

  return (
    <div className="pb-6 bg-gray-950">
      <BalanceCard
        balance={balance}
        onReceive={onReceive}
        onBuy={onBuy}
        onSend={onSend}
      />
      <StatsCards donated={donated} />
      <ArtistTokens tokens={artistTokens} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
```

## File: components/artist-dashboard.tsx

```typescript
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  PlusCircle,
  Users,
  Music,
  Calendar,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { BanknoteIcon } from "@/components/icons/banknote-icon";

interface ArtistDashboardProps {
  onBack: () => void;
}

export default function ArtistDashboard({ onBack }: ArtistDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const { userData } = useAuth();

  // Artist data would come from the backend in a real app
  const artistData = {
    name: userData?.username || "iamjuampi",
    supporters: 1850,
    totalReceived: 1850,
    growth: "+12%",
    newSupporters: 24,
    posts: 42,
    rewards: 3,
  };

  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center">
        <button onClick={onBack} className="flex items-center text-gray-300">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="flex-1 text-center font-semibold text-white">
          Artist Dashboard
        </h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {/* Artist Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-sm text-gray-400">Total Supporters</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">
                    {artistData.supporters}
                  </p>
                  <Users className="h-5 w-5 text-bright-yellow" />
                </div>
                <p className="text-xs text-green-500 mt-1">
                  {artistData.growth} this month
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-sm text-gray-400">Total Received</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">
                    {artistData.totalReceived}
                  </p>
                  <BanknoteIcon className="h-5 w-5 text-bright-yellow" />
                </div>
                <p className="text-xs text-green-500 mt-1">
                  +{artistData.newSupporters} new supporters
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="h-auto py-3 bg-bright-yellow hover:bg-bright-yellow-700 text-black">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Post
          </Button>
          <Button
            variant="outline"
            className="h-auto py-3 bg-gray-700 text-white border-gray-600"
          >
            <Music className="h-4 w-4 mr-2" />
            Add Reward
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gray-700"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="data-[state=active]:bg-gray-700"
            >
              Content
            </TabsTrigger>
            <TabsTrigger
              value="supporters"
              className="data-[state=active]:bg-gray-700"
            >
              Supporters
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-4 space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg">
                  Activity Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {artistData.posts}
                    </p>
                    <p className="text-xs text-gray-400">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {artistData.rewards}
                    </p>
                    <p className="text-xs text-gray-400">Rewards</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">$0.45</p>
                    <p className="text-xs text-gray-400">Token Price</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <Calendar className="h-5 w-5 text-bright-yellow" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{event.title}</p>
                        <p className="text-xs text-gray-400">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-medium">Your Posts</h3>
              <Button
                size="sm"
                className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
              >
                New Post
              </Button>
            </div>

            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">
                        {post.content.substring(0, 60)}...
                      </p>
                      <div className="flex items-center mt-1">
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                        >
                          {post.likes} likes
                        </Badge>
                        <p className="text-xs text-gray-500 ml-2">
                          {post.time}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 bg-gray-700 text-white border-gray-600"
                    >
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center mt-6">
              <h3 className="text-white font-medium">Your Rewards</h3>
              <Button
                size="sm"
                className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
              >
                Add Reward
              </Button>
            </div>

            {rewards.map((reward) => (
              <Card key={reward.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">
                        {reward.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {reward.description}
                      </p>
                      <div className="flex items-center mt-1">
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                        >
                          {reward.minTokens} $DROPS required
                        </Badge>
                        <p className="text-xs text-gray-500 ml-2">
                          {reward.subscribers} subscribers
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 bg-gray-700 text-white border-gray-600"
                    >
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Supporters Tab */}
          <TabsContent value="supporters" className="mt-4 space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg">
                  Top Supporters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supporters.map((supporter) => (
                    <div key={supporter.id} className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage
                          src={supporter.avatar}
                          alt={supporter.name}
                        />
                        <AvatarFallback>
                          {supporter.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-white">
                          {supporter.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {supporter.since}
                        </p>
                      </div>
                      <div className="flex items-center text-bright-yellow font-medium">
                        <BanknoteIcon className="h-3 w-3 mr-1" />
                        <span>{supporter.tokens} $DROPS</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Settings */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-800 text-white border-gray-700"
          >
            <Settings className="h-4 w-4 mr-2" />
            Artist Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

// Sample data
const events = [
  { id: "1", title: "Release new track", date: "Mar 25, 2025" },
  { id: "2", title: "Live stream session", date: "Apr 2, 2025" },
  { id: "3", title: "Club Underground performance", date: "Apr 10, 2025" },
];

const posts = [
  {
    id: "1",
    content:
      'Just released my new track "Midnight Pulse". Listen to it now on my profile!',
    time: "2 hours ago",
    likes: 42,
    comments: 8,
  },
  {
    id: "2",
    content:
      "Thanks everyone for the support on my last set. I'll be sharing more music with you soon.",
    time: "2 days ago",
    likes: 76,
    comments: 12,
  },
  {
    id: "3",
    content:
      "Working on a new project that combines techno with elements of classical music. What do you think about this fusion?",
    time: "4 days ago",
    likes: 93,
    comments: 28,
  },
];

const rewards = [
  {
    id: "1",
    title: "Exclusive Monthly Track",
    description: "Unreleased track available only to token holders",
    minTokens: 10,
    subscribers: 156,
  },
  {
    id: "2",
    title: "Production Masterclass",
    description: "Monthly video tutorial on advanced production techniques",
    minTokens: 25,
    subscribers: 87,
  },
  {
    id: "3",
    title: "Stems & Project Files",
    description: "Complete project files for selected tracks",
    minTokens: 50,
    subscribers: 42,
  },
];

const supporters = [
  {
    id: "1",
    name: "musicfan",
    avatar: "/avatars/user.jpg",
    tokens: 120,
    since: "Supporting since Jan 2025",
  },
  {
    id: "2",
    name: "technoLover",
    avatar: "/avatars/user.jpg",
    tokens: 85,
    since: "Supporting since Feb 2025",
  },
  {
    id: "3",
    name: "beatMaster",
    avatar: "/avatars/user.jpg",
    tokens: 65,
    since: "Supporting since Feb 2025",
  },
  {
    id: "4",
    name: "rhythmQueen",
    avatar: "/avatars/user.jpg",
    tokens: 50,
    since: "Supporting since Mar 2025",
  },
];
```

## File: components/header.tsx

```typescript
import { UserData } from "@/lib/types";
import { SolanaWalletButton } from "./authentication/solana-wallet-button";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";

export function Header({
  userData,
  isArtist,
  activeTab,
  handleOpenArtistDashboard,
  user,
  logout,
}: {
  userData: UserData | null;
  isArtist: () => boolean;
  activeTab: string;
  handleOpenArtistDashboard: () => void;
  user: string;
  logout: () => void;
}) {
  return (
    <header className="bg-gray-900 px-4 py-4 border-b border-gray-800 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/images/dropsland-logo.png"
          alt="DROPSLAND"
          className="h-12 max-w-[180px] object-contain"
        />
        <SolanaWalletButton />
      </div>
      <div className="flex items-center gap-2">
        {userData && isArtist() && activeTab === "profile" && (
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800 text-white border-gray-700"
            onClick={handleOpenArtistDashboard}
          >
            Artist Dashboard
          </Button>
        )}
        {!userData && user && (
          <button onClick={logout} className="flex items-center text-gray-300">
            <UserPlus className="h-4 w-4 mr-1" />
            <span className="text-sm">Logout</span>
          </button>
        )}
      </div>
    </header>
  );
}
```

## File: components/main-app.tsx

```typescript
"use client";
import HomeView from "@/components/home/home-view";
import SearchView from "@/components/search-view";
import ActivityView from "@/components/home/activity-view";
import ProfileView from "@/components/profile/profile-view";
import WalletView from "@/components/wallet/wallet-view";
import ArtistDashboard from "@/components/artist-dashboard";
import BuyView from "@/components/wallet/buy-view";
import SendView from "@/components/send-view";
import ReceiveView from "@/components/wallet/receive-view";
import ArtistProfile from "@/components/profile/artist-profile";
import { useAuth } from "@/hooks/use-auth";
import { Header } from "./header";
import { TabBar } from "./tab-bar";
import { useNavigation, useViewRenderer } from "@/hooks/use-navigation";
import type { useNavigation as useNavigationType } from "@/hooks/use-navigation";

export default function MainApp() {
  const { user, userData, login, logout, isArtist } = useAuth();
  const navigation = useNavigation();
  const { viewType } = useViewRenderer(
    navigation.currentView,
    navigation.activeTab,
    navigation.selectedArtistId,
    user,
  );

  return (
    <>
      <Header
        userData={userData}
        isArtist={isArtist}
        activeTab={navigation.activeTab}
        handleOpenArtistDashboard={navigation.navigateToArtistDashboard}
        user={user || "iamjuampi"}
        logout={logout}
      />
      <main className="flex-1 overflow-auto bg-gray-950 pb-24">
        <ViewRenderer
          viewType={viewType}
          navigation={navigation}
          user={user || "iamjuampi"}
        />
      </main>
      <TabBar
        activeTab={navigation.activeTab}
        onTabChange={navigation.handleTabChange}
      />
    </>
  );
}

export function ViewRenderer({
  viewType,
  navigation,
  user,
}: {
  viewType: string | null;
  navigation: ReturnType<typeof useNavigationType>;
  user: string;
}) {
  const handleArtistClick = (artistId: string) => {
    navigation.handleViewArtist(artistId, user);
  };

  switch (viewType) {
    case "buy":
      return <BuyView onBack={navigation.navigateBack} />;
    case "send":
      return <SendView onBack={navigation.navigateBack} />;
    case "receive":
      return <ReceiveView onBack={navigation.navigateBack} />;
    case "artistDashboard":
      return <ArtistDashboard onBack={navigation.navigateBack} />;
    case "artist":
      return (
        <ArtistProfile
          artistId={navigation.selectedArtistId!}
          onBack={navigation.navigateBack}
        />
      );
    case "home":
      return <HomeView onSelectArtist={handleArtistClick} />;
    case "search":
      return <SearchView onSelectArtist={handleArtistClick} />;
    case "wallet":
      return (
        <WalletView
          onBuy={navigation.navigateToBuy}
          onSend={navigation.navigateToSend}
          onReceive={navigation.navigateToReceive}
        />
      );
    case "activity":
      return <ActivityView onSelectArtist={handleArtistClick} />;
    case "profile":
      return <ProfileView username={user} />;
    default:
      return null;
  }
}
```

## File: components/notification-badge.tsx

```typescript
"use client";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { userDataService } from "@/lib/user-data-service";
import { useAuth } from "@/hooks/use-auth";

interface NotificationBadgeProps {
  onClick?: () => void;
}

export default function NotificationBadge({ onClick }: NotificationBadgeProps) {
  const { user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (user) {
      const notifications = userDataService.getNotificationsForUser(user);
      const unread = notifications.filter((n) => !n.isRead).length;
      setUnreadCount(unread);
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <Bell className="h-5 w-5 text-gray-400" />
      {unreadCount > 0 && (
        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center p-0">
          {unreadCount > 99 ? "99+" : unreadCount}
        </Badge>
      )}
    </div>
  );
}
```

## File: components/search-view.tsx

```typescript
"use client";

import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { artists, genres, trendingTopics } from "@/data/search-view";

interface SearchViewProps {
  onSelectArtist: (artistId: string) => void;
}

export default function SearchView({ onSelectArtist }: SearchViewProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle artist selection with debugging
  const handleSelectArtist = (artistId: string) => {
    console.log("Search view - Selected artist:", artistId);
    onSelectArtist(artistId);
  };

  const filteredArtists = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="p-4 pb-6 bg-gray-50 dark:bg-gray-950">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search artists..."
          className="pl-9 bg-gray-800 border-gray-700 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {searchQuery === "" ? (
        <>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Popular Genres
          </h2>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {genres.map((genre) => (
              <Card
                key={genre.name}
                className="overflow-hidden bg-gray-800 border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="relative h-24">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <div className="absolute bottom-2 left-2 text-white z-20">
                      <p className="font-medium">{genre.name}</p>
                      <p className="text-xs">{genre.count} artists</p>
                    </div>
                    <img
                      src="/images/dj-mixer.png"
                      alt={genre.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3 text-white">
            Suggested Artists
          </h2>
        </>
      ) : (
        <h2 className="text-lg font-semibold mb-3 text-white">Results</h2>
      )}

      <div className="space-y-3 mb-6">
        {filteredArtists.map((artist) => (
          <Card
            key={artist.id}
            className="overflow-hidden bg-gray-800 border-gray-700 cursor-pointer"
            onClick={() => handleSelectArtist(artist.id)}
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={artist.avatar} alt={artist.name} />
                  <AvatarFallback>
                    {artist.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <p className="font-medium text-white">{artist.name}</p>
                    {artist.featured && (
                      <Star className="h-3 w-3 text-bright-yellow ml-1" />
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{artist.handle}</p>
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs bg-gray-700 text-gray-300 border-gray-600"
                  >
                    {artist.genre}
                  </Badge>
                </div>
                <Button
                  size="sm"
                  className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectArtist(artist.id);
                  }}
                >
                  <BanknoteIcon className="h-6 w-6 mr-0.5" />
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trending Topics - Ahora después de los artistas sugeridos */}
      {searchQuery === "" && (
        <>
          <h2 className="text-lg font-semibold mb-3 text-white">Trending</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="bg-gray-800 border-gray-700 text-gray-300"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
```

## File: components/send-view.tsx

```typescript
"use client";

import { useState } from "react";
import { ArrowLeft, Info, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BanknoteIcon } from "@/components/icons/banknote-icon";

// Import the useAuth hook
import { useAuth } from "@/hooks/use-auth";

interface SendViewProps {
  onBack: () => void;
}

// Modify the SendView function to update balance and donated value after sending
export default function SendView({ onBack }: SendViewProps) {
  const [amount, setAmount] = useState(20);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const { toast } = useToast();
  const { balance, addToBalance, addToDonated } = useAuth(); // Get balance and functions to update it

  const handleSend = () => {
    if (!selectedUser) {
      toast({
        title: "Select a recipient",
        description: "Please select who to send tokens to",
        variant: "destructive",
      });
      return;
    }

    // Check if there's enough balance
    if (amount > balance) {
      toast({
        title: "Insufficient balance",
        description: `You don't have enough tokens. Your current balance is ${balance} $DROPS`,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      // Subtract from balance
      addToBalance(-amount);

      // Add to donated value
      addToDonated(amount);

      toast({
        title: "Sent successfully!",
        description: `You've sent ${amount} $DROPS to ${selectedUser.name}`,
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleSearch = () => {
    if (!recipient.trim()) return;

    setIsLoading(true);

    // Simulate search delay
    setTimeout(() => {
      // Mock user found
      const user = {
        id: "u1",
        name: recipient,
        handle: `@${recipient.toLowerCase().replace(/\s+/g, "")}`,
        avatar: "/avatars/user.jpg",
      };

      setSelectedUser(user);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center">
        <button onClick={onBack} className="flex items-center text-gray-300">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="flex-1 text-center font-semibold text-white">
          Send $DROPS
        </h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto bg-gray-950">
        <Card className="mb-4 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient" className="text-white">
                  Recipient
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      id="recipient"
                      placeholder="Name or @username"
                      className="pl-10 bg-gray-700 border-gray-600 text-white"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      disabled={!!selectedUser}
                    />
                  </div>
                  {!selectedUser ? (
                    <Button
                      onClick={handleSearch}
                      disabled={!recipient.trim() || isLoading}
                      className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => setSelectedUser(null)}
                      className="bg-gray-700 text-white border-gray-600"
                    >
                      Change
                    </Button>
                  )}
                </div>
              </div>

              {selectedUser && (
                <div className="bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                      />
                      <AvatarFallback>
                        {selectedUser.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">
                        {selectedUser.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {selectedUser.handle}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-white">Amount to send</Label>
                  <div className="flex items-center text-bright-yellow font-bold">
                    <BanknoteIcon className="h-5 w-5 mr-1" />
                    <span>{amount} $DROPS</span>
                  </div>
                </div>
                <Slider
                  min={1}
                  max={100}
                  step={1}
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1 $DROPS</span>
                  <span>100 $DROPS</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[10, 20, 50].map((value) => (
                  <Button
                    key={value}
                    variant="outline"
                    onClick={() => setAmount(value)}
                    className={
                      amount === value
                        ? "border-bright-yellow text-bright-yellow bg-gray-700"
                        : "bg-gray-700 text-white border-gray-600"
                    }
                  >
                    {value} $DROPS
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message (optional)
                </Label>
                <Input
                  id="message"
                  placeholder="Add a message..."
                  className="bg-gray-700 border-gray-600 text-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-2">
          <Button
            onClick={handleSend}
            disabled={isLoading || amount <= 0 || !selectedUser}
            className="bg-bright-yellow hover:bg-bright-yellow-700 text-black"
          >
            {isLoading ? "Processing..." : "Send tokens"}
          </Button>
          <p className="text-xs text-gray-400 text-center mt-2 flex items-center justify-center">
            <Info className="h-3 w-3 mr-1" />
            This is a demo. No real transaction will be made.
          </p>
        </div>
      </div>
    </div>
  );
}
```

## File: components/stats-card.tsx

```typescript
import type { ReactNode } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  icon: ReactNode
  title: string
  value: string
  trend: string
  trendUp: boolean
}

export default function StatsCard({ icon, title, value, trend, trendUp }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="flex items-center pt-1">
          {trendUp ? (
            <span className="flex items-center text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              {trend}
            </span>
          ) : (
            <span className="flex items-center text-red-500">
              <ArrowDown className="mr-1 h-4 w-4" />
              {trend}
            </span>
          )}
          <span className="ml-1 text-muted-foreground">from last month</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
```

## File: components/tab-bar.tsx

```typescript
import { Heart, Home, Search, User, Wallet } from "lucide-react";

export function TabBar({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="max-w-md w-full bg-gray-900 border-t border-gray-800">
        <div className="flex justify-between items-center px-6 pt-2 pb-8">
          <button
            onClick={() => onTabChange("home")}
            className={`flex flex-col items-center ${activeTab === "home" ? "text-bright-yellow" : "text-gray-400"}`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => onTabChange("search")}
            className={`flex flex-col items-center ${activeTab === "search" ? "text-bright-yellow" : "text-gray-400"}`}
          >
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">Explore</span>
          </button>
          <button
            onClick={() => onTabChange("wallet")}
            className={`flex flex-col items-center ${activeTab === "wallet" ? "text-bright-yellow" : "text-gray-400"}`}
          >
            <Wallet className="h-6 w-6" />
            <span className="text-xs mt-1">Wallet</span>
          </button>
          <button
            onClick={() => onTabChange("activity")}
            className={`flex flex-col items-center ${activeTab === "activity" ? "text-bright-yellow" : "text-gray-400"}`}
          >
            <Heart className="h-6 w-6" />
            <span className="text-xs mt-1">Activity</span>
          </button>
          <button
            onClick={() => onTabChange("profile")}
            className={`flex flex-col items-center ${activeTab === "profile" ? "text-bright-yellow" : "text-gray-400"}`}
          >
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
```

## File: components/theme-provider.tsx

```typescript
"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

## File: contexts/music-player-context.tsx

```typescript
"use client"

import React, { useState, useRef, useEffect, useCallback, useContext, createContext, ReactNode } from 'react'

export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  cover: string
  audioUrl?: string
  isLiked?: boolean
}

interface MusicPlayerContextProps {
  currentTrack: Track | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  showMiniPlayer: boolean
  isExpanded: boolean
  currentTrackIndex: number
  playTrack: (track: Track) => void
  togglePlay: () => void
  seek: (time: number) => void
  setVolumeLevel: (volume: number) => void
  toggleMute: () => void
  hideMiniPlayer: () => void
  expandPlayer: () => void
  collapsePlayer: () => void
  nextTrack: () => void
  previousTrack: () => void
  formatTime: (time: number) => string
  audioRef: React.RefObject<HTMLAudioElement | null>
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(undefined)

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [showMiniPlayer, setShowMiniPlayer] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [playlist, setPlaylist] = useState<Track[]>([])

  const audioRef = useRef<HTMLAudioElement>(null)

  // Format time from seconds to MM:SS
  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }, [])

  // Play a track
  const playTrack = useCallback((track: Track) => {
    try {
      const isNewTrack = currentTrack?.id !== track.id
      setCurrentTrack(track)
      setIsPlaying(true)
      setShowMiniPlayer(true)

      // Update playlist and track index
      if (isNewTrack) {
        // Import musicTracks dynamically to avoid circular dependency
        import('@/lib/music-data').then(({ musicTracks }) => {
          const trackIndex = musicTracks.findIndex(t => t.id === track.id)
          setPlaylist(musicTracks)
          setCurrentTrackIndex(trackIndex >= 0 ? trackIndex : 0)
        })
        setCurrentTime(0)
      }

      if (audioRef.current && track.audioUrl) {
        // Only set src if it's a new track or if there's no src
        if (isNewTrack || !audioRef.current.src) {
          audioRef.current.src = track.audioUrl
        }
        audioRef.current.play().catch((error) => {
          console.error('Error playing track:', error)
          setIsPlaying(false)
          setShowMiniPlayer(false)
        })
      }
    } catch (error) {
      console.error('Error in playTrack:', error)
      setIsPlaying(false)
      setShowMiniPlayer(false)
    }
  }, [currentTrack?.id])

  // Next track
  const nextTrack = useCallback(() => {
    if (playlist.length === 0) return

    const nextIndex = (currentTrackIndex + 1) % playlist.length
    const nextTrack = playlist[nextIndex]
    if (nextTrack) {
      playTrack(nextTrack)
    }
  }, [playlist, currentTrackIndex, playTrack])

  // Previous track
  const previousTrack = useCallback(() => {
    if (playlist.length === 0) return

    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1
    const prevTrack = playlist[prevIndex]
    if (prevTrack) {
      playTrack(prevTrack)
    }
  }, [playlist, currentTrackIndex, playTrack])

  // Expand player
  const expandPlayer = useCallback(() => {
    setIsExpanded(true)
  }, [])

  // Collapse player
  const collapsePlayer = useCallback(() => {
    setIsExpanded(false)
  }, [])

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (!currentTrack) return

    try {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          audioRef.current.play().catch((error) => {
            console.error('Error playing audio:', error)
            setIsPlaying(false)
          })
          setIsPlaying(true)
        }
      }
    } catch (error) {
      console.error('Error in togglePlay:', error)
      setIsPlaying(false)
    }
  }, [currentTrack, isPlaying])

  // Seek to specific time
  const seek = useCallback((time: number) => {
    try {
      setCurrentTime(time)
      if (audioRef.current) {
        audioRef.current.currentTime = time
      }
    } catch (error) {
      console.error('Error in seek:', error)
    }
  }, [])

  // Set volume
  const setVolumeLevel = useCallback((newVolume: number) => {
    try {
      setVolume(newVolume)
      if (audioRef.current) {
        audioRef.current.volume = newVolume / 100
      }
    } catch (error) {
      console.error('Error in setVolumeLevel:', error)
    }
  }, [])

  // Toggle mute
  const toggleMute = useCallback(() => {
    try {
      setIsMuted((prev) => {
        if (audioRef.current) {
          audioRef.current.muted = !prev
        }
        return !prev
      })
    } catch (error) {
      console.error('Error in toggleMute:', error)
    }
  }, [])

  // Hide mini player
  const hideMiniPlayer = useCallback(() => {
    setShowMiniPlayer(false)
  }, [])

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = (error: Event) => {
      console.error('Audio error:', error)
      setIsPlaying(false)
      setShowMiniPlayer(false)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        showMiniPlayer,
        isExpanded,
        currentTrackIndex,
        playTrack,
        togglePlay,
        seek,
        setVolumeLevel,
        toggleMute,
        hideMiniPlayer,
        expandPlayer,
        collapsePlayer,
        nextTrack,
        previousTrack,
        formatTime,
        audioRef
      }}
    >
      {children}
      {/* Hidden Audio Element - Global */}
      <audio ref={audioRef} preload="metadata" />
    </MusicPlayerContext.Provider>
  )
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext)
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider')
  }
  return context
}
```

## File: contexts/solana-wallet-context.tsx

```typescript
'use client'

import React, { useMemo, useEffect, useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css'

export function SolanaWalletProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // You can use 'devnet', 'testnet', or 'mainnet-beta'
  const network = 'mainnet-beta'
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
```

## File: data/artist-profile.ts

```typescript
// Vamos a actualizar los datos de los artistas para que cada uno tenga contenido único
// Reemplazaremos la constante artists con datos más personalizados

import { Artist } from "@/types/artist";

export const artists: Artist[] = [
  {
    id: "iamjuampi",
    name: "iamjuampi",
    handle: "@iamjuampi",
    avatar: "/avatars/juampi.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Tech-House",
    description:
      "DJ, producer, and founder of the record label Best Drops Ever.",
    supporters: 1850,
    blgReceived: 1850,
    featured: true,
    tokenName: "JUAMPI",
    tokenPrice: 0.45,
    posts: [
      {
        content:
          "Just released my new EP 'Techno Dimensions'. Available now on all platforms! #TechnoDimensions #NewRelease",
        time: "2 hours ago",
        likes: 87,
        comments: 14,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Preparing my set for this weekend at Club Underground. It's going to be an epic night of techno and house. Who's coming? 🎧",
        time: "1 day ago",
        likes: 65,
        comments: 23,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Happy to announce I'll be playing at the Electronic Dreams festival next month. See you there! #ElectronicDreams #Festival",
        time: "3 days ago",
        likes: 112,
        comments: 31,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Working on new sounds for my upcoming release. I'm experimenting with analog synthesizers and 90s samples.",
        time: "1 week ago",
        likes: 94,
        comments: 17,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Midnight Pulse (Extended Mix)",
        description: "10-minute extended version only for $JUAMPI holders",
        date: "Mar 15, 2025",
      },
      {
        title: "Production tutorial - Techno Kicks",
        description: "Learn to create powerful kicks for your techno tracks",
        date: "Mar 10, 2025",
      },
      {
        title: "Live set - Club Underground",
        description: "Complete recording of my latest set at Club Underground",
        date: "Mar 5, 2025",
      },
    ],
    rewards: [
      {
        title: "Exclusive Monthly Track",
        description: "Unreleased track available only to token holders",
        minTokens: 10,
        subscribers: 156,
      },
      {
        title: "Production Masterclass",
        description: "Monthly video tutorial on advanced production techniques",
        minTokens: 25,
        subscribers: 87,
      },
      {
        title: "Stems & Project Files",
        description: "Complete project files for selected tracks",
        minTokens: 50,
        subscribers: 42,
      },
      {
        title: "VIP Club Access",
        description: "Priority access to my shows at Club Underground",
        minTokens: 75,
        subscribers: 28,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Techno Dimensions EP reached 500,000 streams",
        date: "Mar 15, 2025",
      },
      {
        id: "c2",
        type: "platinum",
        title: "Platinum Record",
        description: "Midnight Pulse single reached 1,000,000 streams",
        date: "Feb 20, 2025",
      },
      {
        id: "c3",
        type: "views",
        title: "1M Views",
        description:
          "Music video for 'Electronic Dreams' reached 1 million views",
        date: "Jan 30, 2025",
      },
      {
        id: "c4",
        type: "soldout",
        title: "Sold Out Event",
        description: "Club Underground performance sold out in 24 hours",
        date: "Jan 15, 2025",
      },
      {
        id: "c5",
        type: "award",
        title: "Best New Artist",
        description: "Electronic Music Awards 2025",
        date: "Jan 5, 2025",
      },
    ],
  },
  {
    id: "banger",
    name: "Banger",
    handle: "@banger",
    avatar: "/avatars/banger.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "DNB y Tech-House",
    description:
      "House producer with disco and funk influences. Known for energetic rhythms.",
    supporters: 2100,
    blgReceived: 2100,
    featured: true,
    tokenName: "BANGER",
    tokenPrice: 0.42,
    posts: [
      {
        content:
          "Just dropped 'Disco Inferno' - my funkiest house track yet! Link in bio 🔥 #DiscoHouse #NewMusic",
        time: "3 hours ago",
        likes: 92,
        comments: 18,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Vinyl lovers! Limited edition 12\" of 'Groove Machine' coming next week. Only 200 copies available!",
        time: "1 day ago",
        likes: 124,
        comments: 35,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Throwback to my Ibiza set last summer. Still can't believe how amazing that crowd was! #Ibiza #HouseMusic",
        time: "3 days ago",
        likes: 156,
        comments: 27,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Studio session with @nicolamarti today. The collab you've all been waiting for is finally happening!",
        time: "5 days ago",
        likes: 187,
        comments: 42,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Disco Fever (Club Mix)",
        description: "Extended club mix only for $BANGER holders",
        date: "Mar 12, 2025",
      },
      {
        title: "Sample pack - House Essentials Vol. 1",
        description: "Collection of premium samples for house producers",
        date: "Mar 5, 2025",
      },
      {
        title: "Behind the scenes - Studio Session",
        description: "Watch how I created my latest track from scratch",
        date: "Feb 28, 2025",
      },
    ],
    rewards: [
      {
        title: "Disco House Sample Pack",
        description: "Monthly collection of disco samples and loops",
        minTokens: 15,
        subscribers: 178,
      },
      {
        title: "Vinyl First Access",
        description: "Early access to limited vinyl releases",
        minTokens: 30,
        subscribers: 92,
      },
      {
        title: "Remix Competition",
        description: "Exclusive stems to remix my tracks monthly",
        minTokens: 45,
        subscribers: 64,
      },
      {
        title: "DJ Feedback",
        description: "Personal feedback on your tracks once a month",
        minTokens: 75,
        subscribers: 38,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Disco Inferno single reached 500,000 streams",
        date: "Feb 10, 2025",
      },
      {
        id: "c2",
        type: "views",
        title: "2M Views",
        description: "Music video for 'Groove Machine' reached 2 million views",
        date: "Jan 25, 2025",
      },
      {
        id: "c3",
        type: "soldout",
        title: "Sold Out Tour",
        description: "European Summer Tour 2024 sold out in 48 hours",
        date: "Dec 15, 2024",
      },
      {
        id: "c4",
        type: "award",
        title: "Best House Producer",
        description: "DJ Mag Awards 2024",
        date: "Nov 20, 2024",
      },
    ],
  },
  {
    id: "nicolamarti",
    name: "Nicola Marti",
    handle: "@nicolamarti",
    avatar: "/avatars/nicola.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Tech-House",
    description:
      "Italian melodic techno artist with a unique and atmospheric style.",
    supporters: 1750,
    blgReceived: 1750,
    featured: true,
    tokenName: "NICOLA",
    tokenPrice: 0.38,
    posts: [
      {
        content:
          "My new album 'Ethereal Landscapes' is finally complete. Can't wait to share this journey with you all next month.",
        time: "5 hours ago",
        likes: 143,
        comments: 38,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Recording strings with the Milano Chamber Orchestra today. Adding classical elements to electronic music is pure magic.",
        time: "2 days ago",
        likes: 167,
        comments: 29,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Berlin, thank you for an unforgettable night at Panorama Bar. The energy was transcendent. #Berlin #MelodicTechno",
        time: "4 days ago",
        likes: 201,
        comments: 47,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Just finished mastering the collaboration with @banger - two different worlds colliding in the most beautiful way.",
        time: "1 week ago",
        likes: 178,
        comments: 35,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Melodic Journey (Extended Mix)",
        description: "10-minute journey through melodic techno landscapes",
        date: "Mar 14, 2025",
      },
      {
        title: "Ableton Live Template - Melodic Techno",
        description: "My personal template for creating melodic techno tracks",
        date: "Mar 7, 2025",
      },
      {
        title: "Live recording - Club Panorama Berlin",
        description: "Full 2-hour set from my recent Berlin performance",
        date: "Feb 25, 2025",
      },
    ],
    rewards: [
      {
        title: "Orchestral Elements",
        description: "Monthly orchestral samples recorded with live musicians",
        minTokens: 15,
        subscribers: 145,
      },
      {
        title: "Ambient Soundscapes",
        description: "Exclusive ambient compositions for meditation",
        minTokens: 25,
        subscribers: 78,
      },
      {
        title: "Melodic Progression Masterclass",
        description: "Monthly tutorial on creating emotional progressions",
        minTokens: 40,
        subscribers: 52,
      },
      {
        title: "Studio Live Stream",
        description: "Monthly live stream from my Milan studio",
        minTokens: 60,
        subscribers: 31,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "platinum",
        title: "Platinum Record",
        description: "Ethereal Landscapes album reached 1,000,000 streams",
        date: "Mar 5, 2025",
      },
      {
        id: "c2",
        type: "award",
        title: "Best Melodic Techno Artist",
        description: "International Electronic Music Awards 2024",
        date: "Dec 10, 2024",
      },
      {
        id: "c3",
        type: "soldout",
        title: "Sold Out Show",
        description: "Milan Techno Festival headlining show sold out",
        date: "Nov 20, 2024",
      },
      {
        id: "c4",
        type: "views",
        title: "3M Views",
        description: "Live performance at Tomorrowland reached 3 million views",
        date: "Oct 15, 2024",
      },
    ],
  },
  {
    id: "axs",
    name: "AXS",
    handle: "@axs",
    avatar: "/avatars/axs.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Riddim",
    description:
      "Producer of industrial techno with influences from EBM and post-punk.",
    supporters: 1680,
    blgReceived: 1680,
    featured: true,
    tokenName: "AXS",
    tokenPrice: 0.4,
    posts: [
      {
        content:
          "New EP 'Mechanical Dystopia' drops next week. The darkest, hardest techno I've ever made. #IndustrialTechno",
        time: "6 hours ago",
        likes: 132,
        comments: 41,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Field recording session at an abandoned factory today. These machines make the most incredible sounds.",
        time: "2 days ago",
        likes: 98,
        comments: 23,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "My modular synth setup is finally complete. Spent 3 years building this beast. Time to make some noise!",
        time: "5 days ago",
        likes: 176,
        comments: 52,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Berghain closing set was pure madness last night. 4 hours of relentless industrial techno. Thank you Berlin!",
        time: "1 week ago",
        likes: 215,
        comments: 67,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Industrial Complex (Extended Mix)",
        description: "Hard-hitting industrial techno journey",
        date: "Mar 10, 2025",
      },
      {
        title: "Sound design tutorial - Creating industrial textures",
        description: "Learn how I create my signature industrial sounds",
        date: "Mar 3, 2025",
      },
      {
        title: "Modular patches collection",
        description: "My favorite modular synth patches for techno production",
        date: "Feb 20, 2025",
      },
    ],
    rewards: [
      {
        title: "Modular Synth Patches",
        description: "Monthly collection of my modular synth patches",
        minTokens: 20,
        subscribers: 132,
      },
      {
        title: "Industrial Sound Design",
        description: "Tutorials on creating harsh industrial sounds",
        minTokens: 35,
        subscribers: 85,
      },
      {
        title: "Field Recording Library",
        description: "Access to my industrial field recording library",
        minTokens: 50,
        subscribers: 47,
      },
      {
        title: "Hardware Processing Techniques",
        description: "Learn how I process sounds through hardware",
        minTokens: 75,
        subscribers: 29,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Mechanical Dystopia EP reached 500,000 streams",
        date: "Feb 15, 2025",
      },
      {
        id: "c2",
        type: "views",
        title: "1.5M Views",
        description: "Berghain live set reached 1.5 million views",
        date: "Jan 20, 2025",
      },
      {
        id: "c3",
        type: "award",
        title: "Best Industrial Techno Producer",
        description: "Underground Electronic Awards 2024",
        date: "Dec 5, 2024",
      },
      {
        id: "c4",
        type: "soldout",
        title: "Sold Out Warehouse Event",
        description: "Industrial Noise warehouse event sold out in 2 hours",
        date: "Nov 10, 2024",
      },
    ],
  },
  {
    id: "flush",
    name: "FLUSH",
    handle: "@flush",
    avatar: "/avatars/flush.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Dubstep",
    description:
      "Drum & bass producer with a focus on futuristic and experimental sounds.",
    supporters: 1320,
    blgReceived: 1320,
    featured: false,
    tokenName: "FLUSH",
    tokenPrice: 0.35,
    posts: [
      {
        content:
          "Just finished mastering 'Neurofunk Odyssey' - my most complex D&B track to date. Out next Friday! #DrumAndBass",
        time: "4 hours ago",
        likes: 108,
        comments: 32,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Breaking down the science of perfect breaks - new tutorial on my Patreon for those who want to level up their D&B game.",
        time: "2 days ago",
        likes: 87,
        comments: 19,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "London, that was insane! Fabric nightclub, you never disappoint. The energy in that room was electric!",
        time: "5 days ago",
        likes: 143,
        comments: 38,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Working on some half-time experiments. Pushing the boundaries between D&B and hip-hop. Who's interested?",
        time: "1 week ago",
        likes: 96,
        comments: 27,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Future Breaks (VIP Mix)",
        description: "Special VIP version with extra breaks and bass",
        date: "Mar 13, 2025",
      },
      {
        title: "Drum processing tutorial",
        description: "Learn how to create punchy drum & bass breaks",
        date: "Mar 6, 2025",
      },
      {
        title: "Live set - Jungle Massive",
        description: "Full recording of my recent festival performance",
        date: "Feb 27, 2025",
      },
    ],
    rewards: [
      {
        title: "Break Engineering",
        description: "Monthly tutorial on crafting perfect D&B breaks",
        minTokens: 15,
        subscribers: 98,
      },
      {
        title: "Bass Design Masterclass",
        description: "Learn to create cutting-edge neurofunk bass",
        minTokens: 30,
        subscribers: 64,
      },
      {
        title: "Exclusive DJ Mixes",
        description: "Monthly exclusive DJ mixes with unreleased tracks",
        minTokens: 45,
        subscribers: 35,
      },
      {
        title: "Stem Access",
        description: "Download stems from my tracks for remixing",
        minTokens: 60,
        subscribers: 22,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Neurofunk Odyssey EP reached 500,000 streams",
        date: "Jan 25, 2025",
      },
      {
        id: "c2",
        type: "views",
        title: "1M Views",
        description: "Fabric London live set reached 1 million views",
        date: "Dec 15, 2024",
      },
      {
        id: "c3",
        type: "award",
        title: "Best Newcomer",
        description: "Drum&Bass Arena Awards 2024",
        date: "Nov 5, 2024",
      },
      {
        id: "c4",
        type: "soldout",
        title: "Sold Out Show",
        description: "Printworks London show sold out in 24 hours",
        date: "Oct 20, 2024",
      },
    ],
  },
  {
    id: "daniloDR",
    name: "DaniløDR",
    handle: "@daniloDR",
    avatar: "/avatars/danilo.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Trap",
    description:
      "Creator of progressive trance with elements of classical music and ambient.",
    supporters: 980,
    blgReceived: 980,
    featured: false,
    tokenName: "DANILO",
    tokenPrice: 0.32,
    posts: [
      {
        content:
          "New album 'Harmonic Convergence' is finally complete after 2 years of work. A fusion of trance and classical orchestration.",
        time: "7 hours ago",
        likes: 89,
        comments: 24,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Just finished recording with the Prague Symphony Orchestra. Adding real strings to electronic music creates such depth.",
        time: "3 days ago",
        likes: 112,
        comments: 31,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Sunrise set at Ozora Festival was a spiritual experience. Thank you for joining me on this journey.",
        time: "6 days ago",
        likes: 134,
        comments: 42,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Exploring microtonal scales in my latest compositions. Breaking free from Western 12-tone limitations.",
        time: "1 week ago",
        likes: 76,
        comments: 19,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Ethereal Journey (Extended Mix)",
        description: "10-minute progressive trance journey",
        date: "Mar 11, 2025",
      },
      {
        title: "Orchestral samples collection",
        description: "Classical samples perfect for trance production",
        date: "Mar 4, 2025",
      },
      {
        title: "Production walkthrough - Layering techniques",
        description: "Learn how I create lush, layered trance soundscapes",
        date: "Feb 22, 2025",
      },
    ],
    rewards: [
      {
        title: "Orchestral Elements",
        description: "Monthly orchestral samples from live recordings",
        minTokens: 10,
        subscribers: 75,
      },
      {
        title: "Meditation Compositions",
        description: "Exclusive ambient tracks for meditation",
        minTokens: 25,
        subscribers: 48,
      },
      {
        title: "Harmonic Theory Lessons",
        description: "Learn music theory for emotional compositions",
        minTokens: 40,
        subscribers: 29,
      },
      {
        title: "Sunrise Set Recordings",
        description: "Access to my exclusive festival sunrise sets",
        minTokens: 60,
        subscribers: 18,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Harmonic Convergence album reached 500,000 streams",
        date: "Feb 5, 2025",
      },
      {
        id: "c2",
        type: "award",
        title: "Best Progressive Trance Album",
        description: "Global Trance Awards 2024",
        date: "Nov 30, 2024",
      },
      {
        id: "c3",
        type: "views",
        title: "1.2M Views",
        description: "Ozora Festival sunrise set reached 1.2 million views",
        date: "Oct 15, 2024",
      },
      {
        id: "c4",
        type: "soldout",
        title: "Sold Out Concert",
        description: "Orchestral electronic concert sold out in Prague",
        date: "Sep 20, 2024",
      },
    ],
  },
  {
    id: "spitflux",
    name: "Spitflux",
    handle: "@spitflux",
    avatar: "/avatars/spitflux.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Dubstep",
    description:
      "Innovator in the dubstep scene with an aggressive and detailed style.",
    supporters: 1450,
    blgReceived: 1450,
    featured: false,
    tokenName: "SPITFLUX",
    tokenPrice: 0.37,
    posts: [
      {
        content:
          "Just dropped 'Waveform Crusher' - the heaviest bass I've ever designed. Your speakers have been warned! #Dubstep",
        time: "5 hours ago",
        likes: 156,
        comments: 47,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "New sound design tutorial: How I created that alien bass sound everyone's been asking about. Link in bio.",
        time: "2 days ago",
        likes: 123,
        comments: 38,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Lost Lands Festival was INSANE! Dropping unreleased tunes to 30,000 headbangers was a dream come true.",
        time: "4 days ago",
        likes: 187,
        comments: 56,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Studio session with @kr4d today. Combining dubstep and ambient is creating some mind-bending results!",
        time: "1 week ago",
        likes: 109,
        comments: 31,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Bass Cannon (VIP Mix)",
        description: "Even heavier version with extra bass drops",
        date: "Mar 9, 2025",
      },
      {
        title: "Sound design tutorial - Creating alien bass",
        description: "Learn my techniques for creating unique bass sounds",
        date: "Mar 2, 2025",
      },
      {
        title: "Serum presets pack - Dubstep Essentials",
        description: "Collection of my personal Serum presets",
        date: "Feb 18, 2025",
      },
    ],
    rewards: [
      {
        title: "Serum Preset Pack",
        description: "Monthly pack of my custom Serum presets",
        minTokens: 15,
        subscribers: 112,
      },
      {
        title: "Bass Design Masterclass",
        description: "In-depth tutorials on creating unique bass sounds",
        minTokens: 30,
        subscribers: 67,
      },
      {
        title: "Unreleased Demos",
        description: "Access to unreleased and experimental tracks",
        minTokens: 45,
        subscribers: 41,
      },
      {
        title: "Feedback Sessions",
        description: "Monthly group feedback on your dubstep tracks",
        minTokens: 60,
        subscribers: 25,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "gold",
        title: "Gold Record",
        description: "Waveform Crusher EP reached 500,000 streams",
        date: "Jan 15, 2025",
      },
      {
        id: "c2",
        type: "views",
        title: "2M Views",
        description: "Lost Lands Festival set reached 2 million views",
        date: "Dec 10, 2024",
      },
      {
        id: "c3",
        type: "soldout",
        title: "Sold Out Tour",
        description: "North American Bass Tour sold out in 48 hours",
        date: "Nov 25, 2024",
      },
      {
        id: "c4",
        type: "award",
        title: "Best Dubstep Producer",
        description: "Bass Music Awards 2024",
        date: "Oct 5, 2024",
      },
    ],
  },
  {
    id: "kr4d",
    name: "Kr4D",
    handle: "@kr4d",
    avatar: "/avatars/kr4d.jpg",
    coverImage: "/images/bdeeeee.jpg",
    genre: "Electro",
    description:
      "Ambient and experimental music artist focusing on immersive soundscapes.",
    supporters: 890,
    blgReceived: 890,
    featured: false,
    tokenName: "KR4D",
    tokenPrice: 0.3,
    posts: [
      {
        content:
          "New album 'Quantum Resonance' explores the relationship between sound and consciousness. A 60-minute journey into deep listening.",
        time: "8 hours ago",
        likes: 76,
        comments: 21,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Just returned from a month in the Himalayas recording mountain sounds. These will form the basis of my next project.",
        time: "3 days ago",
        likes: 92,
        comments: 27,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "My installation at the Modern Art Museum opens next week. 12 speakers, generative algorithms, and responsive lighting.",
        time: "5 days ago",
        likes: 108,
        comments: 34,
        image: "/images/dj-mixer.png",
      },
      {
        content:
          "Exploring the use of AI in ambient composition. The results are fascinating - both familiar and alien simultaneously.",
        time: "1 week ago",
        likes: 65,
        comments: 19,
        image: "/images/dj-mixer.png",
      },
    ],
    exclusiveContent: [
      {
        title: "Exclusive track - Cosmic Whispers (Extended Journey)",
        description: "30-minute ambient soundscape experience",
        date: "Mar 8, 2025",
      },
      {
        title: "Field recordings collection - Forest Sounds",
        description: "High-quality nature recordings for ambient production",
        date: "Mar 1, 2025",
      },
      {
        title: "Ambient production techniques",
        description: "Learn how to create immersive ambient soundscapes",
        date: "Feb 15, 2025",
      },
    ],
    rewards: [
      {
        title: "Generative Music App",
        description: "Access to my custom generative music application",
        minTokens: 10,
        subscribers: 68,
      },
      {
        title: "Himalayan Field Recordings",
        description: "Exclusive access to my Himalayan sound library",
        minTokens: 20,
        subscribers: 42,
      },
      {
        title: "Meditation Compositions",
        description: "Monthly ambient pieces designed for deep meditation",
        minTokens: 30,
        subscribers: 31,
      },
      {
        title: "Sound Art Installations",
        description: "Virtual access to my sound art installations",
        minTokens: 50,
        subscribers: 17,
      },
    ],
    certifications: [
      {
        id: "c1",
        type: "award",
        title: "Best Ambient Album",
        description: "Quantum Resonance won Best Ambient Album 2024",
        date: "Dec 20, 2024",
      },
      {
        id: "c2",
        type: "views",
        title: "1M Streams",
        description: "Quantum Resonance album reached 1 million streams",
        date: "Nov 15, 2024",
      },
      {
        id: "c3",
        type: "award",
        title: "Sound Art Prize",
        description: "International Sound Art Biennale 2024",
        date: "Oct 10, 2024",
      },
      {
        id: "c4",
        type: "soldout",
        title: "Sold Out Installation",
        description:
          "Modern Art Museum sound installation sold out for 3 months",
        date: "Sep 5, 2024",
      },
    ],
  },
];
```

## File: data/profile-view.ts

```typescript
// Sample posts data
export const userPosts = [
  {
    content: "Just finished a new track! Can't wait to share it with you all.",
    image: "https://images.unsplash.com/photo-1660211934853-e33d8a02201d",
    likes: 42,
    comments: 7,
    time: "2h ago",
  },
  {
    content: "Working on something special for my supporters. Stay tuned!",
    image: "https://images.unsplash.com/photo-1660211934853-e33d8a02201d",
    likes: 28,
    comments: 5,
    time: "1d ago",
  },
];

// Sample data for rewards and certifications
export const artistRewards = [
  {
    title: "Exclusive Track Access",
    description: "Get early access to unreleased tracks",
    minTokens: 50,
    subscribers: 12,
  },
  {
    title: "Backstage Pass",
    description: "VIP access to live events",
    minTokens: 100,
    subscribers: 8,
  },
];

export const certifications = [
  {
    id: "1",
    type: "gold" as const,
    title: "Gold Artist",
    description: "Achieved gold status on Spotify",
    date: "2024-01-15",
  },
  {
    id: "2",
    type: "views" as const,
    title: "1M Views",
    description: "Reached 1 million views on YouTube",
    date: "2024-02-20",
  },
  {
    id: "3",
    type: "platinum" as const,
    title: "Platinum Artist",
    description: "Achieved platinum status on Spotify",
    date: "2024-03-10",
  },
  {
    id: "4",
    type: "soldout" as const,
    title: "Sold Out Tour",
    description: "Completed a sold out tour",
    date: "2024-04-05",
  },
  {
    id: "5",
    type: "award" as const,
    title: "Best Artist Award",
    description: "Won best artist award",
    date: "2024-05-12",
  },
];

export const rewards = [
  {
    id: "1",
    title: "Exclusive Track Access",
    artistName: "iamjuampi",
    artistAvatar: "/avatars/juampi.jpg",
    description: "Get early access to unreleased tracks",
    date: "2024-01-15",
  },
];

export const followedArtists = [
  {
    id: "1",
    name: "iamjuampi",
    avatar: "/avatars/juampi.jpg",
    followers: 1200,
  },
  {
    id: "2",
    name: "banger",
    avatar: "/avatars/banger.jpg",
    followers: 800,
  },
];
```

## File: data/search-view.ts

```typescript
// Electronic music genre data
export const genres = [
  { name: "House", count: 245, image: "/categories/house.jpg" },
  { name: "Techno", count: 189, image: "/categories/techno.jpg" },
  { name: "Trance", count: 156, image: "/categories/trance.jpg" },
  { name: "Drum & Bass", count: 203, image: "/categories/dnb.jpg" },
  { name: "Dubstep", count: 124, image: "/categories/dubstep.jpg" },
  { name: "Ambient", count: 167, image: "/categories/ambient.jpg" },
];

// Real artists
export const artists = [
  {
    id: "iamjuampi",
    name: "iamjuampi",
    handle: "@iamjuampi",
    avatar: "/avatars/juampi.jpg",
    genre: "Tech-House",
    description:
      "DJ, producer, and founder of the record label Best Drops Ever.",
    featured: true,
    blgReceived: 1850,
  },
  {
    id: "banger",
    name: "Banger",
    handle: "@banger",
    avatar: "/avatars/banger.jpg",
    genre: "DNB y Tech-House",
    description:
      "House producer with disco and funk influences. Known for energetic rhythms.",
    featured: true,
    blgReceived: 2100,
  },
  {
    id: "nicolamarti",
    name: "Nicola Marti",
    handle: "@nicolamarti",
    avatar: "/avatars/nicola.jpg",
    genre: "Tech-House",
    description:
      "Italian melodic techno artist with a unique and atmospheric style.",
    featured: true,
    blgReceived: 1750,
  },
  {
    id: "flush",
    name: "FLUSH",
    handle: "@flush",
    avatar: "/avatars/flush.jpg",
    genre: "Dubstep",
    description:
      "Drum & bass producer with a focus on futuristic and experimental sounds.",
    featured: false,
    blgReceived: 1320,
  },
  {
    id: "daniloDR",
    name: "DaniløDR",
    handle: "@daniloDR",
    avatar: "/avatars/danilo.jpg",
    genre: "Trap",
    description:
      "Creator of progressive trance with elements of classical music and ambient.",
    featured: false,
    blgReceived: 980,
  },
  {
    id: "spitflux",
    name: "Spitflux",
    handle: "@spitflux",
    avatar: "/avatars/spitflux.jpg",
    genre: "Dubstep",
    description:
      "Innovator in the dubstep scene with an aggressive and detailed style.",
    featured: false,
    blgReceived: 1450,
  },
  {
    id: "axs",
    name: "AXS",
    handle: "@axs",
    avatar: "/avatars/axs.jpg",
    genre: "Riddim",
    description:
      "Producer of industrial techno with influences from EBM and post-punk.",
    featured: true,
    blgReceived: 1680,
  },
  {
    id: "kr4d",
    name: "Kr4D",
    handle: "@kr4d",
    avatar: "/avatars/kr4d.jpg",
    genre: "Electro",
    description:
      "Ambient and experimental music artist focusing on immersive soundscapes.",
    featured: false,
    blgReceived: 890,
  },
];

// Trending topics
export const trendingTopics = [
  "#ElectronicMusic",
  "#HouseBeats",
  "#TechnoNights",
  "#TranceFamily",
  "#DrumAndBass",
  "#DubstepVibes",
];
```

## File: data/wallet-view.ts

```typescript
// Artist tokens data
export const artistTokens = [
  {
    id: "1",
    name: "Banger",
    symbol: "BANGER",
    avatar: "/avatars/banger.jpg",
    amount: 15,
    value: "6.75",
    change: "2.3",
  },
  {
    id: "2",
    name: "Nicola Marti",
    symbol: "NICOLA",
    avatar: "/avatars/nicola.jpg",
    amount: 10,
    value: "4.50",
    change: "1.8",
  },
  {
    id: "3",
    name: "AXS",
    symbol: "AXS",
    avatar: "/avatars/axs.jpg",
    amount: 25,
    value: "11.25",
    change: "3.5",
  },
  {
    id: "4",
    name: "FLUSH",
    symbol: "FLUSH",
    avatar: "/avatars/flush.jpg",
    amount: 5,
    value: "2.25",
    change: "0.9",
  },
];

// Sample transaction data
export const transactions = [
  {
    id: "1",
    type: "sent",
    description: "Sent to banger",
    amount: 15,
    date: "Mar 15, 2025",
  },
  {
    id: "2",
    type: "received",
    description: "Received from AXS",
    amount: 10,
    date: "Mar 12, 2025",
  },
  {
    id: "3",
    type: "sent",
    description: "Sent to Nicola Marti",
    amount: 25,
    date: "Mar 10, 2025",
  },
  {
    id: "4",
    type: "received",
    description: "Purchased",
    amount: 50,
    date: "Mar 5, 2025",
  },
  {
    id: "5",
    type: "sent",
    description: "Sent to FLUSH",
    amount: 5,
    date: "Mar 1, 2025",
  },
];
```

## File: hooks/use-auth.tsx

```typescript
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import { backendService } from "@/lib/backend-service"; // Keep using the mock backend
import { UserData } from "@/lib/types";

// --- Mock User Data ---
const mockArtistData: UserData = {
  id: "iamjuampi", // Using a known artist ID
  username: "iamjuampi",
  handle: "@iamjuampi",
  type: "artist",
  isVerified: true,
  profilePhoto: "/avatars/juampi.jpg",
  coverPhoto: "/images/bdeeeee.jpg",
  isIIUser: false, // Simulating non-II user for simplicity, can change
  principal: "mock-principal-artist",
  bio: "DJ, producer, and founder of the record label Best Drops Ever.",
  genre: "Tech-House",
  followers: ["mock_fan_id", "another_fan_id"],
  following: ["banger", "nicolamarti"],
  createdAt: new Date("2024-01-01T10:00:00Z").toISOString(),
  lastActive: new Date().toISOString(),
};

const mockFanData: UserData = {
  id: "mock_fan_id",
  username: "MusicFan99",
  handle: "@musicfan99",
  type: "fan",
  isVerified: false,
  profilePhoto: "/avatars/user.jpg",
  coverPhoto: "/images/bdeeeee.jpg", // Default cover
  isIIUser: false,
  principal: "mock-principal-fan",
  bio: "Just here to support great artists!",
  genre: "Techno",
  followers: [],
  following: ["iamjuampi", "banger"],
  createdAt: new Date("2024-03-15T14:30:00Z").toISOString(),
  lastActive: new Date().toISOString(),
};
// --- End Mock User Data ---

interface AuthContextType {
  user: string | null;
  userData: UserData | null;
  isAuthenticated: boolean;
  balance: number;
  donated: number;
  login: (username: string) => void; // Kept for potential testing, but not primary
  loginWithNFID: (principal: string) => void; // Kept for potential testing
  logout: () => void;
  updateBalance: (newBalance: number) => void;
  addToBalance: (amount: number) => void;
  addToDonated: (amount: number) => void;
  isArtist: () => boolean;
  isNFIDUser: () => boolean; // Will check mocked data
  isFirstTimeNFIDUser: (principal: string) => boolean; // Mocked
  createNFIDUser: (
    principal: string,
    username: string,
    password: string,
    profilePhoto?: File,
  ) => boolean; // Mocked
  updateUserProfile: (updates: Partial<UserData>) => void;
  updateBackendProfile: (
    username?: string,
    handle?: string,
    profileImage?: string,
    coverImage?: string,
    genre?: string,
    bio?: string,
  ) => Promise<boolean>;
  // Simpler way to switch between mock users for testing
  switchMockUser: (type: "artist" | "fan") => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  isAuthenticated: false,
  balance: 0,
  donated: 0,
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
  updateBackendProfile: () => Promise.resolve(false),
  switchMockUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  // Use mock data by default
  const [user, setUser] = useState<string | null>(mockArtistData.id); // Default to artist
  const [userData, setUserData] = useState<UserData | null>(mockArtistData);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Assume logged in
  const [balance, setBalance] = useState(125);
  const [donated, setDonated] = useState(75);

  // Load balance/donated from localStorage on mount
  useEffect(() => {
    const storedBalance = localStorage.getItem("beans_balance");
    if (storedBalance) setBalance(Number(storedBalance));
    const storedDonated = localStorage.getItem("beans_donated");
    if (storedDonated) setDonated(Number(storedDonated));
  }, []);

  // Mock login - Sets the current user to one of the mocks based on "username"
  const login = useCallback((username: string) => {
    if (
      username === mockArtistData.username ||
      username === mockArtistData.id
    ) {
      setUser(mockArtistData.id);
      setUserData(mockArtistData);
      setIsAuthenticated(true);
    } else if (
      username === mockFanData.username ||
      username === mockFanData.id
    ) {
      setUser(mockFanData.id);
      setUserData(mockFanData);
      setIsAuthenticated(true);
    } else {
      // Basic fallback if needed
      setUser("temp_user");
      setUserData({ ...mockFanData, id: "temp_user", username: username });
      setIsAuthenticated(true);
    }
  }, []);

  // Mock NFID login - Just uses the principal as ID and sets mock fan data
  const loginWithNFID = useCallback((principal: string) => {
    // For simplicity, always log in as the mock fan when using this
    setUser(mockFanData.id);
    setUserData({ ...mockFanData, id: principal, principal: principal }); // Use principal as ID
    setIsAuthenticated(true);
    console.log(
      "Mock NFID Login: Logged in as mock fan with principal:",
      principal,
    );
  }, []);

  // Switch between mock users easily
  const switchMockUser = useCallback((type: "artist" | "fan") => {
    if (type === "artist") {
      setUser(mockArtistData.id);
      setUserData(mockArtistData);
    } else {
      setUser(mockFanData.id);
      setUserData(mockFanData);
    }
    setIsAuthenticated(true); // Ensure authenticated state
    console.log(`Switched mock user to: ${type}`);
  }, []);

  const logout = () => {
    setUser(null);
    setUserData(null);
    setIsAuthenticated(false);
    // Don't remove balance/donated to persist them across "sessions"
    console.log("Mock Logout: User logged out");
  };

  const updateBalance = (newBalance: number) => {
    setBalance(newBalance);
    localStorage.setItem("beans_balance", newBalance.toString());
  };

  const addToBalance = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem("beans_balance", newBalance.toString());
  };

  const addToDonated = (amount: number) => {
    const newDonated = donated + amount;
    setDonated(newDonated);
    localStorage.setItem("beans_donated", newDonated.toString());
  };

  const isArtist = () => {
    return userData?.type === "artist";
  };

  // Check the mocked userData
  const isNFIDUser = () => {
    return userData?.isIIUser === true;
  };

  // Mocked functions related to signup flow
  const isFirstTimeNFIDUser = (principal: string) => {
    console.log("Mock isFirstTimeNFIDUser called for:", principal);
    return false; // Assume user always exists in mock setup
  };

  const createNFIDUser = (
    principal: string,
    username: string,
    password: string,
    profilePhoto?: File,
  ) => {
    console.log("Mock createNFIDUser called:", {
      principal,
      username,
      profilePhoto,
    });
    // Simulate creating the fan user
    setUser(principal);
    setUserData({ ...mockFanData, id: principal, username: username });
    setIsAuthenticated(true);
    return true;
  };

  // Update local state for profile changes
  const updateUserProfile = useCallback(
    (updates: Partial<UserData>) => {
      if (!userData) return;
      const updatedUserData = { ...userData, ...updates };
      setUserData(updatedUserData);
      console.log(
        "Mock updateUserProfile (local state updated):",
        updatedUserData,
      );
    },
    [userData],
  );

  // Update backend profile (using the MOCKED backend service)
  const updateBackendProfile = useCallback(
    async (
      username?: string,
      handle?: string,
      profileImage?: string,
      coverImage?: string,
      genre?: string,
      bio?: string,
    ): Promise<boolean> => {
      console.log("Auth (Mock): updateBackendProfile called", {
        username,
        handle,
        profileImage,
        coverImage,
        genre,
        bio,
      });
      if (!user || !userData) {
        console.log("Auth (Mock): No user found, returning false");
        return false;
      }

      try {
        console.log(
          "Auth (Mock): Calling MOCKED backendService.updateUserProfile",
        );
        // This calls the already mocked backend service in lib/backend-service.ts
        const result = await backendService.updateUserProfile(
          username,
          handle,
          profileImage,
          coverImage,
          genre,
          bio,
        );
        console.log("Auth (Mock): Mock backendService result", result);

        if (result.success) {
          console.log(
            "Auth (Mock): Mock backend update successful, updating local state",
          );
          // Update local state based on potentially returned data (or inputs)
          const updatedLocalData: Partial<UserData> = {};
          if (username !== undefined) updatedLocalData.username = username;
          if (handle !== undefined) updatedLocalData.handle = handle;
          if (profileImage !== undefined)
            updatedLocalData.profilePhoto = profileImage;
          if (coverImage !== undefined)
            updatedLocalData.coverPhoto = coverImage;
          if (genre !== undefined) updatedLocalData.genre = genre;
          if (bio !== undefined) updatedLocalData.bio = bio;

          updateUserProfile(updatedLocalData); // Update local state
        }
        return result.success;
      } catch (error) {
        console.error("Auth (Mock): Error updating profile:", error);
        return false;
      }
    },
    [user, userData, updateUserProfile], // Add dependencies
  );

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
        updateBackendProfile,
        switchMockUser, // Expose the switcher
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

## File: hooks/use-mobile.tsx

```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## File: hooks/use-music-player.ts

```typescript
// Re-export from the new context
export {
  useMusicPlayer,
  MusicPlayerProvider,
} from "../contexts/music-player-context";
export type { Track } from "../contexts/music-player-context";
```

## File: hooks/use-music-storage.ts

```typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import { musicService, MusicMetadata, MusicFile } from "@/lib/music-service";
import { useToast } from "@/hooks/use-toast";

export interface UseMusicStorageReturn {
  // State
  musicFiles: MusicMetadata[];
  loading: boolean;
  uploading: boolean;

  // Actions
  uploadMusic: (
    file: File,
    name: string,
    artist: string,
  ) => Promise<string | null>;
  getMusicData: (id: string) => Promise<Uint8Array | null>;
  createMusicBlobUrl: (id: string) => Promise<string | null>;
  deleteMusic: (id: string) => Promise<boolean>;
  refreshMusic: () => Promise<void>;

  // Stats
  stats: {
    totalFiles: number;
    totalSize: number;
  };
}

export function useMusicStorage(): UseMusicStorageReturn {
  const [musicFiles, setMusicFiles] = useState<MusicMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [stats, setStats] = useState({ totalFiles: 0, totalSize: 0 });

  const { toast } = useToast();

  // Load all music metadata
  const loadMusicMetadata = useCallback(async () => {
    try {
      setLoading(true);
      const metadata = await musicService.getAllMusicMetadata();
      setMusicFiles(metadata);

      // Load stats
      const musicStats = await musicService.getMusicStats();
      setStats(musicStats);
    } catch (error) {
      console.error("Error loading music metadata:", error);
      toast({
        title: "Error",
        description: "Failed to load music files",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Upload music file
  const uploadMusic = useCallback(
    async (
      file: File,
      name: string,
      artist: string,
    ): Promise<string | null> => {
      try {
        setUploading(true);

        // Convert file to Uint8Array
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        // Upload to canister
        const musicId = await musicService.uploadMusic(
          name,
          artist,
          uint8Array,
          file.type || "audio/mpeg",
        );

        toast({
          title: "Success",
          description: `Music "${name}" uploaded successfully`,
        });

        // Refresh the list
        await loadMusicMetadata();

        return musicId;
      } catch (error) {
        console.error("Error uploading music:", error);
        toast({
          title: "Upload Failed",
          description:
            error instanceof Error ? error.message : "Failed to upload music",
          variant: "destructive",
        });
        return null;
      } finally {
        setUploading(false);
      }
    },
    [loadMusicMetadata, toast],
  );

  // Get music data
  const getMusicData = useCallback(
    async (id: string): Promise<Uint8Array | null> => {
      try {
        return await musicService.getMusicData(id);
      } catch (error) {
        console.error("Error getting music data:", error);
        toast({
          title: "Error",
          description: "Failed to get music data",
          variant: "destructive",
        });
        return null;
      }
    },
    [toast],
  );

  // Create blob URL for streaming
  const createMusicBlobUrl = useCallback(
    async (id: string): Promise<string | null> => {
      try {
        return await musicService.createMusicBlobUrl(id);
      } catch (error) {
        console.error("Error creating blob URL:", error);
        toast({
          title: "Error",
          description: "Failed to create streaming URL",
          variant: "destructive",
        });
        return null;
      }
    },
    [toast],
  );

  // Delete music file
  const deleteMusic = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        await musicService.deleteMusic(id);

        toast({
          title: "Success",
          description: "Music file deleted successfully",
        });

        // Refresh the list
        await loadMusicMetadata();

        return true;
      } catch (error) {
        console.error("Error deleting music:", error);
        toast({
          title: "Delete Failed",
          description:
            error instanceof Error ? error.message : "Failed to delete music",
          variant: "destructive",
        });
        return false;
      }
    },
    [loadMusicMetadata, toast],
  );

  // Refresh music list
  const refreshMusic = useCallback(async () => {
    await loadMusicMetadata();
  }, [loadMusicMetadata]);

  // Load music on mount
  useEffect(() => {
    loadMusicMetadata();
  }, [loadMusicMetadata]);

  return {
    musicFiles,
    loading,
    uploading,
    uploadMusic,
    getMusicData,
    createMusicBlobUrl,
    deleteMusic,
    refreshMusic,
    stats,
  };
}
```

## File: hooks/use-navigation.ts

```typescript
import { useState, useEffect, useCallback } from "react";

// Hook for managing navigation state
export function useNavigation() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentView, setCurrentView] = useState<
    "main" | "buy" | "send" | "receive" | "artist" | "artistDashboard"
  >("main");
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

  // Debug state changes
  useEffect(() => {
    console.log("Current view changed to:", currentView);
    console.log("Selected artist ID:", selectedArtistId);
  }, [currentView, selectedArtistId]);

  const handleViewArtist = useCallback(
    (artistId: string, currentUser: string | null) => {
      console.log("Viewing artist:", artistId);

      // Check if the clicked artist is the authenticated user
      if (currentUser && artistId === currentUser) {
        console.log("Navigating to user's own profile");
        setActiveTab("profile");
        setCurrentView("main");
        setSelectedArtistId(null);
      } else {
        console.log("Navigating to other artist profile");
        setSelectedArtistId(artistId);
        setCurrentView("artist");
      }
    },
    [],
  );

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    setCurrentView("main");
    setSelectedArtistId(null);
  }, []);

  const navigateToBuy = useCallback(() => {
    setCurrentView("buy");
  }, []);

  const navigateToSend = useCallback(() => {
    setCurrentView("send");
  }, []);

  const navigateToReceive = useCallback(() => {
    setCurrentView("receive");
  }, []);

  const navigateToArtistDashboard = useCallback(() => {
    setCurrentView("artistDashboard");
  }, []);

  const navigateBack = useCallback(() => {
    setCurrentView("main");
    setSelectedArtistId(null);
  }, []);

  return {
    activeTab,
    currentView,
    selectedArtistId,
    handleViewArtist,
    handleTabChange,
    navigateToBuy,
    navigateToSend,
    navigateToReceive,
    navigateToArtistDashboard,
    navigateBack,
  };
}

// Hook for determining which view to render
export function useViewRenderer(
  currentView: string,
  activeTab: string,
  selectedArtistId: string | null,
  user: string | null,
) {
  const getViewType = useCallback(() => {
    // Priority views (override main tabs)
    if (currentView === "buy") return "buy";
    if (currentView === "send") return "send";
    if (currentView === "receive") return "receive";
    if (currentView === "artistDashboard") return "artistDashboard";
    if (currentView === "artist" && selectedArtistId) return "artist";

    // Main tab views
    if (currentView === "main") {
      switch (activeTab) {
        case "home":
          return "home";
        case "search":
          return "search";
        case "wallet":
          return "wallet";
        case "activity":
          return "activity";
        case "profile":
          return "profile";
        default:
          return null;
      }
    }

    return null;
  }, [currentView, activeTab, selectedArtistId]);

  return { viewType: getViewType() };
}
```

## File: hooks/use-toast.ts

```typescript
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

## File: hooks/use-user-data.ts

```typescript
import { useState, useEffect, useCallback } from "react";
import { userDataService } from "@/lib/user-data-service";
import {
  UserData,
  Post,
  Activity,
  Notification,
  UserStats,
  FeedItem,
} from "@/lib/types";
import { useAuth } from "@/features/authentication";

export function useUserData() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [feed, setFeed] = useState<FeedItem[]>([]);

  // Load user data
  const loadUserData = useCallback(() => {
    if (!user) return;

    const data = userDataService.getUser(user);
    const stats = userDataService.getUserStats(user);
    const userPosts = userDataService.getPostsByUser(user);
    const userActivities = userDataService.getActivitiesForUser(user);
    const userNotifications = userDataService.getNotificationsForUser(user);
    const userFeed = userDataService.getFeedForUser(user);

    setUserData(data);
    setUserStats(stats);
    setPosts(userPosts);
    setActivities(userActivities);
    setNotifications(userNotifications);
    setFeed(userFeed);
  }, [user]);

  // Refresh all data
  const refreshData = useCallback(() => {
    loadUserData();
  }, [loadUserData]);

  // Follow a user
  const followUser = useCallback(
    (targetUserId: string) => {
      if (!user) return false;

      const success = userDataService.followUser(user, targetUserId);
      if (success) {
        refreshData();
      }
      return success;
    },
    [user, refreshData],
  );

  // Unfollow a user
  const unfollowUser = useCallback(
    (targetUserId: string) => {
      if (!user) return false;

      const success = userDataService.unfollowUser(user, targetUserId);
      if (success) {
        refreshData();
      }
      return success;
    },
    [user, refreshData],
  );

  // Like a post
  const likePost = useCallback(
    (postId: string) => {
      if (!user) return false;

      const success = userDataService.likePost(user, postId);
      if (success) {
        refreshData();
      }
      return success;
    },
    [user, refreshData],
  );

  // Unlike a post
  const unlikePost = useCallback(
    (postId: string) => {
      if (!user) return false;

      const success = userDataService.unlikePost(user, postId);
      if (success) {
        refreshData();
      }
      return success;
    },
    [user, refreshData],
  );

  // Add a comment
  const addComment = useCallback(
    (postId: string, content: string) => {
      if (!user) return null;

      const comment = userDataService.addComment(user, postId, content);
      if (comment) {
        refreshData();
      }
      return comment;
    },
    [user, refreshData],
  );

  // Create a post
  const createPost = useCallback(
    (postData: Omit<Post, "id" | "createdAt" | "likes" | "comments">) => {
      const post = userDataService.createPost(postData);
      if (post) {
        refreshData();
      }
      return post;
    },
    [refreshData],
  );

  // Mark notification as read
  const markNotificationAsRead = useCallback(
    (notificationId: string) => {
      if (!user) return;

      userDataService.markNotificationAsRead(user, notificationId);
      refreshData();
    },
    [user, refreshData],
  );

  // Search users
  const searchUsers = useCallback((query: string) => {
    return userDataService.searchUsers(query);
  }, []);

  // Search posts
  const searchPosts = useCallback((query: string) => {
    return userDataService.searchPosts(query);
  }, []);

  // Get user by ID
  const getUser = useCallback((userId: string) => {
    return userDataService.getUser(userId);
  }, []);

  // Get user stats
  const getUserStats = useCallback((userId: string) => {
    return userDataService.getUserStats(userId);
  }, []);

  // Get posts by user
  const getPostsByUser = useCallback((userId: string) => {
    return userDataService.getPostsByUser(userId);
  }, []);

  // Get tokens by artist
  const getTokensByArtist = useCallback((artistId: string) => {
    return userDataService.getTokensByArtist(artistId);
  }, []);

  // Get all tokens
  const getAllTokens = useCallback(() => {
    return userDataService.getAllTokens();
  }, []);

  // Load data on mount and when user changes
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  return {
    // Data
    userData,
    userStats,
    posts,
    activities,
    notifications,
    feed,

    // Actions
    refreshData,
    followUser,
    unfollowUser,
    likePost,
    unlikePost,
    addComment,
    createPost,
    markNotificationAsRead,

    // Search
    searchUsers,
    searchPosts,

    // Getters
    getUser,
    getUserStats,
    getPostsByUser,
    getTokensByArtist,
    getAllTokens,
  };
}
```

## File: lib/backend-service.ts

```typescript
class BackendService {
  constructor() {
    // Initialize service
  }

  async updateUserProfile(
    username?: string,
    handle?: string,
    profileImage?: string,
    coverImage?: string,
    genre?: string,
    bio?: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: updateUserProfile called", {
        username,
        handle,
        profileImage,
        coverImage,
        genre,
        bio,
      });

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        success: true,
        data: {
          id: "mock-user",
          username: username || "user",
          handle: handle,
          profileImage: profileImage,
          coverImage: coverImage,
          genre: genre,
          bio: bio,
        },
      };
    } catch (error) {
      console.error("Error updating user profile:", error);
      return { success: false, error: "Failed to update profile" };
    }
  }

  async updateUsername(
    username: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: updateUsername called", username);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return { success: true, data: { id: "mock-user", username } };
    } catch (error) {
      console.error("Error updating username:", error);
      return { success: false, error: "Failed to update username" };
    }
  }

  async updateHandle(
    handle: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: updateHandle called", handle);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return { success: true, data: { id: "mock-user", handle } };
    } catch (error) {
      console.error("Error updating handle:", error);
      return { success: false, error: "Failed to update handle" };
    }
  }

  async updateProfileImage(
    profileImage: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: updateProfileImage called", profileImage);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return { success: true, data: { id: "mock-user", profileImage } };
    } catch (error) {
      console.error("Error updating profile image:", error);
      return { success: false, error: "Failed to update profile image" };
    }
  }

  async updateCoverImage(
    coverImage: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: updateCoverImage called", coverImage);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 300));

      return { success: true, data: { id: "mock-user", coverImage } };
    } catch (error) {
      console.error("Error updating cover image:", error);
      return { success: false, error: "Failed to update cover image" };
    }
  }

  async getUser(
    userId: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: getUser called", userId);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 200));

      return {
        success: true,
        data: {
          id: userId,
          username: "mock-user",
          handle: null,
          profileImage: null,
          coverImage: null,
        },
      };
    } catch (error) {
      console.error("Error getting user:", error);
      return { success: false, error: "Failed to get user" };
    }
  }

  async createUser(
    username: string,
  ): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      console.log("Mock: createUser called", username);

      // Simulate backend call
      await new Promise((resolve) => setTimeout(resolve, 400));

      return { success: true, data: { id: "mock-user", username } };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, error: "Failed to create user" };
    }
  }
}

export const backendService = new BackendService();
```

## File: lib/blockchain.ts

```typescript
// This file would contain the actual blockchain interactions
// For this demo, we're using mock implementations

import { ethers } from "ethers";

// ABI for the DROPS Token contract
const BEANS_TOKEN_ABI = [
  // This would be the actual ABI for the DROPS token contract
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address account) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
];

// ABI for the Beans Platform contract
const BEANS_PLATFORM_ABI = [
  // This would be the actual ABI for the Beans platform contract
  "function donateToCreator(string creatorId, uint256 amount, string message, bool isAnonymous) returns (bool)",
  "function getCreatorInfo(string creatorId) view returns (address walletAddress, uint256 totalReceived, uint256 supportersCount)",
  "function registerAsCreator(string name, string handle, string category, string description) returns (string creatorId)",
];

// Contract addresses (these would be the actual addresses on World Chain)
const BEANS_TOKEN_ADDRESS = "0x1234567890123456789012345678901234567890";
const BEANS_PLATFORM_ADDRESS = "0x0987654321098765432109876543210987654321";

// Connect to provider (in a real app, this would connect to World Chain)
const getProvider = () => {
  // In a real app, this would connect to the World Chain network
  // For now, we'll just return a mock provider
  return new ethers.JsonRpcProvider("https://worldchain-rpc.example.com");
};

// Get signer (in a real app, this would get the user's wallet)
const getSigner = async () => {
  const provider = getProvider();

  // In a real app, this would connect to the user's wallet
  // For now, we'll just return a mock signer
  return new ethers.Wallet("0xmockprivatekey", provider);
};

// Get BEANS token contract
const getBEANSTokenContract = async () => {
  const signer = await getSigner();
  return new ethers.Contract(BEANS_TOKEN_ADDRESS, BEANS_TOKEN_ABI, signer);
};

// Get Beans platform contract
const getBeansPlatformContract = async () => {
  const signer = await getSigner();
  return new ethers.Contract(
    BEANS_PLATFORM_ADDRESS,
    BEANS_PLATFORM_ABI,
    signer,
  );
};

// Check DROPS balance
export const checkBEANSBalance = async (): Promise<number> => {
  try {
    const blgToken = await getBEANSTokenContract();
    const signer = await getSigner();
    const balance = await blgToken.balanceOf(await signer.getAddress());
    return Number(ethers.formatUnits(balance, 18));
  } catch (error) {
    console.error("Error checking DROPS balance:", error);
    // For demo purposes, return a mock balance
    return 100;
  }
};

// Buy DROPS tokens with WLD
export const buyBEANSWithWLD = async (wldAmount: number): Promise<boolean> => {
  try {
    // In a real app, this would interact with a DEX or swap contract
    console.log(`Buying DROPS with ${wldAmount} WLD`);
    // Mock successful purchase
    return true;
  } catch (error) {
    console.error("Error buying DROPS:", error);
    return false;
  }
};

// Donate DROPS to creator
export const donateToCreator = async (
  creatorId: string,
  amount: number,
  message: string,
  isAnonymous: boolean,
): Promise<boolean> => {
  try {
    // In a real app, this would:
    // 1. Approve the Beans platform to spend DROPS tokens
    // 2. Call the donateToCreator function on the Beans platform contract

    console.log(`Donating ${amount} DROPS to creator ${creatorId}`);
    console.log(`Message: ${message}`);
    console.log(`Anonymous: ${isAnonymous}`);

    // Mock successful donation
    // Add a delay to simulate blockchain transaction
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return true;
  } catch (error) {
    console.error("Error donating to creator:", error);
    throw error;
  }
};

// Register as creator
export const registerAsCreator = async (
  name: string,
  handle: string,
  category: string,
  description: string,
): Promise<string> => {
  try {
    const beansPlatform = await getBeansPlatformContract();
    const tx = await beansPlatform.registerAsCreator(
      name,
      handle,
      category,
      description,
    );
    await tx.wait();

    // In a real app, this would return the creator ID from the transaction receipt
    // For now, we'll just return a mock ID
    return "creator_" + Math.random().toString(36).substring(2, 10);
  } catch (error) {
    console.error("Error registering as creator:", error);
    throw error;
  }
};

// Get creator info
export const getCreatorInfo = async (creatorId: string) => {
  try {
    const beansPlatform = await getBeansPlatformContract();
    const [walletAddress, totalReceived, supportersCount] =
      await beansPlatform.getCreatorInfo(creatorId);

    return {
      walletAddress,
      totalReceived: Number(ethers.formatUnits(totalReceived, 18)),
      supportersCount: Number(supportersCount),
    };
  } catch (error) {
    console.error("Error getting creator info:", error);
    // For demo purposes, return mock data
    return {
      walletAddress: "0x1234...5678",
      totalReceived: 8750,
      supportersCount: 1245,
    };
  }
};
```

## File: lib/music-data.ts

```typescript
export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioUrl: string;
  isLiked?: boolean;
}

// URLs de streaming para los archivos de música
// Usando los archivos de la carpeta public/music
export const musicTracks: Track[] = [
  {
    id: "1",
    title: "Bandolero (feat. Ace)",
    artist: "Banger",
    album: "Dropsland Collection",
    duration: 285, // 4:45 in seconds
    cover: "/avatars/banger.jpg",
    audioUrl: "/music/Banger - Bandolero (feat. Ace).mp3",
    isLiked: false,
  },
  {
    id: "2",
    title: "Fuck That",
    artist: "Flush",
    album: "Dropsland Collection",
    duration: 372, // 6:12 in seconds
    cover: "/avatars/juampi.jpg",
    audioUrl: "/music/Flush - Fuck That.mp3",
    isLiked: true,
  },
  {
    id: "3",
    title: "Sadtisfied",
    artist: "Flush",
    album: "Dropsland Collection",
    duration: 426, // 7:06 in seconds
    cover: "/avatars/juampi.jpg",
    audioUrl: "/music/Flush - Sadtisfied.mp3",
    isLiked: false,
  },
  {
    id: "4",
    title: "Touch It",
    artist: "Flush",
    album: "Dropsland Collection",
    duration: 522, // 8:42 in seconds
    cover: "/avatars/juampi.jpg",
    audioUrl: "/music/Flush - Touch It.mp3",
    isLiked: true,
  },
  {
    id: "5",
    title: "Better Than Sex",
    artist: "Nicola Marti",
    album: "Dropsland Collection",
    duration: 486, // 8:06 in seconds
    cover: "/avatars/nicola.jpg",
    audioUrl: "/music/Nicola Marti - Better Than Sex-4.mp3",
    isLiked: false,
  },
  {
    id: "6",
    title: "SHADOWS",
    artist: "iamjuampi",
    album: "Dropsland Collection",
    duration: 378, // 6:18 in seconds
    cover: "/avatars/juampi.jpg",
    audioUrl: "/music/iamjuampi - SHADOWS.mp3",
    isLiked: true,
  },
  {
    id: "7",
    title: "TOXIC",
    artist: "iamjuampi",
    album: "Dropsland Collection",
    duration: 342, // 5:42 in seconds
    cover: "/avatars/juampi.jpg",
    audioUrl: "/music/iamjuampi - TOXIC.mp3",
    isLiked: false,
  },
];

// Función para obtener una pista por ID
export function getTrackById(id: string): Track | undefined {
  return musicTracks.find((track) => track.id === id);
}

// Función para obtener todas las pistas
export function getAllTracks(): Track[] {
  return musicTracks;
}

// Función para obtener pistas por artista
export function getTracksByArtist(artist: string): Track[] {
  return musicTracks.filter((track) =>
    track.artist.toLowerCase().includes(artist.toLowerCase()),
  );
}

// Función para buscar pistas
export function searchTracks(query: string): Track[] {
  const lowerQuery = query.toLowerCase();
  return musicTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerQuery) ||
      track.artist.toLowerCase().includes(lowerQuery) ||
      track.album.toLowerCase().includes(lowerQuery),
  );
}
```

## File: lib/music-service.ts

```typescript
import { musicTracks } from "./music-data"; // Import mock data

// Define interfaces based on original service expectations, mapping from Track
// Note: We might need to adjust or add dummy data for fields not in the original Track interface.
export interface MusicFile {
  id: string;
  name: string;
  artist: string;
  data: Uint8Array; // This will be mocked as empty
  contentType: string;
  size: number; // We can estimate or use a dummy value
  uploadedAt: bigint; // Mock timestamp
  uploadedBy: string; // Use string for mock principal
}

export interface MusicMetadata {
  id: string;
  name: string;
  artist: string;
  size: number;
  contentType: string;
  uploadedAt: bigint;
  uploadedBy: string;
}

export interface MusicStats {
  totalFiles: number;
  totalSize: number; // Estimate based on duration or use dummy
}

// Mock implementation of the Music Service
class MockMusicService {
  // Simulate adding music (doesn't actually modify the imported array)
  async uploadMusic(
    name: string,
    artist: string,
    data: Uint8Array,
    contentType: string,
  ): Promise<string> {
    console.log(`Mock: Uploading music "${name}" by ${artist}`);
    const newId = `mock_${Date.now()}`;
    // In a real mock needing persistence, you might add to a local state array here
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate delay
    return newId;
  }

  // Get metadata for a specific track from mock data
  async getMusicMetadata(id: string): Promise<MusicMetadata> {
    const track = musicTracks.find((t) => t.id === id);
    if (!track) {
      throw new Error("Mock: Music file not found");
    }
    await new Promise((resolve) => setTimeout(resolve, 50)); // Simulate delay
    return {
      id: track.id,
      name: track.title,
      artist: track.artist,
      size: track.duration * 100000, // Estimate size
      contentType: "audio/mpeg", // Dummy value
      uploadedAt: BigInt(Date.now() * 1_000_000), // Dummy timestamp (nanoseconds)
      uploadedBy: "mock-uploader-principal", // Dummy principal string
    };
  }

  // Get metadata for all tracks from mock data
  async getAllMusicMetadata(): Promise<MusicMetadata[]> {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate delay
    return musicTracks.map((track) => ({
      id: track.id,
      name: track.title,
      artist: track.artist,
      size: track.duration * 100000, // Estimate size
      contentType: "audio/mpeg",
      uploadedAt: BigInt(Date.now() * 1_000_000 - Math.random() * 1e12), // Dummy timestamps
      uploadedBy: "mock-uploader-principal",
    }));
  }

  // Get raw music data (return empty array as mock)
  async getMusicData(id: string): Promise<Uint8Array> {
    const track = musicTracks.find((t) => t.id === id);
    if (!track) {
      throw new Error("Mock: Music file not found");
    }
    console.warn(
      `Mock: getMusicData called for ${id}. Returning empty Uint8Array as mock.`,
    );
    await new Promise((resolve) => setTimeout(resolve, 150)); // Simulate delay
    // In a more complex mock, you could fetch the actual audioUrl here,
    // but for now, we return empty data as the player uses the URL.
    return new Uint8Array();
  }

  // Get combined metadata and (mocked) data
  async getMusicFile(id: string): Promise<MusicFile> {
    const metadata = await this.getMusicMetadata(id);
    const data = await this.getMusicData(id); // Will be empty array
    return {
      ...metadata,
      data: data,
    };
  }

  // Simulate deleting music
  async deleteMusic(id: string): Promise<void> {
    console.log(`Mock: Deleting music with id ${id}`);
    const trackIndex = musicTracks.findIndex((t) => t.id === id);
    if (trackIndex === -1) {
      throw new Error("Mock: Music file not found for deletion");
    }
    // Note: This won't actually remove from the imported musicTracks array.
    // To test deletion effects, manage a mutable copy of the tracks within the service state.
    await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate delay
    return;
  }

  // Calculate stats from mock data
  async getMusicStats(): Promise<MusicStats> {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Simulate delay
    const totalFiles = musicTracks.length;
    // Estimate total size
    const totalSize = musicTracks.reduce(
      (sum, track) => sum + track.duration * 100000,
      0,
    );
    return {
      totalFiles: totalFiles,
      totalSize: totalSize,
    };
  }

  // Create blob URL (just return the existing audioUrl)
  async createMusicBlobUrl(id: string): Promise<string> {
    const track = musicTracks.find((t) => t.id === id);
    if (!track || !track.audioUrl) {
      throw new Error("Mock: Track or audio URL not found");
    }
    console.log(`Mock: Returning existing audioUrl for ${id} as blob URL.`);
    return track.audioUrl;
  }

  // Get streaming URL (return existing audioUrl)
  getStreamingUrl(id: string): string {
    const track = musicTracks.find((t) => t.id === id);
    if (!track || !track.audioUrl) {
      console.warn(
        `Mock: Track or audio URL not found for getStreamingUrl(${id}). Returning empty string.`,
      );
      return "";
    }
    return track.audioUrl;
  }
}

// Export singleton instance with the same name
export const musicService = new MockMusicService();
```

## File: lib/solana-program-client.ts

```typescript
/**
 * Cliente para interactuar con programas de Solana desde el frontend
 *
 * Flujo:
 * 1. Usuario conecta wallet (ya tienes SolanaWalletButton)
 * 2. Frontend llama funciones de este cliente
 * 3. Cliente crea transacciones usando el Program ID
 * 4. Usuario firma con su wallet
 * 5. Transacción se envía a blockchain
 */

import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { AnchorProvider, Program, Idl } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

// El Program ID de tu programa (se genera cuando haces anchor deploy)
export const DROPSLAND_PROGRAM_ID = new PublicKey(
  "2EpreJPoJC6wEHk3hShxffGyPbmEaNLyDMKQmbSsTWXH",
);

/**
 * Hook personalizado para interactuar con tu programa Solana
 */
export function useSolanaProgram() {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  if (!wallet) {
    return null;
  }

  // Crear provider de Anchor
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });

  return {
    connection,
    wallet,
    provider,
    programId: DROPSLAND_PROGRAM_ID,
  };
}

/**
 * Ejemplo: Función para llamar a initialize de tu programa
 */
export async function initializeProgram(
  program: Program,
  wallet: PublicKey,
): Promise<string> {
  try {
    const tx = await program.methods
      .initialize()
      .accounts({
        // Aquí van las cuentas que necesita tu programa
        user: wallet,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("Transaction signature:", tx);
    return tx;
  } catch (error) {
    console.error("Error initializing program:", error);
    throw error;
  }
}

/**
 * Ejemplo: Mint de NFT/Ticket
 */
export async function mintTicket(
  program: Program,
  wallet: PublicKey,
  ticketData: {
    name: string;
    buyerName: string;
    exhibitionName: string;
    ticketNumber: number;
  },
): Promise<string> {
  try {
    // Generar PDA (Program Derived Address) para el NFT
    const [ticketPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("ticket"),
        wallet.toBuffer(),
        Buffer.from(ticketData.ticketNumber.toString()),
      ],
      program.programId,
    );

    const tx = await program.methods
      .mintTicket(
        ticketData.name,
        ticketData.buyerName,
        ticketData.exhibitionName,
        ticketData.ticketNumber,
      )
      .accounts({
        ticket: ticketPda,
        buyer: wallet,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("Ticket minted! Signature:", tx);
    return tx;
  } catch (error) {
    console.error("Error minting ticket:", error);
    throw error;
  }
}

/**
 * Obtener datos de un ticket
 */
export async function getTicketData(program: Program, ticketPda: PublicKey) {
  try {
    const ticketAccount = await program.account.ticket.fetch(ticketPda);
    return ticketAccount;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    throw error;
  }
}

/**
 * Helper: Obtener balance de SOL
 */
export async function getSolBalance(
  connection: Connection,
  publicKey: PublicKey,
): Promise<number> {
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
}
```

## File: lib/types.ts

```typescript
export type UserType = "fan" | "artist";

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
  followers: string[];
  following: string[];
  createdAt: string;
  lastActive: string;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  image?: string;
  likes: string[];
  comments: PostComment[];
  createdAt: string;
  type: "post" | "release" | "announcement";
  tags?: string[];
}

export interface PostComment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: string[];
}

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
  userId: string;
  userName: string;
  userAvatar: string;
  action: string;
  message?: string;
  amount?: number;
  tokenName?: string;
  createdAt: string;
  relatedTo: "artist" | "fan";
  targetUserId?: string;
  targetPostId?: string;
  isRead: boolean;
}

export interface Notification {
  id: string;
  type: "follow" | "like" | "comment" | "mention" | "purchase" | "reward";
  userId: string;
  userName: string;
  userAvatar: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  targetPostId?: string;
  targetUserId?: string;
}

export interface Token {
  id: string;
  name: string;
  symbol: string;
  artistId: string;
  artistName: string;
  price: number;
  totalSupply: number;
  circulatingSupply: number;
  description: string;
  image?: string;
}

export interface UserStats {
  followers: number;
  following: number;
  posts: number;
  tokensOwned: number;
  totalValue: number;
  totalDonated: number;
}

export interface FeedItem {
  id: string;
  type: "post" | "activity" | "release";
  data: Post | Activity;
  priority: number;
  createdAt: string;
}
```

## File: lib/user-data-service.ts

```typescript
import {
  UserData,
  Post,
  Activity,
  Notification,
  Token,
  UserStats,
  FeedItem,
  PostComment,
} from "./types";

class UserDataService {
  private users: Map<string, UserData> = new Map();
  private posts: Map<string, Post> = new Map();
  private activities: Map<string, Activity> = new Map();
  private notifications: Map<string, Notification[]> = new Map();
  private tokens: Map<string, Token> = new Map();
  private userStats: Map<string, UserStats> = new Map();

  constructor() {
    this.loadFromStorage();
    this.initializeDefaultData();
  }

  private loadFromStorage() {
    try {
      // Check if we're in a browser environment
      if (typeof window === "undefined") return;

      const usersData = localStorage.getItem("dropsland_users");
      if (usersData) {
        const users = JSON.parse(usersData);
        this.users = new Map(Object.entries(users));
      }

      const postsData = localStorage.getItem("dropsland_posts");
      if (postsData) {
        const posts = JSON.parse(postsData);
        this.posts = new Map(Object.entries(posts));
      }

      const activitiesData = localStorage.getItem("dropsland_activities");
      if (activitiesData) {
        const activities = JSON.parse(activitiesData);
        this.activities = new Map(Object.entries(activities));
      }

      const notificationsData = localStorage.getItem("dropsland_notifications");
      if (notificationsData) {
        const notifications = JSON.parse(notificationsData);
        this.notifications = new Map(Object.entries(notifications));
      }

      const tokensData = localStorage.getItem("dropsland_tokens");
      if (tokensData) {
        const tokens = JSON.parse(tokensData);
        this.tokens = new Map(Object.entries(tokens));
      }

      const statsData = localStorage.getItem("dropsland_user_stats");
      if (statsData) {
        const stats = JSON.parse(statsData);
        this.userStats = new Map(Object.entries(stats));
      }
    } catch (error) {
      console.error("Error loading data from storage:", error);
    }
  }

  private saveToStorage() {
    try {
      // Check if we're in a browser environment
      if (typeof window === "undefined") return;

      localStorage.setItem(
        "dropsland_users",
        JSON.stringify(Object.fromEntries(this.users)),
      );
      localStorage.setItem(
        "dropsland_posts",
        JSON.stringify(Object.fromEntries(this.posts)),
      );
      localStorage.setItem(
        "dropsland_activities",
        JSON.stringify(Object.fromEntries(this.activities)),
      );
      localStorage.setItem(
        "dropsland_notifications",
        JSON.stringify(Object.fromEntries(this.notifications)),
      );
      localStorage.setItem(
        "dropsland_tokens",
        JSON.stringify(Object.fromEntries(this.tokens)),
      );
      localStorage.setItem(
        "dropsland_user_stats",
        JSON.stringify(Object.fromEntries(this.userStats)),
      );
    } catch (error) {
      console.error("Error saving data to storage:", error);
    }
  }

  private initializeDefaultData() {
    // Initialize default users if they don't exist
    const defaultUsers: UserData[] = [
      {
        id: "juampi",
        username: "iamjuampi",
        type: "artist",
        profilePhoto: "/avatars/juampi.jpg",
        bio: "Techno producer and DJ from Argentina. Creating dark, industrial sounds that move the dance floor.",
        genre: "Techno",
        location: "Buenos Aires, Argentina",
        website: "https://iamjuampi.com",
        socialLinks: {
          twitter: "@iamjuampi",
          instagram: "@iamjuampi",
          youtube: "iamjuampi",
          spotify: "iamjuampi",
        },
        followers: ["banger", "nicolamarti", "fan"],
        following: ["banger", "nicolamarti"],
        createdAt: "2024-01-01T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
      {
        id: "iamjuampi",
        username: "iamjuampi",
        type: "artist",
        profilePhoto: "/avatars/juampi.jpg",
        bio: "Techno producer and DJ from Argentina. Creating dark, industrial sounds that move the dance floor.",
        genre: "Techno",
        location: "Buenos Aires, Argentina",
        website: "https://iamjuampi.com",
        socialLinks: {
          twitter: "@iamjuampi",
          instagram: "@iamjuampi",
          youtube: "iamjuampi",
          spotify: "iamjuampi",
        },
        followers: ["banger", "nicolamarti", "fan"],
        following: ["banger", "nicolamarti"],
        createdAt: "2024-01-01T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
      {
        id: "banger",
        username: "banger",
        type: "artist",
        profilePhoto: "/avatars/banger.jpg",
        bio: "Techno DJ and producer pushing the boundaries of electronic music. Known for high-energy sets and innovative productions.",
        genre: "Techno",
        location: "Berlin, Germany",
        website: "https://banger-music.com",
        socialLinks: {
          twitter: "@banger_music",
          instagram: "@banger_music",
          youtube: "banger_music",
          spotify: "banger",
        },
        followers: ["juampi", "nicolamarti", "fan"],
        following: ["juampi", "nicolamarti"],
        createdAt: "2024-01-02T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
      {
        id: "nicolamarti",
        username: "Nicola Marti",
        type: "artist",
        profilePhoto: "/avatars/nicola.jpg",
        bio: "House music producer and DJ. Creating soulful, groovy tracks that make you move.",
        genre: "House",
        location: "Amsterdam, Netherlands",
        website: "https://nicolamarti.com",
        socialLinks: {
          twitter: "@nicolamarti",
          instagram: "@nicolamarti",
          youtube: "nicolamarti",
          spotify: "nicola_marti",
        },
        followers: ["juampi", "banger", "fan"],
        following: ["juampi", "banger"],
        createdAt: "2024-01-03T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
      {
        id: "axs",
        username: "AXS",
        type: "artist",
        profilePhoto: "/avatars/axs.jpg",
        bio: "UK techno producer and DJ. Pushing the boundaries of underground electronic music.",
        genre: "Techno",
        location: "Manchester, UK",
        website: "https://axs-music.com",
        socialLinks: {
          twitter: "@axs_music",
          instagram: "@axs_music",
          youtube: "axs_music",
          spotify: "axs",
        },
        followers: ["juampi", "banger", "nicolamarti", "fan"],
        following: ["juampi", "banger", "nicolamarti"],
        createdAt: "2024-01-04T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
      {
        id: "fan",
        username: "musicfan",
        type: "fan",
        profilePhoto: "/avatars/user.jpg",
        bio: "Music enthusiast and electronic music fan. Supporting my favorite artists on DROPSLAND.",
        followers: [],
        following: ["juampi", "banger", "nicolamarti", "axs"],
        createdAt: "2024-03-01T00:00:00Z",
        lastActive: new Date().toISOString(),
      },
    ];

    defaultUsers.forEach((user) => {
      if (!this.users.has(user.id)) {
        this.users.set(user.id, user);
      }
    });

    // Initialize default posts
    const defaultPosts: Post[] = [
      {
        id: "post1",
        authorId: "juampi",
        authorName: "iamjuampi",
        authorAvatar: "/avatars/juampi.jpg",
        content:
          'Just released my new EP "Techno Dimensions"! Available now on all platforms. This one took me 6 months to perfect. #TechnoDimensions #NewRelease #Techno',
        image: "/images/bdeeeee.jpg",
        likes: ["banger", "nicolamarti", "fan"],
        comments: [
          {
            id: "comment1",
            authorId: "banger",
            authorName: "banger",
            authorAvatar: "/avatars/banger.jpg",
            content:
              "Sounds absolutely fire! 🔥 The production quality is insane",
            createdAt: "2024-01-15T10:30:00Z",
            likes: ["juampi", "fan"],
          },
          {
            id: "comment2",
            authorId: "nicolamarti",
            authorName: "Nicola Marti",
            authorAvatar: "/avatars/nicola.jpg",
            content:
              'Congrats on the release! The track "Midnight Pulse" is my favorite',
            createdAt: "2024-01-15T11:15:00Z",
            likes: ["juampi"],
          },
        ],
        createdAt: "2024-01-15T09:00:00Z",
        type: "post",
        tags: ["techno", "newrelease", "ep"],
      },
      {
        id: "post2",
        authorId: "banger",
        authorName: "banger",
        authorAvatar: "/avatars/banger.jpg",
        content:
          "Studio session with @nicolamarti today! Working on a collab that's going to blow your minds. Two different styles coming together in the most beautiful way. #StudioSession #Collab #TechnoHouse",
        image: "/images/dj-mixer.png",
        likes: ["juampi", "nicolamarti", "fan"],
        comments: [
          {
            id: "comment3",
            authorId: "juampi",
            authorName: "iamjuampi",
            authorAvatar: "/avatars/juampi.jpg",
            content: "Can't wait to hear this! 🔥",
            createdAt: "2024-01-16T14:20:00Z",
            likes: ["banger"],
          },
        ],
        createdAt: "2024-01-16T14:00:00Z",
        type: "post",
        tags: ["studiosession", "collab", "technohouse"],
      },
      {
        id: "post3",
        authorId: "nicolamarti",
        authorName: "Nicola Marti",
        authorAvatar: "/avatars/nicola.jpg",
        content:
          "Preparing my set for this weekend at Club Underground. It's going to be an epic night of techno and house. Who's coming? 🎧 #ClubUnderground #LiveSet #Techno",
        likes: ["juampi", "banger", "fan"],
        comments: [
          {
            id: "comment4",
            authorId: "fan",
            authorName: "musicfan",
            authorAvatar: "/avatars/user.jpg",
            content: "I'll be there! Can't wait to hear your new tracks live",
            createdAt: "2024-01-17T16:45:00Z",
            likes: ["nicolamarti"],
          },
        ],
        createdAt: "2024-01-17T16:00:00Z",
        type: "post",
        tags: ["clubunderground", "liveset", "techno"],
      },
      {
        id: "post4",
        authorId: "juampi",
        authorName: "iamjuampi",
        authorAvatar: "/avatars/juampi.jpg",
        content:
          "Happy to announce I'll be playing at the Electronic Dreams festival next month! This is going to be huge. See you there! #ElectronicDreams #Festival #Techno",
        image: "/images/bdeeeee.jpg",
        likes: ["banger", "nicolamarti", "fan"],
        comments: [],
        createdAt: "2024-01-18T12:30:00Z",
        type: "announcement",
        tags: ["electronicdreams", "festival", "techno"],
      },
      {
        id: "post5",
        authorId: "banger",
        authorName: "banger",
        authorAvatar: "/avatars/banger.jpg",
        content:
          "Working on new sounds for my upcoming release. I'm experimenting with analog synthesizers and 90s samples. The results are mind-blowing! #AnalogSynths #90sSamples #NewSounds",
        likes: ["juampi", "fan"],
        comments: [
          {
            id: "comment5",
            authorId: "juampi",
            authorName: "iamjuampi",
            authorAvatar: "/avatars/juampi.jpg",
            content:
              "Analog synths are the way to go! What gear are you using?",
            createdAt: "2024-01-19T10:15:00Z",
            likes: ["banger"],
          },
        ],
        createdAt: "2024-01-19T09:30:00Z",
        type: "post",
        tags: ["analogsynths", "90ssamples", "newsounds"],
      },
      {
        id: "post6",
        authorId: "nicolamarti",
        authorName: "Nicola Marti",
        authorAvatar: "/avatars/nicola.jpg",
        content:
          "Just finished mastering the collaboration with @banger - two different worlds colliding in the most beautiful way. This track is going to be special. #Collab #Mastering #NewTrack",
        likes: ["juampi", "banger", "fan"],
        comments: [],
        createdAt: "2024-01-20T15:45:00Z",
        type: "post",
        tags: ["collab", "mastering", "newtrack"],
      },
      {
        id: "post7",
        authorId: "juampi",
        authorName: "iamjuampi",
        authorAvatar: "/avatars/juampi.jpg",
        content:
          'Vinyl lovers! Limited edition 12" of "Techno Dimensions" coming next week. Only 200 copies available worldwide. Pre-order link in bio. #Vinyl #LimitedEdition #Techno',
        image: "/images/dj-mixer.png",
        likes: ["banger", "nicolamarti", "fan"],
        comments: [
          {
            id: "comment6",
            authorId: "fan",
            authorName: "musicfan",
            authorAvatar: "/avatars/user.jpg",
            content: "Already pre-ordered! Can't wait to have this on vinyl",
            createdAt: "2024-01-21T11:30:00Z",
            likes: ["juampi"],
          },
        ],
        createdAt: "2024-01-21T10:00:00Z",
        type: "announcement",
        tags: ["vinyl", "limitededition", "techno"],
      },
      {
        id: "post8",
        authorId: "banger",
        authorName: "banger",
        authorAvatar: "/avatars/banger.jpg",
        content:
          "Throwback to my Ibiza set last summer. Still can't believe how amazing that crowd was! The energy was electric. #Ibiza #Throwback #HouseMusic",
        image: "/images/bdeeeee.jpg",
        likes: ["juampi", "nicolamarti", "fan"],
        comments: [],
        createdAt: "2024-01-22T18:20:00Z",
        type: "post",
        tags: ["ibiza", "throwback", "housemusic"],
      },
      // Nuevos posts más recientes
      {
        id: "post9",
        authorId: "axs",
        authorName: "AXS",
        authorAvatar: "/avatars/axs.jpg",
        content:
          'New track "Neon Nights" dropping this Friday! This one is pure techno energy. Can\'t wait to share it with you all. #NeonNights #NewTrack #Techno',
        likes: ["juampi", "banger", "fan"],
        comments: [
          {
            id: "comment7",
            authorId: "juampi",
            authorName: "iamjuampi",
            authorAvatar: "/avatars/juampi.jpg",
            content: "Been waiting for this! Your sound is always on point 🔥",
            createdAt: "2024-01-23T09:15:00Z",
            likes: ["axs"],
          },
        ],
        createdAt: "2024-01-23T08:00:00Z",
        type: "post",
        tags: ["neonnights", "newtrack", "techno"],
      },
      {
        id: "post10",
        authorId: "juampi",
        authorName: "iamjuampi",
        authorAvatar: "/avatars/juampi.jpg",
        content:
          "Studio vibes today. Working on something special for my next release. The energy in here is incredible right now. #StudioVibes #NewMusic #Techno",
        image: "/images/dj-mixer.png",
        likes: ["banger", "nicolamarti", "axs", "fan"],
        comments: [],
        createdAt: "2024-01-24T14:30:00Z",
        type: "post",
        tags: ["studiovibes", "newmusic", "techno"],
      },
      {
        id: "post11",
        authorId: "nicolamarti",
        authorName: "Nicola Marti",
        authorAvatar: "/avatars/nicola.jpg",
        content:
          "Just got back from my European tour! The response was incredible. Thank you to everyone who came out. Special shoutout to Berlin - you know how to party! #EuropeanTour #Berlin #HouseMusic",
        likes: ["juampi", "banger", "axs", "fan"],
        comments: [
          {
            id: "comment8",
            authorId: "banger",
            authorName: "banger",
            authorAvatar: "/avatars/banger.jpg",
            content: "Berlin crowds are the best! Welcome back 🔥",
            createdAt: "2024-01-25T11:20:00Z",
            likes: ["nicolamarti"],
          },
        ],
        createdAt: "2024-01-25T10:00:00Z",
        type: "post",
        tags: ["europeantour", "berlin", "housemusic"],
      },
      {
        id: "post12",
        authorId: "banger",
        authorName: "banger",
        authorAvatar: "/avatars/banger.jpg",
        content:
          'New remix for @axs "Neon Nights" is ready! This one goes hard. Check it out on my SoundCloud. #Remix #NeonNights #Techno',
        likes: ["juampi", "nicolamarti", "axs", "fan"],
        comments: [
          {
            id: "comment9",
            authorId: "axs",
            authorName: "AXS",
            authorAvatar: "/avatars/axs.jpg",
            content: "This remix is absolutely insane! 🔥🔥🔥",
            createdAt: "2024-01-26T16:45:00Z",
            likes: ["banger"],
          },
        ],
        createdAt: "2024-01-26T15:00:00Z",
        type: "post",
        tags: ["remix", "neonnights", "techno"],
      },
      {
        id: "post13",
        authorId: "axs",
        authorName: "AXS",
        authorAvatar: "/avatars/axs.jpg",
        content:
          "Playing at Warehouse Project this weekend! Manchester, are you ready for some techno? This is going to be epic. #WarehouseProject #Manchester #Techno",
        likes: ["juampi", "banger", "nicolamarti", "fan"],
        comments: [],
        createdAt: "2024-01-27T12:00:00Z",
        type: "announcement",
        tags: ["warehouseproject", "manchester", "techno"],
      },
      {
        id: "post14",
        authorId: "juampi",
        authorName: "iamjuampi",
        authorAvatar: "/avatars/juampi.jpg",
        content:
          "Just finished a 4-hour studio session. The new track is taking shape and it's sounding massive. Sometimes you just know when you've got something special. #StudioSession #NewTrack #Techno",
        likes: ["banger", "nicolamarti", "axs", "fan"],
        comments: [
          {
            id: "comment10",
            authorId: "fan",
            authorName: "musicfan",
            authorAvatar: "/avatars/user.jpg",
            content:
              "Can't wait to hear it! Your tracks always hit different 🔥",
            createdAt: "2024-01-28T19:30:00Z",
            likes: ["juampi"],
          },
        ],
        createdAt: "2024-01-28T18:00:00Z",
        type: "post",
        tags: ["studiosession", "newtrack", "techno"],
      },
      {
        id: "post15",
        authorId: "nicolamarti",
        authorName: "Nicola Marti",
        authorAvatar: "/avatars/nicola.jpg",
        content:
          "New podcast episode is live! This week I'm sharing some of my favorite tracks and talking about the future of house music. Link in bio. #Podcast #HouseMusic #NewEpisode",
        likes: ["juampi", "banger", "axs", "fan"],
        comments: [],
        createdAt: "2024-01-29T20:00:00Z",
        type: "post",
        tags: ["podcast", "housemusic", "newepisode"],
      },
    ];

    defaultPosts.forEach((post) => {
      if (!this.posts.has(post.id)) {
        this.posts.set(post.id, post);
      }
    });

    console.log("After adding default posts, total posts:", this.posts.size);
    console.log("Default posts added:", defaultPosts.length);

    // Initialize default tokens
    const defaultTokens: Token[] = [
      {
        id: "juampi_token",
        name: "JUAMPI Token",
        symbol: "JUAMPI",
        artistId: "juampi",
        artistName: "iamjuampi",
        price: 0.5,
        totalSupply: 10000,
        circulatingSupply: 5000,
        description: "Official token for iamjuampi artist",
        image: "/avatars/juampi.jpg",
      },
      {
        id: "banger_token",
        name: "BANGER Token",
        symbol: "BANGER",
        artistId: "banger",
        artistName: "banger",
        price: 0.3,
        totalSupply: 8000,
        circulatingSupply: 3000,
        description: "Official token for banger artist",
        image: "/avatars/banger.jpg",
      },
    ];

    defaultTokens.forEach((token) => {
      if (!this.tokens.has(token.id)) {
        this.tokens.set(token.id, token);
      }
    });

    // Initialize user stats
    defaultUsers.forEach((user) => {
      if (!this.userStats.has(user.id)) {
        this.userStats.set(user.id, {
          followers: user.followers.length,
          following: user.following.length,
          posts: this.getPostsByUser(user.id).length,
          tokensOwned: 0,
          totalValue: 0,
          totalDonated: 0,
        });
      }
    });

    this.saveToStorage();
  }

  // User methods
  getUser(userId: string): UserData | null {
    return this.users.get(userId) || null;
  }

  getUserByPrincipal(principal: string): UserData | null {
    for (const user of this.users.values()) {
      if (user.principal === principal) {
        return user;
      }
    }
    return null;
  }

  getUserByUsername(username: string): UserData | null {
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  getAllUsers(): UserData[] {
    return Array.from(this.users.values());
  }

  createUser(
    userData: Omit<
      UserData,
      "id" | "createdAt" | "lastActive" | "followers" | "following"
    >,
  ): UserData {
    const id = userData.principal || `user_${Date.now()}`;
    const newUser: UserData = {
      ...userData,
      id,
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
    };

    this.users.set(id, newUser);
    this.userStats.set(id, {
      followers: 0,
      following: 0,
      posts: 0,
      tokensOwned: 0,
      totalValue: 0,
      totalDonated: 0,
    });

    this.saveToStorage();
    return newUser;
  }

  updateUser(userId: string, updates: Partial<UserData>): UserData | null {
    const user = this.users.get(userId);
    if (!user) return null;

    const updatedUser = {
      ...user,
      ...updates,
      lastActive: new Date().toISOString(),
    };
    this.users.set(userId, updatedUser);
    this.saveToStorage();
    return updatedUser;
  }

  // Post methods
  createPost(
    postData: Omit<Post, "id" | "createdAt" | "likes" | "comments">,
  ): Post {
    const id = `post_${Date.now()}`;
    const newPost: Post = {
      ...postData,
      id,
      likes: [],
      comments: [],
      createdAt: new Date().toISOString(),
    };

    this.posts.set(id, newPost);
    this.updateUserStats(postData.authorId);
    this.saveToStorage();
    return newPost;
  }

  getPostsByUser(userId: string): Post[] {
    return Array.from(this.posts.values()).filter(
      (post) => post.authorId === userId,
    );
  }

  getAllPosts(): Post[] {
    return Array.from(this.posts.values());
  }

  getFeedForUser(userId: string): FeedItem[] {
    const user = this.users.get(userId);

    if (!user) {
      return [];
    }

    const followingIds = user.following;

    // If user is not following anyone, show posts from featured artists
    let postFilter = (post: Post) =>
      followingIds.includes(post.authorId) || post.authorId === userId;

    if (followingIds.length === 0) {
      // Show posts from featured artists for new users
      const featuredArtistIds = ["juampi", "banger", "nicolamarti", "axs"];
      postFilter = (post: Post) =>
        featuredArtistIds.includes(post.authorId) || post.authorId === userId;
    }

    const allPosts = Array.from(this.posts.values());

    const userPosts = allPosts.filter(postFilter).map((post) => ({
      id: `feed_${post.id}`,
      type: "post" as const,
      data: post,
      priority: 1,
      createdAt: post.createdAt,
    }));

    const userActivities = Array.from(this.activities.values())
      .filter(
        (activity) =>
          followingIds.includes(activity.userId) || activity.userId === userId,
      )
      .map((activity) => ({
        id: `feed_${activity.id}`,
        type: "activity" as const,
        data: activity,
        priority: 2,
        createdAt: activity.createdAt,
      }));

    const result = [...userPosts, ...userActivities].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return result;
  }

  // Activity methods
  createActivity(
    activityData: Omit<Activity, "id" | "createdAt" | "isRead">,
  ): Activity {
    const id = `activity_${Date.now()}`;
    const newActivity: Activity = {
      ...activityData,
      id,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    this.activities.set(id, newActivity);
    this.saveToStorage();
    return newActivity;
  }

  getActivitiesForUser(userId: string): Activity[] {
    const user = this.users.get(userId);
    if (!user) return [];

    return Array.from(this.activities.values())
      .filter(
        (activity) =>
          activity.userId === userId ||
          activity.targetUserId === userId ||
          (user.type === "artist" && activity.relatedTo === "artist") ||
          (user.type === "fan" && activity.relatedTo === "fan"),
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  // Notification methods
  createNotification(
    notificationData: Omit<Notification, "id" | "createdAt" | "isRead">,
  ): Notification {
    const id = `notification_${Date.now()}`;
    const newNotification: Notification = {
      ...notificationData,
      id,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    const userNotifications =
      this.notifications.get(notificationData.targetUserId || "") || [];
    userNotifications.unshift(newNotification);
    this.notifications.set(
      notificationData.targetUserId || "",
      userNotifications,
    );
    this.saveToStorage();
    return newNotification;
  }

  getNotificationsForUser(userId: string): Notification[] {
    return this.notifications.get(userId) || [];
  }

  markNotificationAsRead(userId: string, notificationId: string): void {
    const userNotifications = this.notifications.get(userId) || [];
    const updatedNotifications = userNotifications.map((notification) =>
      notification.id === notificationId
        ? { ...notification, isRead: true }
        : notification,
    );
    this.notifications.set(userId, updatedNotifications);
    this.saveToStorage();
  }

  // Follow/Unfollow methods
  followUser(followerId: string, targetUserId: string): boolean {
    const follower = this.users.get(followerId);
    const target = this.users.get(targetUserId);

    if (!follower || !target || followerId === targetUserId) return false;

    if (!follower.following.includes(targetUserId)) {
      follower.following.push(targetUserId);
      target.followers.push(followerId);

      this.users.set(followerId, follower);
      this.users.set(targetUserId, target);

      // Create activity and notification
      this.createActivity({
        type: "follow",
        userId: followerId,
        userName: follower.username,
        userAvatar: follower.profilePhoto || "/avatars/user.jpg",
        action: "started following you",
        relatedTo: "artist",
        targetUserId,
      });

      this.createNotification({
        type: "follow",
        userId: followerId,
        userName: follower.username,
        userAvatar: follower.profilePhoto || "/avatars/user.jpg",
        message: `${follower.username} started following you`,
        targetUserId,
      });

      this.updateUserStats(followerId);
      this.updateUserStats(targetUserId);
      this.saveToStorage();
      return true;
    }

    return false;
  }

  unfollowUser(followerId: string, targetUserId: string): boolean {
    const follower = this.users.get(followerId);
    const target = this.users.get(targetUserId);

    if (!follower || !target) return false;

    const followerIndex = follower.following.indexOf(targetUserId);
    const targetIndex = target.followers.indexOf(followerId);

    if (followerIndex > -1 && targetIndex > -1) {
      follower.following.splice(followerIndex, 1);
      target.followers.splice(targetIndex, 1);

      this.users.set(followerId, follower);
      this.users.set(targetUserId, target);

      this.updateUserStats(followerId);
      this.updateUserStats(targetUserId);
      this.saveToStorage();
      return true;
    }

    return false;
  }

  // Like/Unlike methods
  likePost(userId: string, postId: string): boolean {
    const post = this.posts.get(postId);
    const user = this.users.get(userId);

    if (!post || !user) return false;

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      this.posts.set(postId, post);

      // Create activity and notification
      this.createActivity({
        type: "like",
        userId,
        userName: user.username,
        userAvatar: user.profilePhoto || "/avatars/user.jpg",
        action: "liked your post",
        relatedTo: "artist",
        targetUserId: post.authorId,
        targetPostId: postId,
      });

      if (post.authorId !== userId) {
        this.createNotification({
          type: "like",
          userId,
          userName: user.username,
          userAvatar: user.profilePhoto || "/avatars/user.jpg",
          message: `${user.username} liked your post`,
          targetUserId: post.authorId,
          targetPostId: postId,
        });
      }

      this.saveToStorage();
      return true;
    }

    return false;
  }

  unlikePost(userId: string, postId: string): boolean {
    const post = this.posts.get(postId);
    if (!post) return false;

    const likeIndex = post.likes.indexOf(userId);
    if (likeIndex > -1) {
      post.likes.splice(likeIndex, 1);
      this.posts.set(postId, post);
      this.saveToStorage();
      return true;
    }

    return false;
  }

  // Comment methods
  addComment(
    userId: string,
    postId: string,
    content: string,
  ): PostComment | null {
    const post = this.posts.get(postId);
    const user = this.users.get(userId);

    if (!post || !user) return null;

    const comment: PostComment = {
      id: `comment_${Date.now()}`,
      authorId: userId,
      authorName: user.username,
      authorAvatar: user.profilePhoto || "/avatars/user.jpg",
      content,
      createdAt: new Date().toISOString(),
      likes: [],
    };

    post.comments.push(comment);
    this.posts.set(postId, post);

    // Create activity and notification
    this.createActivity({
      type: "comment",
      userId,
      userName: user.username,
      userAvatar: user.profilePhoto || "/avatars/user.jpg",
      action: "commented on your post",
      message: content,
      relatedTo: "artist",
      targetUserId: post.authorId,
      targetPostId: postId,
    });

    if (post.authorId !== userId) {
      this.createNotification({
        type: "comment",
        userId,
        userName: user.username,
        userAvatar: user.profilePhoto || "/avatars/user.jpg",
        message: `${user.username} commented on your post`,
        targetUserId: post.authorId,
        targetPostId: postId,
      });
    }

    this.saveToStorage();
    return comment;
  }

  // Token methods
  getTokensByArtist(artistId: string): Token[] {
    return Array.from(this.tokens.values()).filter(
      (token) => token.artistId === artistId,
    );
  }

  getAllTokens(): Token[] {
    return Array.from(this.tokens.values());
  }

  // Stats methods
  getUserStats(userId: string): UserStats | null {
    return this.userStats.get(userId) || null;
  }

  private updateUserStats(userId: string): void {
    const user = this.users.get(userId);
    if (!user) return;

    const stats: UserStats = {
      followers: user.followers.length,
      following: user.following.length,
      posts: this.getPostsByUser(userId).length,
      tokensOwned: 0, // This would be calculated from token ownership
      totalValue: 0, // This would be calculated from token values
      totalDonated: 0, // This would be calculated from donation history
    };

    this.userStats.set(userId, stats);
  }

  // Search methods
  searchUsers(query: string): UserData[] {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.users.values()).filter(
      (user) =>
        user.username.toLowerCase().includes(lowercaseQuery) ||
        user.bio?.toLowerCase().includes(lowercaseQuery) ||
        user.genre?.toLowerCase().includes(lowercaseQuery),
    );
  }

  searchPosts(query: string): Post[] {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.posts.values()).filter(
      (post) =>
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    );
  }
}

// Export singleton instance
export const userDataService = new UserDataService();
```

## File: lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## File: public/images/banknote-custom.svg

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   stroke-width="2"
   stroke-linecap="round"
   stroke-linejoin="round"
   class="lucide lucide-banknote-icon lucide-banknote"
   version="1.1"
   id="svg7952"
   sodipodi:docname="banknote.svg"
   inkscape:version="1.1 (c4e8f9e, 2021-05-24)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs7956" />
  <sodipodi:namedview
     id="namedview7954"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:zoom="21.062088"
     inkscape:cx="12.463152"
     inkscape:cy="12.629327"
     inkscape:window-width="1384"
     inkscape:window-height="800"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg7952">
    <sodipodi:guide
       position="19.70365,25.661754"
       orientation="0,-1"
       id="guide8015" />
  </sodipodi:namedview>
  <rect
     width="20"
     height="12"
     x="2"
     y="6"
     rx="2"
     id="rect7946" />
  <path
     d="M6 12h.01M18 12h.01"
     id="path7950" />
  <text
     xml:space="preserve"
     style="font-size:40px;line-height:1.25;font-family:'a Big Deal';-inkscape-font-specification:'a Big Deal'"
     x="4.6920414"
     y="-8.0553637"
     id="text19025"><tspan
       sodipodi:role="line"
       id="tspan19023"
       x="4.6920414"
       y="-8.0553637" /></text>
  <g
     aria-label="D"
     id="text34926"
     style="font-size:10.6667px;line-height:1.25;font-family:'a Big Deal';-inkscape-font-specification:'a Big Deal'"
     transform="translate(0,-0.04747867)">
    <path
       d="m 8.0269266,15.374299 h 2.8848884 c 1.537341,0 2.685603,-0.427038 3.482743,-1.224179 0.711732,-0.711731 1.091322,-1.622749 1.091322,-2.619174 0,-0.80663 -0.227754,-1.451935 -0.721221,-1.9454026 C 14.261701,9.0825864 13.455071,8.7314647 12.164463,8.7314647 H 9.8110023 Z"
       style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra';stroke-width:1.77933"
       id="path43041"
       sodipodi:nodetypes="cssssscc" />
  </g>
</svg>
```

## File: public/images/dropsland-logo.svg

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="210mm"
   height="297mm"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg5"
   inkscape:version="1.1 (c4e8f9e, 2021-05-24)"
   sodipodi:docname="DROPSLAND LOGO 2025.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="0.51491302"
     inkscape:cx="368.99436"
     inkscape:cy="704.97343"
     inkscape:window-width="1399"
     inkscape:window-height="800"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2">
    <rect
       x="149.53982"
       y="341.8053"
       width="543.78116"
       height="260.23813"
       id="rect2872" />
  </defs>
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       aria-label="DROPSLAND"
       transform="scale(0.26458333)"
       id="text2870"
       style="font-size:74.6667px;line-height:1.25;font-family:'a Big Deal';-inkscape-font-specification:'a Big Deal';white-space:pre;shape-inside:url(#rect2872)">
      <path
         d="m 146.92573,412.3815 h 22.69868 c 12.096,0 21.13067,-3.36 27.40268,-9.632 5.6,-5.60001 8.58667,-12.76801 8.58667,-20.60801 0,-6.34667 -1.792,-11.42401 -5.67467,-15.30668 -3.95734,-3.95733 -10.30401,-6.72 -20.45868,-6.72 h -18.51734 z m 21.57867,-15.23201 5.82401,-21.80267 h 2.912 c 4.18133,0 6.79467,0.97066 8.43734,2.61333 1.344,1.344 2.16533,3.21067 2.16533,6.048 0,3.21067 -1.568,6.72001 -3.73333,8.88534 -2.68801,2.688 -7.24267,4.256 -12.54401,4.256 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7672" />
      <path
         d="m 202.63409,412.3815 h 17.47201 l 4.032,-14.93334 h 4.33067 l 5.824,14.93334 h 18.81601 l -7.24267,-17.39734 c 10.304,-3.21067 14.56,-10.22934 14.56,-18.36801 0,-4.10667 -1.19466,-7.98934 -4.10666,-10.90134 -3.50934,-3.50933 -9.63201,-5.6 -19.26401,-5.6 h -20.38401 z m 24.78934,-27.40268 2.76267,-10.22934 h 6.19734 c 2.464,0 4.18133,0.52267 5.152,1.49334 0.74667,0.74666 1.12,1.71733 1.12,2.76266 0,3.28534 -3.06134,5.97334 -8.88534,5.97334 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7674" />
      <path
         d="m 288.02713,413.42683 c 17.54667,0 30.76268,-14.48534 30.76268,-30.68801 0,-13.36534 -10.60267,-23.66935 -25.98401,-23.66935 -17.54668,0 -30.76269,14.48534 -30.76269,30.68802 0,13.36534 10.60268,23.66934 25.98402,23.66934 z m 1.19466,-15.38134 c -6.272,0 -9.632,-4.33067 -9.632,-9.856 0,-6.57067 4.704,-13.73867 12.02134,-13.73867 6.272,0 9.632,4.33066 9.632,9.856 0,6.57067 -4.704,13.73867 -12.02134,13.73867 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7676" />
      <path
         d="m 315.94663,412.3815 h 17.47201 l 3.808,-14.18667 h 7.39201 c 16.576,0 26.43201,-8.73601 26.43201,-21.80268 0,-4.10667 -1.344,-7.76534 -4.10667,-10.52801 -3.88267,-3.88266 -9.78134,-5.74933 -19.41334,-5.74933 h -17.54668 z m 24.64001,-26.65601 3.06134,-11.64801 h 3.28533 c 1.94134,0 4.03201,0.448 5.22667,1.64267 0.82134,0.82133 1.26934,1.94133 1.26934,3.06133 0,3.95734 -3.06134,6.94401 -9.70667,6.94401 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7678" />
      <path
         d="m 390.77784,413.42683 c 15.008,0 23.66934,-8.21333 23.66934,-18.74134 0,-7.98934 -5.67467,-11.72267 -14.56001,-15.00801 -7.24267,-2.688 -8.36267,-2.98666 -8.36267,-4.55466 0,-1.49334 1.568,-2.09067 3.80801,-2.09067 5.52533,0 11.12533,2.61333 15.08267,5.824 l 10.00534,-11.94667 c -5.67467,-4.85334 -13.96268,-7.84001 -23.29601,-7.84001 -14.26134,0 -23.52001,8.21334 -23.52001,18.29335 0,7.69067 4.55466,11.12534 14.26134,14.70934 7.616,2.83733 8.58667,3.36 8.58667,5.00267 0,1.49333 -1.568,2.31466 -3.80801,2.31466 -5.52533,0 -11.648,-2.38933 -17.62134,-7.392 l -10.00534,11.94667 c 6.34667,5.74934 15.38135,9.48267 25.76002,9.48267 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7680" />
      <path
         d="m 413.80085,412.3815 h 41.29069 l 4.032,-14.93334 h -23.81868 l 10.00534,-37.33335 h -17.47201 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7682" />
      <path
         d="m 455.19421,412.3815 h 19.04001 l 4.55467,-7.01867 h 18.29334 l 0.896,7.01867 h 18.59201 l -7.91467,-52.64002 H 491.3329 Z m 31.36002,-19.41334 8.13867,-12.69334 1.41866,12.69334 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7684" />
      <path
         d="m 517.78007,412.3815 h 17.32267 l 7.01867,-25.98401 12.39468,25.98401 h 15.53067 l 14.03734,-52.26669 h -17.32268 l -6.72,24.93868 -11.872,-24.93868 h -16.35201 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7686" />
      <path
         d="m 575.67594,412.3815 h 22.69868 c 12.096,0 21.13068,-3.36 27.40268,-9.632 5.6,-5.60001 8.58667,-12.76801 8.58667,-20.60801 0,-6.34667 -1.792,-11.42401 -5.67467,-15.30668 -3.95734,-3.95733 -10.304,-6.72 -20.45868,-6.72 h -18.51734 z m 21.57868,-15.23201 5.824,-21.80267 h 2.912 c 4.18134,0 6.79467,0.97066 8.43734,2.61333 1.344,1.344 2.16533,3.21067 2.16533,6.048 0,3.21067 -1.568,6.72001 -3.73333,8.88534 -2.688,2.688 -7.24267,4.256 -12.54401,4.256 z"
         style="font-family:'Gotham Ultra';-inkscape-font-specification:'Gotham Ultra'"
         id="path7688" />
    </g>
  </g>
</svg>
```

## File: public/images/internet-identity-logo.svg

```
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#29ABE2" cx="12" cy="12" r="12"/>
        <path d="M12,6 C8.686,6 6,8.686 6,12 C6,15.314 8.686,18 12,18 C15.314,18 18,15.314 18,12 C18,8.686 15.314,6 12,6 Z M12,16 C9.791,16 8,14.209 8,12 C8,9.791 9.791,8 12,8 C14.209,8 16,9.791 16,12 C16,14.209 14.209,16 12,16 Z" fill="#FFFFFF"/>
    </g>
</svg>
```

## File: public/images/nfid-logo.svg

```
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white"/>
  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
</svg>
```

## File: public/images/verified-badge.svg

```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 49.66 1.125 L 49.66 1.125 c 4.67 -2.393 10.394 -0.859 13.243 3.548 l 0 0 c 1.784 2.761 4.788 4.495 8.071 4.66 l 0 0 c 5.241 0.263 9.431 4.453 9.694 9.694 v 0 c 0.165 3.283 1.899 6.286 4.66 8.071 l 0 0 c 4.407 2.848 5.941 8.572 3.548 13.242 l 0 0 c -1.499 2.926 -1.499 6.394 0 9.319 l 0 0 c 2.393 4.67 0.859 10.394 -3.548 13.242 l 0 0 c -2.761 1.784 -4.495 4.788 -4.66 8.071 v 0 c -0.263 5.241 -4.453 9.431 -9.694 9.694 h 0 c -3.283 0.165 -6.286 1.899 -8.071 4.66 l 0 0 c -2.848 4.407 -8.572 5.941 -13.242 3.548 l 0 0 c -2.926 -1.499 -6.394 -1.499 -9.319 0 l 0 0 c -4.67 2.393 -10.394 0.859 -13.242 -3.548 l 0 0 c -1.784 -2.761 -4.788 -4.495 -8.071 -4.66 h 0 c -5.241 -0.263 -9.431 -4.453 -9.694 -9.694 l 0 0 c -0.165 -3.283 -1.899 -6.286 -4.66 -8.071 l 0 0 C 0.266 60.054 -1.267 54.33 1.125 49.66 l 0 0 c 1.499 -2.926 1.499 -6.394 0 -9.319 l 0 0 c -2.393 -4.67 -0.859 -10.394 3.548 -13.242 l 0 0 c 2.761 -1.784 4.495 -4.788 4.66 -8.071 l 0 0 c 0.263 -5.241 4.453 -9.431 9.694 -9.694 l 0 0 c 3.283 -0.165 6.286 -1.899 8.071 -4.66 l 0 0 c 2.848 -4.407 8.572 -5.941 13.242 -3.548 l 0 0 C 43.266 2.624 46.734 2.624 49.66 1.125 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,131,249); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<polygon points="36.94,66.3 36.94,66.3 36.94,46.9 36.94,46.9 62.8,35.34 72.5,45.04 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,119,227); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<polygon points="36.94,66.3 17.5,46.87 27.2,37.16 36.94,46.9 60.11,23.7 69.81,33.39 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
</g>
</svg>
```

## File: public/placeholder-logo.svg

```
<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>
```

## File: public/placeholder.svg

```
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
```

## File: styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## File: types/artist.ts

```typescript
export interface Post {
  content: string;
  time: string;
  likes: number;
  comments: number;
  image: string;
}

export interface ExclusiveContent {
  title: string;
  description: string;
  date: string;
}

export interface Reward {
  title: string;
  description: string;
  minTokens: number;
  subscribers: number;
}

export interface Certification {
  id: string;
  type: string;
  title: string;
  description: string;
  date: string;
}

export interface Artist {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage: string;
  genre: string;
  description: string;
  supporters: number;
  blgReceived: number;
  featured: boolean;
  tokenName: string;
  tokenPrice: number;
  posts: Post[];
  exclusiveContent: ExclusiveContent[];
  rewards: Reward[];
  certifications: Certification[];
}
```

## File: types/music-player.ts

```typescript
export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioUrl: string;
  isLiked?: boolean;
}

export interface MusicPlayer {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  showMiniPlayer: boolean;
  isExpanded: boolean;
  currentTrackIndex: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  setVolumeLevel: (volume: number) => void;
  toggleMute: () => void;
  hideMiniPlayer: () => void;
  expandPlayer: () => void;
  collapsePlayer: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  formatTime: (time: number) => string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}
```

## File: .gitignore

```
.repomixignore
```

## File: package.json

```json
{
  "name": "my-v0-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3003",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "@solana/wallet-adapter-base": "^0.9.27",
    "@solana/wallet-adapter-react": "^0.15.39",
    "@solana/wallet-adapter-react-ui": "^0.9.39",
    "@solana/wallet-adapter-wallets": "^0.19.37",
    "@solana/web3.js": "^1.98.4",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.5.1",
    "ethers": "latest",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "^14.2.3",
    "next-themes": "latest",
    "react": "^19",
    "react-day-picker": "8.10.1",
    "react-dom": "^19",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.6",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
```

## File: tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ffff00", // Bright Yellow
          foreground: "hsl(var(--primary-foreground))",
        },
        bright: {
          yellow: {
            DEFAULT: "#ffff00",
            600: "#ffff00",
            700: "#e6e600", // Versión ligeramente más oscura para hover
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
```

## File: tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/features/*": ["./src/features/*"],
      "@/*": ["./*"],
      "@icp/*": ["./icp/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
