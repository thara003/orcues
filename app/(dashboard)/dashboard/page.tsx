"use client";

import { Title, Text, Grid, Button, Card, Subtitle } from "@tremor/react";
import Search from "@/components/app/search";
import Link from "next/link";
import { useSupabase } from "@/app/supabase-provider";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CampaignForm from "@/components/app/new-campaign-form";
import Image from "next/image";
import { toast } from "sonner";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const { supabase } = useSupabase();
  const [visible, setVisible] = useState(false);
  const [workspace, setWorkspace] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const getWorkspaces = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let { data: workspace, error } = await supabase
      .from("workspaces")
      .select("*")
      .eq("owner_id", user?.id);

    if (error) console.log("error", error);
    console.log("workspace", workspace);
    setWorkspace(workspace);

    getCampaigns(workspace);
    setLoading(false);
  };

  const getCampaigns = async (workspace) => {
    let { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("workspace_id", workspace[0]?.id);
    if (error) console.log("error", error);
    console.log("campaign", campaigns);
    setCampaigns(campaigns);
  };

  useEffect(() => {
    getWorkspaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = (visible) => {
    setVisible(visible);
    getCampaigns(workspace);
  };

  const cards = [
    {
      id: 1,
      title: "Project Waitlist",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      title: "Marketing Blog",
      content:
        "Consectetur adipiscing elit enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    // Add more card objects as needed
  ];
      

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <Title>My Campaigns</Title>
          <Text>View your integrated campaigns here</Text>
        </div>
        <button
          className="mt-4 w-fit rounded-md bg-black px-4 py-2 text-center text-white hover:bg-transparent hover:border-black hover:text-black border border-black"
          onClick={() => setVisible(true)}
        >
          Add campaign
        </button>
      </div>
      <Search />

      {!loading && campaigns.length === 0 ? (
        <Card className="flex flex-col items-center justify-center mt-8 py-16">
          <Title className="mb-8 text-2xl font-semibold">
            You don&apos;t have any campaigns yet!
          </Title>
          <Image
            src="/images/freelancer.svg"
            alt="dashboard"
            className="rounded-2xl"
            loading="lazy"
            height={380}
            width={380}
          />
          <button
            className="mt-4 w-fit rounded-md bg-black px-4 py-2 font-semibold text-center text-white hover:bg-transparent hover:border-black hover:text-black border border-black"
            onClick={() => setVisible(true)}
          >
            Add a campaign
          </button>
          <Subtitle className="mt-6">
            Let&apos;s make some magic happen
          </Subtitle>
        </Card>
      ) : 
      <Grid numColsMd={2} className="mt-6 gap-6">
      {campaigns.map((campaign) => (
        <Link key={campaign.id} href={`/campaign/${campaign.id}`}>
          <div className="rounded-lg border border-zinc-300  bg-white p-6 shadow-sm hover:border-zinc-500">
            <h2 className="text-lg font-normal">{campaign.name}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {campaign.description}
            </p>
          </div>
        </Link>
      ))}
    </Grid>
    }

      <Transition appear show={visible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setVisible(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-black"
                  >
                    Add new campaign
                  </Dialog.Title>
                  <CampaignForm workspace={workspace} onClose={handleClose} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
