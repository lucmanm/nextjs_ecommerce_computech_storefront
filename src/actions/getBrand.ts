import { env } from "@/env";

export async function getBrands(locale: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/brands`);
  if (!res.ok) throw new Error("FAIL_FETCH_BRAND");
  const data = await res.json();
  return data
}
