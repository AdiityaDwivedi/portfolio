import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VerticalNav from './components/VerticalNav';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SkillsInventory from './components/SkillsInventory';
import ProjectsAdvancements, { projectsData } from './components/ProjectsAdvancements';
import ProjectDetail from './components/ProjectDetail';
import ProblemSolving from './components/ProblemSolving';
import ContactChat from './components/ContactChat';
import ResumeModal from './components/ResumeModal';
import { sound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#project/')) {
      return window.location.hash.replace('#project/', '');
    }
    return null;
  });

  // Listen to hash changes for browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#project/')) {
        setActiveProjectId(window.location.hash.replace('#project/', ''));
      } else {
        setActiveProjectId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (id) => {
    window.location.hash = `#project/${id}`;
    setActiveProjectId(id);
  };

  const handleBackToBuilds = () => {
    window.location.hash = '#projects';
    setActiveProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const currentProject = projectsData.find(p => p.id === activeProjectId);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col font-body selection:bg-mc-green selection:text-white">
      {/* 1. TOP NAVBAR / HUD */}
      <Navbar 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* RENDER DEDICATED PROJECT DETAIL VIEW OR MAIN ADVENTURE PAGE */}
      {currentProject ? (
        <ProjectDetail 
          project={currentProject} 
          onBack={handleBackToBuilds} 
        />
      ) : (
        <>
          {/* 2. ANUBHAV-INSPIRED VERTICAL NAV & HUD TRACKER (RIGHT SIDE) */}
          <VerticalNav />

          {/* MAIN ADVENTURE CONTENT */}
          <main className="flex-1 pb-16">
            {/* 3. OVERWORLD SPAWN / HERO */}
            <Hero onOpenResume={() => setIsResumeOpen(true)} />

            {/* 4. "LET'S START WITH MY NAME — ADITYA DWIVEDI" (Q&A & SOCIALS) */}
            <AboutMe />

            {/* 5. CREATIVE INVENTORY (SKILLS) */}
            <SkillsInventory />

            {/* 6. ADVANCEMENTS & BUILDS (PROJECTS) */}
            <ProjectsAdvancements onSelectProject={handleSelectProject} />

            {/* 7. PROFILES & CODING PLATFORMS */}
            <ProblemSolving />

            {/* 8. IN-GAME MULTIPLAYER CHAT (CONTACT) */}
            <ContactChat />
          </main>
        </>
      )}

      {/* 9. ENCHANTED BOOK RESUME MODAL */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
