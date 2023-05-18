import "../styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import LocalFont from "next/font/local";
import SupabaseProvider from "./supabase-provider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: {
    default: "Orcues | App",
    template: `%s | Orcues`,
  },
  description: "Now you can manage your newsletter with Orcues effortlessly.",
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
    <html
      lang="en"
      className={clsx(inter.variable, calSans.variable, "bg-zinc-50")}
      suppressHydrationWarning
    >
      <body className="flex flex-col scroll-smooth antialiased">
        <SupabaseProvider>
          {children}
          <Toaster position="bottom-right" />
          </SupabaseProvider>
      </body>
    </html>
  );
}
