import React from 'react';
import { AlertCircle, BarChart3, Cpu, Users } from 'lucide-react';
import LLMUsageChart from '../components/LLMUsageChart';
import PerformanceMetrics from '../components/PerformanceMetrics';
import RecentRequests from '../components/RecentRequests';
import DashboardCard from '../components/DashboardCard';

const StatCard = ({ title, value, icon }) => (
  <DashboardCard title={title}>
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold">{value}</div>
      {icon}
    </div>
  </DashboardCard>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">AI Application Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Requests" value="15,234" icon={<BarChart3 className="h-8 w-8 text-blue-500" />} />
        <StatCard title="Active Users" value="1,423" icon={<Users className="h-8 w-8 text-green-500" />} />
        <StatCard title="Avg. Response Time" value="120ms" icon={<Cpu className="h-8 w-8 text-yellow-500" />} />
        <StatCard title="Error Rate" value="0.5%" icon={<AlertCircle className="h-8 w-8 text-red-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <LLMUsageChart />
        <PerformanceMetrics />
      </div>

      <div className="mb-8">
        <RecentRequests />
      </div>
    </div>
  );
};

export default Index;