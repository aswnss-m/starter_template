import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Clarity from "@microsoft/clarity"
import LenisProvider from "@/lib/LenisProvider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  Clarity.init(process.env.CLARITY_PROJECT_ID ?? "")
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
