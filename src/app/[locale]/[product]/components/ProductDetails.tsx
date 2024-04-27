import { CustomButton } from "@/components/CustomButton";
import { productsSchema } from "@/zod.type";
import { ShoppingCart } from "lucide-react";
import { z } from "zod";

type TDetailsProps = {
  item: z.infer<typeof productsSchema>;
};

export const ProductDetails: React.FC<TDetailsProps> = ({ item }) => {
  return (
    <div className="flex flex-col space-y-1 py-2 justify-between">
      <div className="flex flex-col">
        <h1 className="h1">{item.shortDescriptionEn}</h1>
        <span className="subtitle">Model: {item.model}</span>
        <span className="subtitle">Brand: {item.brand?.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">SAR {item.price}</span>
        <CustomButton
          icon={<ShoppingCart />}
          className="gap-x-2 bg-blue-950 px-4 text-white hover:bg-blue-600 hover:font-semibold hover:text-white"
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};
