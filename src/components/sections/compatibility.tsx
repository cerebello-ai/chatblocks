import type { CompatibilityProps } from '@/i18n/types';

export function Compatibility({ title, subtitle, description }: CompatibilityProps) {
  return (
    <section className="container">
      <div className="bordered-div-padding border-x border-t text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {subtitle}
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}