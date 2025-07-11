import { AboutHero } from '@/components/sections/about-hero';
import { AboutInvestorsContributors } from '@/components/sections/about-investors-contributors';
import { AboutMissionTeam } from '@/components/sections/about-mission-team';
import { AboutTestimonials } from '@/components/sections/about-testimonials';
import { getAboutPageTranslation } from '@/i18n/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getAboutPageTranslation(locale);

  return (
    <div className="overflow-hidden">
      <AboutHero {...t.hero} />
      <AboutMissionTeam mission={t.mission} team={t.team} />
      <AboutInvestorsContributors {...t.investors} />
      <AboutTestimonials {...t.testimonials} />
    </div>
  );
}
