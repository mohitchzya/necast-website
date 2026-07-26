import React from 'react';

export const IntegrationsBar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="h-20 sm:h-24 glass-card border-t-0 rounded-2xl flex flex-col sm:flex-row items-center px-6 sm:px-10 gap-4 sm:gap-10 justify-between">
        <div className="text-xs font-bold text-white/30 uppercase tracking-widest shrink-0">
          Integrated with
        </div>
        <div className="flex-1 w-full flex items-center justify-between sm:justify-around opacity-60 hover:opacity-100 transition-all text-xs sm:text-sm font-bold text-white/90 gap-4">
          <span className="hover:text-red-500 transition-colors cursor-default">YouTube Live</span>
          <span className="hover:text-red-400 transition-colors cursor-default">Custom RTMP Ingest</span>
          <span className="hover:text-blue-400 transition-colors cursor-default">Google OAuth 2.0</span>
          <span className="hover:text-emerald-400 transition-colors cursor-default">Android Hardware Encoder</span>
        </div>
      </div>
    </div>
  );
};
