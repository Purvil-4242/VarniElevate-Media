import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    Shield,
    Lock,
    Eye,
    Database,
    Share2,
    FileText,
    Clock,
    UserCheck,
    Globe,
    RefreshCw,
    Mail,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

const sections = [
    {
        id: "information-we-collect",
        emoji: "1️⃣",
        title: "Information We Collect",
        icon: Database,
        content: [
            {
                subtitle: "a) Personal Information",
                items: [
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                ],
            },
            {
                subtitle: "b) Business Information",
                items: [
                    "Business name",
                    "Social media pages or ad account access (provided voluntarily by clients)",
                ],
            },
            {
                subtitle: "c) Technical Information",
                items: [
                    "IP address",
                    "Browser type",
                    "Device information",
                ],
            },
        ],
    },
    {
        id: "how-we-use",
        emoji: "2️⃣",
        title: "How We Use Your Information",
        icon: Eye,
        content: [
            {
                subtitle: "We use collected information for the following purposes:",
                items: [
                    "To manage and optimize advertising campaigns",
                    "To communicate with clients and prospects",
                    "To provide customer support and services",
                    "To process billing and service-related operations",
                    "To improve our services and marketing strategies",
                ],
            },
        ],
    },
    {
        id: "data-sharing",
        emoji: "3️⃣",
        title: "Data Sharing & Disclosure",
        icon: Share2,
        content: [
            {
                subtitle: "",
                items: [
                    "We do not sell, trade, or rent personal information to third parties.",
                    "Your data may only be shared with trusted third-party platforms strictly for service delivery purposes, including:",
                ],
            },
            {
                subtitle: "Third-Party Platforms:",
                items: [
                    "Meta Platforms (Facebook & Instagram)",
                    "Google Ads",
                    "Payment service providers (if applicable)",
                ],
            },
            {
                subtitle: "",
                items: [
                    "All third-party platforms operate under their own privacy policies.",
                ],
            },
        ],
    },
    {
        id: "data-security",
        emoji: "4️⃣",
        title: "Data Security",
        icon: Shield,
        content: [
            {
                subtitle: "",
                items: [
                    "We take reasonable and appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction.",
                    "Access to personal data is limited to authorized personnel only.",
                ],
            },
        ],
    },
    {
        id: "user-rights",
        emoji: "5️⃣",
        title: "Client & User Rights",
        icon: UserCheck,
        content: [
            {
                subtitle: "You have the right to:",
                items: [
                    "Request access to your personal data",
                    "Request correction of inaccurate information",
                    "Request deletion of your data",
                ],
            },
            {
                subtitle: "",
                items: [
                    "To exercise these rights, please contact us using the details provided below.",
                ],
            },
        ],
    },
    {
        id: "third-party-platforms",
        emoji: "6️⃣",
        title: "Third-Party Platforms",
        icon: Globe,
        content: [
            {
                subtitle: "",
                items: [
                    "Our services may involve third-party platforms such as Facebook (Meta), Instagram, and Google.",
                    "We are not responsible for the privacy practices of these platforms.",
                    "We encourage users to review their respective privacy policies.",
                ],
            },
        ],
    },
    {
        id: "updates",
        emoji: "7️⃣",
        title: "Updates to This Privacy Policy",
        icon: RefreshCw,
        content: [
            {
                subtitle: "",
                items: [
                    "We may update this Privacy Policy from time to time.",
                    "Any changes will be posted on this page with an updated effective date.",
                ],
            },
        ],
    },
];

const PrivacyPolicy = () => {
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
                            <Lock className="text-accent" size={16} />
                            <span className="text-sm font-medium text-accent">Privacy Policy</span>
                        </div>

                        <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
                            🔒 Your Privacy is
                            <span className="block mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                Our Priority
                            </span>
                        </h1>

                        <p className="text-body text-lg max-w-2xl mx-auto mb-6 animate-fade-in-up delay-200">
                            VarniElevate Media is committed to protecting the privacy and personal
                            information of our clients, users, and visitors.
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
                                    <FileText className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h2 className="heading-md text-foreground mb-4">
                                        About This Privacy Policy
                                    </h2>
                                    <p className="text-body leading-relaxed">
                                        VarniElevate Media ("we", "our", "us") is a Social Media Advertising & Digital
                                        Marketing Agency based in Surat, Gujarat, India. This Privacy Policy explains
                                        how we collect, use, disclose, and protect your information when you use our
                                        services or interact with us through our website, advertising platforms, or
                                        lead forms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Sections */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="group bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-card-hover"
                            >
                                {/* Section Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                                                            className="text-accent flex-shrink-0 mt-0.5"
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
                                        <span className="text-2xl">8️⃣</span>
                                        <h3 className="heading-sm text-foreground">Contact Information</h3>
                                    </div>
                                    <p className="text-body mb-6">
                                        If you have any questions or concerns regarding this Privacy Policy, please
                                        contact us:
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
                            Need More Information?
                        </h2>
                        <p className="text-body text-lg mb-10">
                            If you have any questions about our privacy practices or want to learn more about
                            how we protect your data, feel free to reach out.
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

export default PrivacyPolicy;
