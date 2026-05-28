import { StaggerContainer, StaggerItem, FadeIn } from "./ui/animated";
import { Trophy, Zap, Handshake, Shield, Clock, Star, Heart, MapPin, Phone, Users, CheckCircle, Award, Sparkles, Home, Car, Briefcase, GraduationCap, Stethoscope, Wrench, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Trophy, Zap, Handshake, Shield, Clock, Star, Heart, MapPin, Phone, Users, CheckCircle, Award, Sparkles, Home, Car, Briefcase, GraduationCap, Stethoscope, Wrench, Camera,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  heading: string;
  subheading?: string;
  features: Feature[];
}

export default function FeaturesSection({ heading, subheading, features }: FeaturesProps) {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </FadeIn>

        <StaggerContainer className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((f, i) => {
            const IconComponent = iconMap[f.icon] || null;
            return (
              <StaggerItem key={i}>
                <div className="group relative rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {IconComponent ? <IconComponent className="h-6 w-6" /> : <span className="text-2xl">{f.icon}</span>}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{f.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
