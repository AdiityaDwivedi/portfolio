import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import SkillsInventory from './components/SkillsInventory';
import ProjectsAdvancements from './components/ProjectsAdvancements';
import ProblemSolving from './components/ProblemSolving';
import EducationQuest from './components/EducationQuest';
import ContactChat from './components/ContactChat';
import BottomHotbar from './components/BottomHotbar';
import ResumeModal from './components/ResumeModal';
import { sound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col font-body selection:bg-mc-green selection:text-white">
      {/* 1. TOP NAVBAR / HUD */}
      <Navbar 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* MAIN ADVENTURE CONTENT */}
      <main className="flex-1 pb-24">
        {/* 2. OVERWORLD SPAWN / HERO (DAYTIME) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. PLAYER STATS / ATTRIBUTES BANNER */}
        <StatsBanner />

        {/* 4. CREATIVE INVENTORY (SKILLS) */}
        <SkillsInventory />

        {/* 5. ADVANCEMENTS & CHESTS (PROJECTS) */}
        <ProjectsAdvancements />

        {/* 6. COMBAT / PROBLEM SOLVING (500+ DSA LEETCODE & CODEFORCES) */}
        <ProblemSolving />

        {/* 7. QUEST LOG (EDUCATION & ACADEMICS) */}
        <EducationQuest />

        {/* 8. IN-GAME MULTIPLAYER CHAT (CONTACT) */}
        <ContactChat />
      </main>

      {/* 9. BOTTOM 9-SLOT HOTBAR DOCK */}
      <BottomHotbar 
        onOpenResume={() => setIsResumeOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* 10. ENCHANTED BOOK RESUME MODAL */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* FOOTER */}
      <footer className="bg-[#141414] border-t-4 border-black py-8 px-4 text-center font-minecraft text-xs text-gray-400 relative z-10">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-gray-300">
            Aditya Kumar • Full-Stack & Backend Crafter
          </p>
          <p className="text-gray-500 text-[10px]">
            Patna, Bihar • Designed with authentic Minecraft UI & Overworld aesthetics • Java & React
          </p>
          <div className="pt-2">
            <button 
              onClick={() => {
                sound.playOrb();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-mc-diamond hover:underline text-[10px]"
            >
              [⬆ RESPAWN AT SPAWN POINT]
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
