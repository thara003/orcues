import UserInfo from "@/components/app/user-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-8 h-screen w-screen items-center justify-center overscroll-none">
        <h1 className="text-xl font-bold text-black">
          Dashboard is under construction.
        </h1>
        <UserInfo />
      </div>
    </>
  );
}
