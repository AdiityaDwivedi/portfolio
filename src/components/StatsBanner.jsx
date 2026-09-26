import React from 'react';
import { GraduationCap, Award, MapPin, Code2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function StatsBanner() {
  const stats = [
    {
      icon: GraduationCap,
      label: "EDUCATION / GUILD",
      value: "B.Tech CSE (IoT)",
      sub: "Bakhtiyarpur College of Eng. • CGPA: 7.4",
      color: "text-[#4DEEEA]",
      border: "border-[#4DEEEA]/40",
    },
    {
      icon: Award,
      label: "COMBAT / ADVANCEMENTS",
      value: "500+ Problems Solved",
      sub: "LeetCode, Codeforces, AlgoZenith, GFG",
      color: "text-[#FFAA00]",
      border: "border-[#FFAA00]/40",
    },
    {
      icon: Code2,
      label: "INTERESTS & FOCUS",
      value: "Software & AI / ML",
      sub: "Web Development, Algorithms & Machine Learning",
      color: "text-[#17DD62]",
      border: "border-[#17DD62]/40",
    },
    {
      icon: MapPin,
      label: "REALM / COORDINATES",
      value: "Patna, Bihar",
      sub: "Batch 2024 – 2028",
      color: "text-[#FF5555]",
      border: "border-[#FF5555]/40",
    },
  ];

  return (
    <section className="bg-[#4E3422] border-y-4 border-[#2B1B10] py-8 px-4 sm:px-6 relative z-10 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playPop()}
                className={`bg-[#2D1F16] p-4 border-2 ${s.border} shadow-[4px_4px_0_0_#1A1009] transition-all hover:-translate-y-1 hover:border-white group cursor-default`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-black/60 border border-white/20 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <span className="font-minecraft text-[10px] text-gray-300 tracking-wider">
                    {s.label}
                  </span>
                </div>
                <div className="font-minecraft text-white text-sm font-bold truncate">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs mt-1 font-mono">
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
