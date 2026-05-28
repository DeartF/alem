import { FadeIn, ScaleIn } from "./ui/animated";
import { motion } from "motion/react";

interface Stat {
  value: string;
  label: string;
}

interface AboutProps {
  heading: string;
  text: string;
  image?: string;
  stats?: Stat[];
}

export default function AboutSection({ heading, text, image, stats }: AboutProps) {
  return (
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{text}</p>
            </FadeIn>

            {stats && stats.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-8">
                {stats.map((s, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <div className="border-l-2 border-primary pl-6">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="block text-4xl font-bold text-primary"
                      >
                        {s.value}
                      </motion.span>
                      <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>

          {image && (
            <ScaleIn delay={0.2} className="mt-12 lg:mt-0">
              <img
                src={image}
                alt=""
                className="w-full rounded-2xl shadow-xl ring-1 ring-border"
              />
            </ScaleIn>
          )}
        </div>
      </div>
    </section>
  );
}
