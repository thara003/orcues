interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen min-w-screen flex flex-row">
    <aside className="w-5/12 h-screen bg-white flex flex-col items-center justify-center">
    {children}
    </aside>
    <div className="w-7/12 h-screen bg-blue-200 shadow-2xl rounded-l-[4.5rem]"></div>
    </div>;
}
