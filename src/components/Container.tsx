import { cn } from "@/lib/utils";
import React from "react";
type TProps = {
  className?: string | undefined;
  title?: string | undefined;
  children?: React.ReactNode;
};
export const Container: React.FC<TProps> = ({ className, children, title }) => {
  return (
    <main
      className={cn(
        "my-4 flex flex-col gap-4 px-2 md:container max-sm:gap-2",
        className,
      )}
    >
      {title && (
        <div className="rounded-md border bg-white px-4 py-2 md:py-4 text-base font-bold shadow-sm md:text-2xl">
          {title}
        </div>
      )}
      {children}
    </main>
  );
};
