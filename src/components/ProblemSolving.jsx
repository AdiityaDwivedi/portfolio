import React from 'react';
import { sound } from '../utils/audio';
import { ExternalLink, Terminal, Code2, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';

export default function ProblemSolving() {
  const profiles = [
    {
      name: 'LeetCode',
      handle: '@adiityadwivedi',
      url: 'https://leetcode.com/u/adiityadwivedi/',
      tag: 'DSA & PRACTICE',
      icon: LeetCodeIcon,
      accentBorder: 'border-[#FFA116]',
      btnStyle: 'mc-btn-stone',
      description: 'Practicing data structures, algorithmic puzzles, and backend logic.'
    },
    {
      name: 'Codeforces',
      handle: '@AdiityaDwivedi',
      url: 'https://codeforces.com/profile/AdiityaDwivedi',
      tag: 'COMPETITIVE PROGRAMMING',
      icon: CodeforcesIcon,
      accentBorder: 'border-[#1890FF]',
      btnStyle: 'mc-btn-stone',
      description: 'Participating in timed algorithmic rounds and exploring math/logic problems in C++.'
    },
    {
      name: 'GitHub',
      handle: '@AdiityaDwivedi',
      url: 'https://github.com/AdiityaDwivedi',
      tag: 'OPEN SOURCE & REPOS',
      icon: GithubIcon,
      accentBorder: 'border-[#55FF55]',
      btnStyle: 'mc-btn-green',
      description: 'Code repositories, backend services, experimental AI projects, and utilities.'
    },
    {
      name: 'LinkedIn',
      handle: '@adiityadwivedi',
      url: 'https://linkedin.com/in/adiityadwivedi',
      tag: 'NETWORK & UPDATES',
      icon: LinkedinIcon,
      accentBorder: 'border-[#4DEEEA]',
      btnStyle: 'mc-btn-diamond',
      description: 'Connecting with fellow engineers, builders, and recruiters.'
    }
  ];

  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B1B1B] relative z-10 border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/80 border border-[#8C6D3F] text-[#FFAA00] font-minecraft text-xs">
            <span>CODING PROFILES & NETWORKS</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            WHERE TO FIND MY CODE
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
            Profiles across algorithmic platforms, GitHub repositories, and developer networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profiles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`bg-[#262626] border-4 ${p.accentBorder} p-6 shadow-xl relative transition-all hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-black/70 border border-white/20 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-minecraft text-base text-white font-bold">
                          {p.name}
                        </h3>
                        <span className="text-gray-400 text-xs font-mono">
                          {p.handle}
                        </span>
                      </div>
                    </div>
                    <span className="font-minecraft text-[8px] sm:text-[9px] bg-black/60 text-gray-300 px-2 py-1 border border-white/20 uppercase">
                      {p.tag}
                    </span>
                  </div>

                  <p className="text-gray-300 text-xs font-mono leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className={`${p.btnStyle} w-full py-2.5 text-xs font-minecraft flex items-center justify-center space-x-2`}
                >
                  <span>VIEW {p.name.toUpperCase()} PROFILE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
