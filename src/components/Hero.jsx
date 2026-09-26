import React from 'react';
import MinecraftDiorama3D from './MinecraftDiorama3D';
import { sound } from '../utils/audio';
import { Download, Sword, Terminal, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#3a75c4] via-[#5b95ea] to-[#8ebcf8] pt-6 pb-28">
      
      {/* 1. DAYTIME SKY ELEMENTS */}
      {/* Pixel Sun */}
      <div className="absolute top-10 right-10 sm:right-24 w-20 h-20 sm:w-28 sm:h-28 bg-[#FFF875] border-4 border-[#FFAE00] shadow-[0_0_50px_rgba(255,248,117,0.85)] z-0 select-none pointer-events-none animate-pulse-subtle" />

      {/* Floating Animated Pixel Clouds */}
      <div className="absolute top-12 -left-32 animate-cloud-slow pointer-events-none z-0">
        <div className="cloud-shape-2" />
      </div>
      <div className="absolute top-48 -left-48 animate-cloud-medium pointer-events-none z-0">
        <div className="cloud-shape-1 scale-125" />
      </div>
      <div className="absolute top-28 -left-64 animate-cloud-fast pointer-events-none z-0 opacity-70">
        <div className="cloud-shape-1" />
      </div>

      {/* 2. TOP BANNER (Inspired by Minecraft.net "CREATE. EXPLORE. SURVIVE.") */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center pt-2">
        <div className="inline-block">
          <p className="font-minecraft text-xs sm:text-sm tracking-widest text-[#FFF875] drop-shadow-[0_2px_0_rgba(0,0,0,0.8)] uppercase">
            BUILD • EXPLORE • SOLVE
          </p>
          <h1 className="font-minecraft text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide mt-1 drop-shadow-[0_4px_0_rgba(0,0,0,0.7)]">
            ADITYA KUMAR
          </h1>
          <p className="font-minecraft text-xs sm:text-base text-gray-100 tracking-wider mt-1 drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
            COMPUTER SCIENCE STUDENT & DEVELOPER
          </p>
        </div>
      </div>

      {/* 3. MAIN HERO GRID (Diorama + Clean Bio) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: SIMPLE & AUTHENTIC ABOUT ME */}
          <div className="lg:col-span-6 text-left space-y-5">
            
            {/* Coordinates / Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/60 border border-white/30 text-white font-minecraft text-[11px] rounded shadow backdrop-blur">
              <span className="w-2 h-2 bg-mc-green rounded-full animate-ping" />
              <span>SPAWN POINT: PATNA, BIHAR</span>
              <span className="text-gray-400">|</span>
              <span className="text-mc-diamond">B.TECH (2024–28)</span>
            </div>

            {/* Simple, grounded bio (No buzzword fluff) */}
            <div className="bg-white/85 backdrop-blur-md p-5 border-4 border-[#1E1E1E] shadow-[6px_6px_0_0_#1E1E1E] space-y-3">
              <div className="font-minecraft text-xs text-[#2B1B10] uppercase flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-mc-darkgreen" />
                <span>ABOUT ADITYA</span>
              </div>
              <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed font-body">
                Hey! I'm a Computer Science Engineering student at <strong>Bakhtiyarpur College of Engineering</strong>. 
                I enjoy building software, creating web apps, and solving problems across <strong>LeetCode & Codeforces (500+ solved)</strong>.
              </p>
              <p className="text-slate-800 text-sm leading-relaxed font-body">
                Currently building with <strong>Java, Spring Boot, PostgreSQL, and React</strong>, while actively learning and exploring <strong>Artificial Intelligence & Machine Learning</strong> for upcoming projects.
              </p>
            </div>

            {/* Quick Domain Badges */}
            <div className="flex flex-wrap gap-2 font-minecraft text-[10px]">
              <span className="bg-[#2B2B2B] text-white px-3 py-1.5 border border-white/20 shadow">
                🧠 AI & ML (Learning)
              </span>
              <span className="bg-[#2B2B2B] text-mc-emerald px-3 py-1.5 border border-white/20 shadow">
                ⚡ 500+ DSA Solved
              </span>
              <span className="bg-[#2B2B2B] text-mc-diamond px-3 py-1.5 border border-white/20 shadow">
                🌐 Full-Stack & APIs
              </span>
              <span className="bg-[#2B2B2B] text-[#FFAA00] px-3 py-1.5 border border-white/20 shadow">
                🎓 IoT Specialization
              </span>
            </div>

            {/* Action Buttons (Minecraft Green, Diamond & Stone) */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="mc-btn-green px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2"
              >
                <Sword className="w-4 h-4" />
                <span>EXPLORE PROJECTS</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenResume();
                }}
                className="mc-btn-diamond px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>RESUME</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="mc-btn-stone px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2"
              >
                <Terminal className="w-4 h-4" />
                <span>CONTACT</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D MINECRAFT DIORAMA (CREEPER + CHERRY BLOSSOM + PIG + WATERFALL) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Diorama Container */}
            <div className="w-full max-w-[540px] aspect-[4/3] bg-gradient-to-b from-white/20 to-white/5 rounded-2xl border-4 border-black/40 backdrop-blur-sm p-1 shadow-2xl relative overflow-hidden">
              <MinecraftDiorama3D />
            </div>

            {/* Diorama Caption */}
            <div className="mt-3 flex items-center space-x-2">
              <span className="font-minecraft text-[11px] text-slate-900 bg-white/80 px-3 py-1 border border-black/30 rounded shadow">
                Daytime Overworld • Creeper & Friendly Pig Diorama
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* 4. GROUND TRANSITION (Grass block edge) */}
      <div className="w-full h-8 bg-[#5B8C32] border-t-4 border-[#3E6120] relative z-20">
        <div className="w-full h-2 bg-[#866043]" />
      </div>

    </section>
  );
}
