import { Box, Group, Stack, Title } from "@mantine/core";
import React from "react";
import StatusCard from "../component/status-card";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

const data = {
  labels: ["Site A", "Site B"],
  datasets: [
    {
      label: "Number of Articles",
      backgroundColor: ["#FF6384", "#36A2EB"],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [150, 200],
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Number of Articles on Blogging Sites",
    fontSize: 20,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
Chart.register(CategoryScale);
const DashboardHome = () => {
  const chartData = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [20, 20, 60],
        backgroundColor: ["red", "orange", "blue"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Stack>
        <Box>
          <Title order={3}> Overview</Title>
          <Group>
            <StatusCard
              progressValue={55}
              title={"Monthly Goal"}
              value={"Rs. 5.41 / Rs. 10"}
            />
          </Group>
        </Box>
        <Box>
          <Group>
            <LineChartNoOfUserAddingBlog />
            <LineChartNoOfUserAddingBlog />
          </Group>
        </Box>
      </Stack>
    </div>
  );
};

const LineChartNoOfUserAddingBlog = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Number of Users Adding Blogs",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], // Example data for number of users adding blogs per month
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Make the chart responsive
    title: {
      display: true,
      text: "Number of Users Adding Blogs per Month",
      fontSize: 16,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <h1 style={{ textAlign: "center" }}>User Blogging Activity</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardHome;
