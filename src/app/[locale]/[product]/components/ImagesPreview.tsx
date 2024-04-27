"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { CustomButton } from "../../../../components/CustomButton";
import { cn } from "@/lib/utils";
const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1700898126/mpwwnnnoqpirszqunvsw.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1700898126/ajhyvfh8ee7rur5butnp.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1700898126/qf00nidwrn9pn9xjerqr.webp",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dzdcszrob/image/upload/v1700898126/ad5klzi8le2bo2pju3ch.webp",
  },
];

export const ImagesPreview = () => {
  return (
    <Tab.Group>
      <div className="flex w-full flex-col md:w-fit">
        <Tab.List>
          <Tab.Panels>
            {images.map((data, index) => (
              <Tab.Panel key={index}>
                <Image
                  width={400}
                  height={400}
                  src={data.imageUrl}
                  alt={data.imageUrl}
                  className="w-full rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
          <div className="flex min-w-fit items-center justify-center space-x-2 p-2">
            {images.map((_, index) => (
              <Tab as={Fragment} key={index}>
                {({ selected }) => (
                  <div className="flex flex-wrap">
                    <CustomButton
                      className={cn(
                        "h-14 w-14 rounded-sm bg-slate-600",
                        selected ? "bg-white ring-2 ring-blue-600" : "bg-white",
                      )}
                    >
                      Image
                    </CustomButton>
                  </div>
                )}
              </Tab>
            ))}
          </div>
        </Tab.List>
      </div>
    </Tab.Group>
  );
};
