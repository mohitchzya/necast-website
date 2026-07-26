import React from 'react';
import { Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

interface PhoneFrameProps {
  imageSrc: string;
  altText?: string;
  title?: string;
  badge?: string;
  orientation?: 'portrait' | 'landscape';
  isFloating?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fit?: 'cover' | 'contain' | 'crop-top' | 'crop-bottom' | 'crop-center';
  cropStatusBar?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  imageSrc,
  altText = 'NeCast Android Screenshot',
  title,
  badge,
  orientation = 'portrait',
  isFloating = false,
  interactive = true,
  onClick,
  className = '',
  size = 'md',
  fit = 'cover',
  cropStatusBar = true,
}) => {
  const isLandscape = orientation === 'landscape';

  // Sizing styles for Portrait vs Landscape
  const portraitSizes = {
    sm: 'w-[135px] xs:w-[160px] sm:w-[220px] md:w-[280px] h-[275px] xs:h-[325px] sm:h-[450px] md:h-[570px]',
    md: 'w-[155px] xs:w-[185px] sm:w-[250px] md:w-[280px] h-[315px] xs:h-[375px] sm:h-[510px] md:h-[570px]',
    lg: 'w-[180px] xs:w-[210px] sm:w-[280px] md:w-[320px] h-[365px] xs:h-[425px] sm:h-[570px] md:h-[650px]',
    xl: 'w-[210px] xs:w-[240px] sm:w-[310px] md:w-[360px] h-[425px] xs:h-[485px] sm:h-[630px] md:h-[730px]',
  }[size];

  const landscapeSizes = {
    sm: 'w-[220px] xs:w-[280px] sm:w-[340px] md:w-[420px] h-[110px] xs:h-[140px] sm:h-[170px] md:h-[210px]',
    md: 'w-[260px] xs:w-[320px] sm:w-[420px] md:w-[480px] h-[130px] xs:h-[160px] sm:h-[210px] md:h-[240px]',
    lg: 'w-[300px] xs:w-[380px] sm:w-[500px] md:w-[600px] h-[150px] xs:h-[190px] sm:h-[250px] md:h-[300px]',
    xl: 'w-[340px] xs:w-[440px] sm:w-[580px] md:w-[700px] h-[170px] xs:h-[220px] sm:h-[290px] md:h-[350px]',
  }[size];

  const dimensionsClass = isLandscape ? landscapeSizes : portraitSizes;

  // Object fit & status bar cropping classes
  const fitClasses = {
    'cover': 'object-cover object-top',
    'contain': 'object-contain p-1 bg-black',
    'crop-top': 'object-cover object-top scale-110 origin-top',
    'crop-bottom': 'object-cover object-bottom scale-110 origin-bottom',
    'crop-center': 'object-cover object-center scale-105 origin-center',
  }[fit];

  // Status bar cropping style: crops top ~6% of image to eliminate raw Android system status bar overlap
  const cropTransformClass = cropStatusBar
    ? isLandscape
      ? 'scale-[1.05] -translate-y-[2%] origin-top'
      : 'scale-[1.08] -translate-y-[2.8%] origin-bottom'
    : '';

  return (
    <div
      onClick={onClick}
      className={`relative group select-none transition-all duration-500 ${
        isFloating ? 'animate-float-slow' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Phone Ambient Backlight Crimson Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#C1121F]/30 via-[#780000]/20 to-[#C1121F]/20 rounded-[50px] blur-2xl opacity-60 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

      {/* Main Outer Phone Body Chassis */}
      <div
        className={`relative mx-auto bg-[#090A0E] border-[3px] border-slate-800/90 ${
          isLandscape ? 'rounded-[28px] sm:rounded-[34px] p-2' : 'rounded-[36px] sm:rounded-[44px] p-2.5 sm:p-3'
        } shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(193,18,31,0.2)] group-hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,1),0_0_50px_rgba(193,18,31,0.4)] transition-all duration-500 overflow-hidden ${dimensionsClass}`}
      >
        {/* Shiny Polished Edge Bevel Highlight */}
        <div className="absolute inset-0 rounded-[34px] sm:rounded-[42px] border border-white/10 pointer-events-none z-30" />

        {/* Screen Container */}
        <div className="relative w-full h-full bg-black rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col border border-slate-900 group-hover:border-[#C1121F]/40 transition-colors duration-500">
          
          {/* Top Status Bar (Portrait Mode) */}
          {!isLandscape && (
            <div className="w-full pt-1.5 px-4 pb-1 flex items-center justify-between text-[10px] font-medium text-slate-400 z-20 bg-black/85 backdrop-blur-md shrink-0">
              <span className="font-bold tracking-tight text-white/90">09:41</span>
              
              {/* Punch Hole Camera */}
              <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-800 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
              </div>

              <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                <span className="text-[#C1121F] font-black">5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {/* Top Status Bar (Landscape Mode Side Notch) */}
          {isLandscape && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <div className="w-2.5 h-2.5 bg-black rounded-full border border-slate-800" />
            </div>
          )}

          {/* Screenshot Image Container */}
          <div className="relative flex-1 w-full h-full bg-black overflow-hidden flex items-center justify-center">
            <img
              src={imageSrc}
              alt={altText}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className={`w-full h-full ${fitClasses} ${cropTransformClass} transition-transform duration-700 group-hover:scale-110`}
            />

            {/* HDR Glass Reflection Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] pointer-events-none z-10" />

            {/* Hover Expand Overlay Indicator */}
            {interactive && onClick && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20 text-white">
                <div className="w-11 h-11 rounded-full bg-[#C1121F] text-white flex items-center justify-center shadow-lg shadow-red-950/60 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={20} />
                </div>
                <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">
                  Inspect Image
                </span>
              </div>
            )}
          </div>

          {/* Bottom Bar Indicator (Portrait) */}
          {!isLandscape && (
            <div className="w-full py-1 flex justify-center items-center z-20 bg-black/85 shrink-0">
              <div className="w-24 h-1 bg-white/30 rounded-full" />
            </div>
          )}
        </div>
      </div>

      {/* Optional Title & Badge below mockup */}
      {(title || badge) && (
        <div className="mt-3 text-center px-2">
          {badge && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/40 text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">
              {badge}
            </span>
          )}
          {title && (
            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#C1121F] transition-colors line-clamp-1">
              {title}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};
