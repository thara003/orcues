"use client";

import { useUser } from "@/lib/hooks/useUser";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();
  // const isLoggedIn = user !== null;
  return (
    <nav className="sticky top-0 z-40 bg-black transition-all duration-150">
      {/* <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="align-center relative flex flex-row justify-between py-4 md:py-6">
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="transform cursor-pointer rounded-full duration-100 ease-in-out"
              aria-label="Logo"
            >
              <svg
                width="402"
                height="402"
                viewBox="0 0 402 402"
                fill="none"
                className="h-9 w-9 rounded-full bg-gray-100 p-2 text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M368.5 284.75C368.5 293.635 364.971 302.156 358.688 308.438C352.406 314.721 343.885 318.25 335 318.25H67.0002C58.1155 318.25 49.5946 314.721 43.3122 308.438C37.0297 302.156 33.5002 293.635 33.5002 284.75V159.125C33.5002 117.25 67.0002 83.7502 108.875 83.7502H301.5C338.35 83.7502 368.5 113.9 368.5 150.75V284.75Z"
                  stroke="black"
                  strokeWidth="33.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M251.25 150.75H301.5V184.25"
                  stroke="black"
                  strokeWidth="33.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M108.875 83.7502C150.75 83.7502 184.25 117.25 184.25 159.125V284.75C184.25 293.635 180.721 302.156 174.438 308.438C168.156 314.721 159.635 318.25 150.75 318.25"
                  stroke="black"
                  strokeWidth="33.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M100.5 167.5H117.25"
                  stroke="black"
                  strokeWidth="33.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            <Link
              href="https://github.com/thara003/orcues"
              className=" inline-flex cursor-pointer items-center rounded-md border border-white p-3 px-4 font-medium leading-6 text-zinc-200 transition duration-75 ease-in-out hover:bg-gray-100 hover:text-black"
            >
              GitHub
            </Link>
            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex cursor-pointer items-center rounded-md p-1 font-medium leading-6 text-zinc-200 transition duration-75 ease-in-out"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className=" inline-flex cursor-pointer items-center rounded-md p-1 font-medium leading-6 text-zinc-200 transition duration-75 ease-in-out"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
