import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProducts } from "@/actions/getProducts";
import useTextDirection from "@/hook/useTextDirection";
import { useLocale } from "next-intl";
import { productsSchema } from "@/lib/zod.type";
import { ProductCard } from "./ProductCard";
import { z } from "zod";

export async function CarouselProductRow({ title }: { title: string }) {
  const locale = useLocale();
  const dir = useTextDirection();
  const products: z.infer<typeof productsSchema>[] = await getProducts(
    locale,
    title,
  );

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
        {title}
      </span>
      <CarouselContent className="py-6">
        {products.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/5 ">
            <ProductCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ) 
}
