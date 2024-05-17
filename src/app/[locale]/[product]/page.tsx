import { ImagesPreview } from "@/app/[locale]/[product]/components/ImagesPreview";
import { getProduct } from "@/actions/getProducts";
import { productsSchema } from "@/lib/zod.type";
import React from "react";
import { z } from "zod";
import { ProductDetails } from "./components/ProductDetails";
import { Card } from "@/components/ui/card";

export const revalidate = 0;

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
  // CONTINUE DATA HERE NOT PROVIDED
  return (
    <section>
      <Card className="my-2 flex flex-col space-x-4 md:container max-sm:rounded-none md:my-4 md:flex-row md:py-4">
        <ImagesPreview />
        <ProductDetails item={productData} />
      </Card>
    </section>
  );
};

export default Product;
