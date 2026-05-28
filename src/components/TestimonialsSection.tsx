import { StaggerContainer, StaggerItem } from "./ui/animated";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  role?: string;
  rating?: number;
}

interface TestimonialsProps {
  heading: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ heading, testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {heading}
        </h2>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 h-full">
                {t.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                )}
                <p className="flex-1 text-base leading-7 text-muted-foreground italic">
                  "{t.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  {t.role && <p className="text-sm text-muted-foreground">{t.role}</p>}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
