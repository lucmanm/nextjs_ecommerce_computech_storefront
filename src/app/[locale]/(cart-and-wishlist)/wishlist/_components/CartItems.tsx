"use client";
import { X } from "lucide-react";
import Image from "next/image";
import ProductQuantity from "../../_components/product-quantity";
import { CustomButton } from "@/components/CustomButton";
import { useWishlist } from "@/hook/createPersistedHook";
import { Card } from "@/components/ui/card";

export const WishItems = () => {
  const { items, removeItem } = useWishlist();

  return (
    <>
      {items.length === 0 ? (
        <div className="w-full border bg-white p-4 text-center text-xl shadow-sm">
          No added item
        </div>
      ) : (
        <section className="flex gap-2 max-sm:flex-col md:flex-wrap md:gap-4">
          <div className="flex flex-1 flex-col gap-2 md:gap-y-4">
            {items.map((data, index) => (
              <Card
                key={index}
                className="relative flex flex-wrap gap-4 rounded-lg bg-white p-4"
              >
                <CustomButton
                  onClick={() => {
                    if (data.id) removeItem(data.id);
                  }}
                  icon={<X className="w-4" />}
                  className="absolute right-4 top-4 h-8 w-8 hover:border hover:border-red-700 hover:text-red-700"
                />
                <Image
                  className="w-1/6"
                  src={
                    //   item.images?.[0]?.imageUrl === undefined
                    // ?
                    "https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1713902710/ehzqln79oix6uizx6tdw.png"
                    // : item.images?.[0]?.imageUrl
                  }
                  width={100}
                  height={100}
                  alt="Image"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1700898661/mrozyfwhlkeipqxwdrbl.webp"
                />
                <div className="flex flex-1 flex-col text-sm  md:text-lg">
                  <div className="flex flex-col justify-between pr-8">
                    <h3 className="line-clamp-2 font-semibold text-slate-950">
                      {data.shortDescriptionEn}
                    </h3>
                    <p className="font-medium uppercase text-slate-700">
                      SKU: {data.model}
                    </p>
                  </div>
                  {/* <Currency value={data.price} className="text-lg md:text-2xl" /> */}
                  <span className="absolute  bottom-4 text-sm font-bold md:text-xl">
                    SAR {data.price}
                  </span>
                </div>
                <ProductQuantity className="absolute bottom-4 right-4" />
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
