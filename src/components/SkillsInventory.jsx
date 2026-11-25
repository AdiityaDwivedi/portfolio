import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Sparkles, Layers, ShieldCheck, Database, Wrench, BookOpen } from 'lucide-react';

export default function SkillsInventory() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'ALL ITEMS', icon: Layers },
    { id: 'frameworks', label: 'BACKEND & WEB', icon: ShieldCheck },
    { id: 'languages', label: 'LANGUAGES', icon: Sparkles },
    { id: 'databases', label: 'DB & CACHING', icon: Database },
    { id: 'tools', label: 'CLOUD & DEVOPS', icon: Wrench },
    { id: 'core', label: 'CORE CS', icon: BookOpen },
  ];

  const skillsData = [
    // Backend & Web Frameworks
    {
      name: 'Spring Boot',
      category: 'frameworks',
      stack: 64,
      durability: 98,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '🍃',
      level: 'Experienced',
      lore: 'Primary Java framework powering event-driven microservices in Notified and REST backends in MessTrack and Job Tracker API.',
      details: ['Notified Microservices', 'MessTrack Backend', 'Job Tracker API']
    },
    {
      name: 'Microservices',
      category: 'frameworks',
      stack: 64,
      durability: 92,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '🏗️',
      level: 'Experienced',
      lore: '4-service distributed architecture (Content, Video, Encoding, Streaming) decoupling heavy transcoding from HTTP request paths.',
      details: ['Notified Architecture', 'State Machines', 'Fault Tolerance']
    },
    {
      name: 'Apache Kafka',
      category: 'frameworks',
      stack: 64,
      durability: 90,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '📨',
      level: 'Proficient',
      lore: 'Asynchronous event streaming backbone driving VideoUploaded and VideoEncoded workflows to eliminate upload timeouts.',
      details: ['Event-Driven Pipelines', 'Async Transcoding', 'Service Decoupling']
    },
    {
      name: 'Spring Security & JWT',
      category: 'frameworks',
      stack: 48,
      durability: 90,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🛡️',
      level: 'Proficient',
      lore: 'Stateless JWT authentication, BCrypt password hashing, and 3-tier Role-Based Access Control (RBAC).',
      details: ['3-Tier RBAC', 'JWT Auth & BCrypt', 'Protected Endpoints']
    },
    {
      name: 'Spring Data JPA & Hibernate',
      category: 'frameworks',
      stack: 64,
      durability: 92,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🧬',
      level: 'Experienced',
      lore: 'Relational persistence, entity relationships, DTO decoupling, and lifecycle state management across MySQL, PostgreSQL, and TiDB.',
      details: ['Entity Relationships', 'DTO Contracts', 'Repository Layer']
    },
    {
      name: 'REST APIs',
      category: 'frameworks',
      stack: 64,
      durability: 96,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '📦',
      level: 'Advanced',
      lore: 'Layered Controllers/Services/Repositories with DTO mapping, server-side validation, and @ControllerAdvice error handling.',
      details: ['@ControllerAdvice', 'DTO Mapping', 'Axios Integration']
    },
    {
      name: 'React.js',
      category: 'frameworks',
      stack: 64,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '⚛️',
      level: 'Proficient',
      lore: 'Frontend library for building responsive single-page applications and connecting to Spring Boot APIs via Axios.',
      details: ['MessTrack Frontend', 'Axios Integration', 'Component UI']
    },

    // Languages
    {
      name: 'Java',
      category: 'languages',
      stack: 64,
      durability: 98,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '☕',
      level: 'Primary',
      lore: 'Primary language for backend engineering, Spring Boot microservices, OOP design, and production REST APIs.',
      details: ['Spring Ecosystem', 'OOP & Concurrency', 'Microservices']
    },
    {
      name: 'C++',
      category: 'languages',
      stack: 64,
      durability: 95,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '⚡',
      level: 'Proficient',
      lore: 'Primary competitive programming language used across 500+ algorithmic problems on LeetCode and Codeforces.',
      details: ['STL & Algorithms', '500+ DSA Problems', 'Timed Contests']
    },
    {
      name: 'JavaScript',
      category: 'languages',
      stack: 64,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '📜',
      level: 'Proficient',
      lore: 'Client-side scripting for React interfaces, asynchronous API integration, and interactive web UIs.',
      details: ['ES6+ & Async/Await', 'React UI', 'Axios Clients']
    },
    {
      name: 'SQL',
      category: 'languages',
      stack: 64,
      durability: 90,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🧾',
      level: 'Proficient',
      lore: 'Relational querying, schema design, joins, constraints, and transactional persistence across SQL engines.',
      details: ['Schema Design', 'Joins & Indexing', 'ACID Queries']
    },

    // Databases & Caching
    {
      name: 'Redis',
      category: 'databases',
      stack: 64,
      durability: 92,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🔴',
      level: 'Proficient',
      lore: 'In-memory caching layer serving video playback manifests and metadata with sub-10ms cache hits in Notified.',
      details: ['Sub-10ms Cache Hits', 'Manifest Caching', 'Reduced S3/DB Load']
    },
    {
      name: 'PostgreSQL',
      category: 'databases',
      stack: 64,
      durability: 94,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🐘',
      level: 'Experienced',
      lore: 'Primary relational database powering MessTrack voting/RBAC data and Job Tracker API application pipelines.',
      details: ['MessTrack DB', 'Job Tracker DB', 'JPA/Hibernate']
    },
    {
      name: 'MySQL',
      category: 'databases',
      stack: 56,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🐬',
      level: 'Proficient',
      lore: 'Relational database used to persist fault-tolerant movie lifecycle states and structured service records.',
      details: ['Movie State Machine', 'Relational Tables', 'Transactions']
    },
    {
      name: 'TiDB',
      category: 'databases',
      stack: 48,
      durability: 85,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🗄️',
      level: 'Proficient',
      lore: 'Distributed MySQL-compatible SQL database used in Notified for scalable, fault-tolerant state persistence.',
      details: ['Distributed SQL', 'Notified Persistence', 'Cloud Deployment']
    },

    // Cloud & DevOps
    {
      name: 'Docker & Compose',
      category: 'tools',
      stack: 64,
      durability: 92,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🐳',
      level: 'Proficient',
      lore: 'Containerized multi-service deployments orchestrating Spring Boot microservices, Kafka, Redis, and databases.',
      details: ['Multi-Container Setup', 'Docker Compose', 'Notified Stack']
    },
    {
      name: 'AWS S3',
      category: 'tools',
      stack: 56,
      durability: 90,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '☁️',
      level: 'Proficient',
      lore: 'Object storage storing raw video uploads and multi-bitrate HLS video segments generated by the encoding pipeline.',
      details: ['HLS Segment Storage', 'ABR Media Delivery', 'Direct Uploads']
    },
    {
      name: 'FFmpeg',
      category: 'tools',
      stack: 48,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🎬',
      level: 'Proficient',
      lore: 'Media processing engine converting raw uploads into 4 adaptive bitrate (ABR) HLS streaming profiles.',
      details: ['4 ABR Profiles', 'HLS Segmentation', 'Async Worker']
    },
    {
      name: 'Render',
      category: 'tools',
      stack: 48,
      durability: 86,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🌐',
      level: 'Proficient',
      lore: 'Cloud hosting and infrastructure-as-code deployments via Render Blueprints for containerized services.',
      details: ['Render Blueprints', 'Service Hosting', 'Docker Deploys']
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      stack: 64,
      durability: 96,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🐙',
      level: 'Advanced',
      lore: 'Version control workflows, clean commit history, branching, and open-source collaboration.',
      details: ['Branch Workflows', 'Code Reviews', 'Repo Management']
    },
    {
      name: 'Maven & Postman',
      category: 'tools',
      stack: 64,
      durability: 92,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🚀',
      level: 'Advanced',
      lore: 'Java build/dependency management with Maven and end-to-end REST API testing and auth verification in Postman.',
      details: ['Maven Builds', 'API Collections', 'Auth Testing']
    },

    // Core CS
    {
      name: 'Data Structures & Algorithms',
      category: 'core',
      stack: 64,
      durability: 99,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '⚔️',
      level: '500+ Problems',
      lore: '500+ problems solved across LeetCode, Codeforces, AlgoZenith, and GeeksforGeeks covering Graphs, Trees, and DP.',
      details: ['Trees & Graphs', 'Dynamic Programming', 'Binary Search & Stacks']
    },
    {
      name: 'Object-Oriented Programming (OOP)',
      category: 'core',
      stack: 64,
      durability: 95,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🧩',
      level: 'Advanced',
      lore: 'SOLID principles, clean domain modeling, state machine patterns, and maintainable Java service layers.',
      details: ['Design Patterns', 'State Machines', 'Clean Architecture']
    },
    {
      name: 'Database Management (DBMS)',
      category: 'core',
      stack: 56,
      durability: 90,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🗂️',
      level: 'Proficient',
      lore: 'Normalization, indexing, ACID transactions, relational modeling, and query optimization.',
      details: ['Normalization', 'Indexing', 'ACID Transactions']
    },
    {
      name: 'OS & Computer Networks',
      category: 'core',
      stack: 48,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🔌',
      level: 'Proficient',
      lore: 'TCP/IP, HTTP/HTTPS, processes, threads, concurrency, memory management, and distributed communication.',
      details: ['HTTP & TCP/IP', 'Concurrency & Threads', 'Memory Management']
    }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#373737] relative z-10 border-b-4 border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1E1E1E] border border-mc-diamond/40 text-mc-diamond font-minecraft text-xs">
            <span>SKILLS & TOOLS</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            TECHNICAL SKILLS
          </h2>
          <p className="text-gray-300 font-mono text-xs sm:text-sm max-w-xl mx-auto">
            Languages, backend frameworks, databases, caching, cloud tools, and core CS. Hover or tap any slot for details.
          </p>
        </div>

        {/* MINECRAFT CREATIVE INVENTORY GUI CONTAINER */}
        <div className="mc-panel p-4 sm:p-6 rounded-none shadow-2xl relative">
          
          {/* TOP TAB BAR (Like Minecraft Creative Tabs) */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 border-b-2 border-[#555555] pb-3">
            {categories.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-[11px] font-minecraft border-2 transition-all ${
                    isActive
                      ? 'mc-btn-green'
                      : 'mc-btn-stone'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* INVENTORY SLOTS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {filteredSkills.map((skill, index) => {
              const isHovered = hoveredSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => {
                    sound.playPop();
                    setHoveredSkill(skill);
                  }}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => sound.playOrb()}
                  className={`mc-slot p-3 cursor-pointer flex flex-col justify-between h-32 relative transition-all group ${
                    isHovered ? 'active scale-[1.03]' : ''
                  }`}
                >
                  {/* Top: Stack count badge */}
                  <div className="flex justify-between items-start">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="font-minecraft text-xs text-white bg-black/60 px-1 py-0.5 border border-white/20">
                      {skill.stack}
                    </span>
                  </div>

                  {/* Middle: Skill name */}
                  <div className="mt-1">
                    <div className="font-minecraft text-[11px] text-white font-bold leading-tight line-clamp-2">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-gray-300 font-mono mt-0.5">
                      {skill.level}
                    </div>
                  </div>

                  {/* Bottom: Durability Bar */}
                  <div className="w-full bg-[#1E1E1E] h-1.5 border border-black overflow-hidden mt-1">
                    <div
                      className={`h-full ${
                        skill.durability > 90
                          ? 'bg-[#55FF55]'
                          : skill.durability > 80
                          ? 'bg-[#FFAA00]'
                          : 'bg-[#FF5555]'
                      }`}
                      style={{ width: `${skill.durability}%` }}
                    />
                  </div>

                  {/* MINECRAFT AUTHENTIC HOVER TOOLTIP */}
                  {isHovered && (
                    <div className="mc-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 text-left pointer-events-none shadow-2xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-minecraft text-xs font-bold ${skill.rarityColor}`}>
                          {skill.name}
                        </span>
                        <span className="font-minecraft text-[9px] text-gray-400 uppercase">
                          {skill.rarity}
                        </span>
                      </div>

                      <p className="text-gray-200 text-xs font-mono leading-snug mb-2">
                        {skill.lore}
                      </p>

                      <div className="border-t border-purple-900/60 pt-1.5 space-y-0.5">
                        <div className="font-minecraft text-[9px] text-[#55FFFF]">
                          APPLIED IN:
                        </div>
                        {skill.details.map((d, i) => (
                          <div key={i} className="text-gray-300 text-[10px] font-mono flex items-center space-x-1">
                            <span className="text-[#FFAA00]">▪</span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2 text-right">
                        <span className="font-minecraft text-[8px] text-gray-400">
                          Durability: {skill.durability}%
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Bottom Inventory Bar Summary */}
          <div className="mt-6 pt-4 border-t-2 border-[#555555] flex flex-wrap items-center justify-between text-xs font-minecraft text-gray-700">
            <div>
              <span>SLOTS OCCUPIED: </span>
              <strong className="text-black">{filteredSkills.length} / 27</strong>
            </div>
            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 bg-[#FFAA00] inline-block" />
                <span>Legendary</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 bg-[#AA00AA] inline-block" />
                <span>Epic</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 bg-[#55FFFF] inline-block" />
                <span>Rare</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
