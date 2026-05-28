import { FadeIn } from "./ui/animated";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  heading: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ heading, text, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center sm:px-16 shadow-2xl shadow-primary/20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">{text}</p>
              <a
                href={buttonLink}
                className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
