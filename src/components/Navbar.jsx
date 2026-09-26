import React, { useState } from 'react';
import { Volume2, VolumeX, Shield, Award, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ soundEnabled, setSoundEnabled, onOpenResume }) {
  const [hearts, setHearts] = useState(10);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  const handleHeartClick = () => {
    sound.playPop();
    setHearts(prev => (prev > 1 ? prev - 1 : 10));
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#2C2C2C]/95 border-b-4 border-[#1E1E1E] backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Player Name & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-mc-grass border-2 border-black flex items-center justify-center shadow-inner relative group cursor-pointer"
               onClick={() => { sound.playOrb(); }}>
            <span className="font-minecraft text-white text-xs font-bold">AK</span>
            <div className="absolute -bottom-8 left-0 hidden group-hover:block bg-black/90 text-white text-[10px] font-minecraft px-2 py-1 border border-white/20 whitespace-nowrap z-50">
              Player: Aditya Kumar
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-minecraft text-white text-sm sm:text-base tracking-wide">
                ADITYA KUMAR
              </span>
              <span className="bg-[#17DD62]/20 text-[#17DD62] border border-[#17DD62]/50 text-[10px] font-minecraft px-1.5 py-0.5 rounded">
                LVL 24
              </span>
            </div>
            <p className="text-gray-400 text-xs hidden sm:block font-mono">
              Backend & Full-Stack Crafter
            </p>
          </div>
        </div>

        {/* Center: In-game HUD Hearts & Hunger (Interactive) */}
        <div className="hidden md:flex items-center space-x-4 select-none">
          {/* Hearts */}
          <div className="flex items-center space-x-0.5 cursor-pointer" 
               title="Click to replenish health"
               onClick={handleHeartClick}>
            {Array.from({ length: 10 }).map((_, i) => (
              <span 
                key={i} 
                className={`text-sm transition-transform hover:scale-125 ${i < hearts ? 'text-red-500' : 'text-gray-600'}`}
              >
                ♥
              </span>
            ))}
          </div>

          {/* Level XP Orb */}
          <div className="flex items-center space-x-1.5 bg-black/40 px-2.5 py-1 border border-white/10 rounded">
            <span className="w-2.5 h-2.5 rounded-full bg-mc-green animate-pulse" />
            <span className="font-minecraft text-mc-green text-xs">
              XP 500+
            </span>
          </div>
        </div>

        {/* Right: Audio Toggle & Quick Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-minecraft border-2 transition-all ${
              soundEnabled
                ? 'mc-btn-green'
                : 'mc-btn-stone'
            }`}
            title="Toggle Minecraft Sound Effects"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SFX: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SFX: OFF</span>
              </>
            )}
          </button>

          {/* Resume Quick Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenResume();
            }}
            className="mc-btn-diamond px-3 py-1.5 text-xs font-minecraft hidden sm:flex items-center space-x-1.5"
          >
            <span>📜 RESUME</span>
          </button>
        </div>

      </div>
    </header>
  );
}
