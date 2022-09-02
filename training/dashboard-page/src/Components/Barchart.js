// import react
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Data
import data from '../Data/data.json';

// Create functional component
const Barchart = () => {
  return (
    <div className="container">
      <div className="pt-5">
        <ResponsiveContainer width="100%" aspect="2">
          <BarChart
            width={400}
            height={400}
            data={data.pdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="customerGain" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Export Default Charts
export default Barchart;
