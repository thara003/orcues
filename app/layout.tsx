import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orcues",
  description: "Redefined news letter subscription flow",
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
