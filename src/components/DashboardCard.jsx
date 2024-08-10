import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardCard = ({ title, children }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DashboardCard;