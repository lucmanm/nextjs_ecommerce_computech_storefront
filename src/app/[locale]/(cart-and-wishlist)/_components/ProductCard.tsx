import { CustomButton } from "@/components/CustomButton";
import { Card } from "@/components/ui/card";
import { productsSchema } from "@/lib/zod.type";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import ProductQuantity from "./product-quantity";
import { X } from "lucide-react";
import { useCart, useWishlist } from "@/hook/createPersistedHook";
type TProductProps = {
  item: z.infer<typeof productsSchema>;
};
export const ProductCard: React.FC<TProductProps> = ({ item }) => {

  const { removeItem } = useCart();
  
  const onRemove = () => {
    if (item.id) {
      removeItem(item.id);
    }
  };


  return (
    <Card className="relative flex flex-wrap gap-4 rounded-lg bg-white p-4">
      <CustomButton
        onClick={onRemove}
        icon={<X className="w-4" />}
        className="absolute right-4 top-4 h-8 w-8 hover:border hover:border-red-700 hover:text-red-700"
      />
      <Image
        className="w-1/6"
        src={
          //   item.images?.[0]?.imageUrl === undefined
          // ?
          "https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1713902710/ehzqln79oix6uizx6tdw.png"
          // : item.images?.[0]?.imageUrl
        }
        width={100}
        height={100}
        alt="Image"
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1700898661/mrozyfwhlkeipqxwdrbl.webp"
      />
      <div className="flex flex-1 flex-col text-sm  md:text-lg">
        <div className="flex flex-col justify-between pr-8">
          <h3 className="line-clamp-2 font-semibold text-slate-950">
            {item.shortDescriptionEn}
          </h3>
          <p className="font-medium uppercase text-slate-700">
            SKU: {item.model}
          </p>
        </div>
        {/* <Currency value={item.price} className="text-lg md:text-2xl" /> */}
        <span className="absolute  bottom-4 text-sm font-bold md:text-xl">
          SAR {item.price}
        </span>
      </div>
      <ProductQuantity className="absolute bottom-4 right-4" />
    </Card>
  );
};
