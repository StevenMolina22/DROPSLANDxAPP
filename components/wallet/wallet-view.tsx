"use client";
import Link from "next/link";
import { TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { BanknoteIcon } from "@/components/icons/banknote-icon";
import { artistTokens, transactions } from "@/data";

interface BalanceCardProps {
  balance: number;
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

function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <div className="px-4 py-6 bg-gradient-to-r from-black to-gray-800 text-white">
      <h1 className="text-xl font-bold mb-2">Wallet</h1>
      <h2 className="text-sm font-medium opacity-90">Your Balance</h2>
      <div className="flex items-center mt-1">
        <span className="text-2xl font-bold">{balance} $DROPS</span>
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
        >
          <Link href="/wallet/receive">Receive</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
        >
          <Link href="/wallet/buy">Buy</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-white text-white hover:bg-white/20 bg-white/20 backdrop-blur-sm"
        >
          <Link href="/wallet/send">Send</Link>
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
            <Button
              asChild
              className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              <Link href="/explore">Explore Artists</Link>
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

export default function WalletView() {
  const { balance, donated } = useAuth();

  return (
    <div className="pb-6 bg-gray-950">
      <BalanceCard balance={balance} />
      <StatsCards donated={donated} />
      <ArtistTokens tokens={artistTokens} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
