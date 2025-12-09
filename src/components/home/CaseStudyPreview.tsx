import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    clientType: "E-commerce Brand",
    goal: "Increase sales and reduce cost per purchase",
    strategy: "Audience testing, dynamic creatives, and retargeting funnel.",
    result: "2.5X ROAS in 30 days",
  },
  {
    clientType: "Local Fitness Studio",
    goal: "Generate quality leads for membership signups",
    strategy: "Geo-targeted campaigns with compelling video ads.",
    result: "150+ leads at $8 CPL",
  },
  {
    clientType: "Online Course Creator",
    goal: "Scale course sales profitably",
    strategy: "Funnel optimization with lookalike audiences.",
    result: "3X revenue in 60 days",
  },
];

const CaseStudyPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Real Results. Real Growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.clientType}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                <TrendingUp size={14} />
                {study.clientType}
              </div>
              <h3 className="font-heading font-semibold text-base md:text-lg text-foreground mb-2">
                Goal: {study.goal}
              </h3>
              <p className="text-body-sm mb-4">
                <span className="font-medium text-foreground">Strategy:</span>{" "}
                {study.strategy}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-accent font-heading font-bold text-lg md:text-xl">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/case-studies">
              View More Case Studies
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
