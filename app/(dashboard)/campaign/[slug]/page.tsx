"use client";

import { Title, Text } from "@tremor/react";
import Search from "@/components/app/search";
import UsersTable from "@/components/app/table";
import { Radio, PauseCircle } from "lucide-react";
import { useSupabase } from "@/app/supabase-provider";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";


export default function PostPage() {
  const params = useParams();
  const { supabase } = useSupabase();
  const [campaign_name, setCampaignName] = useState("");

  const getCampaigns = async () => {
    let { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("id", params.slug);
    if (error) console.log("error", error);
    setCampaignName(campaigns[0].name);
  };

  useEffect(() => {
    getCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
      <Title>{campaign_name}</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      </div>
      <div className="rounded-3xl bg-green-100 p-2 px-4 h-fit flex flex-row items-center gap-1">
      <Radio className="h-4 w-4 text-green-500" />
        <Text className="text-green-500">Live</Text>
      </div>
      {/* <div className="rounded-3xl bg-red-100 p-2 px-4 h-fit flex flex-row items-center gap-1">
      <PauseCircle className="h-4 w-4 text-red-500" />
        <Text className="text-red-500">Paused</Text>
      </div> */}
      </div>
      <UsersTable />
    </main>
  );
}
