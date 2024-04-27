"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");
  const handleSelectChange = (event: string) => {
    router.replace(`${event}`);
  };
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("title")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t("en")}</SelectItem>
        <SelectItem value="ar">{t("ar")}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
