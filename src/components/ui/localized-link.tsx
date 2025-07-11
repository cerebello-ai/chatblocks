'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

import { useLocale } from '@/contexts/locale-context';

interface LocalizedLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  href: string;
  external?: boolean;
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('tel:');
}

export const LocalizedLink = forwardRef<
  React.ElementRef<typeof Link>,
  LocalizedLinkProps
>(({ href, external = false, ...props }, ref) => {
  const { createLocalizedPath } = useLocale();
  
  const finalHref = external || isExternalUrl(href) 
    ? href 
    : createLocalizedPath(href);

  return <Link ref={ref} href={finalHref} {...props} />;
});

LocalizedLink.displayName = 'LocalizedLink';