import React from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { Trophy, Swords, Zap, ExternalLink, Code2, Award, Flame } from 'lucide-react';

export default function ProblemSolving() {
  const triggerCelebration = () => {
    sound.playLevelUp();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#55AA55', '#4DEEEA', '#FFAA00', '#FFFFFF', '#FF5555']
    });
  };

  const platforms = [
    {
      name: 'LeetCode',
      username: 'adiityadwivedi',
      url: 'https://leetcode.com/u/adiityadwivedi/',
      badge: 'PROBLEM SOLVER',
      color: 'border-[#FFA116]',
      glow: 'shadow-[0_0_20px_rgba(255,161,22,0.3)]',
      icon: '🟡',
      description: 'Extensive problem solving covering dynamic programming, graph traversals, binary search, and optimized data structures.',
      btnLabel: 'VISIT LEETCODE PROFILE'
    },
    {
      name: 'Codeforces',
      username: 'AdiityaDwivedi',
      url: 'https://codeforces.com/profile/AdiityaDwivedi',
      badge: 'COMPETITIVE CODER',
      color: 'border-[#1890FF]',
      glow: 'shadow-[0_0_20px_rgba(24,144,255,0.3)]',
      icon: '🔵',
      description: 'High-pressure algorithmic contests emphasizing time complexity, mathematical reasoning, and edge-case handling in C++.',
      btnLabel: 'VISIT CODEFORCES PROFILE'
    }
  ];

  const masteredTopics = [
    { name: 'Dynamic Programming', level: '90%' },
    { name: 'Trees & Graphs', level: '88%' },
    { name: 'Binary Search & Two Pointers', level: '95%' },
    { name: 'Greedy & Sorting Algorithms', level: '92%' },
    { name: 'Recursion & Backtracking', level: '85%' },
    { name: 'Hash Maps & Heaps', level: '94%' },
  ];

  return (
    <section id="dsa" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B1B1B] relative z-10 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Banner: Advancement Unlocked */}
        <div 
          onClick={triggerCelebration}
          className="mc-panel bg-[#242424] p-6 mb-12 cursor-pointer transition-all hover:scale-[1.01] hover:border-[#FFAA00] group relative overflow-hidden"
          title="Click to celebrate level up!"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-black/80 border-2 border-[#FFAA00] flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform shadow-inner">
                🏆
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-minecraft text-xs text-[#FFAA00] tracking-wider uppercase flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ADVANCEMENT UNLOCKED!</span>
                  </span>
                  <span className="bg-mc-green text-black font-minecraft text-[9px] px-1.5 py-0.5 font-bold">
                    +500 XP
                  </span>
                </div>
                <h3 className="font-minecraft text-xl sm:text-2xl text-white font-bold mt-1">
                  500+ ALGORITHMIC MOBS SLAIN
                </h3>
                <p className="text-gray-400 font-mono text-xs mt-0.5">
                  Solved across LeetCode, Codeforces, AlgoZenith & GeeksforGeeks
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerCelebration();
              }}
              className="mc-btn-green px-4 py-2.5 font-minecraft text-xs whitespace-nowrap flex items-center space-x-2 self-stretch sm:self-auto justify-center"
            >
              <Zap className="w-4 h-4" />
              <span>CLAIM XP / CELEBRATE</span>
            </button>

          </div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platforms.map((p, i) => (
            <div
              key={i}
              className={`bg-[#262626] border-4 ${p.color} p-6 shadow-xl relative transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className="font-minecraft text-lg text-white font-bold">
                      {p.name}
                    </h4>
                    <span className="text-gray-400 text-xs font-mono">
                      ID: @{p.username}
                    </span>
                  </div>
                </div>
                <span className="font-minecraft text-[9px] bg-black/60 text-white px-2 py-1 border border-white/20">
                  {p.badge}
                </span>
              </div>

              <p className="text-gray-300 text-xs font-mono leading-relaxed mb-6">
                {p.description}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="mc-btn-stone w-full py-2.5 text-xs font-minecraft flex items-center justify-center space-x-2"
              >
                <span>{p.btnLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Algorithmic Weapons / Topics Mastery */}
        <div className="mc-panel-dark p-6 border-2 border-white/20">
          <div className="flex items-center space-x-2 mb-4 font-minecraft text-xs text-[#4DEEEA]">
            <Swords className="w-4 h-4" />
            <span>ENCHANTED ALGORITHMIC TECHNIQUES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masteredTopics.map((t, idx) => (
              <div key={idx} className="bg-black/50 p-3 border border-white/10">
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="text-gray-200 font-semibold">{t.name}</span>
                  <span className="text-mc-green font-minecraft text-[10px]">{t.level}</span>
                </div>
                <div className="w-full bg-[#333333] h-2 border border-black overflow-hidden">
                  <div 
                    className="bg-[#55FF55] h-full transition-all duration-500" 
                    style={{ width: t.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
