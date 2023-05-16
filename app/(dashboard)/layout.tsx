import { Suspense } from "react";
import AppNav from "@/components/app/app-nav";
import Footer from "@/components/app/footer";
import Header from "@/components/app/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <Header />
        <AppNav />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
