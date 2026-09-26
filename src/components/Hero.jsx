import React from 'react';
import MinecraftCharacter3D from './MinecraftCharacter3D';
import { sound } from '../utils/audio';
import { Download, Compass, Sword, Shield, Sparkles, Terminal } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A80D4] via-[#6FA3F7] to-[#A3C8FF] pt-8 pb-16">
      
      {/* 1. MINECRAFT DAYTIME SKY & SUN */}
      {/* Pixel Sun */}
      <div className="absolute top-12 right-12 sm:right-24 w-20 h-20 sm:w-28 sm:h-28 bg-[#FFF875] border-4 border-[#FFAE00] shadow-[0_0_50px_rgba(255,248,117,0.85)] z-0 select-none animate-pulse-subtle pointer-events-none" />

      {/* Floating Animated Pixel Clouds */}
      <div className="absolute top-16 -left-32 animate-cloud-slow pointer-events-none z-0">
        <div className="cloud-shape-2" />
      </div>
      <div className="absolute top-44 -left-48 animate-cloud-medium pointer-events-none z-0">
        <div className="cloud-shape-1 scale-125" />
      </div>
      <div className="absolute top-28 -left-64 animate-cloud-fast pointer-events-none z-0 opacity-70">
        <div className="cloud-shape-1" />
      </div>

      {/* 2. MAIN HERO CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: HERO TEXT & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Spawn Point Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-black/60 border-2 border-white/40 text-white font-minecraft text-xs rounded shadow-lg backdrop-blur">
              <span className="w-2 h-2 bg-mc-green rounded-full animate-ping" />
              <span>SPAWN POINT: BIHAR, INDIA</span>
              <span className="text-gray-400">|</span>
              <span className="text-[#4DEEEA]">LEVEL 24</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-minecraft text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
                ADITYA KUMAR
              </h1>
              <p className="font-minecraft text-base sm:text-xl text-[#FFF875] tracking-wide drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
                JAVA BACKEND & FULL-STACK CRAFTER
              </p>
            </div>

            {/* Narrative description */}
            <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-xl bg-white/70 backdrop-blur-md p-4 border-2 border-[#1E1E1E] shadow-[4px_4px_0_0_#1E1E1E]">
              Crafting bulletproof RESTful APIs, scalable database architectures, and reactive web applications with 
              <strong className="text-slate-950 font-bold"> Spring Boot</strong>, 
              <strong className="text-slate-950 font-bold"> PostgreSQL</strong>, and 
              <strong className="text-slate-950 font-bold"> React</strong>. 
              Battle-tested with <span className="bg-[#5B8C32] text-white px-1.5 py-0.5 font-bold rounded">500+ solved problems</span> across competitive coding platforms.
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg font-minecraft text-[11px]">
              <div className="bg-[#2B2B2B] text-white p-2.5 border-2 border-white/20 shadow-md">
                <div className="text-mc-diamond text-xs">FRAMEWORK</div>
                <div className="font-bold text-white mt-0.5">Spring Boot</div>
              </div>
              <div className="bg-[#2B2B2B] text-white p-2.5 border-2 border-white/20 shadow-md">
                <div className="text-[#FFAA00] text-xs">DATABASE</div>
                <div className="font-bold text-white mt-0.5">PostgreSQL</div>
              </div>
              <div className="bg-[#2B2B2B] text-white p-2.5 border-2 border-white/20 shadow-md col-span-2 sm:col-span-1">
                <div className="text-mc-emerald text-xs">PROBLEM SOLVING</div>
                <div className="font-bold text-white mt-0.5">500+ Solved</div>
              </div>
            </div>

            {/* ACTION BUTTONS (Minecraft Style) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="mc-btn-green px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2 tracking-wide"
              >
                <Sword className="w-4 h-4" />
                <span>EXPLORE ADVANCEMENTS</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenResume();
                }}
                className="mc-btn-diamond px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2 tracking-wide"
              >
                <Download className="w-4 h-4" />
                <span>RESUME SCROLL</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="mc-btn-stone px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2 tracking-wide"
              >
                <Terminal className="w-4 h-4" />
                <span>CHAT / MSG</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D MINECRAFT CHARACTER */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Floating Minecraft Item Badges */}
            <div className="absolute -top-4 left-6 z-20 animate-bob hidden sm:flex items-center space-x-1 bg-black/70 border border-mc-diamond text-mc-diamond text-[10px] font-minecraft px-2.5 py-1 rounded shadow-lg">
              <span>💎</span>
              <span>Clean Code</span>
            </div>

            <div className="absolute top-1/2 -right-4 z-20 animate-float-slow hidden sm:flex items-center space-x-1 bg-black/70 border border-mc-emerald text-mc-emerald text-[10px] font-minecraft px-2.5 py-1 rounded shadow-lg">
              <span>⚡</span>
              <span>500+ DSA</span>
            </div>

            {/* 3D Character Canvas */}
            <div className="w-full max-w-[420px] aspect-square bg-gradient-to-b from-white/20 to-white/5 rounded-2xl border-4 border-black/30 backdrop-blur-sm p-2 shadow-2xl relative">
              <MinecraftCharacter3D />
            </div>

            {/* Character caption */}
            <div className="mt-3 text-center">
              <span className="font-minecraft text-xs text-slate-800 bg-white/80 px-3 py-1 border border-black/30 rounded">
                Skin: Java Developer & System Crafter
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. TRANSITION TO OVERWORLD GROUND (Grass block border) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-8 bg-[#5B8C32] border-t-4 border-[#3E6120] z-20">
        <div className="w-full h-2 bg-[#866043]" />
      </div>
    </section>
  );
}
