import React from "react";

export default function Howitworks() {
  return (
    <div className=" mt-10 grid grid-cols-1 place-content-center gap-6 md:grid-cols-2 lg:grid-cols-3 ">
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
  );
}
