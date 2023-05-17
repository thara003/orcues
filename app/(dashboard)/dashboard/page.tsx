"use client";

import { Title, Text, Grid } from "@tremor/react";
import Search from "@/components/app/search";
import Link from "next/link";
import { useSupabase } from "@/app/supabase-provider";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const { supabase } = useSupabase();
  const getWorkspaces = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let { data: workspace, error } = await supabase
      .from("workspaces")
      .select("*")
      .eq("owner_id", user?.id);
    if (error) console.log("error", error);
    console.log("workspace", workspace);
  };

  useEffect(() => {
    getWorkspaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cards = [
    { id: 1, title: "Campaign 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { id: 2, title: "Campaign 2", content: "Consectetur adipiscing elit enim ad minim veniam, quis nostrud exercitation ullamco laboris" },
    { id: 3, title: "Campaign 3", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    // Add more card objects as needed
  ];

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>My Campaigns</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Search />

      <Grid numColsMd={2} className="mt-6 gap-6">
        {cards.map((card) => (
          <Link key={card.id} href={`/campaign/${card.id}`}>
            <div className="rounded-lg border border-zinc-300  bg-white p-6 shadow-sm hover:border-zinc-500">
              <h2 className="text-lg font-medium">{card.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">{card.content}</p>
            </div>
          </Link>
        ))}
      </Grid>
    </main>
  );
}
