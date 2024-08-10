import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardCard from './DashboardCard';

const recentRequests = [
  { id: 1, model: 'GPT-4', type: 'Text Generation', status: 'Completed', time: '2 min ago' },
  { id: 2, model: 'DALL-E', type: 'Image Generation', status: 'Processing', time: '5 min ago' },
  { id: 3, model: 'GPT-3.5', type: 'Translation', status: 'Completed', time: '10 min ago' },
  { id: 4, model: 'BERT', type: 'Sentiment Analysis', status: 'Failed', time: '15 min ago' },
  { id: 5, model: 'T5', type: 'Summarization', status: 'Completed', time: '20 min ago' },
];

const RecentRequests = () => {
  return (
    <DashboardCard title="Recent Requests">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.model}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.status}</TableCell>
              <TableCell>{request.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardCard>
  );
};

export default RecentRequests;