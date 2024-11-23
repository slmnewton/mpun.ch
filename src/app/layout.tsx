import type { Metadata } from "next";
import { Happy_Monkey } from 'next/font/google'
import "./globals.css";

const happy_monkey = Happy_Monkey( { subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: "$MPUNCH",
  description: "a monkey punch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${happy_monkey.className}`}
      >
        {children}
      </body>
    </html>
  );
}
