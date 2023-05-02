import Image from "next/image";
import { BsTwitter, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" mt-14 flex h-[100vh] w-[100%] flex-col flex-wrap items-center ">
        <div className="mx-auto max-w-screen-xl px-5 md:px-20 "></div>
        <div className="mx-auto mt-20 mb-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
          <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200">
            <BsTwitter className=" text-cyan-400" />{" "}
            <p className="text-sm font-semibold text-[#1d9bf0]">
              Introducing Orcues
            </p>
          </div>
          <div className="flex-warp flex flex-col items-center justify-center ">
            <span className="pt-10  text-5xl">Redefined news letter</span>
            <span className=" text-5xl">subscription flow</span>
            <h2 className="mt-5 text-lg text-gray-600 sm:text-xl">
              Orcues is an open-source newsletter management solution for modern
              blogs with ease and transparency
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-fit space-x-4">
            <Link
              className="rounded-full border border-black bg-black py-2 px-5 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
              href="/register"
            >
              Start For Free
            </Link>
            <a className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800">
              <BsGithub /> <p className="text-sm">Star on GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
