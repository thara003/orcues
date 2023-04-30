import React from "react";
import UserForm from "@/components/app/user-form";
import { Title } from "@tremor/react";

const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Account Settings</Title>
      <UserForm />
    </div>
  );
};

export default SettingsPage;
