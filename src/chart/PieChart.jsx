import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Employe salaries in %",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
