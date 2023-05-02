import React from "react";
import { BsGithub } from "react-icons/Bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function FooterL() {
  return (
    <>
      <div className="mx-auto mb-20 w-[100%]  bg-white px-2.5 py-20 md:px-20">
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="font-display bg-gradient-to-r from-gray-800 via-slate-700 to-gray-800 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
            Proudly open-source
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Our source code is available on GitHub - feel free to read, review,
            or contribute to it however you want!
          </p>
        </div>
        <div className="flex items-center justify-center py-10">
          <a
            href="https://github.com/steven-tey/dub"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center"></div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center border-t border-gray-200 bg-white">
        <FaTwitter className="m-4 text-[30px]" />
        <FaGithub className="m-4 text-[30px]" />
        <FaInstagram className="m-4 text-[30px]" />
      </div>
    </>
  );
}
