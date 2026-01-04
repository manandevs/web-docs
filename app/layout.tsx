import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";
import NextThemeProvider from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const itWeralionis = localFont({
  src: "./ITWeralionis.otf",
  variable: "--font-it-weralionis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebDocs",
  description: "Learn Web Development Step by Step",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      suppressContentEditableWarning
      className={cn(geistSans.variable, geistMono.variable, itWeralionis.variable)}
    >
      <body className={cn("antialiased bg-black text-white")}>
        <NextThemeProvider>
          <SidebarProvider className="flex flex-col justify-center items-center">
            <Header />
            <Layout>
              {children}
            </Layout>
          </SidebarProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
