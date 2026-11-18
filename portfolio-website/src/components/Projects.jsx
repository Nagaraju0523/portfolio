import { useState } from "react";
import { ArrowRight, Layers, Shield, Video, LayoutDashboard } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // 3D tilt calculation on card hover
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case "secure-transfer":
        return <Shield size={24} className="icon-cyan" />;
      case "proctoring-system":
        return <Video size={24} className="icon-emerald" />;
      case "client-portal":
        return <LayoutDashboard size={24} className="icon-indigo" />;
      default:
        return <Layers size={24} className="icon-cyan" />;
    }
  };

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Projects</span>
          </h2>
          
        </div>

        {/* Responsive Grid of Interactive Glass Project Cards */}
        <div className="projects-interactive-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-glass-card group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProject(project)}
            >
              {/* Glass Reflection Overlay */}
              <div className="card-glass-reflection" />

              {/* Card Preview Header */}
              <div className="project-card-visual-frame">
                <div className="browser-mock-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="mock-slug">{project.id}.dev</span>
                </div>

                <div className="project-thumbnail-box">
                  <div className="project-icon-halo">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="project-metric-pill">{project.metrics}</span>
                </div>
              </div>

              {/* Project Title & Minimal One-Line Description */}
              <div className="project-card-body">
                <div className="project-category-row">
                  <span className="category-pill">{project.category}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-min-desc">{project.shortDesc}</p>

                {/* Small Technology Tags */}
                <div className="project-tech-pills">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag-sm tag-more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Interaction CTA */}
                <div className="project-card-footer-cta">
                  <button
                    type="button"
                    className="btn-view-details"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Project Details Glassmorphism Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
