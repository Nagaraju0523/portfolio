import { Search, Layers, Code2, Rocket, ShieldCheck, HeartHandshake, Clock, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Process() {
  const { process, guarantees } = portfolioData;

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case "Search":
        return <Search size={22} className="step-icon" />;
      case "Layers":
        return <Layers size={22} className="step-icon" />;
      case "Code2":
        return <Code2 size={22} className="step-icon" />;
      case "Rocket":
        return <Rocket size={22} className="step-icon" />;
      default:
        return <Sparkles size={22} className="step-icon" />;
    }
  };

  const guaranteeIcons = [
    <ShieldCheck size={24} className="guarantee-icon icon-cyan" key="shield" />,
    <HeartHandshake size={24} className="guarantee-icon icon-emerald" key="handshake" />,
    <Clock size={24} className="guarantee-icon icon-indigo" key="clock" />,
    <Sparkles size={24} className="guarantee-icon icon-purple" key="sparkles" />
  ];

  return (
    <section className="section-padding process-section" id="process">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Work Methodology</span>
          <h2 className="section-title">
            A Transparent, <span className="gradient-text">Zero-Friction Process</span>
          </h2>
          <p className="section-subtitle">
            Hiring a freelancer shouldn't feel like a gamble. Here is the structured roadmap I follow from initial brainstorm to production launch.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="process-grid">
          {process.map((item) => (
            <div key={item.step} className="process-card">
              <div className="process-card-top">
                <span className="process-number">{item.step}</span>
                <div className="process-icon-circle">{getStepIcon(item.icon)}</div>
              </div>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Client Guarantees Box */}
        <div className="guarantees-wrapper">
          <div className="guarantees-header text-center">
            <h3 className="guarantees-title">The Client Commitment</h3>
            <p className="guarantees-subtitle">
              Every freelance contract comes backed by clear professional standards:
            </p>
          </div>

          <div className="guarantees-grid">
            {guarantees.map((g, idx) => (
              <div key={idx} className="guarantee-card">
                <div className="guarantee-icon-box">{guaranteeIcons[idx % guaranteeIcons.length]}</div>
                <h4 className="guarantee-card-title">{g.title}</h4>
                <p className="guarantee-card-desc">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
