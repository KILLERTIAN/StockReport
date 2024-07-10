// src/components/ProjectedEVGrowthBar.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2022', Sold: 40000 },
  { year: '2025', Sold: 150000 },
  { year: '2030', Sold: 500000 },
];

const ProjectedEVGrowthBar = () => {
  return (
    <div>
      <h2>Projected EV Growth in India</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sold" fill="#8584d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectedEVGrowthBar;
