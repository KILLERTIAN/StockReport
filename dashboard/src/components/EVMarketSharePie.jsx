// src/components/EVMarketSharePie.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Passenger Vehicles', value: 0.35 },
  { name: 'Commercial Vehicles', value: 1.14 },
  { name: 'Two-Wheelers', value: 5.17 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const EVMarketSharePie = () => {
  return (
    <div>
      <h2>EV Market Share in India (2022)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVMarketSharePie;
