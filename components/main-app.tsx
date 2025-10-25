"use client"

import { useState, useEffect } from "react"
import { Home, Search, User, Heart, Wallet } from "lucide-react"

import ActivityView from "@/components/activity-view"
import ArtistDashboard from "@/components/artist-dashboard"
import ArtistProfile from "@/components/artist-profile"
import BuyView from "@/components/buy-view"
import HomeView from "@/components/home-view"
import ProfileView from "@/components/profile-view"
import ReceiveView from "@/components/receive-view"
import SearchView from "@/components/search-view"
import SendView from "@/components/send-view"
import WalletView from "@/components/wallet-view"
import { Button } from "@/components/ui/button"
import { SolanaWalletButton } from "@/components/solana-wallet-button"
import { DEFAULT_USER_ID } from "@/data/default-user"
import { useAuth } from "@/hooks/use-auth"

export default function MainApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [currentView, setCurrentView] = useState<
    "main" | "buy" | "send" | "receive" | "artist" | "artistDashboard"
  >("main")
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null)
  const { user, userData, isArtist } = useAuth()

  // Debug state changes
  useEffect(() => {
    console.log("Current view changed to:", currentView)
    console.log("Selected artist ID:", selectedArtistId)
  }, [currentView, selectedArtistId])

  const handleBuy = () => {
    setCurrentView("buy")
  }

  const handleSend = () => {
    setCurrentView("send")
  }

  const handleReceive = () => {
    setCurrentView("receive")
  }

  const handleViewArtist = (artistId: string) => {
    console.log("Main app - Viewing artist:", artistId)
    if (user && artistId === user) {
      setActiveTab("profile")
      setCurrentView("main")
    } else {
      setSelectedArtistId(artistId)
      setCurrentView("artist")
    }
  }

  const handleBack = () => {
    setCurrentView("main")
  }

  const handleOpenArtistDashboard = () => {
    setCurrentView("artistDashboard")
  }

  const renderContent = () => {
    if (currentView === "buy") {
      return <BuyView onBack={handleBack} />
    }

    if (currentView === "send") {
      return <SendView onBack={handleBack} />
    }

    if (currentView === "receive") {
      return <ReceiveView onBack={handleBack} />
    }

    if (currentView === "artistDashboard") {
      return <ArtistDashboard onBack={handleBack} />
    }

    if (currentView === "artist" && selectedArtistId) {
      return <ArtistProfile artistId={selectedArtistId} onBack={handleBack} />
    }

    if (activeTab === "home") {
      return <HomeView onSelectArtist={handleViewArtist} />
    }

    if (activeTab === "search") {
      return <SearchView onSelectArtist={handleViewArtist} />
    }

    if (activeTab === "wallet") {
      return <WalletView onBuy={handleBuy} onSend={handleSend} onReceive={handleReceive} />
    }

    if (activeTab === "activity") {
      return <ActivityView onSelectArtist={handleViewArtist} />
    }

    if (activeTab === "profile") {
      return <ProfileView username={user ?? DEFAULT_USER_ID} />
    }

    return null
  }

  const showArtistDashboard = Boolean(userData && isArtist() && activeTab === "profile")

  return (
    <>
      <header className="bg-gray-900 px-4 py-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/dropsland-logo.png" alt="DROPSLAND" className="h-12 max-w-[180px] object-contain" />
          <SolanaWalletButton />
        </div>
        <div className="flex items-center gap-2">
          {showArtistDashboard && (
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800 text-white border-gray-700"
              onClick={handleOpenArtistDashboard}
            >
              Artist Dashboard
            </Button>
          )}
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-gray-950 pb-24">{renderContent()}</main>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center">
        <div className="max-w-md w-full bg-gray-900 border-t border-gray-800">
          <div className="flex justify-between items-center px-6 pt-2 pb-8">
            <button
              onClick={() => {
                setActiveTab("home")
                setCurrentView("main")
              }}
              className={`flex flex-col items-center ${activeTab === "home" ? "text-bright-yellow" : "text-gray-400"}`}
            >
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("search")
                setCurrentView("main")
              }}
              className={`flex flex-col items-center ${activeTab === "search" ? "text-bright-yellow" : "text-gray-400"}`}
            >
              <Search className="h-6 w-6" />
              <span className="text-xs mt-1">Explore</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("wallet")
                setCurrentView("main")
              }}
              className={`flex flex-col items-center ${activeTab === "wallet" ? "text-bright-yellow" : "text-gray-400"}`}
            >
              <Wallet className="h-6 w-6" />
              <span className="text-xs mt-1">Wallet</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("activity")
                setCurrentView("main")
              }}
              className={`flex flex-col items-center ${activeTab === "activity" ? "text-bright-yellow" : "text-gray-400"}`}
            >
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Activity</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("profile")
                setCurrentView("main")
              }}
              className={`flex flex-col items-center ${activeTab === "profile" ? "text-bright-yellow" : "text-gray-400"}`}
            >
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
