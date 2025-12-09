import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import heroIllustration from "@/assets/hero-illustration.png"; // Commented for video trial
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Original gradient background - COMMENTED OUT FOR VIDEO TRIAL */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-48 h-48 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div> */}

      <div className="container-custom relative z-10 pt-24 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="heading-xl mb-4 md:mb-6 opacity-0 animate-fade-in-up">
              We Elevate Your Business Growth with{" "}
              <span className="text-accent">High-Converting</span> Facebook &
              Instagram Ads
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-xl opacity-0 animate-fade-in-up stagger-1">
              VarniElevate Media helps brands generate quality leads, consistent
              sales & long-term growth through data-driven ad strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6 opacity-0 animate-fade-in-up stagger-2">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Book a Free Strategy Call
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/contact">Get a Free Ad Audit</Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-primary-foreground/60 opacity-0 animate-fade-in-up stagger-3">
              No long-term contracts. Performance-focused partnership.
            </p>
          </div>

          {/* Right Image - COMMENTED OUT FOR VIDEO TRIAL */}
          {/* <div className="opacity-0 animate-slide-in-right stagger-2">
            <div className="relative max-w-md lg:max-w-xl mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform rotate-3" />
              <img
                src={heroIllustration}
                alt="Analytics dashboard showing growth metrics and social media advertising performance"
                className="relative rounded-2xl shadow-2xl animate-float w-full h-auto"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
