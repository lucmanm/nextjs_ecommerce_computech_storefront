import { env } from "@/env";

export async function getProductCategory(locale: string) {
  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/category`);
  if (!res.ok) throw new Error("FAIL_FETCH_GET_CATEGORY");
  const data = await res.json();
  return data
}
