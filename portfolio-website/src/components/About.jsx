import { Code2, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { profile, about } = portfolioData;

  const aboutPoints = [
    {
      icon: <Code2 size={20} className="icon-cyan" />,
      label: "Developer Identity",
      value: about.identity,
      desc: "Engineering scalable web applications from modular React frontends to robust Python/FastAPI services."
    },
    {
      icon: <Target size={20} className="icon-emerald" />,
      label: "Main Focus",
      value: about.focus,
      desc: "Delivering responsive user interfaces, sub-second API response times, and normalized database schemas."
    },
    {
      icon: <Sparkles size={20} className="icon-purple" />,
      label: "Technical Interests",
      value: about.interests,
      desc: "Modern responsive web apps, RESTful microservices, and asynchronous event-driven architecture."
    }
  ];

  return (
    <section className="section-padding about-section" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Professional Profile</span>
          <h2 className="section-title">
            About 
          </h2>
          <p className="section-subtitle">
            Compact overview of my technical identity, core focus, and engineering philosophy.
          </p>
        </div>

        {/* Compact Glassmorphism About Grid */}
        <div className="about-compact-grid">
          {aboutPoints.map((pt, idx) => (
            <div key={idx} className="about-glass-card">
              <div className="card-glass-reflection" />
              <div className="about-icon-bubble">{pt.icon}</div>
              <span className="about-card-badge">{pt.label}</span>
              <h3 className="about-card-value">{pt.value}</h3>
              <p className="about-card-text">{pt.desc}</p>
            </div>
          ))}
        </div>

        {/* Short Summary Callout Card */}
        <div className="about-summary-glass-bar">
          <div className="summary-text-block">
            <span className="summary-tag">The Philosophy</span>
            <p className="summary-sentence">{about.summary}</p>
          </div>
          <div className="summary-badges-row">
            <span className="summary-pill">
              <CheckCircle2 size={14} className="text-teal" />
              <span>Clean Code</span>
            </span>
            <span className="summary-pill">
              <CheckCircle2 size={14} className="text-teal" />
              <span>Scalable APIs</span>
            </span>
            <span className="summary-pill">
              <CheckCircle2 size={14} className="text-teal" />
             
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
