import { Suspense } from "react";
import AppNav from "@/components/app/app-nav";
import Footer from "@/components/app/footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        {/* @ts-expect-error Server Component */}
        <AppNav />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
