import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
      className="bg-white rounded-lg shadow-apple p-6"
    >
      <h3 className="text-lg font-semibold mb-4">Recent Requests</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-500">Model</TableHead>
            <TableHead className="text-gray-500">Type</TableHead>
            <TableHead className="text-gray-500">Status</TableHead>
            <TableHead className="text-gray-500">Time</TableHead>
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
                <TableCell className="font-medium">{request.model}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${request.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      request.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {request.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-500">{request.time}</TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default RecentRequests;