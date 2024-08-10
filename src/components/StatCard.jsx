import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const StatCard = ({ title, value, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-apple p-6"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-1">{title}</h3>
        <div className="text-3xl font-bold text-gray-900">
          <AnimatedCounter value={parseFloat(value)} />
          {isNaN(parseFloat(value)) && value}
        </div>
      </div>
      <div className="text-primary">{icon}</div>
    </div>
  </motion.div>
);

export default StatCard;