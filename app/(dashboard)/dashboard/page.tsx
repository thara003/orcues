import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center overscroll-none">
        <h1 className="text-4xl font-bold text-black">
          Dashboard is under construction.
        </h1>
      </div>
    </>
  );
}
