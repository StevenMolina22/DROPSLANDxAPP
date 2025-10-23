"use client";
import MainApp from "@/components/main-app";
import { LoginScreen, useAuth } from "@/icp/features/authentication";

export default function BeansApp() {
  const { login, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} />;
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-950 overflow-hidden">
      <MainApp />
    </div>
  );
}
