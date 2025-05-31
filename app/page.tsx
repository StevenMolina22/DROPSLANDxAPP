"use client"
import MainApp from "@/components/main-app"
import LoginScreen from "@/components/login-screen"
import { useAuth } from "@/hooks/use-auth"

export default function BeansApp() {
  const { login, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} />
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-950 overflow-hidden">
      <MainApp />
    </div>
  )
}

