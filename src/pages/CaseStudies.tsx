import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Target,
  ArrowRight,
  Sparkles,
  Award,
  BarChart3,
  CheckCircle2,
  Quote
} from "lucide-react";
import { getAllCaseStudies } from "@/services/dataService";
import { CaseStudy } from "@/types/admin";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await getAllCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Award className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Success Stories</span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
              Real Results from
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h1>

            <p className="text-body text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              See how we've helped businesses like yours achieve remarkable growth through
              strategic Facebook & Instagram advertising.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-300">
              {[
                { value: "25+", label: "Campaigns" },
                { value: "180%", label: "Avg. ROAS" },
                { value: "$15k+", label: "Revenue Generated" },
                { value: "96%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group relative"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: Meta Info */}
                    <div className="lg:col-span-3 space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                          <TrendingUp size={14} />
                          {study.clientType}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{study.industry}</span>
                        </div>
                      </div>

                      <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                          <Target size={16} className="text-accent" />
                          Goal
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.goal}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Strategy */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                            <BarChart3 className="text-white" size={16} />
                          </div>
                          <h3 className="font-heading font-semibold text-lg text-foreground">
                            Strategy
                          </h3>
                        </div>
                        <p className="text-body leading-relaxed">
                          {study.strategy}
                        </p>
                      </div>

                      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                        <div className="flex gap-3">
                          <Quote className="text-accent flex-shrink-0" size={24} />
                          <p className="text-sm text-foreground italic leading-relaxed">
                            {study.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="lg:col-span-4">
                      <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20 h-full">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                            <Award className="text-white" size={16} />
                          </div>
                          <h3 className="font-heading font-semibold text-lg text-foreground">
                            Results
                          </h3>
                        </div>

                        <ul className="space-y-4">
                          {study.results.map((result) => (
                            <li
                              key={result}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/30 transition-colors">
                                <CheckCircle2 size={14} className="text-accent" />
                              </div>
                              <span className="text-foreground font-semibold text-sm leading-relaxed">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="text-white mx-auto mb-6" size={48} />
            <h2 className="heading-lg text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Join hundreds of businesses that have transformed their growth with our
              proven Facebook & Instagram ad strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white/10 hover:border-white bg-transparent"
              >
                <Link to="/services">
                  View Our Services
                  <TrendingUp size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
