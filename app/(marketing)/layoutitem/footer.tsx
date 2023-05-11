import React from "react";
// import Facebook from "../../public/assets/Icon/facebook.svg";
// import Twitter from "../../public/assets/Icon/twitter.svg";
// import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className=" bg-gray-500  pb-24 pt-44">
      <div className="mx-auto grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 sm:px-8 lg:px-16">
        <div className="col-start-1 col-end-4 row-span-2 flex flex-col items-start sm:col-span-4 sm:col-end-5 ">
          {/* <LogoVPN className="mb-6 h-8 w-auto" /> */}
          <img
            src="./logo-wordmark--light.png"
            alt="logo"
            className=" h-12 w-auto"
          />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="-mx-2 mb-8 mt-2 flex w-full">
            <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
              {/* <Facebook className="h-6 w-6" /> */}
            </div>
            <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
              {/* <Twitter className="h-6 w-6" /> */}
            </div>
            <div className="bg-white-500 mx-2 flex items-center justify-center rounded-full p-2 shadow-md">
              {/* <Instagram className="h-6 w-6" /> */}
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - LaslesVPN
          </p>
        </div>
        <div className=" row-span-2 flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9">
          <p className="text-black-600 mb-4 text-lg font-medium">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Download{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Pricing{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Locations{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Server{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Countries{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11">
          <p className="text-black-600 mb-4 text-lg font-medium">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              FAQ{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Tutorials{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              About Us{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Privacy Policy{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13">
          <p className="text-black-600 mb-4 text-lg font-medium">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Affiliate{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all hover:text-orange-500">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
