import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Search,
  Rocket,
  TrendingUp,
  ArrowRight,
  Quote,
  Target,
  Users,
  Award,
  Heart,
  Zap,
  Shield,
  Sparkles
} from "lucide-react";

const values = [
  {
    icon: Search,
    title: "Research-Driven",
    description: "We start by understanding your business, audience, and market deeply.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Execution-Focused",
    description: "From creatives to targeting, we handle every detail of your campaigns.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "ROI-Centered",
    description: "We're obsessed with performance metrics and return on ad spend.",
    color: "from-green-500 to-green-600",
  },
];

const stats = [
  { value: "10+", label: "Clients Served" },
  { value: "1-2", label: "Years Experience" },
  { value: "$15k+", label: "Revenue Generated" },
  { value: "95%", label: "Client Retention" },
];

const About = () => {
  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Heart className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
              We're on a Mission to
              <span className="block mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Transform Businesses Through Ads
              </span>
            </h1>

            <p className="text-body text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              VarniElevate Media is a performance-driven social media advertising agency
              specializing in Facebook and Instagram ads that actually deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Users className="text-accent" size={16} />
                <span className="text-sm font-medium text-accent">Who We Are</span>
              </div>

              <h2 className="heading-lg text-foreground mb-6">
                Your Growth Partners
              </h2>

              <p className="text-body text-lg mb-6 leading-relaxed">
                VarniElevate Media is a performance-driven social media advertising
                agency specializing in Facebook and Instagram ads. Our mission is
                simple: help businesses grow faster with powerful, data-backed
                advertising.
              </p>

              <p className="text-body text-lg mb-8 leading-relaxed">
                Many agencies focus only on clicks and impressions. We focus on
                results — leads, sales, and long-term growth. We believe in
                transparency, clear communication, and building long-term
                partnerships with our clients.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Shield className="text-accent" size={16} />
                  <span className="text-sm font-medium text-foreground">Certified Experts</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Award className="text-primary" size={16} />
                  <span className="text-sm font-medium text-foreground">Award Winning</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
                  <Zap className="text-green-500" size={16} />
                  <span className="text-sm font-medium text-foreground">Fast Results</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-12 flex items-center justify-center border border-accent/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-2xl">
                    <span className="text-7xl font-heading font-bold text-white">
                      VM
                    </span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-foreground mb-2">
                    VarniElevate Media
                  </p>
                  <p className="text-muted-foreground">Performance Ads Agency</p>
                  <div className="flex justify-center gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Sparkles key={star} className="text-accent" size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Our Approach</span>
            </div>
            <h2 className="heading-lg text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-body text-lg">
              Our proven methodology that drives consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-card rounded-2xl p-8 shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="heading-sm text-foreground mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-body text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Heart className="text-accent" size={16} />
                <span className="text-sm font-medium text-accent">Our Promise</span>
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Your Success is Our Success
              </h2>
              <p className="text-body text-lg mb-10 max-w-2xl mx-auto">
                We treat your business like our own. That means honest communication,
                consistent support, and a relentless focus on growth.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-primary rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-accent via-accent/90 to-primary rounded-3xl p-12 md:p-16">
                <Quote
                  className="absolute top-8 left-8 text-white/10"
                  size={80}
                />
                <div className="relative z-10 text-center">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                    "Your growth is our mission."
                  </p>
                  <p className="text-white/90 text-lg max-w-2xl mx-auto">
                    We don't just run ads—we build sustainable growth engines for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-body text-lg mb-10">
              Let's discuss how we can help you achieve your business goals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">
                  View Case Studies
                  <Award size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
