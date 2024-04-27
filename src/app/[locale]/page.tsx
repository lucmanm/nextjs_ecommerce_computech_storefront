import { CarouselProductRow } from "@/components/CarouselProductRow";
import CarouselWide from "@/components/CarouselWide";
import { getCarouselWide } from "@/lib/actions/getCarousels";
import { getProducts } from "@/lib/actions/getCategory";
import { useLocale, useTranslations } from "next-intl";

import { z } from "zod";

// Define schema for short description
const ShortDescriptionSchema = z.object({
  ar: z.string(),
  en: z.string()
});

// Define schema for OptiplexModel
const ProductScheSchema = z.object({
  id: z.string(),
  model: z.string(),
  shortDescription: ShortDescriptionSchema,
  stock: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isFeatured: z.boolean(),
  isLive: z.boolean(),
  price: z.string(),
  taxValue: z.string(),
  brandId: z.string(),
  categoryId: z.string()
});

type TProductScheSchema = z.infer<typeof ProductScheSchema>

export default async function Home() {
  const locale = useLocale()
  const carouselWide = await getCarouselWide(locale)
  const products: TProductScheSchema[] = await getProducts(locale)
  console.log(products);
  
  return (
    <main className="container py-4 space-y-4">
      <CarouselWide item={carouselWide}/>
      <CarouselProductRow/>
      {
        products.map((data, index) => (
          <div key={index}>{locale === "en" ? data.shortDescription.en : data.shortDescription.ar}</div>
        ))
      }
    </main>
  );
}
