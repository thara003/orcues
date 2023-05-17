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

import { useState } from "react";

export default function AnalyticsPage() {
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
      <Grid numCols={1} numColsMd={2} className="mt-6 gap-6">
        <Card>
          <AreaChart
            className="mt-4 h-72"
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
        </Card>
        <Col>
          <Card>
            <LineChart
              className="mt-6"
              data={chartdata}
              index="year"
              categories={[
                "Campaign 1",
                "Campaign 2",
                "Campaign 3",
                "Campaign 4",
              ]}
                            colors={["blue", "teal", "amber", "rose"]}
              valueFormatter={dataFormatter}
              yAxisWidth={40}
            />
          </Card>
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
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
          </Card>
        </Col>
      </Grid>
    </div>
  );
}
