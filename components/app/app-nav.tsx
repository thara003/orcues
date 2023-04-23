"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Preferences", href: "/preferences" },
];

const projectNav = (slug) => [
  { name: "Overview", href: `/project/${slug}` },
  { name: "Analytics", href: `/project/${slug}/analytics` },
  { name: "Settings", href: `/project/${slug}/settings` },
];

export default function AppNav() {
  const pathname = usePathname();
  const slug = pathname.split("/");

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/dashboard" className="flex shrink-0 items-center">
                  <svg
                    width="402"
                    height="402"
                    viewBox="0 0 402 402"
                    fill="none"
                    className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-100"
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

                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {slug[1] === "project"
                    ? projectNav(slug[2]).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cx(
                            pathname === item.href
                              ? "border-slate-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          aria-current={
                            pathname === item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))
                    : navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cx(
                            pathname === item.href
                              ? "border-slate-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          aria-current={
                            pathname === item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://avatar.vercel.sh/leerob"
                        height={32}
                        width={32}
                        alt="avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={cx(
                              active ? "bg-gray-100" : "",
                              "flex w-full px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
