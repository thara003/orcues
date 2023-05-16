"use client";
import React from "react";
import { Title, Text, BarChart, Toggle, ToggleItem, AreaChart } from "@tremor/react";
import { useState } from "react";

export default function AnalyticsPage () {

  const [tab, setTab] = useState("1");
  const chartdata = [
    {
      month: "Jan",
      "Campaign 1": 90,
      "Campaign 2": 338,
      "Campaign 3": 538,
      "Campaign 4": 396,
    },
    {
      month: "Feb",
      "Campaign 1": 289,
      "Campaign 2": 233,
      "Campaign 3": 253,
      "Campaign 4": 333,
    },
    {
      month: "Mar",
      "Campaign 1": 510,
      "Campaign 2": 856,
      "Campaign 3": 423,
      "Campaign 4": 383,
    },
    {
      month: "Apr",
      "Campaign 1": 242,
      "Campaign 2": 661,
      "Campaign 3": 537,
      "Campaign 4": 382,
    },
    {
      month: "May",
      "Campaign 1": 245,
      "Campaign 2": 124,
      "Campaign 3": 23,
      "Campaign 4": 489,
    },
  ];

  const dataFormatter = (number) => {
    const group = Math.floor(number / 100) * 100;
    return `${group}`;
  };
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Analytics</Title>
      <Text>View your overall analytics</Text>
      <div className="flex flex-row justify-center my-1">
      <Toggle
      color="zinc"
      defaultValue="1"
      onValueChange={(value) => setTab(value)}
    >
      <ToggleItem value="1" text="Bar chart" />
      <ToggleItem value="2" text="Area chart" />
      <ToggleItem value="3" text="Pie chart" />
    </Toggle>
    </div>
    {tab === "1"  && (
      <BarChart
      className="mt-6"
      data={chartdata}
      index="month"
      categories={[
        "Campaign 1",
        "Campaign 2",
        "Campaign 3",
        "Campaign 4",
      ]}
      colors={["blue", "teal", "amber", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      showXAxis={true}
    />
    )}
    {tab === "2"  && (
      <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="month"
      categories={[
        "Campaign 1",
        "Campaign 2",
        "Campaign 3",
        "Campaign 4",
      ]}
      colors={["blue", "teal", "amber", "rose"]}
      valueFormatter={dataFormatter}
    />
    )}
     {tab === "3"  && (
      <Text className="text-center">Pie chart is under construction 🛠</Text>
    )}
    </div>
  );
};
