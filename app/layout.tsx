import "../styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Open Source Email Marketing Platform | Orcues",
    template: `%s | Orcues`,
  },
  description: "The Open Source Email Marketing Tool for 21st Century.",
  keywords: ["Orcues", "Open Source", "Email", "Marketing", "Platform"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.variable, "bg-white")}>
      <body className="flex flex-col scroll-smooth antialiased">{children}</body>
    </html>
  );
}
