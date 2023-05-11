import Footer from "./layoutitem/footer";
import FooterL from "@/components/app/landingfooter";
import Products from "@/components/app/landingproducts";
import Nav from "@/components/app/nav";
import Header from "./layoutitem/header";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Nav /> */}
      <Header />

      <main>{children}</main>

      <Footer />
      {/* <Products />
      <FooterL /> */}
    </div>
  );
}
