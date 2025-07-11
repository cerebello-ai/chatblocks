'use client';

import { useTranslation } from 'react-i18next';

interface StructuredDataProps {
  locale: string;
  pathname?: string;
}

export function StructuredData({ locale, pathname = '/' }: StructuredDataProps) {
  const { t } = useTranslation('metadata');
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `https://scalar.com/${locale}#website`,
        url: `https://scalar.com/${locale}`,
        name: t('title'),
        description: t('description'),
        publisher: {
          '@id': `https://scalar.com/${locale}#organization`,
        },
        inLanguage: locale,
      },
      {
        '@type': 'Organization',
        '@id': `https://scalar.com/${locale}#organization`,
        name: 'Scalar',
        url: `https://scalar.com/${locale}`,
        logo: {
          '@type': 'ImageObject',
          url: 'https://scalar.com/logo.png',
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://github.com/scalar-labs/scalar',
          'https://twitter.com/shadcnblocks',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: `https://scalar.com/${locale}/contact`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `https://scalar.com${pathname}#webpage`,
        url: `https://scalar.com${pathname}`,
        name: t('title'),
        description: t('description'),
        isPartOf: {
          '@id': `https://scalar.com/${locale}#website`,
        },
        about: {
          '@id': `https://scalar.com/${locale}#organization`,
        },
        inLanguage: locale,
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scalar CMS',
        description: t('description'),
        applicationCategory: 'Content Management System',
        operatingSystem: 'Web Browser',
        url: `https://scalar.com/${locale}`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2025-12-31',
        },
        author: {
          '@id': `https://scalar.com/${locale}#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}