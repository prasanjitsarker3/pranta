import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import img from "../../public/ME.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS56",
  description: "Generated by create next app",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/128/4997/4997543.png",
  },
  openGraph: {
    images: [
      {
        url: img.src,
        width: 1200,
        height: 630,
        alt: "Me",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#262A33] md:py-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
