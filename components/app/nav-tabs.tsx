"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

import { UserDropDown } from "@/components/app/user-dropdown";

const tabs = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Analytics",
    href: "/analytics",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  // {
  //   name: "Profile",
  //   href: "/profile",
  // },
  {
    name: "Billing",
    href: "/billing",
  }
];

function NavTabs(href: string, name: string) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      key={href}
      href={href}
      className={`border-b-2 p-1 ${
        // hacky approach to getting the current tab – will replace with useSelectedLayoutSegments when upgrading to Next.js 13
        isActive
          ? "border-black text-black"
          : "border-transparent text-gray-600 hover:text-black"
      }`}
    >
      <div className="rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
        <p className="text-sm">{name}</p>
      </div>
    </Link>
  );
}

const AppNav = () => {
  return (
    <header className="flex h-32 flex-col items-start border border-b bg-white px-8 text-lg text-black shadow-sm">
      <div className="flex w-full justify-between py-4">
        <div className="flex items-center gap-4">
          <Image src="/orcues.svg" alt="Orcues Logo" width={50} height={50} />
          <p className="text-base">Demo User</p>
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-10 sm:w-10 cursor-pointer">
          <UserDropDown />
        </div>
      </div>
      <nav
        className="flex max-w-screen-2xl items-start pl-2"
        role="navigation"
        id="app-navbar"
      >
        <div className="-mb-0.5 flex h-11 items-center justify-start space-x-2">
          {tabs.map(({ href, name }) => NavTabs(href, name))}
        </div>
      </nav>
    </header>
  );
};

export default AppNav;
