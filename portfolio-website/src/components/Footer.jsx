import { ArrowUp, Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import GnrLogo from "./GnrLogo";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="section-container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="brand-gem-box">
                <GnrLogo size={28} />
              </div>
              <span className="footer-brand-name">{profile.name}</span>
            </div>
            <p className="footer-tagline">
              Jr. Software Engineer specializing in AI-powered automation, LLM integrations, Python, FastAPI, and fluid interactive web applications.
            </p>
            <div className="footer-social-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="social-circle"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills Stack</a></li>
              <li><a href="#projects">Interactive Projects</a></li>
              <li><a href="#experience">Education & Experience</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>

          {/* Core Tech Stack Col */}
          <div className="footer-nav-col">
            <span className="footer-col-title">Tech Focus</span>
            <ul className="footer-links">
              <li><a href="#skills">AI Agents & Multi-Agent</a></li>
              <li><a href="#skills">LLMs (Gemini, Claude, OpenAI)</a></li>
              <li><a href="#skills">Python & FastAPI Backends</a></li>
              <li><a href="#skills">React.js Single Page Apps</a></li>
              <li><a href="#skills">MySQL Relational Schemas</a></li>
            </ul>
          </div>

          {/* CTA Col */}
          <div className="footer-cta-col">
            <span className="footer-col-title">Ready to Collaborate?</span>
            
            <a href="#contact" className="btn-hydro-primary footer-cta-btn">
              <span>Initiate Project</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="btn-scroll-top" title="Back to top" type="button">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
