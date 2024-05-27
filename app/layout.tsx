import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoW Info",
  description: "Wow information in one click!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark">    
        <body className={inter.className}>
           <Providers>{children}</Providers>
        </body>
      </html>
  );
}
