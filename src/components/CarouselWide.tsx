"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { z } from "zod";
import useTextDirection from "@/hook/useTextDirection";

//ZodSchema
const carouselWideSchema = z.object({
  id: z.string(),
  label: z.string(),
  imageUrl: z.string().url(),
  languageId: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

//ZodInfered
type TCarouselCarouselWide = z.infer<typeof carouselWideSchema>;

type TCarouselCarouselWideProps = {
  item: TCarouselCarouselWide[];
};

const CarouselWide: React.FC<TCarouselCarouselWideProps> = ({ item }) => {
  const locale = useTextDirection()  
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
        direction: locale
      }}
      aria-label="slider"
      className="z-0 shadow"
      
    >
      <SplideTrack className="gap-x-2">
        {item.map(({ label, imageUrl }) => (
          <SplideSlide key={imageUrl} className="">
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

export default CarouselWide;
