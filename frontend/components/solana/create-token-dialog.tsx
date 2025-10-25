import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  createFungible,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  generateSigner,
  percentAmount,
  some,
  PublicKey,
} from "@metaplex-foundation/umi";
import { useSolanaUmi } from "@/hooks/use-solana-umi"; // Adjust path as needed

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"; // Example for notifications

// ------------------------------

export const CreateTokenDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [uri, setUri] = useState("");
  const [decimals, setDecimals] = useState("6");
  const [sellerFee, setSellerFee] = useState("5.5");

  // Solana hooks
  const { connected, publicKey } = useWallet();
  const umi = useSolanaUmi();
  const { toast } = useToast(); // Example notification

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!connected || !publicKey || !umi) {
      setError("Please connect your wallet first.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 1. Generate a new keypair for the Mint account
      const mint = generateSigner(umi);

      // 2. Parse form inputs
      const parsedDecimals = parseInt(decimals, 10);
      const parsedSellerFee = parseFloat(sellerFee);

      if (isNaN(parsedDecimals) || isNaN(parsedSellerFee)) {
        throw new Error("Invalid decimals or seller fee.");
      }

      // 3. Call the Metaplex createFungible function
      const tx = await createFungible(umi, {
        mint,
        name: name,
        symbol: symbol,
        uri: uri,
        sellerFeeBasisPoints: percentAmount(parsedSellerFee),
        decimals: some(parsedDecimals),
      }).sendAndConfirm(umi, {
        confirm: { commitment: "processed" },
      });

      if (tx.result.value.err) {
        throw new Error(`Transaction failed: ${tx.result.value.err}`);
      }

      const mintAddress = mint.publicKey.toString();
      console.log(`✅ Token created successfully! Mint: ${mintAddress}`);

      // 4. (Required) Save to your Dropsland backend
      // This step is crucial. You must associate the artist's
      // profile with their new token mint address.
      await saveTokenToBackend(mintAddress, name, symbol, uri);

      toast({
        title: "Token Created! 🚀",
        description: `${name} (${symbol}) is now live. Mint: ${mintAddress}`,
      });

      // 5. Reset form and close dialog
      setIsOpen(false);
      setName("");
      setSymbol("");
      setUri("");
    } catch (err: any) {
      console.error("Token creation failed:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Mock function to save token data to your application's backend.
   * Replace this with your actual API call.
   */
  const saveTokenToBackend = async (
    mint: string,
    name: string,
    symbol: string,
    uri: string,
  ) => {
    console.log("Saving to backend:", { mint, name, symbol, uri });
    // Example:
    // await fetch('/api/artists/me/token', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ mint, name, symbol, uri }),
    // });
    // This associates the artist (from their session) with the new mint.
    return new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="text-lg mr-2">🪙</span> Create Token
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Your Artist Token</DialogTitle>
          <DialogDescription>
            This token represents your brand. Fans will buy it to get exclusive
            perks.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Token Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., DJ Banana"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="symbol" className="text-right">
                Symbol
              </Label>
              <Input
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="e.g., BANANA"
                className="col-span-3"
                maxLength={10}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="uri" className="text-right">
                Metadata URI
              </Label>
              <Input
                id="uri"
                value={uri}
                onChange={(e) => setUri(e.target.value)}
                placeholder="https://.../my-token.json"
                className="col-span-3"
                type="url"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="decimals" className="text-right">
                Decimals
              </Label>
              <Input
                id="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
                type="number"
                min="0"
                max="9"
                step="1"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sellerFee" className="text-right">
                Royalty (%)
              </Label>
              <Input
                id="sellerFee"
                value={sellerFee}
                onChange={(e) => setSellerFee(e.target.value)}
                type="number"
                min="0"
                max="100"
                step="0.1"
                className="col-span-3"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <DialogFooter>
            <Button type="submit" disabled={isLoading || !connected}>
              {isLoading ? "Creating Token..." : "Create and Sign"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
