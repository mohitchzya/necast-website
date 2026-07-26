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
        
        <img
          src="/necast_logo2.png"
          alt="NeCast Logo"
          width={dimensions.icon}
          height={dimensions.icon}
          referrerPolicy="no-referrer"
          className="relative z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] object-contain"
        />
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

