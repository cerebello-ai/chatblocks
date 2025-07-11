'use client';

import Link from 'next/link';
import { FaDiscord, FaGithub } from 'react-icons/fa6';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Button } from '@/components/ui/button';
import type { AboutHeroProps } from '@/i18n/types';

export function AboutHero({ title, description, discordText, githubText }: AboutHeroProps) {
  return (
    <section className="container">
      <div className="bordered-div-padding relative flex flex-col items-center gap-8 border-x border-b text-center md:gap-10 lg:gap-16 lg:!py-25">
        <PlusSigns className="absolute inset-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-b md:block" />

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
          <Button asChild>
            <Link href="https://discord.gg/scalar" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="size-5" />
              {discordText}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/scalar-labs/scalar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-5" />
              {githubText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
