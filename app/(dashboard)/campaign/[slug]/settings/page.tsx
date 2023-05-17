"use client";

import React from "react";
import { Fragment, useState, useEffect } from "react";
import {
  Title,
  Text,
  Card,
  Subtitle,
  TextInput,
  SelectBox,
  SelectBoxItem,
  Toggle,
  ToggleItem,
} from "@tremor/react";

const SettingsPage = () => {
  const [campaign_name, setCampaignName] = useState("");
  const [campaign_description, setCampaignDescription] = useState("");
  const [active, setActive] = useState(false);
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Project Settings</Title>
      <Text>Edit you project configurations</Text>
      <Card className="mt-4 w-3/4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <Subtitle className="w-1/3 text-black">Title</Subtitle>
            <TextInput
              placeholder="Campaign name"
              type="text"
              value={campaign_name}
              className="w-2/3"
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between">
            <Subtitle className="w-1/3 text-black">Description</Subtitle>
            <TextInput
              placeholder="Campaign description"
              type="text"
              value={campaign_description}
              className="w-2/3"
              onChange={(e) => setCampaignDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between">
            <Subtitle className="w-1/3 text-black">
              Configure mail server
            </Subtitle>
            <SelectBox
              onValueChange={(value) => console.log("the new value is", value)}
              defaultValue="1"
              className="w-2/3"
            >
              <SelectBoxItem value="1" text="Kilometers" />
              <SelectBoxItem value="2" text="Meters" />
              <SelectBoxItem value="3" text="Miles" />
              <SelectBoxItem value="4" text="Nautical Miles" />
            </SelectBox>
          </div>
          <div className="flex flex-row">
            <Subtitle className="w-1/3 text-black">Is Campaign active</Subtitle>
            <Toggle
              defaultValue="1"
              onValueChange={(value) => console.log(value)}
            >
              <ToggleItem className="text-green-400 hover:text-green-500" value="1" text="Active" />
              <ToggleItem className="text-red-500 hover:text-red-600" value="2" text="Inactive" />
            </Toggle>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default SettingsPage;
