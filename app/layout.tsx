import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const IbmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ['latin'],
  weight: ['500']
});

export const metadata: Metadata = {
  title: "alexm00n.dev 🌙",
  description: "Le site d'AlexM00n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/animated.gif" type="x-gif" />
      </head>
      <body
        className={`${IbmPlexMono.className} antialiased`}
      >
        <Header />
        <div className="mt-16 lg:w-[90vw] mx-auto items-center">
          {children}
        </div>
      </body>
    </html>
  );
}