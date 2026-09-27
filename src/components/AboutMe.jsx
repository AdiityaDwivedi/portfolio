import React from 'react';
import { sound } from '../utils/audio';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';
import { Mail, Compass } from 'lucide-react';

export default function AboutMe() {
  const qaItems = [
    {
      q: "What do I do?",
      a: "I build backend systems, solve problems, and explore AI."
    },
    {
      q: "What am I learning?",
      a: "DSA, backend development, and AI/ML concepts."
    },
    {
      q: "What do I enjoy?",
      a: "Building things and turning ideas into clean working software."
    },
    {
      q: "Why do I code?",
      a: "It's fun when something that didn't work suddenly does."
    },
    {
      q: "When not coding?",
      a: "Gaming, working out, listening to music, or recharging."
    },
    {
      q: "What do I care about?",
      a: "Learning useful things and building stuff that actually works."
    },
    {
      q: "My coding philosophy?",
      a: "Make it work → understand it → make it better."
    },
    {
      q: "My weakness?",
      a: "Trying to learn too many things at once."
    },
    {
      q: "How do I code?",
      a: "Usually with music on and way too many tabs open."
    },
    {
      q: "What's next?",
      a: "Keep learning, keep building, and see where it goes."
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AdiityaDwivedi",
      icon: GithubIcon,
      color: "hover:text-[#55FF55]"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/adiityadwivedi/",
      icon: LeetCodeIcon,
      color: "hover:text-[#FFAA00]"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/AdiityaDwivedi",
      icon: CodeforcesIcon,
      color: "hover:text-[#4DEEEA]"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adiityadwivedi",
      icon: LinkedinIcon,
      color: "hover:text-[#55FFFF]"
    },
    {
      name: "Email",
      url: "mailto:aditya22dwivedi22@gmail.com",
      icon: Mail,
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#221B15] relative z-10 border-b-4 border-[#14100C]">
      <div className="max-w-4xl mx-auto">
        
        {/* Parchment Box (Authentic Minecraft Dialogue Tome) */}
        <div className="bg-[#EAD7B0] border-4 border-[#2B1B10] p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.6)] text-[#1E1E1E] relative">
          
          {/* Header */}
          <div className="border-b-2 border-[#8C6D3F] pb-4 mb-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#2B1B10] text-[#55FF55] font-minecraft text-[10px] sm:text-xs mb-2.5">
              <span>ABOUT ME</span>
            </div>
            <h2 className="font-minecraft text-xl sm:text-2xl lg:text-3xl text-[#2B1B10] tracking-wide leading-tight">
              LET’S START WITH MY NAME — ADITYA DWIVEDI
            </h2>
          </div>

          {/* Q&A Items List (2-column grid for fast skimming) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-body">
            {qaItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start space-x-2.5 group text-sm leading-relaxed"
              >
                <span className="font-minecraft text-xs text-[#8C6D3F] mt-0.5 select-none flex-shrink-0 group-hover:text-[#2B1B10] transition-colors">
                  ▪
                </span>
                <div>
                  <strong className="font-minecraft text-xs text-[#2B1B10] tracking-wide mr-1.5 block sm:inline">
                    {item.q}
                  </strong>
                  <span className="text-gray-900 font-medium">
                    {item.a}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Find Me On Socials Bar */}
          <div className="mt-8 pt-5 border-t-2 border-[#8C6D3F]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-minecraft text-xs text-[#2B1B10] tracking-wider uppercase flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#8C6D3F]" />
              <span>FIND ME ON:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#2B1B10] text-gray-200 border-2 border-[#8C6D3F] font-minecraft text-[11px] shadow-[2px_2px_0_0_#000] hover:-translate-y-0.5 transition-all ${s.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
