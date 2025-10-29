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
import { ExtendedPost, Activity, FeedItem } from "@/types";
import MusicPlayer from "@/components/music-player/music-player";

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
  { id: "axs", name: "AXS", genre: "Techno", avatar: "/avatars/axs.jpg" },
];

export default function HomeView({
  onSelectArtist,
  onNavigateToExplore,
}: {
  onSelectArtist: (artistId: string) => void;
  onNavigateToExplore: () => void;
}) {
  const { userData, isArtist, user } = useAuth();
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  useEffect(() => {
    if (user) {
      setFeedItems(userDataService.getFeedForUser(user));
    }
  }, [user]);

  const refreshFeed = () => {
    if (user) setFeedItems(userDataService.getFeedForUser(user));
  };

  const handleLike = (postId: string) => {
    if (!user) return;
    userDataService.likePost(user, postId);
    refreshFeed();
  };

  const handleComment = (postId: string) => {
    setCurrentPostId(postId);
    setShowCommentDialog(true);
  };

  const handleSendComment = (text: string) => {
    if (!user || !currentPostId) return;
    userDataService.addComment(user, currentPostId, text);
    refreshFeed();
  };

  const handleCreatePost = (content: string, image: string | null) => {
    if (!user || !userData) return;
    userDataService.createPost({
      authorId: user,
      authorName: userData.username,
      authorAvatar: userData.profilePhoto || "/avatars/user.jpg",
      content,
      image,
      type: "post",
      tags: (content.match(/#(\w+)/g) || []).map((tag: string) => tag.slice(1)),
    });
    refreshFeed();
  };

  return (
    <div className="pb-6 overflow-auto bg-gray-50 dark:bg-gray-950">
      <FeaturedArtists onSelectArtist={onSelectArtist} />

      {!isArtist() && showWelcomeBanner && (
        <WelcomeBanner
          onClose={() => setShowWelcomeBanner(false)}
          onNavigateToExplore={onNavigateToExplore}
        />
      )}

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
            {user && (
              <PostCreator
                userData={userData}
                onCreatePost={handleCreatePost}
              />
            )}

            <div className="space-y-3">
              {feedItems.length > 0 ? (
                feedItems.map((item) =>
                  item.type === "post" ? (
                    <PostCard
                      key={item.id}
                      post={item.data}
                      user={user}
                      onLike={handleLike}
                      onComment={handleComment}
                      onSelectArtist={onSelectArtist}
                    />
                  ) : (
                    <ActivityCard
                      key={item.id}
                      activity={item.data}
                      onSelectArtist={onSelectArtist}
                    />
                  ),
                )
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
            <MusicPlayer
              onTrackChange={(track) =>
                console.log("Now playing:", track.title)
              }
            />
          </TabsContent>
        </Tabs>
      </div>

      <CommentDialog
        open={showCommentDialog}
        onClose={() => setShowCommentDialog(false)}
        postId={currentPostId}
        onSendComment={handleSendComment}
      />
    </div>
  );
}

function formatTimeAgo(dateString: string): string {
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
}

function FeaturedArtists({
  onSelectArtist,
}: {
  onSelectArtist: (artistId: string) => void;
}) {
  return (
    <div className="px-4 pt-6">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Featured Artists
      </h2>
      <div className="flex overflow-x-auto gap-1 pb-2 -mx-4 px-4">
        {featuredArtists.map((artist) => (
          <div
            key={artist.id}
            className="flex-shrink-0 w-28 cursor-pointer"
            onClick={() => onSelectArtist(artist.id)}
          >
            <div className="flex flex-col items-center">
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
  );
}

function WelcomeBanner({
  onClose,
  onNavigateToExplore,
}: {
  onClose: () => void;
  onNavigateToExplore: () => void;
}) {
  return (
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
              onClick={onClose}
              className="text-gray-400 hover:text-white ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PostCreator({
  userData,
  onCreatePost,
}: {
  userData: any;
  onCreatePost: (content: string, image: string | null) => void;
}) {
  const [content, setContent] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [location, setLocation] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const [showPollDialog, setShowPollDialog] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB");
      return;
    }

    setPreviewUrl(URL.createObjectURL(file) as any);
  };

  const handlePost = () => {
    let finalContent = content;

    if (location) finalContent += ` 📍 ${location}`;

    const validPollOptions = pollOptions.filter((opt) => opt.trim());
    if (validPollOptions.length > 0) {
      finalContent += `\n\n📊 Poll:\n${validPollOptions.map((opt, i) => `${i + 1}. ${opt}`).join("\n")}`;
    }

    onCreatePost(finalContent, previewUrl);
    setContent("");
    setPreviewUrl(null);
    setLocation("");
    setPollOptions(["", ""]);
  };

  return (
    <>
      <Card className="bg-gray-800 border-gray-700 mb-4">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={userData?.profilePhoto || "/avatars/user.jpg"}
              />
              <AvatarFallback>
                {userData?.username?.substring(0, 2).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's on your USB?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white resize-none mb-3"
                rows={3}
              />
              <div className="flex flex-wrap gap-4 mb-3 justify-start">
                <ImageIcon
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => document.getElementById("imageInput")?.click()}
                />
                <MapPin
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setShowLocationDialog(true)}
                />
                <Hash
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setContent((prev) => prev + " #")}
                />
                <BarChart2
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setShowPollDialog(true)}
                />
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  size="sm"
                  onClick={handlePost}
                  disabled={!content.trim()}
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

      <Dialog open={showLocationDialog} onOpenChange={setShowLocationDialog}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Add Location</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
          />
          <div className="flex gap-2">
            <Button
              onClick={() => setShowLocationDialog(false)}
              variant="outline"
              className="bg-gray-700 border-gray-600 text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setShowLocationDialog(false)}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPollDialog} onOpenChange={setShowPollDialog}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Create Poll</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {pollOptions.map((option, i) => (
              <Input
                key={i}
                placeholder={`Option ${i + 1}`}
                value={option}
                onChange={(e) =>
                  setPollOptions((prev) =>
                    prev.map((opt, idx) => (idx === i ? e.target.value : opt)),
                  )
                }
                className="bg-gray-700 border-gray-600 text-white"
              />
            ))}
            <Button
              onClick={() => setPollOptions((prev) => [...prev, ""])}
              variant="outline"
              className="bg-gray-700 border-gray-600 text-white"
            >
              Add Option
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowPollDialog(false)}
                variant="outline"
                className="bg-gray-700 border-gray-600 text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowPollDialog(false)}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Create Poll
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PostCard({
  post,
  user,
  onLike,
  onComment,
  onSelectArtist,
}: {
  post: ExtendedPost;
  user: string | null;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onSelectArtist: (artistId: string) => void;
}) {
  const isLiked = user ? post.likes.includes(user) : false;

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <Avatar
            className="h-8 w-8 mr-2 cursor-pointer"
            onClick={() => onSelectArtist(post.authorId)}
          >
            <AvatarImage src={post.authorAvatar} alt={post.authorName} />
            <AvatarFallback>
              {post.authorName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p
              className="font-medium text-white cursor-pointer"
              onClick={() => onSelectArtist(post.authorId)}
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
            <img src={post.image} alt="Post" className="w-full h-auto" />
          </div>
        )}
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <button
            className="flex items-center"
            onClick={() => onLike(post.id)}
            disabled={!user}
          >
            <Heart
              className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
            />
            {post.likes.length}
          </button>
          <button
            className="flex items-center"
            onClick={() => onComment(post.id)}
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
}

function ActivityCard({
  activity,
  onSelectArtist,
}: {
  activity: Activity;
  onSelectArtist: (artistId: string) => void;
}) {
  return (
    <Card className="bg-gray-800 border-gray-700">
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

function CommentDialog({
  open,
  onClose,
  postId,
  onSendComment,
}: {
  open: boolean;
  onClose: () => void;
  postId: string | null;
  onSendComment: (text: string) => void;
}) {
  const [commentText, setCommentText] = useState("");

  const handleSend = () => {
    onSendComment(commentText);
    setCommentText("");
  };

  const post = postId
    ? userDataService.getAllPosts().find((p) => p.id === postId)
    : null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">Comments</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="max-h-[300px] overflow-y-auto space-y-3">
            {post?.comments.map((comment, i) => (
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
                  <p className="text-sm text-gray-300">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 bg-gray-700 border-gray-600 text-white"
            />
            <Button
              onClick={handleSend}
              disabled={!commentText.trim()}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
