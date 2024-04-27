import { Card } from "@/components/ui/card";
import React from "react";

const NoResult = () => {
  return (
    <Card className="flex h-[550px] max-h-screen items-center justify-center py-4 text-2xl *:text-nowrap *:text-center lg:col-span-4">
      <p>No Available Products</p>
    </Card>
  );
};

export default NoResult;
