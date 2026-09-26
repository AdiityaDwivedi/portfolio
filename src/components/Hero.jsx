import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Download, Sword, Terminal, Compass, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [creeperHiss, setCreeperHiss] = useState(false);

  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCreeperClick = () => {
    sound.playHiss();
    setCreeperHiss(true);
    setTimeout(() => setCreeperHiss(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#3a75c4] via-[#5b95ea] to-[#8ebcf8] pt-10 pb-20">
      
      {/* 1. SEAMLESS DAYTIME OVERWORLD SKY & SUN BACKGROUND */}
      {/* Pixel Sun */}
      <div className="absolute top-10 right-10 sm:right-24 w-20 h-20 sm:w-28 sm:h-28 bg-[#FFF875] border-4 border-[#FFAE00] shadow-[0_0_50px_rgba(255,248,117,0.85)] z-0 select-none pointer-events-none animate-pulse-subtle" />

      {/* Floating Animated Pixel Clouds */}
      <div className="absolute top-12 -left-32 animate-cloud-slow pointer-events-none z-0">
        <div className="cloud-shape-2" />
      </div>
      <div className="absolute top-44 -left-48 animate-cloud-medium pointer-events-none z-0">
        <div className="cloud-shape-1 scale-125" />
      </div>
      <div className="absolute top-28 -left-64 animate-cloud-fast pointer-events-none z-0 opacity-70">
        <div className="cloud-shape-1" />
      </div>

      {/* Distant Minecraft Hill Silhouettes in Background */}
      <div className="absolute bottom-10 left-0 right-0 h-40 pointer-events-none z-0 opacity-25">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#2c5282]">
          <polygon points="0,120 0,60 120,60 120,40 280,40 280,70 420,70 420,30 580,30 580,60 760,60 760,20 920,20 920,50 1080,50 1080,30 1200,30 1200,120" />
        </svg>
      </div>

      {/* 2. MAIN CONTENT (CLEAN, WIDE, AUTHENTIC) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6">
        
        {/* Main Intro Panel (Clean Minecraft Parchment & Border) */}
        <div className="bg-[#EAD7B0]/95 backdrop-blur-md border-4 border-[#2B1B10] p-6 sm:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] text-[#1E1E1E]">
          
          {/* Header Title */}
          <div className="border-b-2 border-[#8C6D3F]/50 pb-4 mb-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#2B1B10] text-mc-diamond font-minecraft text-[10px] sm:text-xs mb-3">
              <span className="w-2 h-2 bg-mc-green rounded-full animate-ping" />
              <span>SPAWN POINT: PATNA, BIHAR</span>
            </div>
            <h1 className="font-minecraft text-2xl sm:text-4xl lg:text-5xl text-[#2B1B10] tracking-wide">
              Hi, I’m Aditya.
            </h1>
          </div>

          {/* Exact User Introduction Text */}
          <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-gray-900">
            <p className="font-medium text-slate-900 text-base sm:text-lg">
              I’m a Computer Science Engineering student and problem solver who enjoys building things and figuring out how they work.
            </p>

            <p>
              My core focus is <strong>Data Structures & Algorithms, Backend Development, and AI/ML</strong>. 
              I primarily work with <strong>C++, Java, Spring Boot, React, PostgreSQL, and Python</strong>, and I enjoy turning ideas into practical, working projects.
            </p>

            <p>
              From building backend systems like <strong>MessTrack</strong> to working on <strong>Green Fleet Optimizer</strong>, I like taking problems from an idea to an actual implementation.
            </p>

            <p className="text-gray-800">
              I’m currently focused on sharpening my DSA skills, building stronger backend systems, and preparing myself for software engineering opportunities.
            </p>

            {/* Tagline */}
            <div className="pt-2 font-minecraft text-xs sm:text-sm text-[#244e19] bg-[#d9c59c] p-3 border-2 border-[#8C6D3F] shadow-inner inline-block">
              ⚡ Code. Build. Break. Learn. Repeat.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t-2 border-[#8C6D3F]/50">
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

      </div>

      {/* 3. SEAMLESS OVERWORLD GROUND WITH CREEPER & PIG IN THE SCENERY */}
      <div className="relative w-full z-20">
        
        {/* Creeper standing on the grass (Integrated naturally into background/terrain without any box!) */}
        <div 
          onClick={handleCreeperClick}
          className="absolute -top-16 right-8 sm:right-24 z-30 cursor-pointer flex flex-col items-center group select-none"
          title="Click the Creeper to hear it hiss!"
        >
          {creeperHiss && (
            <div className="bg-black/90 border-2 border-red-500 text-red-400 font-minecraft text-[10px] px-2 py-1 mb-1 animate-bounce">
              💥 SSSSSSSS...!
            </div>
          )}
          {/* Pixel Creeper Sprite */}
          <div className="w-10 h-16 flex flex-col items-center group-hover:scale-110 transition-transform">
            {/* Head with iconic face */}
            <div className="w-8 h-8 bg-[#43A047] border border-black relative shadow">
              {/* Eyes */}
              <div className="absolute top-1.5 left-1 w-2 h-2 bg-black" />
              <div className="absolute top-1.5 right-1 w-2 h-2 bg-black" />
              {/* Nose/Mouth Frown */}
              <div className="absolute top-3.5 left-3 w-2 h-2 bg-black" />
              <div className="absolute top-4.5 left-2 w-1.5 h-3 bg-black" />
              <div className="absolute top-4.5 right-2 w-1.5 h-3 bg-black" />
            </div>
            {/* Body */}
            <div className="w-6 h-6 bg-[#388E3C] border-x border-black" />
            {/* 4 Legs */}
            <div className="w-7 h-2 flex justify-between">
              <div className="w-3 h-2 bg-[#2E7D32] border border-black" />
              <div className="w-3 h-2 bg-[#2E7D32] border border-black" />
            </div>
          </div>
          <span className="font-minecraft text-[8px] text-white bg-black/60 px-1 py-0.5 mt-1 border border-white/20">
            Creeper
          </span>
        </div>

        {/* Friendly Pig on the Left Ground */}
        <div 
          onClick={() => sound.playPop()}
          className="absolute -top-12 left-6 sm:left-20 z-30 cursor-pointer flex flex-col items-center group select-none hidden sm:flex"
          title="Friendly Overworld Pig"
        >
          <div className="w-12 h-8 flex flex-col items-center group-hover:scale-110 transition-transform">
            <div className="flex items-center">
              {/* Head & Snout */}
              <div className="w-5 h-5 bg-[#F8A5C2] border border-black relative">
                <div className="absolute top-1 left-0.5 w-1 h-1 bg-black" />
                <div className="absolute top-1 right-0.5 w-1 h-1 bg-black" />
                <div className="absolute bottom-0.5 left-1 w-3 h-1.5 bg-[#E77F9D] border border-black" />
              </div>
              {/* Body */}
              <div className="w-7 h-5 bg-[#F8A5C2] border border-black" />
            </div>
            {/* Legs */}
            <div className="w-10 h-2 flex justify-between px-1">
              <div className="w-1.5 h-2 bg-[#E77F9D] border border-black" />
              <div className="w-1.5 h-2 bg-[#E77F9D] border border-black" />
              <div className="w-1.5 h-2 bg-[#E77F9D] border border-black" />
              <div className="w-1.5 h-2 bg-[#E77F9D] border border-black" />
            </div>
          </div>
          <span className="font-minecraft text-[8px] text-white bg-black/60 px-1 py-0.5 mt-1 border border-white/20">
            Pig
          </span>
        </div>

        {/* Grass Block Ground Border */}
        <div className="w-full h-8 bg-[#5B8C32] border-t-4 border-[#3E6120]">
          <div className="w-full h-2 bg-[#866043]" />
        </div>

      </div>

    </section>
  );
}
