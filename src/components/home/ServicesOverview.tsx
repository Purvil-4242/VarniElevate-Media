import { Link } from "react-router-dom";
import { Facebook, Instagram, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Facebook,
    title: "Facebook Ads Management",
    description:
      "We create performance-focused Facebook ad campaigns designed to generate leads, increase sales, and scale your business.",
  },
  {
    icon: Instagram,
    title: "Instagram Ads Management",
    description:
      "We build eye-catching Instagram ads that connect emotionally with your audience and convert them into customers.",
  },
  {
    icon: Sparkles,
    title: "Ad Creatives & Copywriting",
    description:
      "High-impact creatives and compelling ad copy designed to catch attention and drive conversions.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">What We Do</h2>
          <p className="text-body">
            Results-driven advertising services for fast growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={24} />
              </div>
              <h3 className="heading-sm text-foreground mb-3">{service.title}</h3>
              <p className="text-body-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
