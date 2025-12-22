import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/20005bc2-ad17-482f-958d-b84328b2e081-removebg-preview.png";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-header"
          : "bg-[#0a0e27]"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.2">
            <img
              src={logoImage}
              alt="VarniElevate Media Logo"
              className="h-20 w-20 md:h-38 md:w-38 object-contain"
            />
            <span
              className={cn(
                "text-lg sm:text-xl md:text-2xl font-heading font-bold transition-colors duration-300",
                isScrolled || !isHomePage ? "text-primary" : "text-primary-foreground"
              )}
            >
              VarniElevate<span className="text-accent">Media</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 link-underline",
                  location.pathname === link.href
                    ? "text-accent"
                    : isScrolled || !isHomePage
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="nav-cta" asChild>
              <Link to="/contact">Book a Free Strategy Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-background",
            isMobileMenuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="accent" className="mt-2" asChild>
              <Link to="/contact">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
