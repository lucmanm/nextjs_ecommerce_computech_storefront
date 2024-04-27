import * as React from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProducts } from "@/lib/actions/getProducts";
import useTextDirection from "@/hook/useTextDirection";
import { useLocale } from "next-intl";
import { string, z } from "zod";
import { productsSchema } from "@/zod.type";
import { ProductCard } from "./ProductCard";

export async function CarouselProductRow({ titleLeft }: { titleLeft: string }) {
  const locale = useLocale();
  const dir = useTextDirection();
  const products: z.infer<typeof productsSchema>[] = await getProducts(locale);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: dir,
      }}
      className="w-full"
    >
      <span className="relative max-w-fit rounded-full bg-white px-4  font-bold text-blue-950 shadow-md">
        {titleLeft}
      </span>
      <CarouselContent className="py-6">
        {products.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/5 ">
            <ProductCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
