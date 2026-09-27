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
        
        {/* Left spacer */}
        <div className="w-10" />

        {/* Center: In-game HUD Hearts (Interactive) */}
        <div className="hidden md:flex items-center space-x-4 select-none">
          {/* Hearts */}
          <div className="flex items-center space-x-1 cursor-pointer" 
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
