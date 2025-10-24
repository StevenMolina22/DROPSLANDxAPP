import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/icp/features/authentication";
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
