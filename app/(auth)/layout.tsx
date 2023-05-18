interface AuthLayoutProps {
  children: React.ReactNode;
}

import NextLink from "next/link";
import Image from "next/image";

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-w-screen flex min-h-screen flex-row">
      <aside className="h-screen w-full bg-zinc-50 xl:w-5/12">
        <div className="xxl:items-start flex h-screen w-full flex-col items-center justify-center px-4 md:pl-16">
          <NextLink href="/" className="absolute left-4 top-16 md:left-12">
            <Image
              src="/logo-wordmark--light.png"
              alt="Orcues Logo"
              className="border-none"
              width={160}
              height={160}
            />
          </NextLink>
          <div className="w-full p-2">{children}</div>
        </div>
      </aside>
      <div className="hidden h-screen w-7/12 flex-col items-center justify-center bg-black shadow-xl xl:flex">
        <div className="flex w-2/3 flex-col items-center justify-center rounded-3xl bg-slate-50 bg-opacity-20 p-8">
          <h2 className="text-2xl italic text-zinc-50">
            Join us to enhance your marketing pipeline with our cost-effective,
            privacy-focused platform built on open source technologies.
          </h2>
        </div>
      </div>
    </div>
  );
}
