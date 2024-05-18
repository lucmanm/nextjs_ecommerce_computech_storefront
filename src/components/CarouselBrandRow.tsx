import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useTextDirection from "@/hook/useTextDirection";
import { getBrands } from "@/actions/getBrand";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// TypeProps
type TBrand = {
  name: string;
  imageUrl: string;
};
export async function CarouselBrandRow() {
  const dir = useTextDirection();
  const locale = useLocale();
  const brandData: TBrand[] = await getBrands(locale);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: dir,
      }}
      className="w-full "
    >
      <CarouselContent>
        {brandData.map((data, index) => (
          
          <CarouselItem
            key={index}
            className="basis-1/4  md:basis-1/6 lg:basis-1/12"
          >
            <div className="p-1 text-center text-xs lg:text-base">
              <Card>
                <Link href={`/${locale}/product/${data.name}`}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image alt={data.name} src={data.imageUrl} width={400} height={400}/>
                </CardContent>
                </Link>
              </Card>
              {/* <span className="font-semibold capitalize">{data.name}</span> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
