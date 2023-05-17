import Link from "next/link";
import Image from "next/image";
import Howitworks from "./howitworks";
import { SiteFooter } from "@/components/app/site-footer";

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
          <p className="m-auto mt-8 max-w-2xl text-xl text-zinc-600 ">
            Open-source newsletter management for scalable, private, and
            cost-effective marketing solutions without compromising data privacy
            or transparency.
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <button className="md:text-md mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-5 py-3 text-base font-medium text-white transition-all hover:bg-zinc-700 md:py-2 md:px-4">
            Get started
          </button>
          <button className="md:text-md mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-50 px-5 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-100 md:py-2 md:px-4">
            Live demo
          </button>
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
        <div className="mt-28 flex flex-col gap-6">
          <h2 className="mx-auto font-display  text-5xl font-extrabold text-zinc-50">
            How it works
          </h2>
          <div className=" grid grid-cols-1 place-content-center gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            <div className=" divide-y divide-zinc-600 rounded-lg bg-zinc-900 opacity-[0.8] shadow-sm  hover:border hover:border-fuchsia-900 hover:opacity-100 hover:transition-all">
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
            <div className=" divide-y divide-zinc-600 rounded-lg bg-zinc-900 opacity-[0.8] shadow-sm transition-all hover:border hover:border-fuchsia-900 hover:opacity-100">
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
            <div className=" divide-y divide-zinc-600 rounded-lg bg-zinc-900 opacity-[0.8] shadow-sm transition-all hover:border hover:border-fuchsia-900 hover:opacity-100">
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
        </div>
      </div>
      <SiteFooter />
    </section>
  );
}
