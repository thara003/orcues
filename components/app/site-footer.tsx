import Link from "next/link";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="z-10 flex h-20 items-center justify-center space-x-12 border-t border-gray-700">
      <div className=" flex h-10 w-10 flex-wrap items-center justify-center rounded-full bg-slate-300 transition-all hover:bg-slate-800 hover:text-white">
        <Twitter className="h-6 w-6 text-black hover:text-white" />
      </div>
      <div className=" flex h-10 w-10 flex-wrap items-center justify-center rounded-full bg-slate-300 transition-all hover:bg-slate-800 hover:text-white">
        <Github className="h-6 w-6 text-black hover:text-white" />
      </div>
    </footer>
  );
}
