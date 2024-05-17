"use client";
import { CustomButton } from "../CustomButton";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart, useWishlist } from "@/hook/createPersistedHook";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Cart() {
  const cart = useCart();
  const wishlist = useWishlist();
  const router = useRouter();
  const locale = useLocale();

  const goToCart = () => router.push(`/${locale}/cart`);
  const goToWishlist = () => router.push(`/${locale}/wishlist`);

  return (
    <div className="flex gap-4">
      <CustomButton
        onClick={goToWishlist}
        className={`relative border shadow-sm drop-shadow-sm hover:bg-blue-500 hover:text-white`}
      >
        <span className=" absolute right-0 top-0 flex items-center justify-center rounded-full bg-blue-950 px-1 text-base font-bold text-white backdrop-blur-sm">
          {wishlist.items.length === 0 ? "" : wishlist.items.length}
        </span>
        <Heart />
      </CustomButton>
      <CustomButton
        onClick={goToCart}
        className={`relative ${cart.items.length > 0 ? "border bg-blue-950 text-white shadow-sm drop-shadow-sm hover:bg-blue-600 hover:text-white" : "bg-gray-200"} `}
      >
        <span className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-blue-950 px-1 text-base font-bold text-white backdrop-blur-sm">
          {cart.items.length > 0 ? cart.items.length : ""}
        </span>
        <ShoppingCart />
      </CustomButton>
    </div>
  );
}
