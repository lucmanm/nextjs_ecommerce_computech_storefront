"use client";
import Image from "next/image";
import { ExpandIcon, Heart, ShoppingCartIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { z } from "zod";
import { productsSchema } from "@/zod.type";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hook/usePreviewModal";
import { useRouter } from "next/navigation";
import { CustomButton } from "./CustomButton";
import { useCart, useWishlist } from "@/hook/createPersistedHook";

export const ProductCard = ({
  item,
}: {
  item: z.infer<typeof productsSchema>;
}) => {
  const router = useRouter();
  const locale = useLocale();
  const { onPreview } = usePreviewModal();
 const cart = useCart()
 const wishlist = useWishlist()

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    wishlist.addItem(item);
  };

  const Preview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onPreview(item);
  };

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(item);
  };

  const handleNavigation = () => {
    const productDescription = item.shortDescriptionEn;
    router.push(`/${locale}/${productDescription}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className="flex w-full flex-col justify-between gap-3 overflow-hidden rounded-lg border  border-gray-200 bg-white p-2 shadow-sm transition hover:z-auto hover:scale-105 hover:cursor-pointer hover:shadow-blue-600 lg:p-3"
    >
      {/* issue #1: Enable to find image */}
      <Image
        src={
          //   item.images?.[0]?.imageUrl === undefined
          // ?
          "https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1713902710/ehzqln79oix6uizx6tdw.png"
          // : item.images?.[0]?.imageUrl
        }
        width={500}
        height={500}
        alt="Image"
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dzdcszrob/image/upload/e_blur:1000/v1700898661/mrozyfwhlkeipqxwdrbl.webp"
        className="object-cover"
      />
      <div className="felx flex-col">
        <div>
          <span className="inline-block self-start pb-1 pr-1 text-sm font-bold">
            {item.model}
          </span>
          <h3 className="line-clamp-2 h-10 text-sm lg:h-12 lg:text-base">
            {locale === "en"
              ? item.shortDescriptionEn
              : item.shortDescriptionAr}
          </h3>
        </div>
        <div className="flex">
          <div className="flex">
            <span className="inline-block self-start pb-1 pr-1 text-sm font-medium lg:p-0.5 lg:text-sm">
              SR
            </span>
            <h2 className="leading-0 self-end  p-0 text-xl font-bold text-blue-950">
              {item.price}
            </h2>
          </div>

          <p className="inline-block self-end pb-1 pl-1 text-sm font-medium text-red-500 line-through lg:p-0.5 lg:text-lg">
            {/* {item.salePrice !== "" && ""} */}
          </p>
        </div>
        <div className="text-black">
          <div className="mx-auto flex justify-evenly">
            <CustomButton
              onClick={addToWishlist}
              icon={<Heart size={24} className="text-blue-950" />}
            />
            <CustomButton
              onClick={Preview}
              icon={<ExpandIcon size={24} className="text-blue-950" />}
            />
            <CustomButton
              isDisabled={Number(item.stock) === 0 ? true : false}
              onClick={onAddtoCart}
              icon={<ShoppingCartIcon size={24} className="text-blue-950" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
