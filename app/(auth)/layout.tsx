interface AuthLayoutProps {
  children: React.ReactNode;
}

import NextLink from "next/link";
import Image from "next/image";

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-w-screen flex min-h-screen flex-row">
      <aside className="h-screen w-5/12 bg-white">
        {/* <NextLink href="/" className="absolute left-12 top-12">
          <Image
            src="/logo-wordmark--light.png"
            alt="Orcues Logo"
            width={160}
            height={160}
          />
        </NextLink> */}
        <div className="flex h-screen w-full flex-col items-start justify-center pl-16">
        <NextLink href="/" className="absolute left-12 top-16">
          <Image
            src="/logo-wordmark--light.png"
            alt="Orcues Logo"
            width={160}
            height={160}
          />
        </NextLink>
      <div className="pl-2 w-full">{children}</div>

        </div>
      </aside>
      <div className="flex h-screen w-7/12 flex-col items-center justify-center rounded-l-[4.5rem] bg-gradient-to-r from-indigo-300 to-purple-400 shadow-xl">
        <div className="flex w-2/3 flex-col items-center justify-center rounded-3xl bg-slate-50 bg-opacity-20 p-8">
          <h2 className="text-3xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem
            molestias accusamus beatae, perferendis asperiores minima delectus,
            assumenda architecto maiores eveniet velit eos officiis iste ipsam
            iure esse facilis ex?
          </h2>
        </div>
      </div>
    </div>
  );
}
