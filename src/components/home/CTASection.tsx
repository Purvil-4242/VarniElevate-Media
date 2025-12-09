import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-cta relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="heading-lg text-primary-foreground mb-4 max-w-3xl mx-auto">
          Ready to Grow Your Business with High-Converting Ads?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 mb-8 md:mb-10 max-w-xl mx-auto">
          Let's create an ad strategy that actually works.
        </p>
        <Button variant="cta-large" asChild>
          <Link to="/contact">
            Book a Free Strategy Call
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
