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
import { useParams } from "next/navigation";


const ProjectAnalytics = () => {
  const [users, setUsers] = useState<any[]>([]);
  const { supabase } = useSupabase();
  const params = useParams();

  function countSubscribersByMonth(users) {
    const monthCounts = {};
  
    users.forEach(user => {
      const subscribedAt = new Date(user.subscribed_at);
      const month = subscribedAt.toLocaleString('default', { month: 'short' });
  
      if (monthCounts[month]) {
        monthCounts[month]++;
      } else {
        monthCounts[month] = 1;
      }
    });
  
    const result = Object.entries(monthCounts).map(([month, count]) => ({
      month,
      "No of subscribers": count
    }));
  
    return result;
  }

  const getCampaigns = async () => {
    let { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("id", params.slug);
    setUsers(countSubscribersByMonth(campaigns[0]?.users));
  };

  useEffect(() => {
    getCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataFormatter = (number) => {
    const group = Math.floor(number / 1) * 1;
    return `${group}`;
  };
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Campaign Analytics</Title>
      <Text>View your overall analytics</Text>
      <Grid numCols={1} numColsMd={2} className="mt-6 gap-6">
        <Card>
          <AreaChart
            className="mt-4 h-72"
            data={users}
            index="month"
            categories={[  "No of subscribers",]}
            colors={["rose"]}
            valueFormatter={dataFormatter}
          />
        </Card>
        <Col>
          <Card>
            <LineChart
              className="mt-6"
              data={users}
              index="year"
              categories={[
                "No of subscribers",
              ]}
              colors={["teal"]}
              valueFormatter={dataFormatter}
              yAxisWidth={40}
            />
          </Card>
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <BarChart
              className="mt-6"
              data={users}
              index="month"
              categories={[
                "No of subscribers",
              ]}
              colors={["cyan"]}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
              showXAxis={true}
            />
          </Card>
        </Col>
      </Grid>
    </main>
  );
};

export default ProjectAnalytics;
