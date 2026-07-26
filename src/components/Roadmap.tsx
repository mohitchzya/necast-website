import React, { useState } from 'react';
import { Sparkles, ThumbsUp, CheckCircle2, Clock, Flame, ArrowUpRight } from 'lucide-react';
import { RoadmapItem } from '../types';

export const Roadmap: React.FC = () => {
  const [items, setItems] = useState<RoadmapItem[]>([
    {
      id: 'youtube',
      title: 'YouTube Live Integration',
      category: 'Released v1.0',
      status: 'released',
      votes: 1840,
      iconName: 'youtube',
      description: 'Official YouTube Studio API support with 1-tap OAuth login, auto stream key fetching, and live chat sync.',
    },
    {
      id: 'twitch',
      title: 'Twitch TV Support',
      category: 'In Development',
      status: 'in-progress',
      votes: 1420,
      iconName: 'twitch',
      description: 'Native Twitch OAuth 2.0 integration with Twitch Chat badges, channel points alerts, and stream category tags.',
    },
    {
      id: 'multi-streaming',
      title: 'Multi-Streaming Engine',
      category: 'In Development',
      status: 'in-progress',
      votes: 1290,
      iconName: 'layers',
      description: 'Broadcast simultaneously to YouTube, Twitch, and Kick without multiplying your phone upload bandwidth.',
    },
    {
      id: 'custom-rtmp',
      title: 'Custom RTMP / RTMPS',
      category: 'Coming Soon',
      status: 'planned',
      votes: 980,
      iconName: 'radio',
      description: 'Stream to any custom server URL with custom stream key authentication and SRT low-latency protocol.',
    },
    {
      id: 'kick',
      title: 'Kick.com Integration',
      category: 'Coming Soon',
      status: 'planned',
      votes: 840,
      iconName: 'flame',
      description: 'Direct Kick account pairing with live sub alerts and Kick chat overlay support.',
    },
    {
      id: 'tiktok',
      title: 'TikTok Live Vertical Engine',
      category: 'Planned',
      status: 'planned',
      votes: 760,
      iconName: 'video',
      description: 'Vertical 9:16 mobile streaming layout optimized for TikTok Live Studio stream keys and gift alerts.',
    },
    {
      id: 'facebook',
      title: 'Facebook Gaming',
      category: 'Planned',
      status: 'planned',
      votes: 510,
      iconName: 'facebook',
      description: 'Level Up creator support for Facebook Gaming live streams and page broadcasts.',
    },
  ]);

  const [votedIds, setVotedIds] = useState<string[]>([]);

  const handleVote = (id: string) => {
    if (votedIds.includes(id)) return;
    setVotedIds([...votedIds, id]);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item))
    );
  };

  const releasedItems = items.filter((i) => i.status === 'released');
  const inProgressItems = items.filter((i) => i.status === 'in-progress');
  const plannedItems = items.filter((i) => i.status === 'planned');

  return (
    <section id="roadmap" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Future Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Product Roadmap & Platform Expansion
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See what is live now and vote on upcoming platforms you want us to support next.
          </p>
        </div>

        {/* 3 Column Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Released */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30">
              <span className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={16} /> Currently Live
              </span>
              <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                v2.4 Ready
              </span>
            </div>

            {releasedItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl glass-card border-emerald-500/30 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-600 text-white">
                    YouTube Studio
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} /> Active
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: In Development */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
              <span className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Clock size={16} /> In Development
              </span>
              <span className="text-xs font-mono text-amber-400/80 bg-amber-950 px-2 py-0.5 rounded border border-amber-800/40">
                Q3 2026
              </span>
            </div>

            {inProgressItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl glass-card border-amber-500/30 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white">
                    {item.id === 'twitch' ? 'Twitch TV' : 'Multi-Stream'}
                  </span>
                  <button
                    onClick={() => handleVote(item.id)}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                      votedIds.includes(item.id)
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                        : 'bg-slate-900 text-amber-400 border-amber-500/30 hover:bg-amber-950/50'
                    }`}
                  >
                    <ThumbsUp size={12} />
                    <span>{item.votes}</span>
                  </button>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Coming Soon */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-500/30">
              <span className="text-sm font-extrabold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Flame size={16} /> Upvote Roadmap
              </span>
              <span className="text-xs font-mono text-blue-400/80 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">
                Backlog
              </span>
            </div>

            {plannedItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl glass-card border-slate-800 space-y-3 relative overflow-hidden hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                    {item.id}
                  </span>
                  <button
                    onClick={() => handleVote(item.id)}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                      votedIds.includes(item.id)
                        ? 'bg-blue-500 text-white border-blue-400 font-black'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white hover:border-blue-500/50'
                    }`}
                  >
                    <ThumbsUp size={12} />
                    <span>{item.votes}</span>
                  </button>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
