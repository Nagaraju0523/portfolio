import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, AlertCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");
  const scrollBodyRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const modalContent = (
    <div
      className="project-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-container glass-modal-card"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => {
          if (scrollBodyRef.current && !e.target.closest(".modal-body-scrollable")) {
            scrollBodyRef.current.scrollTop += e.deltaY;
          }
        }}
      >
        {/* Pinned Top Bar */}
        <div className="modal-header-bar">
          <div className="modal-title-group">
            <span className="modal-category-tag">{project.category}</span>
            <span className="modal-metric-badge">{project.metrics}</span>
          </div>

          <button
            type="button"
            className="btn-modal-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close project details"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Middle Body */}
        <div className="modal-body-scrollable" ref={scrollBodyRef}>
          {/* Modal Hero Visual Canvas */}
          <div className="modal-preview-canvas">
            <div className="canvas-glass-reflection" />
            <div className="modal-canvas-header">
              <div className="mac-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="canvas-address">https://projects.nagaraju.dev/{project.id}</span>
            </div>

            <div className="modal-canvas-body">
              <div className="canvas-content-box">
                <span className="canvas-subtitle">{project.subtitle}</span>
                <h3 id="modal-project-title" className="canvas-title">
                  {project.title}
                </h3>
                <p className="canvas-tagline">{project.tagline}</p>
              </div>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="modal-tabs-row" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "overview"}
              className={`modal-tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <Layers size={15} />
              <span>Overview & Problem</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "features"}
              className={`modal-tab-btn ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              <CheckCircle2 size={15} />
              <span>Key Features</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "contribution"}
              className={`modal-tab-btn ${activeTab === "contribution" ? "active" : ""}`}
              onClick={() => setActiveTab("contribution")}
            >
              <Cpu size={15} />
              <span>My Contribution</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="modal-tab-content">
            {activeTab === "overview" && (
              <div className="tab-pane tab-overview animate-fade">
                <div className="overview-block">
                  <h4>Project Overview</h4>
                  <p>{project.overview}</p>
                </div>

                <div className="problem-statement-card">
                  <div className="statement-header">
                    <AlertCircle size={16} className="text-amber" />
                    <strong>Problem Statement</strong>
                  </div>
                  <p>{project.problemStatement}</p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="tab-pane tab-features animate-fade">
                <h4>Key Engineered Features</h4>
                <ul className="modal-features-list">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "contribution" && (
              <div className="tab-pane tab-contribution animate-fade">
                <h4>Architectural Role & Contribution</h4>
                <p className="contribution-text">{project.myContribution}</p>
              </div>
            )}
          </div>

          {/* Technology Badges Row */}
          <div className="modal-tech-bar">
            <span className="tech-bar-label">Technologies Used:</span>
            <div className="modal-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Bottom Footer Actions */}
        <div className="modal-footer-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hydro-primary modal-action-btn"
          >
            <GithubIcon size={17} />
            <span>GitHub Repository</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.liveUrl}
            className="btn-hydro-glass modal-action-btn"
            onClick={onClose}
          >
            <span>Live Demo</span>
            <ExternalLink size={15} />
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
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : modalContent;
}
