"use client";

import { Title, Text, Card, Grid } from "@tremor/react";
import Search from "@/components/app/search";
import UsersTable from "@/components/app/table";
import { Button } from "@/components/ui/button";
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
      .eq("owner_id", user.id);
    if (error) console.log("error", error);
    console.log("workspace", workspace);
  };

  useEffect(() => {
    getWorkspaces();
  }, []);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>My Projects</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Search />

      <Grid numColsMd={2} className="mt-6 gap-6">
        <Card className="hover:border hover:border-gray-800">
          <Link href="/campaign/1">
            <div className="h-36">Campaign 1</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/campaign/1">
            <div className="h-36">Campaign 2</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/campaign/1">
            <div className="h-36">Campaign 3</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/campaign/1">
            <div className="h-36">Campaign 4</div>
          </Link>
        </Card>
      </Grid>
    </main>
  );
}
