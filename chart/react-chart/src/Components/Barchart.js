import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <div>
        <Bar
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          }}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default BarChart;
