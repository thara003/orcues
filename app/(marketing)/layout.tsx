import Nav from "@/components/app/nav";
import { SiteFooter } from "@/components/app/site-footer";
import Link from "next/link";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Nav />
      <main className="grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
