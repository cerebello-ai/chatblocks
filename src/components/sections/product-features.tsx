import { FileCode, GitCommit, MonitorSpeaker, Zap } from 'lucide-react';
import Image from 'next/image';

import type { ProductFeaturesProps } from '@/i18n/types';
import { cn } from '@/lib/utils';

const getFeatures = (props: ProductFeaturesProps) => [
  {
    icon: GitCommit,
    title: props.trackChanges.title,
    description: props.trackChanges.description,
    subDescription: props.trackChanges.subDescription,
    className: '',
    images: [
      {
        src: '/images/product/feature-1.webp',
        alt: 'GitHub Integration',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
  {
    icon: MonitorSpeaker,
    title: props.localDevelopment.title,
    description: props.localDevelopment.description,
    subDescription: props.localDevelopment.subDescription,
    className: '',
    images: [
      {
        src: '/images/product/feature-2.webp',
        alt: 'Local Development',
        width: 620,
        height: 108,
        className: '',
      },
    ],
  },
  {
    icon: FileCode,
    title: props.modelDefinitions.title,
    description: props.modelDefinitions.description,
    subDescription: props.modelDefinitions.subDescription,
    images: [
      {
        src: '/images/product/feature-3-1.webp',
        alt: 'Model Definitions',
        width: 326,
        height: 170,
        className: '',
      },
      {
        src: '/images/product/feature-3-2.webp',
        alt: 'Model Definitions',
        width: 419,
        height: 170,
        className: 'self-end',
      },
    ],
  },
  {
    icon: Zap,
    title: props.readyToScale.title,
    description: props.readyToScale.description,
    subDescription: props.readyToScale.subDescription,
    images: [
      {
        src: '/images/product/feature-4-1.webp',
        alt: 'Ready to Scale',
        width: 327,
        height: 60,
        className: '',
      },
      {
        src: '/images/product/feature-4-2.webp',
        alt: 'Ready to Scale',
        width: 316,
        height: 60,
        className: 'self-end',
      },
      {
        src: '/images/product/feature-4-3.webp',
        alt: 'Ready to Scale',
        width: 271,
        height: 84,
        className: '',
      },
      {
        src: '/images/product/feature-4-4.webp',
        alt: 'Ready to Scale',
        width: 221,
        height: 60,
        className: 'self-end',
      },
      {
        src: '/images/product/feature-4-5.webp',
        alt: 'Ready to Scale',
        width: 174,
        height: 56,
        className: 'absolute bottom-24 right-[4vw]',
      },
      {
        src: '/images/product/feature-4-6.webp',
        alt: 'Ready to Scale',
        width: 96,
        height: 42,
        className: 'absolute top-22 left-[4vw]',
      },
    ],
  },
];

export function ProductFeatures(props: ProductFeaturesProps) {
  const features = getFeatures(props);
  
  return (
    <section className="container">
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding space-y-8',
              index == 0 && 'border-b md:border-e',
              index == 1 && 'border-b md:border-b-0',
              index == 3 && 'border-t md:border-s',
              feature.className,
            )}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                  <feature.icon className="size-5" />
                  {feature.title}
                </h2>
                <h3 className="text-foreground font-weight-display leading-snug md:text-xl">
                  {feature.description}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {feature.subDescription}
              </p>
            </div>

            {feature.images && (
              <div
                className={cn(
                  'relative flex flex-col gap-4',
                  index == 2 && 'mask-b-from-30% mask-b-to-95%',
                )}
              >
                {feature.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={''}
                    width={image.width}
                    height={image.height}
                    className={image.className}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
