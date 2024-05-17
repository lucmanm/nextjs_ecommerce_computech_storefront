import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
// unused
export const MenuSheet = ({ className }: { className: string }) => {
  return (
    <Sheet>
      <SheetTrigger className={cn("lg:hidden", className)}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="max-w-xs">
        <SheetHeader>
          <SheetTitle>Category Menu</SheetTitle>
          {/* {categoryData?.map((data, index) => (
            <SheetDescription
              key={index}
              asChild
              className="text-left hover:bg-blue-950 hover:text-white py-1 px-2 capitalize rounded-md"
            >
              <a href={`/product/${data.categoryName}`}>{data.categoryName}</a>
            </SheetDescription>
          ))} */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
