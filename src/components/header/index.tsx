import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./logo";
import { CategoryDropdownMenu } from "./CategoryComponents";
import { SearchInput } from "./SearchInput";
import { getProductCategory } from "@/lib/actions/getCategory";
import { useLocale } from "next-intl";
import { DropdownMenu } from "../DropdownMenu";
import useTextDirection from "@/hook/useTextDirection";
import TopHeader from "./TopHeader";

export const Header = async ({ className }: { className?: string }) => {
  const direction  = useTextDirection()
  const locale = useLocale();
  const categories = await getProductCategory(locale);
  

  return (
    <header className={cn("border-b bg-slate-100 md:shadow-md", className)}>
      <TopHeader/>
      <div className="bg-white py-2">
        <div className="flex flex-wrap items-center justify-between space-x-4 px-3 lg:container lg:px-0">
          {/* Side menu */}
          {/* <SheetSide className="rounded-full p-2 hover:bg-blue-950 hover:text-white" /> */}

          {/* Logo */}
          <Logo />
          {/* search input */}
          <SearchInput className="flex-1" />
          {/* <div className="flex items-center justify-center gap-x-2"> */}
          {/* Product Category Menu */}
          <DropdownMenu name={direction ===  "ltr" ? "All Category" : "كل فئة"} item={categories} />
          {/* <SideBarModal /> */}
          {/* </div> */}
          {/* Brands Menu */}
          {/* <div className="flex">
            <Link href="/my-account/wishlist">
              <Heart
                size={32}
                className="hidden overflow-visible rounded-full hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:shadow-md"
              />
            </Link>
            <Link href="/sign-in">
              <UserCircle2
                size={32}
                className="hidden overflow-visible rounded-full hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:shadow-md"
              />
            </Link>

            <CartComp />
            
          </div> */}
        </div>
      </div>
    </header>
  );
};
