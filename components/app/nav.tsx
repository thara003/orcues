"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-40 bg-zinc-50 transition-all duration-150">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="align-center relative flex flex-row justify-between py-4 md:py-6">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="transform cursor-pointer duration-100 ease-in-out"
              aria-label="Logo"
            >
              <Image src="/logo.png" alt="Orcues Logo" width={40} height={40} />
              <span className="sr-only">Orcues</span>
            </Link>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            <Link
              href="/login"
              className="inline-flex cursor-pointer items-center rounded-md p-1 font-medium leading-6 text-zinc-700 transition duration-75 ease-in-out hover:text-zinc-800 focus:text-zinc-100 focus:outline-none focus:ring-2"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
