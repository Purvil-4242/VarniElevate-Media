import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileText,
  Users,
  DollarSign,
  AlertTriangle,
  Ban,
  Lock,
  XCircle,
  Power,
  RefreshCw,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";

const sections = [
  {
    id: "services",
    emoji: "1️⃣",
    title: "Services",
    icon: FileText,
    content: [
      {
        subtitle: "VarniElevate Media provides digital marketing and social media advertising services, including but not limited to:",
        items: [
          "Facebook & Instagram Ads management",
          "Campaign setup, optimization, and reporting",
          "Marketing consultation",
        ],
      },
      {
        subtitle: "",
        items: [
          "All services are provided based on mutually agreed scope and timelines.",
        ],
      },
    ],
  },
  {
    id: "client-responsibilities",
    emoji: "2️⃣",
    title: "Client Responsibilities",
    icon: Users,
    content: [
      {
        subtitle: "Clients agree to:",
        items: [
          "Provide accurate and complete business information",
          "Provide necessary access to ad accounts, pages, or assets",
          "Ensure that their products/services comply with platform policies (Meta, Google, etc.)",
        ],
      },
      {
        subtitle: "",
        items: [
          "VarniElevate Media is not responsible for ad rejection due to policy violations by the client.",
        ],
      },
    ],
  },
  {
    id: "payments-fees",
    emoji: "3️⃣",
    title: "Payments & Fees",
    icon: DollarSign,
    content: [
      {
        subtitle: "",
        items: [
          "All service fees are discussed and agreed upon before project initiation",
          "Advertising budget is paid directly by the client to the advertising platform (Facebook/Instagram), unless otherwise agreed",
          "Service fees are separate from ad spend",
        ],
      },
    ],
  },
  {
    id: "refund-policy",
    emoji: "4️⃣",
    title: "Refund Policy (IMPORTANT)",
    icon: AlertTriangle,
    isImportant: true,
    content: [
      {
        subtitle: "Please read carefully:",
        items: [
          "Service fees are refundable within 7 days of payment, provided that work has not yet started",
          "Once work has started, service fees become non-refundable",
          "No refunds will be issued for completed or partially completed services",
          "Ad spend paid to third-party platforms (Meta/Google) is non-refundable, as it is controlled by those platforms",
          "Refunds, if any, are subject to written agreement before project start",
        ],
      },
      {
        subtitle: "",
        items: [
          "👉 This policy complies with Meta's transparency requirements.",
        ],
      },
    ],
  },
  {
    id: "performance-disclaimer",
    emoji: "5️⃣",
    title: "Performance Disclaimer",
    icon: AlertCircle,
    content: [
      {
        subtitle: "VarniElevate Media does not guarantee specific results, including:",
        items: [
          "Sales",
          "Leads",
          "Revenue",
        ],
      },
      {
        subtitle: "",
        items: [
          "Advertising results depend on multiple factors such as market conditions, product quality, pricing, and audience behavior.",
        ],
      },
    ],
  },
  {
    id: "account-suspension",
    emoji: "6️⃣",
    title: "Account Suspension or Ad Rejection",
    icon: Ban,
    content: [
      {
        subtitle: "We are not responsible for:",
        items: [
          "Ad account suspension",
          "Page restrictions",
          "Policy violations caused by the client's business model or content",
        ],
      },
      {
        subtitle: "",
        items: [
          "We may assist in appeal processes, but final decisions rest with the platform.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    emoji: "7️⃣",
    title: "Confidentiality",
    icon: Lock,
    content: [
      {
        subtitle: "",
        items: [
          "All client information, ad data, and business details are kept confidential and used only for service delivery purposes.",
        ],
      },
    ],
  },
  {
    id: "limitation-liability",
    emoji: "8️⃣",
    title: "Limitation of Liability",
    icon: XCircle,
    content: [
      {
        subtitle: "VarniElevate Media shall not be liable for:",
        items: [
          "Any indirect or consequential losses",
          "Platform-related technical issues",
          "Business losses due to ad performance",
        ],
      },
    ],
  },
  {
    id: "termination",
    emoji: "9️⃣",
    title: "Termination of Services",
    icon: Power,
    content: [
      {
        subtitle: "",
        items: [
          "Either party may terminate services with prior notice.",
          "Outstanding dues must be cleared before termination.",
        ],
      },
    ],
  },
  {
    id: "changes-to-terms",
    emoji: "🔟",
    title: "Changes to Terms",
    icon: RefreshCw,
    content: [
      {
        subtitle: "",
        items: [
          "We reserve the right to update or modify these Terms & Conditions at any time.",
          "Updated versions will be posted on our website.",
        ],
      },
    ],
  },
];

const TermsConditions = () => {
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
              <FileText className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Terms & Conditions</span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
              📜 Terms &
              <span className="block mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="text-body text-lg max-w-2xl mx-auto mb-6 animate-fade-in-up delay-200">
              By using our services, website, lead forms, or contacting us for advertising
              services, you agree to comply with and be bound by the following Terms & Conditions.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
              <Clock className="text-muted-foreground" size={16} />
              <span className="text-sm text-muted-foreground">
                Effective Date: <strong className="text-foreground">22-12-2025</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-accent" size={24} />
                </div>
                <div>
                  <h2 className="heading-md text-foreground mb-4">
                    Welcome to VarniElevate Media
                  </h2>
                  <p className="text-body leading-relaxed">
                    These Terms & Conditions govern your use of our services and website. By
                    engaging with VarniElevate Media, you acknowledge that you have read,
                    understood, and agree to be bound by these terms. Please read them carefully
                    before using our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`group bg-card rounded-2xl p-8 md:p-10 shadow-card border transition-all duration-300 hover:shadow-card-hover ${
                  section.isImportant
                    ? "border-orange-500/50 bg-orange-50/5"
                    : "border-border/50 hover:border-accent/30"
                }`}
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      section.isImportant
                        ? "bg-gradient-to-br from-orange-500 to-orange-600"
                        : "bg-gradient-to-br from-accent to-accent/70"
                    }`}
                  >
                    <section.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{section.emoji}</span>
                      <h3 className="heading-sm text-foreground">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="space-y-6 ml-0 md:ml-18">
                  {section.content.map((block, blockIndex) => (
                    <div key={blockIndex}>
                      {block.subtitle && (
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {block.subtitle}
                        </h4>
                      )}
                      <ul className="space-y-3">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2
                              className={`flex-shrink-0 mt-0.5 ${
                                section.isImportant ? "text-orange-500" : "text-accent"
                              }`}
                              size={18}
                            />
                            <span className="text-body leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-accent/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📩</span>
                    <h3 className="heading-sm text-foreground">Contact Information</h3>
                  </div>
                  <p className="text-body mb-6">
                    For any questions regarding these Terms & Conditions or Refund Policy, contact us:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-18">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Company Name</p>
                  <p className="text-lg font-semibold text-foreground">VarniElevate Media</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Owner</p>
                  <p className="text-lg font-semibold text-foreground">Purvil Gajera</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:vemedia.info@gmail.com"
                    className="text-lg font-semibold text-accent hover:underline"
                  >
                    vemedia.info@gmail.com
                  </a>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-semibold text-foreground">Surat, Gujarat, India</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <AlertCircle className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">Questions?</span>
            </div>

            <h2 className="heading-lg text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-body text-lg mb-10">
              If you have any questions about our terms or want to discuss how we can help your
              business grow, feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  Back to Home
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
