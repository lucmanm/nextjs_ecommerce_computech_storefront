import { ImagesPreview } from "@/app/[locale]/[product]/components/ImagesPreview";
import { getProduct } from "@/lib/actions/getProducts";
import { productsSchema } from "@/zod.type";
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
    <section>
      <Card className="my-2 flex flex-col space-x-4 md:container md:my-4 md:flex-row max-sm:rounded-none md:py-4">
        <ImagesPreview />
        <ProductDetails item={productData} />
      </Card>
    </section>
  );
};

export default Product;
