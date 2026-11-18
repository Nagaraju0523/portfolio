import { useState } from "react";
import { Phone, MessageSquare, Copy, Check, Send, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web Application (Python + React)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Nagaraju,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.service}\n\nProject Scope:\n${formData.message}\n`
    );

    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="section-padding contact-section" id="contact">
      {/* Flowing Water Effect behind this section */}
      <div className="contact-water-backdrop" aria-hidden="true">
        <div className="water-caustic-overlay" />
        <svg
          className="contact-wave-svg"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,138.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z"
          />
        </svg>
      </div>

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need a full-stack Python/FastAPI engineer, or want to discuss timelines? Send a message below.
          </p>
        </div>

        <div className="contact-glass-grid">
          {/* Left Column: Glass Contact Form */}
          <div className="contact-form-glass-card">
            <div className="card-glass-reflection" />
            <div className="form-card-header">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">Fill in the parameters below, or reach out directly via WhatsApp.</p>
            </div>

            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Check size={32} />
                </div>
                <h4>Inquiry Prepared!</h4>
                <p>
                  Your email client has been launched with your brief. If it didn't open automatically, write directly to <strong>{profile.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-hydro-glass"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "Full-Stack Web Application (Python + React)",
                      message: ""
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-inquiry-form">
                <div className="form-row-split">
                  <div className="form-field-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="service">Project Category</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Full-Stack Web Application (Python + React)">Full-Stack Web Application (Python + React)</option>
                    <option value="FastAPI / Python REST Microservice">FastAPI / Python REST Microservice</option>
                    <option value="React Frontend & Modern Web UI">React Frontend & Modern Web UI</option>
                    <option value="Database Engineering & MySQL Tuning">Database Engineering & MySQL Tuning</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message">Project Scope & Timeline</label>
                  <textarea
                    id="message"
                    rows="3"
                    required
                    placeholder="Tell me a bit about your goals, features, and target launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-hydro-primary submit-btn">
                  <span>Send Project Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels (Email, LinkedIn, GitHub, Phone, WhatsApp) */}
          <div className="contact-details-glass-card">
            <div className="card-glass-reflection" />
            <div className="channels-header">
              <h3 className="channels-title">Direct Channels</h3>
              <p className="channels-subtitle">Prefer instant messaging or want direct email? Reach me anytime below.</p>
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="email-glass-pill">
              <div className="email-meta-wrap">
                <span className="email-meta-label">Primary Email</span>
                <span className="email-meta-address">{profile.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-copy-email-chip"
                title="Copy Email to Clipboard"
                aria-label="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channel Cards */}
            <div className="channels-cards-list">
              {/* WhatsApp Quick Chat */}
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-glass-row"
              >
                <div className="channel-icon-gem gem-emerald">
                  <MessageSquare size={16} />
                </div>
                <div className="channel-info-text">
                  <strong className="channel-name">WhatsApp Quick Chat</strong>
                  <span className="channel-meta">{profile.phone} &bull; Instant chat</span>
                </div>
                <span className="channel-arrow">&rarr;</span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-glass-row"
              >
                <div className="channel-icon-gem gem-blue">
                  <LinkedinIcon size={16} />
                </div>
                <div className="channel-info-text">
                  <strong className="channel-name">LinkedIn Profile</strong>
                  <span className="channel-meta">Professional network & connections</span>
                </div>
                <span className="channel-arrow">&rarr;</span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-glass-row"
              >
                <div className="channel-icon-gem gem-purple">
                  <GithubIcon size={16} />
                </div>
                <div className="channel-info-text">
                  <strong className="channel-name">GitHub Repositories</strong>
                  <span className="channel-meta">Open-source code & active commits</span>
                </div>
                <span className="channel-arrow">&rarr;</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone}`}
                className="channel-glass-row"
              >
                <div className="channel-icon-gem gem-cyan">
                  <Phone size={16} />
                </div>
                <div className="channel-info-text">
                  <strong className="channel-name">Direct Phone Call</strong>
                  <span className="channel-meta">{profile.phone}</span>
                </div>
                <span className="channel-arrow">&rarr;</span>
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="response-guarantee-pill">
              <Clock size={14} className="text-cyan" />
              <span>Response guaranteed within 24 hours (usually under 2 hours)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
