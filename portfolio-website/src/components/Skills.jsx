import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  PythonIcon,
  FastApiIcon,
  MysqlIcon,
  GitIcon,
  GithubIcon,
  RestApiIcon
} from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skillsCategories } = portfolioData;

  const renderIcon = (icon) => {
    switch (icon) {
      case "html":
        return <HtmlIcon size={26} />;
      case "css":
        return <CssIcon size={26} />;
      case "js":
        return <JsIcon size={26} />;
      case "react":
        return <ReactIcon size={26} />;
      case "python":
        return <PythonIcon size={26} />;
      case "fastapi":
        return <FastApiIcon size={26} />;
      case "mysql":
        return <MysqlIcon size={26} />;
      case "git":
        return <GitIcon size={26} />;
      case "github":
        return <GithubIcon size={24} className="text-primary" />;
      case "api":
        return <RestApiIcon size={24} className="text-cyan" />;
      default:
        return <ReactIcon size={26} />;
    }
  };

  return (
    <section className="section-padding skills-section" id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Technical Mastery</span>
          <h2 className="section-title">
            Core <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive overview of the languages, frameworks, databases, and tooling powering modern full-stack web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-compact-grid">
          {skillsCategories.map((category) => (
            <div key={category.id} className="skills-category-glass-card">
              <div className="category-header">
                <span className="category-tag-badge">{category.title}</span>
              </div>

              {/* Individual Compact Interactive Glass Skill Tiles */}
              <div className="skills-tiles-row">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-glass-pill-tile">
                    <div className="skill-pill-reflection" />
                    <div className="skill-icon-bubble">
                      {renderIcon(skill.icon)}
                    </div>
                    <span className="skill-label-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
