import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import type { ProductHeroProps } from '@/i18n/types';
import { createLocalizedPath } from '@/lib/locale-utils';

export function ProductHero({ title, description, startTrial, viewGithub, imageAlt, locale }: ProductHeroProps) {
  return (
    <section className="container">
      <div className="bordered-div-padding flex flex-col items-center gap-8 border-x text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            {description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button asChild className="md:px-10">
            <Link href={createLocalizedPath('/signup', locale)}>{startTrial}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/scalar-labs/scalar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-5" />
              {viewGithub}
            </Link>
          </Button>
        </div>
      </div>
      <div className="bordered-div-padding flex items-center justify-center border">
        <Image
          src="/images/product/hero.webp"
          alt={imageAlt}
          width={1320}
          height={743}
          priority
          className="mask-b-from-55% mask-b-to-95%"
        />
      </div>
    </section>
  );
}
