import { categorySchema } from "@/zod.type";
import { useLocale } from "next-intl";
import Link from "next/link";
import { z } from "zod";

type TCategoryProps = {
  item: z.infer<typeof categorySchema>[];
  title: string;
};

// UnUsed Components
export const CategoryDropdownMenu: React.FC<TCategoryProps> = async ({
  title,
  item,
}) => {
  const locale = useLocale()
  return (
    <div className="group relative z-20 lg:block hidden hover:shadow rounded-full">
      <div className="grow active:bg-blue-950 rounded-full bg-gray-100 hover:cursor-pointer px-4 py-1.5 text-center font-bold uppercase text-blue-950   hover:bg-blue-950 hover:text-white ">
        <span>{title}</span>
      </div>
      <div className="hidden grow group-hover:block group-focus:visible">
        <div className="absolute top-full flex w-fit grow flex-col overflow-hidden rounded pt-3 shadow-md ">
          {item.map((data, index) => (
            <a
              href={`${locale}/product/${data.name}`}
              key={index}
              className="w-full whitespace-pre border border-b-gray-300 bg-gray-200 px-2 py-2 font-medium capitalize text-gray-600 hover:bg-gray-100 hover:text-black z-50 inline-block"
            >
              {data.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
