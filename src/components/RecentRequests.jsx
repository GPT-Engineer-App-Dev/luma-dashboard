import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardCard from './DashboardCard';

const initialRequests = [
  { id: 1, model: 'GPT-4', type: 'Text Generation', status: 'Completed', time: '2 min ago' },
  { id: 2, model: 'DALL-E', type: 'Image Generation', status: 'Processing', time: '5 min ago' },
  { id: 3, model: 'GPT-3.5', type: 'Translation', status: 'Completed', time: '10 min ago' },
  { id: 4, model: 'BERT', type: 'Sentiment Analysis', status: 'Failed', time: '15 min ago' },
  { id: 5, model: 'T5', type: 'Summarization', status: 'Completed', time: '20 min ago' },
];

const RecentRequests = () => {
  const [requests, setRequests] = useState(initialRequests);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRequest = {
        id: Date.now(),
        model: ['GPT-4', 'GPT-3.5', 'DALL-E', 'BERT', 'T5'][Math.floor(Math.random() * 5)],
        type: ['Text Generation', 'Image Generation', 'Translation', 'Sentiment Analysis', 'Summarization'][Math.floor(Math.random() * 5)],
        status: ['Completed', 'Processing', 'Failed'][Math.floor(Math.random() * 3)],
        time: 'Just now'
      };
      setRequests(currentRequests => [newRequest, ...currentRequests.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            <AnimatePresence>
              {requests.map((request) => (
                <motion.tr
                  key={request.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TableCell>{request.model}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell>{request.time}</TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </DashboardCard>
    </motion.div>
  );
};

export default RecentRequests;