import { motion } from 'motion/react';

export const GlassWireframe = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
      <defs>
        <linearGradient id="glass-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
        </linearGradient>
        <filter id="glass-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>
      {children}
    </svg>
  </div>
);

export const ReachIcon = () => (
  <GlassWireframe className="w-full h-full">
    <motion.circle 
      cx="50" cy="50" r="30" 
      fill="none" stroke="url(#glass-shine)" strokeWidth="2"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle 
      cx="50" cy="50" r="20" 
      fill="rgba(255,255,255,0.05)" stroke="url(#glass-shine)" strokeWidth="1.5"
      className="backdrop-blur-sm"
    />
    <motion.circle 
      cx="50" cy="50" r="4" 
      fill="#0064E0"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Connecting lines representing reach */}
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <motion.line
        key={i}
        x1="50" y1="50"
        x2={50 + Math.cos(angle * Math.PI / 180) * 40}
        y2={50 + Math.sin(angle * Math.PI / 180) * 40}
        stroke="url(#glass-shine)"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
  </GlassWireframe>
);

export const CompetitionIcon = () => (
  <GlassWireframe className="w-full h-full">
    {/* Other players (faded) */}
    <motion.rect x="10" y="40" width="15" height="40" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
    <motion.rect x="30" y="50" width="15" height="30" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
    <motion.rect x="75" y="45" width="15" height="35" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
    
    {/* You (highlighted & rising) */}
    <motion.g
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="50" y="20" width="20" height="60" rx="2" 
        fill="rgba(0,100,224,0.2)" 
        stroke="url(#glass-shine)" 
        strokeWidth="2"
        className="backdrop-blur-md"
      />
      <path d="M50 20 L60 10 L70 20" fill="none" stroke="#0064E0" strokeWidth="2" />
    </motion.g>
  </GlassWireframe>
);

export const CPCIcon = () => (
  <GlassWireframe className="w-full h-full">
    <motion.path
      d="M20 80 L40 60 L60 70 L90 30"
      fill="none"
      stroke="url(#glass-shine)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle cx="20" cy="80" r="3" fill="#0064E0" />
    <motion.circle cx="40" cy="60" r="3" fill="#0064E0" />
    <motion.circle cx="60" cy="70" r="3" fill="#0064E0" />
    <motion.circle cx="90" cy="30" r="3" fill="#0064E0" />
    
    {/* Coin dropping */}
    <motion.circle
      cx="80" cy="20" r="8"
      fill="rgba(255,255,255,0.1)"
      stroke="url(#glass-shine)"
      strokeWidth="1.5"
      animate={{ y: [0, 40], opacity: [1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <text x="80" y="23" fontSize="10" fill="white" textAnchor="middle">$</text>
    </motion.circle>
  </GlassWireframe>
);

export const NoCreativesIcon = () => (
  <GlassWireframe className="w-full h-full">
    {/* Stack of images being generated */}
    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x={30 + i * 5}
        y={30 - i * 5}
        width="40"
        height="40"
        rx="4"
        fill="rgba(255,255,255,0.05)"
        stroke="url(#glass-shine)"
        strokeWidth="1.5"
        className="backdrop-blur-sm"
        animate={{ 
          x: [30 + i * 5, 30 + i * 5 + 10, 30 + i * 5],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
    <motion.path
      d="M45 45 L55 55 L75 35"
      fill="none"
      stroke="#0064E0"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 2 }}
    />
  </GlassWireframe>
);

export const AutomationIcon = () => (
  <GlassWireframe className="w-full h-full">
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "50px 50px" }}
    >
      <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeDasharray="10 10" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="url(#glass-shine)" strokeWidth="2" />
    </motion.g>
    <motion.rect
      x="40" y="40" width="20" height="20" rx="4"
      fill="rgba(0,100,224,0.2)"
      stroke="#0064E0"
      strokeWidth="2"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </GlassWireframe>
);

export const CRMIntegrationIcon = () => (
  <GlassWireframe className="w-full h-full">
    {/* Database */}
    <path d="M30 30 C30 25 70 25 70 30 V70 C70 75 30 75 30 70 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
    <ellipse cx="50" cy="30" rx="20" ry="5" fill="none" stroke="url(#glass-shine)" />
    <path d="M30 50 C30 55 70 55 70 50" fill="none" stroke="rgba(255,255,255,0.1)" />
    
    {/* Data flowing out */}
    <motion.circle
      cx="50" cy="50" r="3"
      fill="#0064E0"
      animate={{ cx: [50, 80], cy: [50, 50], opacity: [1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle
      cx="50" cy="50" r="3"
      fill="#0064E0"
      animate={{ cx: [50, 20], cy: [50, 50], opacity: [1, 0] }}
      transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
    />
  </GlassWireframe>
);

export const StrategyIcon = () => (
  <GlassWireframe className="w-full h-full">
    {/* Chess piece / Strategy symbol */}
    <motion.path
      d="M50 20 L65 80 H35 Z"
      fill="rgba(255,255,255,0.05)"
      stroke="url(#glass-shine)"
      strokeWidth="2"
      className="backdrop-blur-sm"
    />
    <motion.circle
      cx="50" cy="20" r="8"
      fill="rgba(0,100,224,0.3)"
      stroke="#0064E0"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Target paths */}
    <motion.path
      d="M20 50 Q50 10 80 50"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeDasharray="4 4"
      animate={{ strokeDashoffset: [0, 20] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </GlassWireframe>
);

export const BrandIcon = () => (
  <GlassWireframe className="w-full h-full">
    <motion.rect
      x="30" y="30" width="40" height="40" rx="8"
      fill="rgba(255,255,255,0.05)"
      stroke="url(#glass-shine)"
      strokeWidth="2"
      className="backdrop-blur-sm"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M40 60 L50 40 L60 60"
      fill="none"
      stroke="#0064E0"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.circle
      cx="70" cy="30" r="4"
      fill="#0064E0"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </GlassWireframe>
);
