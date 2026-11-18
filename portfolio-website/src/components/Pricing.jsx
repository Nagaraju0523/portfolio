import { Check, Sparkles, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Pricing() {
  const { pricingPlans } = portfolioData;

  return (
    <section className="section-padding pricing-section" id="pricing">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Engagement Options</span>
          <h2 className="section-title">
            Flexible <span className="gradient-text">Pricing & Collaboration</span>
          </h2>
          <p className="section-subtitle">
            Transparent engagement models tailored to your project scope, budget, and development timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlight ? "highlighted-plan" : ""}`}
            >
              {plan.highlight && (
                <div className="popular-badge-ribbon">
                  <Sparkles size={14} />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="pricing-card-header">
                {!plan.highlight && <span className="plan-badge-simple">{plan.badge}</span>}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>

                <div className="plan-price-wrap">
                  <span className="price-val">{plan.price}</span>
                  <span className="price-time">/ {plan.timeframe}</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="plan-features-wrap">
                <span className="features-subhead">Package Deliverables:</span>
                <ul className="plan-features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="plan-feature-item">
                      <Check size={16} className="plan-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="plan-action-wrap">
                <a
                  href="#contact"
                  className={`btn-plan ${plan.highlight ? "btn-plan-primary" : "btn-plan-outline"}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Consultation Banner */}
        <div className="custom-scope-callout">
          <div className="callout-content">
            <h4>Have a custom scope or ongoing retainer in mind?</h4>
            <p>I can tailor a custom proposal, milestone schedule, or fixed budget that fits your exact technical roadmap.</p>
          </div>
          <a href="#contact" className="btn-callout">
            <span>Schedule a Free Call</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
