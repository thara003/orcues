import React from "react";
import UserInfo from "@/components/app/user-info";

const SettingsPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overscroll-none">
      {/* <h1 className="text-4xl font-bold text-black">
        Analytics is under construction.
      </h1> */}
      <UserInfo />
    </div>
  );
};

export default SettingsPage;
