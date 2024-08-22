import React from "react";
import { Bar } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Study",
        data: [35, 20, 60, 40, 10],
        backgroundColor: "#062982",
        borderRadius: 10,
      },
      {
        label: "Exams",
        data: [62, 40, 65, 45, 23],
        backgroundColor: "#E0E9FF",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: "start" as const,
        labels: {
          boxWidth: 16,
          boxHeight: 16,
          borderRadius: 4,
          useBorderRadius: true,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
        },
        border: {
          display: false,
          dash: [8, 4],
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value: string | number) {
            return value + "Hr";
          },
        },
      },
    },
  };

  return <Bar data={data} options={options}></Bar>;
};

export default StackedBarChart;
