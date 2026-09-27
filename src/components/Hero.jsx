import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Download, Sword, Terminal, Compass, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1e1329] pt-8 pb-16">
      
      {/* 1. AUTHENTIC MINECRAFT SUNSET PANORAMA BACKGROUND */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/minecraft_sunset_panorama.jpg')` }}
      >
        {/* Cinematic Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#14100C]/90" />
        <div className="absolute inset-0 backdrop-brightness-[0.92]" />
      </div>

      {/* Floating Animated Pixel Clouds */}
      <div className="absolute top-10 -left-32 animate-cloud-slow pointer-events-none z-0 opacity-40">
        <div className="cloud-shape-2" />
      </div>
      <div className="absolute top-32 -left-48 animate-cloud-medium pointer-events-none z-0 opacity-30">
        <div className="cloud-shape-1 scale-125" />
      </div>

      {/* Official Minecraft Style Tagline (Left-Aligned) */}
      <div className="relative z-10 pt-4 select-none ml-4 sm:ml-12 lg:ml-20">
        <h2 className="font-minecraft text-base sm:text-xl lg:text-2xl text-white tracking-widest uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
          CREATE. SOLVE. BUILD.
        </h2>
      </div>

      {/* 2. MAIN CONTENT (EXACTLY SIZED TO HEADING WIDTH) */}
      <div className="relative z-10 w-min max-w-[calc(100vw-3rem)] mr-auto ml-4 sm:ml-12 lg:ml-20 px-2 sm:px-0 my-auto py-8">
        
        {/* Intro Container (Width strictly bounded by heading) */}
        <div className="w-min max-w-full bg-black/20 backdrop-blur-sm border border-white/10 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.4)] space-y-5">
          
          {/* Single-Line Heading (Defines the exact width of the box) */}
          <div>
            <h1 className="font-minecraft text-2xl sm:text-4xl lg:text-5xl text-white whitespace-nowrap tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Hi, I’m Aditya!
            </h1>
          </div>

          {/* Exact User Introduction Text spanning strictly to the exclamation mark */}
          <p className="text-gray-200 font-minecraft text-xs sm:text-[13px] leading-6 sm:leading-7 w-full tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            I like solving problems and building stuff. Nevertheless, I can do whatever you need, as long as I’m learning something or getting paid well enough for my time — preferably both.
          </p>

          {/* Don't Have Much Time? & Action Buttons */}
          <div className="pt-2 space-y-3">
            <p className="font-minecraft text-xs sm:text-sm text-gray-300 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Don’t Have Much Time?
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenResume();
                }}
                className="mc-btn-stone px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="mc-btn-green px-5 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2"
              >
                <Terminal className="w-4 h-4" />
                <span>HIRE ME</span>
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="mc-btn-stone px-4 py-3 font-minecraft text-xs sm:text-sm flex items-center space-x-2 opacity-80 hover:opacity-100"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>ABOUT ME</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 3. SEAMLESS OVERWORLD GROUND */}
      <div className="relative w-full z-20">
        {/* Grass Block Ground Border */}
        <div className="w-full h-8 bg-[#5B8C32] border-t-4 border-[#3E6120]">
          <div className="w-full h-2 bg-[#866043]" />
        </div>
      </div>

    </section>
  );
}
