"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/icp/features/authentication";
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
