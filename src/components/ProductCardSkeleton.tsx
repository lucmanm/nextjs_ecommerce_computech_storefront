import React from "react";
import { Skeleton } from "./ui/skeleton";

type TCardCountProps = {
  cardCount: number;
};
const ProductCardSkeleton = ({ cardCount }: TCardCountProps) => {
  return (
    <>
      {Array.from({ length: cardCount }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 bg-white rounded-lg p-2"
        >
          <Skeleton className="w-[200] h-[300px] rounded bg-blue-950" />
          <Skeleton className="w-1/4 h-5 bg-blue-950" />
          <Skeleton className="w-full h-5  bg-blue-950" />
          <Skeleton className="w-full h-5  bg-blue-950" />
          <Skeleton className="w-1/5 h-5  bg-blue-950" />
          <div className="flex justify-center gap-x-4">
            <Skeleton className="rounded-full w-8 h-8  bg-blue-950" />
            <Skeleton className="rounded-full w-8 h-8  bg-blue-950" />
            <Skeleton className="rounded-full w-8 h-8  bg-blue-950" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardSkeleton;
