import { useEffect, useState } from "react";

export default function WaterBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="water-background-system" aria-hidden="true">
      {/* Interactive Mouse-Following Light Effect */}
      <div
        className="mouse-light-follower"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      />

      {/* Underwater Caustics & Ambient Light Beams */}
      <div className="water-ambient-beam beam-left" />
      <div className="water-ambient-beam beam-right" />
      <div className="water-caustic-layer" />

      {/* Floating Translucent Bubbles */}
      <div className="water-bubble-stream">
        <span className="bubble b-1" />
        <span className="bubble b-2" />
        <span className="bubble b-3" />
        <span className="bubble b-4" />
        <span className="bubble b-5" />
        <span className="bubble b-6" />
        <span className="bubble b-7" />
        <span className="bubble b-8" />
      </div>

      {/* Continuous Flowing Transparent Blue Wave Layers */}
      <div className="continuous-waves-wrap">
        <svg
          className="water-wave-svg wave-layer-1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <svg
          className="water-wave-svg wave-layer-2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <svg
          className="water-wave-svg wave-layer-3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
