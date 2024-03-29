import Link from "next/link";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Open Source MailChimp Alternative",
  description: "Orcues is an open source, self-hosted alternative of MailChimp, built with scalability and cost effectiveness in mind.",
};

export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-6xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <Link
              href="https://github.com/thara003/orcues"
              className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 text-zinc-400 ring-1 ring-zinc-100/10 duration-150 hover:ring-zinc-100/30"
            >
              Orcues is Open Source on{" "}
              <span className="font-semibold text-zinc-200">
                GitHub <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>
          <h1 className=" sm:text-1xl mx-auto mt-5 max-w-2xl bg-gradient-to-t from-zinc-100/50 to-white bg-clip-text text-center font-display text-4xl font-extrabold leading-[1.15] text-transparent sm:text-5xl sm:leading-[1.15] md:text-5xl lg:text-6xl">
            Supercharge your email compaigns & newsletters
          </h1>
          <p className="m-auto mt-8 max-w-3xl text-center text-xl  text-zinc-600">
            The open source, self-hosted alternative of MailChimp and other email campaign platforms. Built with scalability and cost effectiveness in mind ⚡️
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/thara003/orcues" className="mt-8 bg-zinc-900 inline-flex items-center justify-center rounded-md px-6 py-2 text-base font-medium text-white transition duration-300 ease-in-out border border-zinc-100/10 hover:border-zinc-100/30">
            Get started
          </Link>
          <Link href="https://dev.orcues.com" className="mt-8 inline-flex items-center justify-center rounded-md border border-white bg-zinc-50 px-5 py-2 text-base font-medium text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white">
            Live demo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="mt-8">
          <div className="flex h-[700px] items-center justify-center rounded-xl bg-transparent p-4 shadow-lg">
            <Image
              src="/images/chart.png"
              alt="dashboard"
              className="rounded-2xl"
              loading="lazy"
              height={1600}
              width={1600}
            />
          </div>
        </div>
        {/* <div className="mt-28 flex flex-col gap-6">
          <h2 className="mx-auto font-display  text-5xl font-extrabold text-zinc-50">
            How it works
          </h2>
          <div className=" grid grid-cols-1 place-content-center gap-6 py-7  md:grid-cols-2 lg:grid-cols-3 ">
            <div className="rounded-lg border border-black   bg-zinc-900 opacity-[0.8] shadow-sm hover:border-fuchsia-900 hover:opacity-100 hover:transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-6 text-white">
                  Signup
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <button
                  data-variant="slim"
                  className="Button_root__G_l9X Button_slim__WmpZF mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-black bg-zinc-900 opacity-[0.8] shadow-sm transition-all hover:border hover:border-fuchsia-900 hover:opacity-100">
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-6 text-white">
                  Connect{" "}
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <button
                  data-variant="slim"
                  className="Button_root__G_l9X Button_slim__WmpZF mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className=" rounded-lg border border-black bg-zinc-900 opacity-[0.8] shadow-sm transition-all hover:border hover:border-fuchsia-900 hover:opacity-100">
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-6 text-white">
                  Analyse
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <button
                  data-variant="slim"
                  className="Button_root__G_l9X Button_slim__WmpZF mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
