// src/components/TypesEVBarWithExamples.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const data = [
  { type: 'BEVs', Types: 2, details: 'Hyundai Kona Electric, Tata Nexon EV' },
  { type: 'PHEVs', Types: 2, details: 'Toyota Prius Prime, Honda Civic Hybrid' },
  { type: 'MHEVs', Types: 2, details: 'Maruti Suzuki Swift Hybrid, Hyundai Elite i20 Hybrid' },
  { type: 'Two-Wheelers', Types: 2, details: 'Ather 450X, Okinawa Praise' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{payload[0].payload.details}</p>
      </div>
    );
  }

  return null;
};

const TypesEVBar = () => {
  return (
    <div>
      <h2>Types of Electric Vehicles in India</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Types" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TypesEVBar;
