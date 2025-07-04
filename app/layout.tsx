import type { Metadata } from "next";
import {  Mona_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Prepwise",
  description: "An Ai Powered Mock Interview Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className}  antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
