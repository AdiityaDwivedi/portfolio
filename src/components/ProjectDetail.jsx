import React, { useEffect } from 'react';
import { sound } from '../utils/audio';
import { ArrowLeft, ExternalLink, Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetail({ project, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-[#14100C] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative font-body selection:bg-mc-green selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1D15] via-[#1A130E] to-[#14100C] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Top Navigation Bar (Back Button & Category Tag) */}
        <div className="flex items-center justify-between border-b-2 border-[#8C6D3F]/60 pb-4">
          <button
            onClick={() => {
              sound.playClick();
              onBack();
            }}
            className="mc-btn-stone px-4 py-2 text-xs font-minecraft flex items-center space-x-2 transition-transform hover:-translate-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO BUILDS</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="bg-black/80 text-[#55FF55] border border-[#55FF55]/40 font-minecraft text-[9px] sm:text-[10px] px-2.5 py-1 uppercase tracking-wider">
              {project.status || 'ACTIVE'}
            </span>
            <span className="font-minecraft text-[10px] text-gray-400 hidden sm:inline">
              [{project.category}]
            </span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/60 border border-[#8C6D3F] text-[#FFAA00] font-minecraft text-xs">
            <span>PROJECT DOSSIER</span>
          </div>
          <h1 className="font-minecraft text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            {project.title}
          </h1>
          <p className="text-gray-300 font-mono text-sm sm:text-base leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* SECTION 1: DESCRIPTION (Detailed Bullets) */}
        <div className="bg-[#1F1813] border-4 border-[#3D2C1F] p-6 sm:p-8 shadow-xl space-y-4">
          <h3 className="font-minecraft text-xs sm:text-sm text-[#FFAA00] tracking-wider uppercase flex items-center space-x-2 border-b-2 border-[#3D2C1F] pb-3">
            <Cpu className="w-4 h-4 text-[#FFAA00]" />
            <span>DESCRIPTION & ARCHITECTURE</span>
          </h3>

          <ul className="space-y-3 pt-2 font-mono text-xs sm:text-sm text-gray-200 leading-relaxed">
            {project.features.map((bullet, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-[#55FF55] font-minecraft text-xs mt-1 select-none flex-shrink-0">
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SECTION 2: TECHNOLOGIES USED (Badges Grid) */}
        <div className="bg-[#1F1813] border-4 border-[#3D2C1F] p-6 sm:p-8 shadow-xl space-y-4">
          <h3 className="font-minecraft text-xs sm:text-sm text-[#4DEEEA] tracking-wider uppercase flex items-center space-x-2 border-b-2 border-[#3D2C1F] pb-3">
            <Layers className="w-4 h-4 text-[#4DEEEA]" />
            <span>TECHNOLOGIES USED</span>
          </h3>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#2D221A] text-white border-2 border-[#8C6D3F] px-3 py-1.5 font-minecraft text-[10px] sm:text-xs shadow-[2px_2px_0_0_#000] hover:border-[#55FF55] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 3: THOUGHT BEHIND */}
        {project.thought && (
          <div className="bg-[#1F1813] border-4 border-[#3D2C1F] p-6 sm:p-8 shadow-xl space-y-3">
            <h3 className="font-minecraft text-xs sm:text-sm text-mc-emerald tracking-wider uppercase flex items-center space-x-2 border-b-2 border-[#3D2C1F] pb-3">
              <Sparkles className="w-4 h-4 text-mc-emerald" />
              <span>THOUGHT BEHIND THE BUILD</span>
            </h3>
            <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed pt-1">
              {project.thought}
            </p>
          </div>
        )}

        {/* SECTION 4: ACTIONS & EXTERNAL LINKS */}
        <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t-2 border-[#8C6D3F]/60">
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playLevelUp()}
                className="mc-btn-green px-5 py-3 text-xs font-minecraft flex items-center space-x-2 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LAUNCH LIVE DEMO</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="mc-btn-stone px-5 py-3 text-xs font-minecraft flex items-center space-x-2 shadow-lg"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW SOURCE REPO</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onBack();
            }}
            className="text-mc-diamond font-minecraft text-xs hover:underline flex items-center space-x-1"
          >
            <span>[← RETURN TO HOME]</span>
          </button>
        </div>

      </div>
    </div>
  );
}
