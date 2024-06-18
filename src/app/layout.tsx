import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamezop",
  description: "Gamezop site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>
        <main className="bg-[#191A32] flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
