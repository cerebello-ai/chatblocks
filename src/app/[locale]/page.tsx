import { Compatibility } from '@/components/sections/compatibility';
import { Features } from '@/components/sections/features';
import { Hero } from '@/components/sections/hero';
import { Testimonials } from '@/components/sections/testimonials';
import { getHomePageTranslation } from '@/i18n/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getHomePageTranslation(locale);

  return (
    <div className="overflow-hidden">
      <Hero {...t.hero} />
      <Features {...t.features} />
      <Compatibility {...t.compatibility} />
      <Testimonials {...t.testimonials} />
    </div>
  );
}
