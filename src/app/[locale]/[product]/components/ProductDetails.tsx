import { CustomButton } from "@/components/CustomButton";
import { productsSchema } from "@/lib/zodDataType";
import { ShoppingCart } from "lucide-react";
import { useLocale } from "next-intl";
import { z } from "zod";

export const ProductDetails: React.FC<{
  item: z.infer<typeof productsSchema>;
}> = ({ item }) => {
  const locale = useLocale();
  return (
    <div className="flex flex-col justify-between space-y-1 py-2">
      <div className="flex flex-col">
        <h1 className="h1">
          {locale === "en" ? item.shortDescriptionEn : item.shortDescriptionAr}
        </h1>
        <span className="subtitle">Model: {item.model}</span>
        <span className="subtitle">Brand: {item.brand?.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">SAR {item.price}</span>
        <CustomButton
          isDisabled={Number(item.stock) === 0 ? true : false}
          icon={<ShoppingCart />}
          className="gap-x-2 bg-blue-950 px-4 text-white hover:bg-blue-600 hover:font-semibold hover:text-white"
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};
