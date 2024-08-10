import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import DashboardCard from './DashboardCard';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    accuracy: 92,
    responseTime: 75,
    userSatisfaction: 88
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(currentMetrics => ({
        accuracy: Math.min(100, Math.max(0, currentMetrics.accuracy + (Math.random() - 0.5) * 5)),
        responseTime: Math.min(100, Math.max(0, currentMetrics.responseTime + (Math.random() - 0.5) * 5)),
        userSatisfaction: Math.min(100, Math.max(0, currentMetrics.userSatisfaction + (Math.random() - 0.5) * 5))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardCard title="Performance Metrics">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Accuracy</span>
              <span className="text-sm font-medium">{metrics.accuracy.toFixed(1)}%</span>
            </div>
            <Progress value={metrics.accuracy} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Response Time</span>
              <span className="text-sm font-medium">{(metrics.responseTime * 2).toFixed(0)}ms</span>
            </div>
            <Progress value={metrics.responseTime} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">User Satisfaction</span>
              <span className="text-sm font-medium">{metrics.userSatisfaction.toFixed(1)}%</span>
            </div>
            <Progress value={metrics.userSatisfaction} className="w-full" />
          </div>
        </div>
      </DashboardCard>
    </motion.div>
  );
};

export default PerformanceMetrics;