import type { Metadata } from "next";
import { Homenaje } from "next/font/google";
import "./globals.css";

const homenaje = Homenaje({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Link sharing app",
  description: "An app that shares your links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={homenaje.className}>{children}</body>
    </html>
  );
}
