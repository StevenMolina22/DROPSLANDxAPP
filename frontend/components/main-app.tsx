"use client";

import HomeView from "@/components/home/home-view";
import SearchView from "@/components/search-view";
import ActivityView from "@/components/home/activity-view";
import ProfileView from "@/components/artist-profile/profile-view";
import WalletView from "@/components/wallet/wallet-view";
import ArtistDashboard from "@/components/artist-dashboard";
import BuyView from "@/components/wallet/buy-view";
import SendView from "@/components/send-view";
import ReceiveView from "@/components/wallet/receive-view";
import ArtistProfile from "@/components/artist-profile/artist-profile";
import { LoginScreen, useAuth } from "@/icp/features/authentication";
import { Header } from "./header";
import { TabBar } from "./tab-bar";
import { useNavigation, useViewRenderer } from "@/hooks/use-navigation";

export default function MainApp() {
  const { user, userData, login, logout, isArtist } = useAuth();

  const {
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
  } = useNavigation();

  const { viewType } = useViewRenderer(
    currentView,
    activeTab,
    selectedArtistId,
    user,
  );

  // Wrapper for handleViewArtist to include current user
  const handleArtistClick = (artistId: string) => {
    handleViewArtist(artistId, user);
  };

  // Render the appropriate content based on the view type
  const renderContent = () => {
    switch (viewType) {
      case "buy":
        return <BuyView onBack={navigateBack} />;

      case "send":
        return <SendView onBack={navigateBack} />;

      case "receive":
        return <ReceiveView onBack={navigateBack} />;

      case "artistDashboard":
        return <ArtistDashboard onBack={navigateBack} />;
      // return <ReceiveView onBack={navigateBack} />;

      case "artist":
        return (
          <ArtistProfile artistId={selectedArtistId!} onBack={navigateBack} />
        );

      case "home":
        return <HomeView onSelectArtist={handleArtistClick} />;

      case "search":
        return <SearchView onSelectArtist={handleArtistClick} />;

      case "wallet":
        return (
          <WalletView
            onBuy={navigateToBuy}
            onSend={navigateToSend}
            onReceive={navigateToReceive}
          />
        );

      case "activity":
        return <ActivityView onSelectArtist={handleArtistClick} />;

      case "profile":
        return <ProfileView username={user!} />;

      default:
        return null;
    }
  };

  return (
    <>
      {user && (
        <Header
          userData={userData}
          isArtist={isArtist}
          activeTab={activeTab}
          handleOpenArtistDashboard={navigateToArtistDashboard}
          user={user}
          logout={logout}
        />
      )}

      {!user ? (
        <LoginScreen onLogin={login} />
      ) : (
        <>
          <main className="flex-1 overflow-auto bg-gray-950 pb-24">
            {renderContent()}
          </main>

          <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
        </>
      )}
    </>
  );
}
