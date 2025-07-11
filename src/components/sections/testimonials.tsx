import Image from 'next/image';
import type { TestimonialsProps } from '@/i18n/types';

export function Testimonials({ title, subtitle, items }: TestimonialsProps) {
  return (
    <section className="container">
      <div className="bordered-div-padding border text-center">
        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <blockquote className="text-sm italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}