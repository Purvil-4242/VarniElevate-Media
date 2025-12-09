import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Sparkles,
  BarChart3,
  Check,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Rocket,
  Award,
  Users,
  Star,
  Clock,
  Shield,
  Search,
} from "lucide-react";
import { getAllServices } from "@/services/dataService";
import { Service } from "@/types/admin";

// Icon mapping
const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  Sparkles,
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  Rocket,
  Award,
  Users,
  Search,
  GoogleAds: Search, // Alias for Google Ads
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Sparkles className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Premium Ad Management Services</span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
              Transform Your Business with
              <span className="block mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Expert Facebook & Instagram Ads
              </span>
            </h1>

            <p className="text-body text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              End-to-end ad management designed to scale your business. From strategy to execution,
              we handle everything while you focus on what you do best.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-300">
              {[
                { icon: TrendingUp, value: "150%", label: "Avg. ROAS" },
                { icon: Users, value: "10+", label: "Happy Clients" },
                { icon: Target, value: "95%", label: "Success Rate" },
                { icon: Clock, value: "24/5", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="text-accent mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Why Choose VarniElevate Media?
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              We don't just run ads—we build growth engines for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Performance Guaranteed",
                description: "We're so confident in our results, we offer a performance guarantee on all campaigns.",
              },
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified Facebook & Instagram ad specialists with years of proven experience.",
              },
              {
                icon: Zap,
                title: "Fast Results",
                description: "See measurable improvements in your ad performance within the first 30 days.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business goals
            </p>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => {
              // Use Search icon for Google Ads services
              const isGoogleAds = service.title.toLowerCase().includes("google ads");
              const IconComponent = isGoogleAds
                ? Search
                : (iconMap[service.icon] || Sparkles);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl ${isGoogleAds ? "bg-white" : "bg-gradient-to-br from-accent to-accent/70"
                          } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {isGoogleAds ? (
                          <img
                            src="/google-ads.png"
                            alt="Google Ads"
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <IconComponent className="text-white" size={32} />
                        )}
                      </div>

                      <div className="h-12 w-1 bg-gradient-to-b from-accent to-transparent rounded-full" />
                    </div>

                    <h3 className="heading-md text-foreground mb-4">
                      {service.title}
                    </h3>

                    <p className="text-body text-lg mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="accent" asChild className="group/btn">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual Card */}
                  <div
                    className={`${!isEven ? "lg:order-1" : ""} relative group-hover:scale-105 transition-transform duration-500`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[350px] border border-accent/10 backdrop-blur-sm overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                      {/* Service Image or Icon */}
                      {service.title === "Facebook Ads Management" ? (
                        <img
                          src="/facebook-ads-dashboard.jpg"
                          alt="Facebook Ads Dashboard"
                          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                      ) : service.title === "Instagram Ads Management" ? (
                        <img
                          src="/instagram-ads-dashboard.jpg"
                          alt="Instagram Ads Dashboard"
                          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                      ) : service.title.toLowerCase().includes("google ads") ? (
                        <img
                          src="/Gemini_Generated_Image_wip0idwip0idwip0.png"
                          alt="Google Ads Dashboard"
                          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                      ) : service.title === "Ad Creatives & Copywriting" ? (
                        <img
                          src="/Ad Creatives & Copywriting.png"
                          alt="Ad Creatives & Copywriting"
                          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                      ) : service.title === "Analytics & Optimization" ? (
                        <img
                          src="/Analytics & Optimization.png"
                          alt="Analytics & Optimization"
                          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                      ) : (
                        <IconComponent className="text-accent/30 group-hover:text-accent/40 transition-colors relative z-10" size={180} />
                      )}

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
                      <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-primary" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Not sure which service fits you best? Book a free strategy call and
              let's discuss your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white text-accent hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Book Free Strategy Call
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white/10 hover:border-white bg-transparent"
              >
                <Link to="/case-studies">
                  View Case Studies
                  <Star size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
