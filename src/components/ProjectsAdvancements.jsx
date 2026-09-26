import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { ExternalLink, CheckCircle2, ShieldAlert, Sparkles, BookOpen, Layers, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsAdvancements() {
  const [openedChest, setOpenedChest] = useState(null);

  const projects = [
    {
      id: 'messtrack',
      title: 'MessTrack',
      subtitle: 'Hostel Mess Management System',
      category: 'Full-Stack Web App',
      icon: '🍲',
      status: 'ONLINE',
      statusColor: 'bg-mc-emerald text-black',
      advancementTitle: 'Advancement: A Balanced Diet',
      description:
        'A comprehensive full-stack hostel mess management system facilitating food management, transparent polling, and role-based administration for student residences.',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'BCrypt', 'REST APIs', 'RBAC'],
      features: [
        'Built full-stack architecture with React frontend and Spring Boot REST backend communicating via secured JSON contracts.',
        'Implemented JWT authentication, BCrypt encryption, and Role-Based Access Control for Students, Hostel Admins, and Super Admins.',
        'Engineered dynamic menu management, broadcast announcements, and student feedback loops.',
        'Developed robust voting/polling engine with one-vote-per-user validation and automated poll expiry schedules.'
      ],
      githubUrl: 'https://github.com/AdiityaDwivedi/messtrack',
      liveUrl: 'https://messtrack-three.vercel.app/',
      accentBorder: 'border-[#55AA55]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(85,170,85,0.4)]',
      rarity: 'Legendary Build'
    },
    {
      id: 'job-tracker',
      title: 'Job Tracker API',
      subtitle: 'Enterprise Career & Application Pipeline Engine',
      category: 'Backend Microservice',
      icon: '🧭',
      status: 'REPO LIVE',
      statusColor: 'bg-mc-diamond text-black',
      advancementTitle: 'Advancement: The Master Ledger',
      description:
        'High-performance RESTful backend system engineered to track, manage, and audit corporate job applications, recruitment stages, and candidate pipelines.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'DTO Pattern', '@ControllerAdvice'],
      features: [
        'Designed normalized relational data schemas using JPA/Hibernate to manage multi-tiered relationships between Users, Companies, and Applications.',
        'Engineered strict 3-tier layered architecture segregating Controllers, Business Logic Services, and Persistence Repositories.',
        'Decoupled domain models using Data Transfer Objects (DTOs) for bulletproof API contracts and payload hygiene.',
        'Centralized global exception handling using @ControllerAdvice and custom domain exceptions for standardized API error diagnostics.'
      ],
      githubUrl: 'https://github.com/AdiityaDwivedi/job-tracker-api',
      liveUrl: null, // Backend API repo
      accentBorder: 'border-[#4DEEEA]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(77,238,234,0.4)]',
      rarity: 'Epic Backend'
    }
  ];

  const handleOpenProject = (id) => {
    sound.playChestOpen();
    setOpenedChest(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2B2B2B] to-[#1E1E1E] relative z-10 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-[#FFAA00]/50 text-[#FFAA00] font-minecraft text-xs">
            <span>ACHIEVEMENTS & BUILDS</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide drop-shadow-md">
            FEATURED PROJECTS & ADVANCEMENTS
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
            Real-world systems forged with Java, Spring Boot, and React. Inspect the loot and live deployments below.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const isExpanded = openedChest === proj.id;
            return (
              <div
                key={proj.id}
                className={`bg-[#262626] border-4 ${proj.accentBorder} p-6 relative transition-all duration-200 flex flex-col justify-between ${proj.glowColor} shadow-[8px_8px_0_0_#0f0f0f]`}
              >
                {/* Top Advancement Banner */}
                <div className="flex items-center justify-between border-b-2 border-white/10 pb-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      onClick={() => handleOpenProject(proj.id)}
                      className="w-12 h-12 bg-black/80 border-2 border-white/30 flex items-center justify-center text-2xl cursor-pointer hover:scale-105 transition-transform shadow-inner"
                      title="Click to toggle chest loot"
                    >
                      {proj.icon}
                    </div>
                    <div>
                      <div className="font-minecraft text-[10px] text-[#FFAA00] tracking-wider uppercase">
                        {proj.advancementTitle}
                      </div>
                      <h3 className="font-minecraft text-lg text-white font-bold tracking-wide">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="flex flex-col items-end space-y-1">
                    <span className={`font-minecraft text-[9px] px-2 py-0.5 font-bold ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                    <span className="font-minecraft text-[8px] text-gray-400">
                      {proj.rarity}
                    </span>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div className="space-y-3 mb-6">
                  <div className="text-mc-diamond font-mono text-xs font-semibold">
                    {proj.subtitle}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">
                    {proj.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="bg-black/50 p-4 border border-white/10 mb-6 space-y-2">
                  <div className="font-minecraft text-[10px] text-mc-emerald uppercase mb-1 flex items-center space-x-1.5">
                    <span>⚔️</span>
                    <span>System Architecture & Features</span>
                  </div>
                  {proj.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-gray-300 font-mono">
                      <span className="text-[#55FF55] mt-0.5">✔</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="mb-6">
                  <div className="font-minecraft text-[9px] text-gray-400 mb-2">
                    CRAFTING RECIPE / TECH STACK:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-[#1E1E1E] text-gray-200 border border-white/20 px-2 py-1 text-[11px] font-mono hover:border-mc-green transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-3 border-t-2 border-white/10">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="mc-btn-green px-4 py-2 text-xs font-minecraft flex items-center space-x-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LAUNCH WORLD (DEMO)</span>
                    </a>
                  )}

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="mc-btn-stone px-4 py-2 text-xs font-minecraft flex items-center space-x-2"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW SOURCE REPO</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bonus GitHub Callout */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-[#262626] border-2 border-dashed border-gray-600">
            <p className="text-gray-300 font-mono text-xs mb-2">
              Looking for more repositories, open source builds, or algorithms?
            </p>
            <a
              href="https://github.com/AdiityaDwivedi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="text-mc-diamond hover:underline font-minecraft text-xs inline-flex items-center space-x-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>VISIT GITHUB PROFILE (@AdiityaDwivedi) ➔</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
