import { TrendingUp, FileText, User, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "ROI-Focused Approach",
    description: "Every campaign is planned with return on investment as the core metric.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Clear, easy-to-understand reports so you always know what's working.",
  },
  {
    icon: User,
    title: "Dedicated Ad Manager",
    description: "A single point of contact managing and optimizing your campaigns.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description: "Quick responses, weekly updates, and clear communication.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider mb-3">
            We don't just run ads — we grow businesses.
          </p>
          <h2 className="heading-lg text-foreground">
            Why Choose VarniElevate Media?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
                <reason.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-base md:text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-body-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
