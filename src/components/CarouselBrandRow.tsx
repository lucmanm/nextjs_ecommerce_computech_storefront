import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useTextDirection from "@/hook/useTextDirection";

export function CarouselBrandRow() {
  const dir = useTextDirection()
  
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: dir
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/6 lg:basis-1/12 rounded">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
