import { getProductsByCategoryOrBrand } from "@/actions/getProducts";
import { productsSchema } from "@/lib/zod.type";
import { z } from "zod";
import NoResult from "./_components/NoResult";
import { ProductCard } from "@/components/ProductCard";

const ProductsByCategory = async ({
  params,
}: {
  params: { locale: string; products_by_category: string };
}) => {
  const { locale, products_by_category } = params;

  const productsByCategoryData: z.infer<typeof productsSchema>[] =
    await getProductsByCategoryOrBrand(locale, products_by_category);
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {productsByCategoryData.length === 0 ? (
        <NoResult />
      ) : (
        productsByCategoryData.map((data, index) => (
          <ProductCard key={index} item={data} />
        ))
      )}
    </div>
  );
};

export default ProductsByCategory;
