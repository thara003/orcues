"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/app/supabase-provider";
import { Toaster, toast } from "sonner";
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
  Button,
  Callout
} from "@tremor/react";
import { useParams } from "next/navigation";

const SettingsPage = () => {
  const params = useParams();
  const { supabase } = useSupabase();
  const [campaign_name, setCampaignName] = useState("");
  const [new_campaign_name, setNewCampaignName] = useState("");
  const [campaign_description, setCampaignDescription] = useState("");
  const [new_campaign_description, setNewCampaignDescription] = useState("");
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const getCampaigns = async () => {
    let { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("id", params.slug);
    if (error){
      toast.error("Error fetching campaign")
    }
    console.log(campaigns);
    setCampaignName(campaigns[0].name);
    setNewCampaignName(campaigns[0].name);
    setCampaignDescription(campaigns[0].description);
    setNewCampaignDescription(campaigns[0].description);
    setActive(campaigns[0].is_active);
  };

  const updateCampaign = async () => {
    setLoading(true);
    const { data: campaign, error } = await supabase
      .from("campaigns")
      .update({
        name: new_campaign_name,
        description: new_campaign_description,
      })
      .eq("id", params.slug);
    if (error) console.log("error", error);
    setLoading(false);
    setIsEdit(false);
  };

  const clearForm = () => {
    setNewCampaignName(campaign_name)
    setNewCampaignDescription(campaign_description)
    setIsEdit(false);
  }
  const deleteCampaign = async () => {
    const { data, error } = await supabase
    .from('campaigns')
    .delete()
    .eq("id", params.slug);
    if (error) console.log("error", error);
    router.push("/dashboard");
  }

  useEffect(() => {
    getCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Campaign Settings</Title>
      <Text>Edit you campaign configurations</Text>
      <Card className="mt-4 w-3/4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <Subtitle className="w-1/3 text-black">Name</Subtitle>
            <TextInput
              placeholder="Campaign name"
              type="text"
              value={new_campaign_name}
              className="w-2/3"
              onChange={(e) => {
                setNewCampaignName(e.target.value)
                setIsEdit(true)
              }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <Subtitle className="w-1/3 text-black">Description</Subtitle>
            <TextInput
              placeholder="Campaign description"
              type="text"
              value={new_campaign_description}
              className="w-2/3"
              onChange={(e) => {
                setNewCampaignDescription(e.target.value)
                setIsEdit(true);
              }}
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
            <Subtitle className="w-1/3 text-black">Campaign status</Subtitle>
            <Toggle
              defaultValue="1"
              onValueChange={(value) => console.log(value)}
            >
              <ToggleItem
                className="text-green-400 hover:text-green-500"
                value="1"
                text="Active"
              />
              <ToggleItem
                className="text-red-500 hover:text-red-600"
                value="2"
                text="Inactive"
              />
            </Toggle>
          </div>
        <div className="flex flex-row items-center mt-4 justify-end gap-2">
          <Button
            size="xs"
            variant="secondary"
            disabled={!isEdit}
            className="w-24 rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100 focus:outline-none"
            onClick={clearForm}
          >
            Cancel
          </Button>
          <Button
            size="xs"
            variant="secondary"
            loading={loading}
            disabled={!isEdit}
            className="w-24 rounded-md border-indigo-400 px-4 py-2 text-center text-indigo-400 hover:bg-indigo-100 focus:outline-none"
            onClick={updateCampaign}
          >
            Save
          </Button>
        </div>
        </div>
      </Card>
      <Title className="mt-4">Delete Campaign</Title>
      <Card className="mt-4 w-3/4">
      <div className="flex flex-row">
        <Callout
        className="w-full"
        title="Delete this Campaign"
        color="rose"
      >
       <Text className="text-red-500 mb-3">Deleting this campaign will also remove all the subscribers data.</Text> 
       <Button
            size="xs"
            variant="secondary"
            className="w-fit rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100 focus:outline-none"
            onClick={deleteCampaign}
          >
            Delete Campaign
          </Button>
      </Callout>
          </div>
        </Card>
    </main>
  );
};

export default SettingsPage;
