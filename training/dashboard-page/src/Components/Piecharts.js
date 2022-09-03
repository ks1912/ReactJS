// Import React and Piechart
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// Import Data
import pieData from "../Data/data.json";

// Defining Colors
const COLORS = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#FF8042",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
];
const RADIAN = Math.PI / 180;

// Render Customized Lables
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Create Class Component
const Piecharts = () => {
  return (
    <div className="container p-0 m-0" width="100%" height="100%">
      <PieChart width={250} height={250} className="p-0">
        <Pie
          data={pieData.pdata}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="revenue"
        >
          {pieData.pdata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

// Export Default
export default Piecharts;
