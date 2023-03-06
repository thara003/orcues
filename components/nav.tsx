"use client";

import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";

const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const Nav = () => {
  return (
    <header className="ease sticky top-0 z-30 backdrop-blur transition-all duration-[0.4s]">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <nav
          id="main-nav"
          className="flex h-20 justify-between py-6 lg:items-center lg:justify-start"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NextLink href="/">
              <Image
                src="/logo-wordmark--light.png"
                alt="Orcues Logo"
                width={180}
                height={180}
              />
            </NextLink>
          </div>
          <AnimatePresence>
            <motion.a
              {...FADE_IN_ANIMATION_SETTINGS}
              href="#"
              className="hover:bg-brand-600 rounded-[12px] bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition"
            >
              Get Started
            </motion.a>
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
