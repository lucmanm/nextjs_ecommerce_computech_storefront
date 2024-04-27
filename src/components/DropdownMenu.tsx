"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import useTextDirection from "@/hook/useTextDirection";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TDropdownMenu = {
  name: string;
  item: {
    name: string;
  }[];
};

export function DropdownMenu({ name, item }: TDropdownMenu) {
  const pathname = usePathname()

  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-100 rounded-full shadow w-40 font-bold text-lg">
            {name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={`grid w-[150px] gap-3 p-2  md:grid-cols-1 capitalize`}            >
              {item.map((data, index) => (
                <ListItem href={`${pathname}/${data.name}`} title={data.name} key={index} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
