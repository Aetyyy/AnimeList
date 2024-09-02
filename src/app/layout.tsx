import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import Navbar from "@/components/Utils/Navbar";

export const metadata: Metadata = {
  title: "DakaBoren",
  description: "DakaBoren Anime List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={`bg-[#1b1a1a] antialiased`}>
          <Navbar />
          {children}
        </body>
      </PrimeReactProvider>
    </html>
  );
}
