import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export default function BottomHotbar({ onOpenResume, soundEnabled, setSoundEnabled }) {
  const [selectedSlot, setSelectedSlot] = useState(0);

  const hotbarItems = [
    { label: 'Spawn', icon: '🧭', targetId: 'hero' },
    { label: 'Inventory', icon: '💎', targetId: 'skills' },
    { label: 'Advancements', icon: '🏆', targetId: 'projects' },
    { label: 'DSA Mobs', icon: '⚡', targetId: 'dsa' },
    { label: 'Quest Log', icon: '📜', targetId: 'education' },
    { label: 'Whisper', icon: '💬', targetId: 'contact' },
    { label: 'Resume', icon: '📖', isAction: 'resume' },
    { 
      label: soundEnabled ? 'SFX: ON' : 'SFX: OFF', 
      icon: soundEnabled ? '🔊' : '🔇', 
      isAction: 'sound' 
    },
    { label: 'Top', icon: '⬆️', targetId: 'hero' }
  ];

  const handleSelectSlot = (index) => {
    setSelectedSlot(index);
    const item = hotbarItems[index];

    if (item.isAction === 'resume') {
      sound.playClick();
      onOpenResume();
    } else if (item.isAction === 'sound') {
      const newState = sound.toggle();
      setSoundEnabled(newState);
    } else if (item.targetId) {
      sound.playPop();
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Listen to keyboard numbers 1-9 for authentic Minecraft hotbar switching!
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        handleSelectSlot(num - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled]);

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="bg-[#8F8F8F] p-1.5 border-4 border-[#373737] shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center space-x-1">
        {hotbarItems.map((item, idx) => {
          const isSelected = selectedSlot === idx;
          return (
            <div
              key={idx}
              onClick={() => handleSelectSlot(idx)}
              className={`relative w-10 h-10 sm:w-12 sm:h-12 flex flex-col items-center justify-center cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#B0B0B0] border-2 border-white scale-105 shadow-[0_0_8px_#ffffff]'
                  : 'bg-[#6D6D6D] border-2 border-[#373737] hover:bg-[#808080]'
              }`}
              title={`${item.label} (Press ${idx + 1})`}
            >
              {/* Item Icon */}
              <span className="text-base sm:text-xl">{item.icon}</span>

              {/* Slot Number */}
              <span className="absolute bottom-0.5 right-1 font-minecraft text-[8px] sm:text-[9px] text-white/90 drop-shadow-[0_1px_1px_#000000]">
                {idx + 1}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black/90 text-white font-minecraft text-[9px] px-2 py-0.5 whitespace-nowrap pointer-events-none border border-white/20">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
