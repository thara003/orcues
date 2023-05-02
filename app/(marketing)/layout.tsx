import Footer from "@/components/app/footer";
import FooterL from "@/components/app/landingfooter";
import Nav from "@/components/app/nav";
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
      <FooterL />
    </div>
  );
}
