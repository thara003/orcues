import React from "react";
import UserForm from "@/components/app/user-form";
import { Title, Text } from "@tremor/react";

const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Account Settings</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <UserForm />
    </div>
  );
};

export default SettingsPage;
