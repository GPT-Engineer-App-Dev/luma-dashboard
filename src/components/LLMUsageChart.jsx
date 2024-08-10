import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

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
      className="bg-white rounded-lg shadow-apple p-6"
    >
      <h3 className="text-lg font-semibold mb-4">LLM Usage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F2F2F7" />
          <XAxis dataKey="name" stroke="#8E8E93" />
          <YAxis stroke="#8E8E93" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#FFFFFF', 
              border: 'none', 
              borderRadius: '8px', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
            }} 
          />
          <Bar dataKey="usage" fill="#007AFF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LLMUsageChart;