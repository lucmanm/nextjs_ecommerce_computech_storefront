import { CustomButton } from "@/components/CustomButton";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

type TProductQuantity = {
  className?: string;
};
const ProductQuantity: React.FC<TProductQuantity> = ({ className }) => {
  return (
    <div className={cn("flex gap-x-2", className)}>
      <CustomButton
        icon={<Trash2 className="w-4" />}
        className="h-8 w-8 border hover:border hover:border-red-500 hover:text-red-500"
      />
      <CustomButton
        icon={<Minus className="w-4" />}
        className="h-8 w-8 border hover:border hover:border-blue-950 hover:text-blue-950"
      />
      <Input
        type="text"
        placeholder="0"
        className="w-10 text-center text-xs lg:w-16 lg:text-lg"
      />
      <CustomButton
        icon={<Plus className="w-4" />}
        className="h-8 w-8 border hover:border hover:border-blue-950 hover:text-blue-950"
      />
    </div>
  );
};

export default ProductQuantity;
