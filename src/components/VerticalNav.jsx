import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

const sections = [
  { id: 'hero', label: 'INTRO', num: '01' },
  { id: 'about', label: 'ABOUT', num: '02' },
  { id: 'skills', label: 'SKILLS', num: '03' },
  { id: 'projects', label: 'BUILDS', num: '04' },
  { id: 'profiles', label: 'PROFILES', num: '05' },
  { id: 'contact', label: 'CONTACT', num: '06' },
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex(s => s.id === activeSection);
  const currentSection = sections[activeIndex] || sections[0];

  return (
    <>
      {/* 1. TOP-RIGHT RETRO HUD BADGE & DOT TRACKER */}
      <div className="fixed top-20 right-4 sm:right-6 z-40 flex items-center space-x-2 select-none pointer-events-auto">
        {/* Square Pixel Dots Bar */}
        <div className="flex items-center space-x-1.5 bg-black/70 p-1.5 border border-white/20 backdrop-blur-sm">
          {sections.map((s) => {
            const isActive = s.id === activeSection;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                title={`${s.label} (${s.num})`}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border transition-all ${
                  isActive
                    ? 'bg-[#55FF55] border-[#55FF55] scale-110 shadow-[0_0_8px_#55FF55]'
                    : 'bg-[#1E1E1E] border-white/30 hover:border-white hover:bg-white/20'
                }`}
              />
            );
          })}
        </div>

        {/* Active Section Label Pill */}
        <div 
          onClick={() => scrollTo(currentSection.id)}
          className="bg-[#2B1B10] text-[#55FF55] border-2 border-[#8C6D3F] px-2.5 py-1 font-minecraft text-[10px] sm:text-xs tracking-wider shadow-[3px_3px_0_0_rgba(0,0,0,0.6)] cursor-pointer hover:border-[#55FF55] transition-colors"
        >
          [{currentSection.label}]
        </div>
      </div>

      {/* 2. RIGHT VERTICAL LINE NAVIGATION TRACKER (Fixed on viewport right side) */}
      <nav 
        aria-label="Page navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
      >
        {/* Vertical Track Line */}
        <div className="absolute top-3 bottom-3 w-0.5 bg-[#8C6D3F]/60 -z-10" />

        <div className="flex flex-col space-y-7 my-auto">
          {sections.map((s) => {
            const isActive = s.id === activeSection;
            return (
              <div 
                key={s.id} 
                className="group relative flex items-center justify-end"
              >
                {/* Hover / Active Label Badge (expands to the LEFT of the node) */}
                <div 
                  onClick={() => scrollTo(s.id)}
                  className={`mr-3 px-2 py-1 font-minecraft text-[10px] tracking-wider whitespace-nowrap cursor-pointer transition-all border ${
                    isActive
                      ? 'opacity-100 translate-x-0 bg-[#2B1B10] text-[#55FF55] border-[#55FF55] shadow-[3px_3px_0_0_#000]'
                      : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto bg-[#1A1A1A] text-white border-white/20'
                  }`}
                >
                  {s.label}
                </div>

                {/* Node Box */}
                <button
                  onClick={() => scrollTo(s.id)}
                  aria-label={`Jump to ${s.label}`}
                  className={`w-6 h-6 flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#55FF55] border-black scale-110 shadow-[0_0_10px_rgba(85,255,85,0.7)] text-black'
                      : 'bg-[#2B1B10] border-[#8C6D3F] hover:border-white hover:scale-105 text-white/70'
                  }`}
                >
                  <span className="font-minecraft text-[8px] font-bold">
                    {s.num}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
