import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';

const data = [
  { name: 'GPT-4', usage: 1200 },
  { name: 'GPT-3.5', usage: 3000 },
  { name: 'BERT', usage: 2000 },
  { name: 'T5', usage: 1500 },
  { name: 'DALL-E', usage: 800 },
];

const LLMUsageChart = () => {
  return (
    <DashboardCard title="LLM Usage">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardCard>
  );
};

export default LLMUsageChart;