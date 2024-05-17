import { env } from "@/env";

export async function getCarouselWide(locale: string) {

  const res = await fetch(`${env.NEXT_DEV_API_URL}/${locale}/carousel/WideSlider`);
  if (!res.ok) throw new Error("FAIL_FETCH_CAROUSEL");
  const data = await res.json();
  return data
}
