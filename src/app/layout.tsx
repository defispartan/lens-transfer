import { Tip } from "./../components/composed/Tip";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Web3Provider } from "@/context/web3";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Lens Transfer",
  description: "Transfer your Lens Profile to another address",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Web3Provider> {children}</Web3Provider>
        <Toaster />
      </body>
    </html>
  );
}
