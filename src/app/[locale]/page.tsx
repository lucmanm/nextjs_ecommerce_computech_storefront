import { CarouselBrandRow } from "@/components/CarouselBrandRow";
import { CarouselProductRow } from "@/components/CarouselProductRow";
import { CarouselWide } from "@/components/CarouselWide";
import { getCarouselWide } from "@/actions/getCarousel";


export default async function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const carouselWide = await getCarouselWide(locale);
  return (
    <main className="space-y-4 p-2 md:container md:py-4 block">
      <CarouselWide item={carouselWide} />
      <CarouselBrandRow />
      <CarouselProductRow title="pc" />
      <CarouselProductRow title="Printers" />
      <CarouselProductRow title="pc" />
      <CarouselProductRow title="Monitors" />
      <CarouselProductRow title="nb" />
    </main>
  );
}
