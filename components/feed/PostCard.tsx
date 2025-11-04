"use client";
import Link from "next/link";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/types";
import { formatTimeAgo } from "./formatTimeAgo";

export function PostCard({
  post,
  user,
  onLike,
  onComment,
}: {
  post: Post;
  user: string | null;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
}) {
  const isLiked = user ? post.likes.includes(user) : false;

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <Link href={`/creator/${post.authorId}`} className="mr-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.authorAvatar} alt={post.authorName} />
              <AvatarFallback>
                {post.authorName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link
              href={`/creator/${post.authorId}`}
              className="font-medium text-white hover:underline"
            >
              {post.authorName}
            </Link>
            <p className="text-gray-400 text-xs">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between mb-3">
          <p className="text-sm text-gray-300">{post.content}</p>
          {post.isExclusive && (
            <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-400/30">
              Exclusive
            </Badge>
          )}
        </div>
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
