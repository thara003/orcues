import Link from "next/link";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="z-10 mx-auto flex h-20 max-w-6xl  items-center justify-between space-x-[43rem] border-t border-gray-700 py-8 px-4">
      <div className="ml-4 text-[16px] text-gray-400">
        © Orcues.com. All rights reserved.
      </div>
      <div className=" mr-14 flex flex-row flex-wrap gap-4">
        <div className=" flex h-10 w-10 flex-wrap items-center justify-center rounded-full bg-slate-300 transition-all hover:bg-slate-800 hover:text-white">
          <Twitter className="h-6 w-6  " />
        </div>
        <div className=" flex h-10 w-10 flex-wrap items-center justify-center rounded-full bg-slate-300 transition-all hover:bg-slate-800 hover:text-white">
          <Github className="h-6 w-6 " />
        </div>
      </div>
    </footer>
  );
}
