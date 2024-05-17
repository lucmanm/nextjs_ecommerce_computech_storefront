"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { z } from "zod";
import useTextDirection from "@/hook/useTextDirection";
import { sliderCarouselWideSchema } from "@/lib/zod.type";

type TItemProps = {
  item: z.infer<typeof sliderCarouselWideSchema>[];
};

export const CarouselWide: React.FC<TItemProps> = ({ item }) => {
  const dir = useTextDirection();

  return (
    <Splide
      hasTrack={false}
      options={{
        type: "loop",
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 5000,
        gap: "2rem",
        direction: dir,
      }}
      aria-label="slider"
      className="z-0 shadow bg-white"
    >
      <SplideTrack className="gap-x-2">
        {item.map(({ label, imageUrl }) => (
          <SplideSlide key={imageUrl}>
            <Image
              src={imageUrl}
              width={1280}
              height={100}
              alt={label}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="rounded-md"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

