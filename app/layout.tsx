import "../styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orcues",
    template: `%s | Orcues`,
  },
  description: "Redefined news letter subscription flow",
  keywords: ["Orcues", "News Letter", "Subscription", "Open Source"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "favicon/favicon.ico",
    shortcut: "favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.variable, "bg-white")}>
      <body>{children}</body>
    </html>
  );
}
