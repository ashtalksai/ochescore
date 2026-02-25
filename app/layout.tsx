import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OcheScore - Score like a pro. Tap like a boss.",
  description: "The fastest way to score darts without the clutter. Interactive dartboard scoring with checkout hints and game history.",
  keywords: ["darts", "dart scoring", "X01", "Round the Clock", "dartboard", "scorer"],
  openGraph: {
    title: "OcheScore - Modern Dart Scoring",
    description: "Score like a pro. Tap like a boss.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
