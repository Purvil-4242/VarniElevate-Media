import { Facebook, Instagram, BarChart3, Target } from "lucide-react";

const badges = [
  { icon: Facebook, label: "Facebook Ads" },
  { icon: Instagram, label: "Instagram Ads" },
  { icon: Target, label: "Meta Business" },
  { icon: BarChart3, label: "Analytics" },
];

const TrustBadges = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary">
      <div className="container-custom">
        <p className="text-center text-muted-foreground mb-6 md:mb-8 text-xs sm:text-sm uppercase tracking-wider font-medium">
          Trusted by brands looking to scale fast
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-16">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 md:gap-3 text-muted-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <badge.icon size={20} className="text-accent sm:w-6 sm:h-6" />
              <span className="font-medium text-xs sm:text-sm">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
