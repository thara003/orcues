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

const ProjectAnalytics = () => {
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
    const group = Math.floor(number / 100) * 100;
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
            data={chartdata}
            index="month"
            categories={["Campaign 1", "Campaign 2"]}
            colors={["blue", "teal"]}
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
              ]}
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
              data={chartdata}
              index="month"
              categories={[
                "Campaign 1",
                "Campaign 2",
              ]}
              colors={["blue", "teal"]}
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
