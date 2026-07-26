import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: { icon: 28, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 36, text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 48, text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 64, text: 'text-4xl', gap: 'gap-4' },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none group cursor-pointer ${className}`}>
      {/* SVG Metallic Red and Silver "N" Emblem */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {/* Ambient red backlight glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C1121F] to-[#E63946] blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300 rounded-lg" />
        
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 filter drop-shadow-[0_2px_8px_rgba(193,18,31,0.5)]"
        >
          <defs>
            {/* Metallic Silver Left Stem Gradient */}
            <linearGradient id="silverStemLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#CBD5E1" />
              <stop offset="70%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Metallic Crimson Diagonal Gradient */}
            <linearGradient id="crimsonDiagonal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="35%" stopColor="#DC2626" />
              <stop offset="70%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#450A0A" />
            </linearGradient>

            {/* Metallic Silver Right Stem Gradient */}
            <linearGradient id="silverStemRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Chrome Edge Bevel Glow */}
            <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background Shield/Plate Outline (Subtle dark metallic) */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            fill="#0B0F28"
            stroke="url(#chromeBevel)"
            strokeWidth="2"
          />

          {/* Metallic N Shape Elements */}
          {/* Left Vertical Bar */}
          <path
            d="M24 22 C24 20.8954 24.8954 20 26 20 H36 C37.1046 20 38 20.8954 38 22 V78 C38 79.1046 37.1046 80 36 80 H26 C24.8954 80 24 79.1046 24 78 V22 Z"
            fill="url(#silverStemLeft)"
          />

          {/* Crimson Diagonal Beam */}
          <path
            d="M32 20 H44 L76 78 H64 L32 20 Z"
            fill="url(#crimsonDiagonal)"
          />

          {/* Right Vertical Bar */}
          <path
            d="M62 22 C62 20.8954 62.8954 20 64 20 H74 C75.1046 20 76 20.8954 76 22 V78 C76 79.1046 75.1046 80 74 80 H64 C62.8954 80 62 79.1046 62 78 V22 Z"
            fill="url(#silverStemRight)"
          />

          {/* Highlight Shine Reflection Lines */}
          <path
            d="M26 22 H36 V32 L26 22 Z"
            fill="#FFFFFF"
            fillOpacity="0.4"
          />
          <path
            d="M32 20 L44 20 L38 31 Z"
            fill="#FFAAAA"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${dimensions.text} font-black tracking-tight flex items-center`}>
            <span className="text-white">Ne</span>
            <span className="text-metallic-crimson font-black drop-shadow-[0_0_12px_rgba(193,18,31,0.6)]">Cast</span>
          </span>
          <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
            Android Streamer
          </span>
        </div>
      )}
    </div>
  );
};
