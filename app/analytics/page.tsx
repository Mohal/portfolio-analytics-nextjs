"use client";

import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function Analytics() {
	const [clicks] = useState<{ [key: string]: number }>(() => {
    if (typeof(window) !== "undefined") {
      const stored = localStorage.getItem("project_clicks");
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  const projectTitles: {[key: string]: string} = {
    "portfolio-analytics": "Portfolio Analytics",
    "saas-cms": "SaaS CMS Platform",
    "ai-ml-demo": "AI/ML Integration Demo"
  };

  const labels = Object.keys(clicks).map((id) => projectTitles[id] || id);
  const values = Object.keys(clicks).map((id) => clicks[id]);

  // Distinct colors per project
  const colours = [
    "rgba(37, 99, 235, 0.7)", // blue
    "rgba(16, 185, 129, 0.7)", // green
    "rgba(245, 158, 11, 0.7)", // amber
  ];

  const barData = {
    labels,
    datasets: [{
      label: "Project Clicks",
      data: values,
      backgroundColor: colours
    }]
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Click Distribution",
        data: values,
        backgroundColor: colours,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Project Click Analytics" },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Analytics</h1>
      {labels.length > 0 ? (
        <div className="w-full max-w-4xl space-y-12">
          {/* Bar Chart */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Bar Chart</h2>
            <Bar data={barData} options={options} />
          </div>

          {/* Pie Chart */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Pie Chart</h2>
            <Pie data={pieData} options={options} />
          </div>
        </div>
      ) : (
        <p className="text-gray-700">No click data yet. Visit the Projects page and click a project!</p>
      )}
    </main>
  );
}