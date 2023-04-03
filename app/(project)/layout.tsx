import AppNav from "@/components/app/nav-tabs";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: ProjectLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppNav />
      <main className="bg-slate-100">{children}</main>
    </div>
  );
}
