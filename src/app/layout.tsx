import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "White-Label PPC for Agencies | Generación Ads",
  description:
    "Generación Ads runs Google, Meta, TikTok and LinkedIn Ads under your agency's brand. You keep the client relationship — we keep the campaigns performing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
