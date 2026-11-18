export default function GnrLogo({ size = 32, className = "" }) {
  // Aspect ratio is 56:38
  const height = Math.round((size * 38) / 56);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 56 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`gnr-signature-logo ${className}`}
      aria-label="GNR signature logo"
    >
      <defs>
        <linearGradient id="gnrSignatureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="gnrGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#06b6d4" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Main signature text 'gnr' with dynamic cursive flourish */}
      <g filter="url(#gnrGlow)">
        <text
          x="27"
          y="23"
          textAnchor="middle"
          fontFamily="'Caveat', 'Dancing Script', 'Brush Script MT', 'Segoe Script', cursive"
          fontSize="26"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="-0.5px"
          fill="url(#gnrSignatureGradient)"
          transform="rotate(-5 27 20)"
        >
          gnr
        </text>

        {/* Dynamic calligraphic underline swash */}
        <path
          d="M 8 30 C 20 34, 36 33, 47 25"
          stroke="url(#gnrSignatureGradient)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Signature terminal accent dot */}
        <circle cx="50" cy="24.2" r="1.4" fill="url(#gnrSignatureGradient)" />
      </g>
    </svg>
  );
}
