import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { Car, Heart } from "lucide-react";
import { useLocale } from "next-intl";
import { auth } from "@/lib/auth";
import { SignInSignOutButton } from "./SignInSignOutButton";

//Top Navigation Information
const topNavigationMenu = [
  // {
  //   name: "SignIn",
  //   url: "/login",
  //   icon: <User />,
  // },
  { name: "Wishlist", url: "/wishlist", icon: <Heart />, altImage: "heart" },
  { name: "Tracking", url: "/", icon: <Car />, altImage: "truck" },
] as const;

export const TopHeader = async () => {
  const locale = useLocale();
  const session = await auth();
  const user = session?.user
  return (
    <div className="container relative flex justify-between border-b">
      <div className="flex items-center gap-4">
       <SignInSignOutButton user={user}/>

        {topNavigationMenu.map((data, index) => (
          <Link
            key={index}
            href={`/${locale}/${data.url}`}
            className="inset-0 flex space-x-2"
          >
            <span>{data.icon}</span>
            <span>{data.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-x-2 p-2">
        <LocaleSwitcher />
      </div>
    </div>
  );
};
