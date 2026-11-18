import { Layers, Layout, Server, Wrench, Check, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Services() {
  const { services } = portfolioData;

  const getServiceIcon = (id) => {
    switch (id) {
      case "fullstack":
        return <Layers className="service-icon icon-cyan" size={28} />;
      case "frontend":
        return <Layout className="service-icon icon-indigo" size={28} />;
      case "backend":
        return <Server className="service-icon icon-emerald" size={28} />;
      case "refactoring":
        return <Wrench className="service-icon icon-purple" size={28} />;
      default:
        return <Layers className="service-icon" size={28} />;
    }
  };

  return (
    <section className="section-padding services-section" id="services">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Services & Solutions</span>
          <h2 className="section-title">
            How I Can Help Your <span className="gradient-text">Business Scale</span>
          </h2>
          <p className="section-subtitle">
            Tailored engineering services designed to turn product ideas into fast, secure, and revenue-generating digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="service-card-top">
                <div className="service-icon-wrapper">
                  {getServiceIcon(service.id)}
                </div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              {/* Deliverables checklist */}
              <div className="service-deliverables">
                <span className="deliverables-heading">What's Included:</span>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <Check size={16} className="deliverable-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="service-action-wrap">
                <a href="#contact" className="service-link">
                  <span>Discuss this service</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
