import React, { useState, useEffect } from 'react';
import { BarChart3, Users, Cpu, AlertCircle } from 'lucide-react';
import LLMUsageChart from '../components/LLMUsageChart';
import PerformanceMetrics from '../components/PerformanceMetrics';
import RecentRequests from '../components/RecentRequests';
import StatCard from '../components/StatCard';

const Index = () => {
  const [stats, setStats] = useState({
    totalRequests: 15234,
    activeUsers: 1423,
    avgResponseTime: 120,
    errorRate: 0.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(currentStats => ({
        totalRequests: currentStats.totalRequests + Math.floor(Math.random() * 10),
        activeUsers: Math.max(0, currentStats.activeUsers + Math.floor(Math.random() * 21) - 10),
        avgResponseTime: Math.max(50, Math.min(500, currentStats.avgResponseTime + Math.floor(Math.random() * 11) - 5)),
        errorRate: Math.max(0, Math.min(5, currentStats.errorRate + (Math.random() - 0.5) * 0.1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-8 text-gray-900">AI Application Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Requests" value={stats.totalRequests.toString()} icon={<BarChart3 className="h-6 w-6" />} />
        <StatCard title="Active Users" value={stats.activeUsers.toString()} icon={<Users className="h-6 w-6" />} />
        <StatCard title="Avg. Response Time" value={`${stats.avgResponseTime}ms`} icon={<Cpu className="h-6 w-6" />} />
        <StatCard title="Error Rate" value={`${stats.errorRate.toFixed(2)}%`} icon={<AlertCircle className="h-6 w-6" />} />
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