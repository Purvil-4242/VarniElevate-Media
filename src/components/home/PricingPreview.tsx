import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For businesses just getting started with ads",
    features: ["Ad Management", "Weekly Reporting", "A/B Testing", "Basic Optimization"],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For scaling businesses ready to grow",
    features: [
      "Everything in Starter",
      "Advanced Targeting",
      "Creative Strategy",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    description: "For established brands seeking maximum ROI",
    features: [
      "Everything in Growth",
      "Multi-Platform Ads",
      "Custom Dashboards",
      "Dedicated Manager",
    ],
    highlighted: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Flexible Plans for Every Stage
          </h2>
          <p className="text-body">
            Pricing depends on your goals, ad spend, and industry. Let's discuss
            what works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl md:scale-105"
                  : "bg-card shadow-card border border-border/50 card-hover"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="heading-sm mb-2">{plan.name}</h3>
              <p
                className={`text-xs sm:text-sm mb-4 md:mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
              >
                {plan.description}
              </p>
              <p
                className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${plan.highlighted ? "text-accent" : "text-foreground"
                  }`}
              >
                Custom Pricing
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-accent" : "bg-accent/10"
                        }`}
                    >
                      <Check
                        size={12}
                        className={plan.highlighted ? "text-accent-foreground" : "text-accent"}
                      />
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
