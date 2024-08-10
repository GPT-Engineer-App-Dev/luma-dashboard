import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import DashboardCard from './DashboardCard';

const initialData = [
  { name: 'GPT-4', usage: 1200 },
  { name: 'GPT-3.5', usage: 3000 },
  { name: 'BERT', usage: 2000 },
  { name: 'T5', usage: 1500 },
  { name: 'DALL-E', usage: 800 },
];

const LLMUsageChart = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData =>
        currentData.map(item => ({
          ...item,
          usage: item.usage + Math.floor(Math.random() * 100) - 50
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

export default LLMUsageChart;