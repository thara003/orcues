import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Card = () => {
  return (
    <Link href="/project/1" className="rounded-md bg-white p-4 shadow-md hover:shadow-lg cursor-pointer h-36 flex flex-col justify-center">
      <h2 className="text-xl font-bold">Project Title</h2>
      <p className="mt-2">This is some sample text for the card.</p>
    </Link>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl py-14">
        <div className="flex justify-between gap-8 py-10">
          <Input placeholder="Search" className="w-full" />
          {/* TODO: ask thara why this behaves weird when we rm width of the button */}
          <Button className="w-40">Add New</Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
