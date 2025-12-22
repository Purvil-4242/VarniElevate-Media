import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold">
                VarniElevate<span className="text-accent">Media</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              VarniElevate Media is a performance-focused social media ads
              agency helping brands grow with Facebook & Instagram advertising.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61584699487458"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/varnielevate_media?igsh=MXBmeTNmOXlhczZzOA=="
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/varnielevate-media/"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Facebook Ads Management",
                "Instagram Ads Management",
                "Ad Creatives & Copywriting",
                "Analytics & Optimization",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:vemedia.info@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} className="text-accent" />
                  vemedia.info@gmail.com
                </a>
              </li>
              <li>
                {/* <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} className="text-accent" />
                  +91-XXXXXXXXXX
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {currentYear} VarniElevate Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
