"use client";

import React from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useState, useEffect } from "react";
import { Subtitle, TextInput, Button } from "@tremor/react";
import { Toaster, toast } from "sonner";

export default function CampaignForm({ workspace, onClose }) {
  const { supabase } = useSupabase();
  const [campaign_name, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const addCampaign = async () => {
    setLoading(true);
    const { data: campaign, error } = await supabase.from("campaigns").insert([
      {
        name: campaign_name,
        workspace_id: workspace[0].id,
        created_by: workspace[0].owner_id,
        description: description,
      },
    ]);
    setLoading(false);
    clearForm();

    if (error) {
      console.log("error", error);
      toast.error("Error creating campaign");
    }
    else{
      toast.success("Campaign created successfully");
    }

  };
    const clearForm = () => {
    setCampaignName("");
    setDescription("");
    const visible = false;
    onClose(visible);
    }

  return (
    <div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <Subtitle className="text-black">Name</Subtitle>
          <TextInput
            placeholder="Project waitlist"
            type="text"
            value={campaign_name}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Subtitle className=" text-black">Description</Subtitle>
          <TextInput
            placeholder="A campaign for the ages"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center mt-4 justify-end gap-2">
          <Button
            size="xs"
            variant="secondary"
            className="w-24 rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100 focus:outline-none"
            onClick={clearForm}
          >
            Cancel
          </Button>
          <Button
            size="xs"
            variant="secondary"
            loading={loading}
            className="w-24 rounded-md border-indigo-400 px-4 py-2 text-center text-indigo-400 hover:bg-indigo-100 focus:outline-none"
            onClick={addCampaign}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
