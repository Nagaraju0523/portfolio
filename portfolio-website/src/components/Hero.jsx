import { useState } from "react";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

export default function Hero({ onOpenResume }) {
  const { profile } = portfolioData;
  const [glassState, setGlassState] = useState("intact"); // "intact" | "breaking" | "healing"

  const handlePortraitClick = () => {
    if (glassState !== "intact") return;
    setGlassState("breaking");

    // After shatter and white smoke dust burst, start healing slowly
    setTimeout(() => {
      setGlassState("healing");
    }, 900);

    // Return completely to normal stage slowly
    setTimeout(() => {
      setGlassState("intact");
    }, 2400);
  };

  return (
    <section className="hero-section" id="home">
      <div className="section-container hero-container">
        <div className="hero-grid">
          {/* Left Column: Intro, Title, CTAs & Socials */}
          <div className="hero-content">
            {/* Name & Professional Title */}
            <h1 className="hero-name-title">
              <span className="hero-salutation">Hello, I'm</span>
              <span className="hero-name-strong">{profile.name}</span>
              <span className="hero-role-gradient">{profile.role}</span>
            </h1>

            {/* Short Impactful Intro (Max 2 lines) */}
            <p className="hero-impactful-intro">
              {profile.shortBio}
            </p>

            {/* Action Buttons: View Projects, Single High-Visibility Resume Button, and Contact Me */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn-hydro-primary">
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              {/* The Single Dedicated, Highly Visible Resume Button */}
              <button
                type="button"
                className="btn-resume-single"
                onClick={onOpenResume}
                aria-label="View Professional Resume"
                title="View & Download Full Resume"
              >
                <FileText size={17} className="btn-resume-icon" />
                <span>View Resume</span>
              </button>

              <a href="#contact" className="btn-hydro-glass">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Small Social Media Icons: GitHub & LinkedIn */}
            <div className="hero-socials-row">
              <span className="socials-label">Connect:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image with Surrounding Glass Shatter & White Smoke Dust Effect */}
          <div className="hero-visual">
            <div
              className={`water-portrait-wrapper surrounding-break-wrapper ${glassState !== "intact" ? "is-shattered" : ""}`}
              onClick={handlePortraitClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handlePortraitClick();
                }
              }}
              title="Click: surrounding glass area breaks with white smoke dust and slowly returns to normal"
              aria-label="Interactive profile image: click to shatter surrounding glass area"
            >
              {/* Normal Time: Ambient White Smoke continuously emerging from image and disappearing */}
              <div
                className={`ambient-portrait-smoke ${glassState !== "intact" ? "is-suppressed" : ""}`}
                aria-hidden="true"
              >
                <div className="smoke-wisp wisp-1" />
                <div className="smoke-wisp wisp-2" />
                <div className="smoke-wisp wisp-3" />
                <div className="smoke-wisp wisp-4" />
                <div className="smoke-wisp wisp-5" />
                <div className="smoke-wisp wisp-6" />
                <div className="smoke-wisp wisp-7" />
                <div className="smoke-wisp wisp-8" />
              </div>

              {/* Surrounding White Smoke Dust Burst on Glass Break (around perimeter) */}
              {glassState !== "intact" && (
                <div className={`perimeter-smoke-dust-system ${glassState === "healing" ? "is-healing" : "is-bursting"}`}>
                  <div className="perimeter-smoke-puff ring-puff-1" />
                  <div className="perimeter-smoke-puff ring-puff-2" />
                  <div className="perimeter-smoke-puff ring-puff-3" />
                  <div className="perimeter-smoke-puff ring-puff-4" />
                  <div className="perimeter-smoke-puff ring-puff-5" />
                  <div className="perimeter-smoke-puff ring-puff-6" />
                  <div className="perimeter-smoke-puff ring-puff-7" />
                  <div className="perimeter-smoke-puff ring-puff-8" />
                  <div className="perimeter-cloud-haze ring-haze-top" />
                  <div className="perimeter-cloud-haze ring-haze-right" />
                  <div className="perimeter-cloud-haze ring-haze-bottom" />
                  <div className="perimeter-cloud-haze ring-haze-left" />
                </div>
              )}

              {/* The Surrounding Glass Halo / Outer Breakable Frame */}
              <div
                className={`surrounding-glass-ring ${
                  glassState === "breaking" ? "ring-breaking" : glassState === "healing" ? "ring-healing" : ""
                }`}
              >
                {/* Fractured Glass Crack Lines Overlay - Strictly Masked to Around the Image Only */}
                {glassState !== "intact" && (
                  <div className={`surrounding-fracture-overlay ${glassState === "healing" ? "cracks-healing" : "cracks-active"}`}>
                    <svg className="surrounding-cracks-svg" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        {/* Mask to ensure cracks are strictly in the outer surrounding area, NEVER over the avatar */}
                        <mask id="outerRingOnlyMask">
                          <rect x="0" y="0" width="380" height="380" fill="white" />
                          <circle cx="190" cy="190" r="148" fill="black" />
                        </mask>
                      </defs>

                      <g mask="url(#outerRingOnlyMask)">
                        {/* Outer Concentric Stress Fracture Rings */}
                        <circle cx="190" cy="190" r="156" className="outer-crack-ring inner-stress" />
                        <circle cx="190" cy="190" r="172" className="outer-crack-ring mid-stress" />
                        <circle cx="190" cy="190" r="184" className="outer-crack-ring outer-stress" />

                        {/* Jagged Radial Glass Break Lines around the Perimeter */}
                        {/* Top-Left */}
                        <path d="M190,190 L130,130 L95,85 L50,60 M95,85 L65,115 M130,130 L80,145" className="outer-crack-ray" />
                        {/* Top */}
                        <path d="M190,190 L190,110 L165,60 L180,15 M165,60 L210,40" className="outer-crack-ray" />
                        {/* Top-Right */}
                        <path d="M190,190 L250,130 L295,85 L330,60 M295,85 L315,120 M250,130 L300,145" className="outer-crack-ray" />
                        {/* Right */}
                        <path d="M190,190 L270,190 L320,165 L365,185 M320,165 L345,215" className="outer-crack-ray" />
                        {/* Bottom-Right */}
                        <path d="M190,190 L250,250 L295,295 L335,320 M295,295 L320,260 M250,250 L270,335" className="outer-crack-ray" />
                        {/* Bottom */}
                        <path d="M190,190 L190,270 L215,320 L195,365 M215,320 L165,340" className="outer-crack-ray" />
                        {/* Bottom-Left */}
                        <path d="M190,190 L130,250 L85,295 L45,320 M85,295 L60,260 M130,250 L110,335" className="outer-crack-ray" />
                        {/* Left */}
                        <path d="M190,190 L110,190 L60,165 L15,190 M60,165 L35,215" className="outer-crack-ray" />

                        {/* Micro Splinters in Outer Ring */}
                        <line x1="85" y1="90" x2="68" y2="75" className="outer-crack-splinter" />
                        <line x1="295" y1="90" x2="312" y2="75" className="outer-crack-splinter" />
                        <line x1="330" y1="190" x2="350" y2="175" className="outer-crack-splinter" />
                        <line x1="295" y1="295" x2="315" y2="315" className="outer-crack-splinter" />
                        <line x1="85" y1="295" x2="65" y2="315" className="outer-crack-splinter" />
                        <line x1="50" y1="190" x2="30" y2="205" className="outer-crack-splinter" />
                      </g>
                    </svg>

                    {/* 3D Crystalline Broken Glass Cluster (Matching the uploaded reference photo) */}
                    <div className="crystal-prism-cluster">
                      <div className="crystal-shard c-shard-1"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-2"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-3"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-4"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-5"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-6"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-7"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-8"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-9"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-10"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-11"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-12"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-13"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-14"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-15"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                      <div className="crystal-shard c-shard-16"><div className="crystal-facet-front" /><div className="crystal-facet-edge" /></div>
                    </div>
                  </div>
                )}

                {/* Healing Luminous Sweep around the outer ring */}
                {glassState === "healing" && <div className="surrounding-healing-ring" />}
              </div>

              {/* Fluid Water Shade Ripple Backdrop */}
              <div className="avatar-water-shade-backdrop" aria-hidden="true" />

              {/* Expanding Water Waves Effect (Emanating from backside of profile image and slowly disappearing) */}
              <div
                className={`portrait-water-waves-system ${glassState === "breaking" ? "is-bursting" : ""}`}
                aria-hidden="true"
              >
                <div className="water-wave-ring wave-ring-1" />
                <div className="water-wave-ring wave-ring-2" />
                <div className="water-wave-ring wave-ring-3" />
                <div className="water-wave-ring wave-ring-4" />
              </div>

              {/* Central Profile Image (No round border, smoothly shaded as water into background) */}
              <div className={`portrait-avatar-core ${glassState === "breaking" ? "core-pulse" : ""}`}>
                <img
                  src={profileImg}
                  alt={profile.name}
                  className="hero-portrait-image"
                />
                {/* Water shade vignette overlay */}
                <div className="avatar-water-vignette" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
