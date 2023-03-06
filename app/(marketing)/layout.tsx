import Nav from "@/components/nav";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
        <Nav />
      <main>{children}</main>
    </div>
  );
}
