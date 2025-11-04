"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home, Search, User, Wallet } from "lucide-react";

export function TabBar() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname?.startsWith("/explore")) return "search";
    if (pathname?.startsWith("/wallet")) return "wallet";
    if (pathname?.startsWith("/activity")) return "activity";
    if (pathname?.startsWith("/profile") || pathname?.startsWith("/dashboard"))
      return "profile";
    return "home";
  };

  const activeTab = getActiveTab();

  const linkClass = (tab: string) =>
    `flex flex-col items-center ${activeTab === tab ? "text-bright-yellow" : "text-gray-400"}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="max-w-md w-full bg-gray-900 border-t border-gray-800">
        <div className="flex justify-between items-center px-6 pt-2 pb-8">
          <Link href="/" className={linkClass("home")}>
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/explore" className={linkClass("search")}>
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">Explore</span>
          </Link>
          <Link href="/wallet" className={linkClass("wallet")}>
            <Wallet className="h-6 w-6" />
            <span className="text-xs mt-1">Wallet</span>
          </Link>
          <Link href="/activity" className={linkClass("activity")}>
            <Heart className="h-6 w-6" />
            <span className="text-xs mt-1">Activity</span>
          </Link>
          <Link href="/profile" className={linkClass("profile")}>
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
