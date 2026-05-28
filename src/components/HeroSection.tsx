import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  badge?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
  badge,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-heading font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={ctaLink}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a
                href={secondaryCtaLink}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                {secondaryCtaText}
              </a>
            )}
          </motion.div>
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0"
          >
            <img
              src={image}
              alt=""
              className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 ring-border"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
