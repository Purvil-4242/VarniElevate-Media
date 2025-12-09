import { Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, and goals, and analyze your current marketing.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Launch",
    description:
      "We set up your campaigns, creatives, tracking, and test multiple variations.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Scale",
    description:
      "We optimize, refine, and scale winning campaigns for long-term growth.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-lg text-foreground">Our 3-Step Growth Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number badge */}
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 md:mb-6">
                <div className="absolute inset-0 bg-accent/10 rounded-full" />
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center shadow-lg border border-accent/20">
                  <step.icon className="text-accent" size={28} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs md:text-sm">
                  {step.number}
                </div>
              </div>

              <h3 className="heading-sm text-foreground mb-3">{step.title}</h3>
              <p className="text-body-sm max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
