import React from 'react';
import { Progress } from "@/components/ui/progress";
import DashboardCard from './DashboardCard';

const PerformanceMetrics = () => {
  return (
    <DashboardCard title="Performance Metrics">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Accuracy</span>
            <span className="text-sm font-medium">92%</span>
          </div>
          <Progress value={92} className="w-full" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Response Time</span>
            <span className="text-sm font-medium">150ms</span>
          </div>
          <Progress value={75} className="w-full" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">User Satisfaction</span>
            <span className="text-sm font-medium">88%</span>
          </div>
          <Progress value={88} className="w-full" />
        </div>
      </div>
    </DashboardCard>
  );
};

export default PerformanceMetrics;