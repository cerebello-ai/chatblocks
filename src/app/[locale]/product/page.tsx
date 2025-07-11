import { ProductCompatibility } from '@/components/sections/product-compatibility';
import { ProductCta } from '@/components/sections/product-cta';
import { ProductFeatures } from '@/components/sections/product-features';
import { ProductHero } from '@/components/sections/product-hero';
import { getProductPageTranslation } from '@/i18n/server';

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getProductPageTranslation(locale);

  return (
    <>
      <ProductHero {...t.hero} locale={locale} />
      <ProductFeatures {...t.features} />
      <ProductCompatibility {...t.compatibility} />
      <ProductCta {...t.cta} />
    </>
  );
}
