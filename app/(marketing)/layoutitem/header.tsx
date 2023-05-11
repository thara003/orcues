"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "./button";
import Link from "next/link";
import Logo from "../../../public/images/logo-wordmark--light.png";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          " fixed top-0 z-30 w-full bg-white transition-all " +
          (scrollActive ? " pt-0 shadow-md" : " pt-4")
        }
      >
        <nav className=" mx-auto grid max-w-screen-xl grid-cols-2  px-6 py-3 sm:px-8 sm:py-4 lg:grid-cols-9 lg:px-10">
          <div className="  flex flex-wrap ">
            <img
              src="./logo-wordmark--light.png"
              alt="logo"
              className=" h-12 w-auto"
            />
          </div>
          <div className="col-span-8 flex flex-wrap items-center justify-center ">
            <ul className=" text-black-500 hidden  items-center  lg:flex">
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                  (activeLink === "about"
                    ? " animation-active text-orange-500 "
                    : " text-black-500 a hover:text-orange-500")
                }
              >
                About
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("feature");
                }}
                className={
                  "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                  (activeLink === "feature"
                    ? " animation-active text-orange-500 "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Feature
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("pricing");
                }}
                className={
                  "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                  (activeLink === "pricing"
                    ? " animation-active text-orange-500 "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Pricing
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                  (activeLink === "testimoni"
                    ? " animation-active text-orange-500 "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Testimonial
              </LinkScroll>
            </ul>
          </div>
          <div className="col-start-10 col-end-12 flex items-center justify-end font-medium">
            {/* <Link href="#">
            <a className="text-black-600 mx-2 capitalize tracking-wide transition-all hover:text-orange-500 sm:mx-4">
                Sign In
            </a>
          </Link> */}
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* mobil responsive  */}
      <nav className="shadow-t fixed bottom-0 left-0 right-0 z-20 bg-white px-4 sm:px-8 lg:hidden ">
        <div className="  sm:px-3">
          <ul className="text-black-500 flex w-full items-center justify-between">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("a    bout");
              }}
              className={
                "mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
    </>
  );
}
