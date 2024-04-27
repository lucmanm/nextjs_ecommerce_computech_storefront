import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { Car, Heart, User } from "lucide-react";

//Top Navigation Information
const topNavigationMenu = [
  {
    name: "SignIn",
    url: "/auth/sign-in",
    icon: <User />,
  },
  { name: "Wishlist", url: "/", icon: <Heart />, altImage: "heart" },
  { name: "Tracking", url: "/", icon: <Car />, altImage: "truck" },
];

const TopHeader = () => {
  return (
    <div className="container relative flex flex-wrap justify-between ">
      <div className="flex items-center gap-4">
        {topNavigationMenu.map((data, index) => (
          <Link key={index} href={data.url} className="flex inset-0 space-x-2">
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

export default TopHeader;
