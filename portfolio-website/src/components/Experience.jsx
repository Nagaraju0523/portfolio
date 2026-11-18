import {
  GraduationCap,
  Briefcase,
  Calendar,
  CheckCircle2,
  Award
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { timeline, certifications } = portfolioData;

  return (
    <section className="section-padding experience-section" id="experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Career Milestones</span>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Overview of professional journey, software engineering milestones, and academic foundation.
          </p>
        </div>

        {/* Minimal Timeline Overview Spine */}
        <div className="timeline-mini-spine-container" style={{ marginTop: 0 }}>
          <div className="timeline-vertical-spine">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-glass-item">
                <div className="timeline-node-halo">
                  {item.type === "Education" ? (
                    <GraduationCap size={18} className="node-icon" />
                  ) : (
                    <Briefcase size={18} className="node-icon" />
                  )}
                </div>

                <div className="timeline-glass-card">
                  <div className="timeline-card-header">
                    <div className="timeline-badge-group">
                      <span className="timeline-type-pill">{item.type}</span>
                      <span className="timeline-date-chip">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                      {item.isCurrent && (
                        <span className="timeline-current-pill">
                          <span className="beacon-core tiny" />
                          <span>Currently Employed</span>
                        </span>
                      )}
                    </div>
                    <span className="timeline-inst-label">{item.institution}</span>
                  </div>

                  <h3 className="timeline-card-title">{item.title}</h3>
                  <p className="timeline-card-desc">{item.description}</p>

                  <div className="timeline-highlights-row">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="timeline-bullet">
                        <CheckCircle2 size={13} className="text-teal" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section (Education is displayed in the career timeline above) */}
        <div className="cert-standalone-wrap" style={{ marginTop: "40px" }}>
          <div className="cert-standalone-card glass-card">
            <div className="edu-cert-card-header">
              <div className="edu-cert-icon-halo">
                <Award size={22} className="text-teal" />
              </div>
              <div>
                <span className="card-micro-label">Validated Credentials</span>
                <h3 className="card-block-title">Certifications</h3>
              </div>
            </div>

            <div className="cert-list-grid">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="cert-item-pill">
                  <div className="cert-item-info">
                    <strong className="cert-title-text">{cert.title}</strong>
                    <span className="cert-issuer-text">{cert.issuer}</span>
                  </div>
                  <span className="cert-verified-badge">
                    <CheckCircle2 size={13} className="text-emerald" />
                    <span>Verified</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
