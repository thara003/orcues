"use client";
import React from "react";
import {
  Title,
  Text,
  BarChart,
  AreaChart,
  Card,
  Grid,
  LineChart,
  Col,
} from "@tremor/react";

import { useSupabase } from "@/app/supabase-provider";
import { useState, useEffect } from "react";

export default function AnalyticsPage() {
  const { supabase } = useSupabase();
  const [workspace, setWorkspace] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [campaign_list, setCampaignList] = useState([]);
  const [campaignnames, setCampaignNames] = useState([]);
  const [loading, setLoading] = useState(false);

  function getUserCountByMonth(campaigns) {
    const result = {};
  
    campaigns.forEach((campaign) => {
      const campaignName = campaign.name;
  
      campaign.users.forEach((user) => {
        if (user.subscribed) {
          const month = new Date(user.subscribed_at).toLocaleString('en-US', { month: 'short' });
          const key = `${month}_${campaignName}`;
  
          if (result.hasOwnProperty(key)) {
            result[key]++;
          } else {
            result[key] = 1;
          }
        }
      });
  
      // Check if the campaign has no subscribers and initialize its count to 0
      if (!result.hasOwnProperty(campaignName)) {
        result[campaignName] = 0;
      }
    });
  
    const formattedResult = [];
  
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
  
    months.forEach((month) => {
      const entry = {
        month: month,
      };
  
      campaigns.forEach((campaign) => {
        const campaignName = campaign.name;
        const key = `${month}_${campaignName}`;
        entry[campaignName] = result[key] || 0;
      });
  
      formattedResult.push(entry);
    });
  
    return formattedResult;
  }
  
  
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
    const result = getUserCountByMonth(campaigns)
    setCampaignList(result);

    // create a list of campaigns that means list of campaign names
    const campaignNames = campaigns.map((campaign) => campaign.name);
    setCampaignNames(campaignNames);
    console.log("campaignNames", campaignNames, result);
  };

  useEffect(() => {
    getWorkspaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chartdata = [
    {
      month: "Jan",
      "Campaign 1": 90,
      "Campaign 2": 338,
    },
    {
      month: "Feb",
      "Campaign 1": 289,
      "Campaign 2": 233,
    },
    {
      month: "Mar",
      "Campaign 1": 510,
      "Campaign 2": 856,
    },
    {
      month: "Apr",
      "Campaign 1": 242,
      "Campaign 2": 661,
    },
    {
      month: "May",
      "Campaign 1": 245,
      "Campaign 2": 124,
    },
  ];

  const dataFormatter = (number) => {
    const group = Math.floor(number / 1) * 1;
    return `${group}`;
  };
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Analytics</Title>
      <Text>View your overall analytics</Text>
      <Grid numCols={1} numColsMd={2} className="mt-6 gap-6">
        <Card>
          <AreaChart
            className="mt-4 h-72"
            data={campaign_list}
            index="month"
            categories={campaignnames}
            colors={["blue", "teal"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            showXAxis={true}
          />
        </Card>
        <Col>
          <Card>
            <LineChart
              className="mt-6"
              data={campaign_list}
              index="month"
              categories={campaignnames}
              colors={["blue", "teal"]}
              valueFormatter={dataFormatter}
              yAxisWidth={40}
            />
          </Card>
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <BarChart
              className="mt-6"
              data={campaign_list}
              index="month"
              categories={campaignnames}
              colors={["blue", "teal"]}
              valueFormatter={dataFormatter}
            />
          </Card>
        </Col>
      </Grid>
    </div>
  );
}
