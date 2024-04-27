export async function getCarouselWide(locale: string) {

  const res = await fetch(`${process.env.NEXT_DEV_API_URL}/${locale}/carousel/banner`);
  if (!res.ok) throw new Error("FAIL_FETCH_BANNER");
  const data = await res.json();
  return data
}
