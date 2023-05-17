import { Suspense } from "react";
import AppNav from "@/components/app/app-nav";
import AppFooter from "@/components/app/app-footer";
import InfoHeader from "@/components/app/info-header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <InfoHeader />
      <Suspense fallback="...">
        <AppNav />
      </Suspense>
      <main>{children}</main>
      {/* <AppFooter /> */}
    </div>
  );
}
