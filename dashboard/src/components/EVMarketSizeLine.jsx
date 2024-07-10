// // src/components/EVMarketSizeLine.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { segment: 'Passenger Vehicles', marketSize: 1500, growthRate: 20 },
  { segment: 'Commercial Vehicles', marketSize: 800, growthRate: 15 },
  { segment: 'Two-Wheelers', marketSize: 5000, growthRate: 30 },
];

const EVMarketSizeLine = () => {
  return (
    <div>
      <h2>EV Market Size in India (2022)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="segment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marketSize" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="growthRate" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVMarketSizeLine;
