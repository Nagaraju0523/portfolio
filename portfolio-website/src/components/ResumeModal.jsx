import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Printer, ExternalLink, Download, Briefcase, GraduationCap, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function ResumeModal({ isOpen, onClose }) {
  const { profile, skillsCategories, certifications } = portfolioData;
  const sheetRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="resume-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="resume-modal-card glass-modal-card"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => {
          if (sheetRef.current && !e.target.closest(".resume-sheet")) {
            sheetRef.current.scrollTop += e.deltaY;
          }
        }}
      >
        {/* Pinned Top Controls Bar */}
        <div className="resume-modal-topbar">
          <div className="resume-topbar-left">
            <span className="resume-badge-indicator">
              <span className="beacon-ping small" />
              <span className="beacon-core small" />
              <span>Current Employee: Tech Tammina LLC</span>
            </span>
          </div>

          <div className="resume-topbar-actions">
            {/* Download / Open Formatted Printable Resume */}
            <a
              href="/Nagaraju_Gajji_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-action btn-print-open"
              title="Open Printable / Downloadable Version in New Tab"
            >
              <Printer size={15} />
              <span>Print / Download PDF</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="/Nagaraju_Gajji_Resume.html"
              download="Nagaraju_Gajji_Resume.html"
              className="btn-resume-action btn-direct-dl"
              title="Download Resume HTML Document"
            >
              <Download size={15} />
              <span>Download</span>
            </a>

            <button
              type="button"
              className="btn-modal-close"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close Resume"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content Sheet */}
        <div className="resume-sheet" ref={sheetRef}>
          {/* Header */}
          <header className="resume-sheet-header">
            <div className="resume-identity-col">
              <h1 id="resume-modal-title" className="resume-name">{profile.name}</h1>
              <div className="resume-role-pill">
                <span>{profile.role}</span>
                <span className="pill-separator">&bull;</span>
                <span className="company-text">{profile.currentCompany}</span>
              </div>
            </div>

            <div className="resume-contact-col">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={14} />
                  <span>linkedin.com/in/nagaraju-yadav-820881315</span>
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={14} />
                  <span>github.com/nagarajugajji</span>
                </a>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">
              <span>Professional Summary</span>
            </h2>
            <p className="resume-summary-text">{profile.fullSummary}</p>
          </section>

          {/* Professional Experience */}
          <section className="resume-section">
            <h2 className="resume-section-title">
              <Briefcase size={16} className="text-teal" />
              <span>Professional Experience</span>
            </h2>

            <div className="resume-job-card">
              <div className="job-top-bar">
                <div className="job-meta-left">
                  <strong className="company-name">{profile.currentCompany}</strong>
                  <span className="job-separator">&mdash;</span>
                  <span className="job-role-text">{profile.role}</span>
                </div>
                <div className="job-badge-active">
                  <span className="active-dot" />
                  <span>{profile.workingPeriod} (Current)</span>
                </div>
              </div>

              {/* Project 1: AI-Powered Insurance Endorsement Automation System */}
              <div className="resume-project-item">
                <div className="proj-title-bar">
                  <strong>AI-Powered Insurance Endorsement Automation System</strong>
                  <span className="proj-tech-label">Email automation, LLMs</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed automated intake of insurance endorsement requests from shared mailboxes using Gmail and IMAP integrations to process messages and attachments.</li>
                  <li>Integrated LLM-based email interpretation and extraction of insurance information relevant to endorsement transactions.</li>
                  <li>Automated database updates and outgoing email responses based on identified requests and extracted transaction details.</li>
                </ul>
              </div>

              {/* Project 2: Smart Agent Platform */}
              <div className="resume-project-item">
                <div className="proj-title-bar">
                  <strong>Smart Agent Platform</strong>
                  <span className="proj-tech-label">Visual AI workflow automation</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developing a visual automation platform with reusable nodes for AI Agent, Chat Trigger, Chat Model, Gmail, IMAP, Code, If, and Telegram Trigger.</li>
                  <li>Implemented AI Agent capabilities to interpret user requests, choose connected tools, and execute tasks with integrated AI models.</li>
                  <li>Integrated external services and model APIs to support intelligent, reusable workflows; developing multi-agent task assignment and hierarchical execution.</li>
                </ul>
              </div>

              {/* Project 3: Commercial Fleet Management & Vehicle Valuation Platform */}
              <div className="resume-project-item">
                <div className="proj-title-bar">
                  <strong>Commercial Fleet Management & Vehicle Valuation Platform</strong>
                  <span className="proj-tech-label">Python, FastAPI, React.js, MySQL</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed a fleet management application for commercial auto insurance using Python, FastAPI, React.js, and MySQL.</li>
                  <li>Implemented comparison of commercial auto insurance documents to support review of vehicle and coverage information across records.</li>
                  <li>Integrated Kelley Blue Book (KBB) APIs to retrieve vehicle market values within the platform and support fleet valuation workflows.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">
              <ShieldCheck size={16} className="text-cyan" />
              <span>Technical Skills</span>
            </h2>

            <div className="resume-skills-grid">
              {skillsCategories.map((cat) => (
                <div key={cat.id} className="resume-skill-row">
                  <span className="skill-cat-name">{cat.title}:</span>
                  <span className="skill-cat-items">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
              <div className="resume-skill-row">
                <span className="skill-cat-name">Methodologies:</span>
                <span className="skill-cat-items">Agile / Scrum, cross-functional collaboration, clean code architecture</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="resume-section-title">
              <Award size={16} className="text-amber" />
              <span>Certifications</span>
            </h2>
            <div className="resume-certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="resume-cert-chip">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <strong>{cert.title}</strong>
                  <span className="cert-issuer">({cert.issuer})</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-title">
              <GraduationCap size={16} className="text-blue" />
              <span>Education</span>
            </h2>
            <div className="resume-edu-card">
              <div className="edu-left">
                <strong className="edu-title">B.Tech in Computer Science & Engineering</strong>
                <span className="edu-college">Malla Reddy College, Hyderabad, Telangana</span>
              </div>
              <span className="edu-graduation">Graduation: July 2025</span>
            </div>
          </section>
        </div>

        {/* Pinned Bottom Footer Bar */}
        <div className="resume-modal-footer">
          <div className="resume-footer-actions">
            <a
              href="/Nagaraju_Gajji_Resume.html"
              download="Nagaraju_Gajji_Resume.html"
              className="btn-hydro-primary modal-action-btn"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href="/Nagaraju_Gajji_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hydro-glass modal-action-btn"
            >
              <Printer size={15} />
              <span>Print / Open Tab</span>
            </a>

            <button
              type="button"
              className="btn-modal-dismiss"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : modalContent;
}
