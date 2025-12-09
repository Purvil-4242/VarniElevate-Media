import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  Calendar,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate budget is selected
    if (!formData.budget) {
      toast({
        title: "Validation Error",
        description: "Please select a monthly ad budget.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Google Apps Script URL from environment variable
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      console.log("🔍 Debug Info:");
      console.log("Script URL:", scriptUrl);
      console.log("Form Data:", formData);

      if (!scriptUrl) {
        throw new Error("Google Script URL not configured");
      }

      // Submit to Google Sheets via Google Apps Script
      console.log("📤 Sending data to Google Sheets...");

      // Using no-cors mode because Google Apps Script doesn't support CORS properly
      // This means we can't read the response, but the submission will work
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Response received:", response);
      console.log("Response type:", response.type);
      console.log("✅ Request sent successfully!");
      console.log("⚠️ Note: With 'no-cors' mode, we cannot read the response");
      console.log("📊 Please check your Google Sheet to verify if data was added");

      // Show success message (we can't verify from response due to no-cors)
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        website: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Form submission error:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });

      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <MessageSquare className="text-accent" size={16} />
              <span className="text-sm font-medium text-accent">
                Let's Talk
              </span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up">
              Ready to Grow Your Business?
              <span className="block mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Let's Start the Conversation
              </span>
            </h1>

            <p className="text-body text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Fill out the form below and we'll get back to you within 24 hours
              with a customized strategy for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py0-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "vemedia.info@gmail.com",
                href: "mailto:vemedia.info@gmail.com",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Instagram,
                title: "Instagram",
                value: "@varnielevatemedia",
                href: "https://www.instagram.com/varnielevate_media?igsh=MXBmeTNmOXlhczZzOA==",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: Clock,
                title: "Response Time",
                value: "Within 24 Hours",
                href: "#",
                color: "from-purple-500 to-purple-600",
              },
            ].map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="mb-8">
                  <h2 className="heading-md text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-foreground"
                      >
                        Business Name *
                      </label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="Your business name"
                        className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91-XXXXXXXXXX"
                        className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-foreground"
                      >
                        Website / Social Media Links
                      </label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-foreground"
                      >
                        Monthly Ad Budget *
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-accent transition-colors">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">
                            $500 – $1,000
                          </SelectItem>
                          <SelectItem value="1000-3000">
                            $1,000 – $3,000
                          </SelectItem>
                          <SelectItem value="3000+">$3,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message / What are your goals? *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className="min-h-[150px] bg-background/50 border-border/50 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We respect your time and inbox. No spam, ever.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="heading-sm text-foreground mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <a
                    href="mailto:vemedia.info@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors break-words">
                        vemedia.info@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* <a
                    href="tel:+911234567890"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        +91-XXXXXXXXXX
                      </p>
                    </div>
                  </a> */}

                  {/* <div className="pt-6 border-t border-border">
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Calendar size={18} />
                        Schedule on Calendly
                      </a>
                    </Button>
                  </div> */}
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-accent" size={20} />
                  <h3 className="font-semibold text-foreground">
                    Why Choose Us?
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>24-hour response time guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Free strategy consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>No long-term contracts required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Proven track record of success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
