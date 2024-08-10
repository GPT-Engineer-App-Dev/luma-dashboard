import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from './DashboardCard';
import AnimatedCounter from './AnimatedCounter';

const StatCard = ({ title, value, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <DashboardCard title={title}>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <AnimatedCounter value={parseFloat(value)} />
          {isNaN(parseFloat(value)) && value}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {icon}
        </motion.div>
      </div>
    </DashboardCard>
  </motion.div>
);

export default StatCard;