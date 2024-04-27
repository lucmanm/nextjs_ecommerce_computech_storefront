"use client";
import { useCart } from "@/hook/useCart";
import { CustomButton } from "../CustomButton";
import { Heart, ShoppingCart } from "lucide-react";

export default function Cart() {
  const { items } = useCart();
  return (
    <div className="flex gap-4">
      <CustomButton
        className={`relative border bg-blue-950 text-white shadow-sm drop-shadow-sm hover:bg-blue-500 hover:text-white`}
      >
        <span className="shadow- absolute right-0 top-0 rounded-full bg-green-400/50 px-1 text-base font-bold text-white backdrop-blur-sm">
          {items.length === 0 ? "" : items.length}
        </span>
        <Heart />
      </CustomButton>
      <CustomButton
        className={`relative ${items.length > 0 ? "border bg-blue-950 text-white shadow-sm drop-shadow-sm hover:bg-blue-600 hover:text-white" : "bg-gray-200"} `}
      >
        <span className="shadow- absolute right-0 top-0 rounded-full bg-green-400/50 px-1
         text-base font-bold text-white backdrop-blur-sm">
          {items.length === 0 ? "" : items.length}
        </span>
        <ShoppingCart />
      </CustomButton>
    </div>
  );
}
