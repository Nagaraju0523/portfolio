import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import GnrLogo from "./GnrLogo";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-capsule-container glass-card-capsule">
        {/* Brand Logo with GNR Signature Logo */}
        <a href="#home" className="nav-brand-group">
          <div className="brand-gem-box">
            <GnrLogo size={32} />
          </div>
          <div className="brand-label-box">
            <span className="brand-name">Nagaraju</span>
          </div>
        </a>

        {/* Desktop Navigation Links with Active Indicator */}
        <nav className="desktop-glass-nav">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`glass-nav-item ${isActive ? "active-nav-item" : ""}`}
              >
                <span>{link.name}</span>
                {isActive && <span className="nav-active-pill" />}
              </a>
            );
          })}
        </nav>

        {/* Right Nav Group: Theme Toggle & Contact CTA */}
        <div className="nav-actions-group">
          <ThemeSelector />

          <a href="#contact" className="btn-hydro-primary btn-nav-cta">
            <span>Contact</span>
            <ArrowRight size={14} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {isOpen && (
        <div className="mobile-glass-drawer animate-fade">
          <div className="mobile-drawer-top">
            <span className="drawer-title">Navigation</span>
            <ThemeSelector />
          </div>

          <div className="mobile-drawer-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-drawer-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={14} className="drawer-arrow" />
              </a>
            ))}

            <a
              href="#contact"
              className="btn-hydro-primary mobile-cta-full"
              onClick={() => setIsOpen(false)}
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
