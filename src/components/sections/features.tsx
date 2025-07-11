import { Images, Layers, ToggleLeft, Users2 } from 'lucide-react';
import Image from 'next/image';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';
import type { FeaturesProps } from '@/i18n/types';

// Icon mapping for features
const featureIcons = [Layers, Users2, Images, ToggleLeft];

export function Features({ title, subtitle, items }: FeaturesProps) {
  return (
    <section className="container">
      {/* Section Header */}
      <div className="bordered-div-padding border-x border-t text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {items.map((item, index) => {
          const IconComponent = featureIcons[index] || Layers;
          return (
            <div
              key={index}
              className={cn(
                'bordered-div-padding relative space-y-8',
                index == 0 && 'border-b md:border-e',
                index == 1 && 'border-b md:border-b-0',
                index == 3 && 'border-t md:border-s',
                index < 2 && '!pb-0',
              )}
            >
              {index === 0 && (
                // Height is 100% + 2px to account for parent border not being included in the calculation
                <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
              )}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-4">
                  <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                    <IconComponent className="size-5" />
                    {item.title.includes('\n') ? (
                      <span dangerouslySetInnerHTML={{ __html: item.title.replace('\n', '<br />') }} />
                    ) : (
                      item.title
                    )}
                  </h2>
                  <h3 className="text-foreground font-weight-display leading-snug md:text-xl">
                    {item.description}
                  </h3>
              </div>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  {item.subDescription}
                </p>
              </div>
              {/* Feature Images - Only show for first two items */}
              {index < 2 && (
                <div className="space-y-4">
                  {index === 0 && (
                    <Image
                      src="/images/landing/feature-1.webp"
                      alt={item.imageAlt}
                      width={700}
                      height={320}
                      className="border border-border rounded-lg"
                    />
                  )}
                  {index === 1 && (
                    <div className="flex flex-col gap-4 mask-b-from-30% mask-b-to-95%">
                      <Image
                        src="/images/landing/feature-2-1.webp"
                        alt={item.imageAlt}
                        width={620}
                        height={108}
                      />
                      <Image
                        src="/images/landing/feature-2-2.webp"
                        alt={item.imageAlt}
                        width={620}
                        height={108}
                      />
                      <Image
                        src="/images/landing/feature-2-3.webp"
                        alt={item.imageAlt}
                        width={620}
                        height={108}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
