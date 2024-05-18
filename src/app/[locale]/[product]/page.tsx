import { ImagesPreview } from "@/app/[locale]/[product]/components/ImagesPreview";
import { getProduct } from "@/actions/getProducts";
import { productsSchema } from "@/lib/zodDataType";
import React from "react";
import { z } from "zod";
import { ProductDetails } from "./components/ProductDetails";
import { Card } from "@/components/ui/card";


const Product = async ({
  params,
}: {
  params: { locale: string; product: string };
}) => {
  const { product, locale } = params;
  const decodedProduct = decodeURIComponent(product.replace(/\\s+/g, ""));

  const productData: z.infer<typeof productsSchema> = await getProduct(
    locale,
    decodedProduct,
  );
  
  return (
      <Card className="my-2 flex flex-col space-x-4 md:container max-sm:rounded-none md:my-4 md:flex-row md:py-4">
        <ImagesPreview />
        <ProductDetails item={productData} />
      </Card>
  );
};

export default Product;
