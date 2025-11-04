"use client";

import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { TabBar } from "./tab-bar";

const EXCLUDED_PREFIXES = ["/privy", "/creator"];

export function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const shouldExclude = EXCLUDED_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix),
  );

  if (shouldExclude) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-950 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-auto bg-gray-950 pb-24">{children}</main>
      <TabBar />
    </div>
  );
}
