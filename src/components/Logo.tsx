import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const NeCastEmblemSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="redMainGrad" x1="120" y1="80" x2="300" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF2A36" />
          <stop offset="35%" stopColor="#DC0B17" />
          <stop offset="70%" stopColor="#8A020B" />
          <stop offset="100%" stopColor="#4A0005" />
        </linearGradient>

        <linearGradient id="redFacetGrad" x1="180" y1="90" x2="250" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA0A6" />
          <stop offset="25%" stopColor="#FF2A36" />
          <stop offset="70%" stopColor="#B00510" />
          <stop offset="100%" stopColor="#500006" />
        </linearGradient>

        <linearGradient id="redDarkFacet" x1="140" y1="200" x2="280" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#80020A" />
          <stop offset="50%" stopColor="#480005" />
          <stop offset="100%" stopColor="#1A0002" />
        </linearGradient>

        <linearGradient id="swooshGrad" x1="90" y1="120" x2="200" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF2A36" />
          <stop offset="50%" stopColor="#B50510" />
          <stop offset="100%" stopColor="#4A0005" />
        </linearGradient>

        <linearGradient id="silverMainGrad" x1="220" y1="180" x2="380" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E2E8F0" />
          <stop offset="65%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        <linearGradient id="silverFacetGrad" x1="280" y1="200" x2="370" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#CBD5E1" />
          <stop offset="80%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        <linearGradient id="silverDarkFacet" x1="230" y1="220" x2="340" y2="390" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C1121F" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter="url(#logoShadow)">
        <path
          d="M 235 80 C 130 110 95 190 135 340 C 120 290 125 200 180 130 C 200 105 220 90 235 80 Z"
          fill="black"
          stroke="black"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <path
          d="M 235 80 C 130 110 95 190 135 340 C 120 290 125 200 180 130 C 200 105 220 90 235 80 Z"
          fill="url(#swooshGrad)"
          stroke="#4A0005"
          strokeWidth="2"
        />

        <path
          d="M 302 181 L 377 220 L 340 398 L 225 228 Z"
          fill="black"
          stroke="black"
          strokeWidth="14"
          strokeLinejoin="round"
        />

        <path
          d="M 302 181 L 377 220 L 340 398 L 290 280 Z"
          fill="url(#silverMainGrad)"
          stroke="#1E293B"
          strokeWidth="1"
        />

        <path
          d="M 377 220 L 340 398 L 330 350 L 302 181 Z"
          fill="url(#silverFacetGrad)"
        />

        <path
          d="M 340 398 L 225 228 L 290 280 Z"
          fill="url(#silverDarkFacet)"
        />

        <path
          d="M 302 181 L 340 398"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M 183 102 L 310 270 L 230 310 L 126 395 L 142 280 L 183 102 Z"
          fill="black"
          stroke="black"
          strokeWidth="16"
          strokeLinejoin="round"
        />

        <path
          d="M 183 102 L 195 240 L 126 395 L 142 280 Z"
          fill="url(#redFacetGrad)"
        />

        <path
          d="M 183 102 L 310 270 L 210 260 L 195 240 Z"
          fill="url(#redMainGrad)"
        />

        <path
          d="M 310 270 L 230 310 L 195 240 Z"
          fill="url(#redDarkFacet)"
        />

        <path
          d="M 195 240 L 230 310 L 126 395 Z"
          fill="url(#redMainGrad)"
        />

        <path
          d="M 183 102 L 195 240 L 126 395"
          stroke="#FFA0A6"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M 183 102 L 310 270"
          stroke="#FF2A36"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: { icon: 32, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 40, text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 56, text: 'text-3xl', gap: 'gap-3' },
    xl: { icon: 80, text: 'text-5xl', gap: 'gap-4' },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none group cursor-pointer ${className}`}>
      {/* Metallic Red & Chrome Silver Logo Emblem */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
        {/* Ambient Red Glow */}
        <div className="absolute inset-0 bg-[#C1121F] blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-300 rounded-full" />
        
        <NeCastEmblemSVG size={dimensions.icon} className="relative z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] object-contain" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${dimensions.text} font-black tracking-tight flex items-center italic`}>
            <span className="text-white">Ne</span>
            <span className="text-[#C1121F] font-black drop-shadow-[0_0_12px_rgba(193,18,31,0.6)]">Cast</span>
          </span>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
            Android Streamer
          </span>
        </div>
      )}
    </div>
  );
};


