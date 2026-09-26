import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Sparkles, Layers, ShieldCheck, Database, Wrench, BookOpen } from 'lucide-react';

export default function SkillsInventory() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'ALL ITEMS', icon: Layers },
    { id: 'frameworks', label: 'FRAMEWORKS', icon: ShieldCheck },
    { id: 'languages', label: 'LANGUAGES', icon: Sparkles },
    { id: 'databases', label: 'DATABASES', icon: Database },
    { id: 'core', label: 'CORE CS', icon: BookOpen },
    { id: 'tools', label: 'TOOLS', icon: Wrench },
  ];

  const skillsData = [
    // AI / ML & Learning
    {
      name: 'AI & Machine Learning',
      category: 'core',
      stack: 32,
      durability: 80,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🧠',
      level: 'Learning & Exploring',
      lore: 'Studying foundational machine learning concepts, models, and Python for upcoming intelligent projects.',
      details: ['ML Fundamentals', 'Python & Math', 'Upcoming AI Projects']
    },
    // Frameworks
    {
      name: 'Spring Boot',
      category: 'frameworks',
      stack: 64,
      durability: 96,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🍃',
      level: 'Experienced',
      lore: 'Java framework used to build RESTful APIs and backend services in MessTrack and Job Tracker.',
      details: ['MessTrack backend', 'Job Tracker API', 'DTO mapping', '@ControllerAdvice']
    },
    {
      name: 'Spring Security',
      category: 'frameworks',
      stack: 48,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🛡️',
      level: 'Proficient',
      lore: 'Security layer for JWT authentication, password hashing, and role-based access control.',
      details: ['JWT Authentication', 'Role-Based Access (RBAC)', 'Protected CRUD']
    },
    {
      name: 'React.js',
      category: 'frameworks',
      stack: 64,
      durability: 90,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '⚛️',
      level: 'Proficient',
      lore: 'Frontend library for building responsive user interfaces and single-page web apps.',
      details: ['Component Architecture', 'State & Hooks', 'MessTrack Web App']
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
      level: 'Mastery',
      lore: 'Primary language for enterprise backend architecture, multithreading, and OOP design patterns.',
      details: ['Java 17/21', 'Generics & Streams', 'Concurrency', 'JVM Internals']
    },
    {
      name: 'C++',
      category: 'languages',
      stack: 64,
      durability: 94,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '⚡',
      level: 'Advanced',
      lore: 'Weapon of choice for high-speed algorithmic problem solving and 500+ competitive programming questions.',
      details: ['STL Algorithms', 'Pointer Arithmetic', 'Time/Space Optimization']
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
      lore: 'Client-side script engine driving interactive web applications and asynchronous API communication.',
      details: ['ES6+ Syntax', 'Async/Await', 'DOM Manipulation']
    },
    {
      name: 'Python',
      category: 'languages',
      stack: 48,
      durability: 86,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🐍',
      level: 'Proficient',
      lore: 'Language for data processing, scripting, and machine learning exploration.',
      details: ['Data Structures', 'AI/ML Prototyping', 'Automation']
    },

    // Databases
    {
      name: 'PostgreSQL',
      category: 'databases',
      stack: 64,
      durability: 92,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🐘',
      level: 'Advanced',
      lore: 'Relational database engine with complex querying, indexing, and JPA/Hibernate relationships.',
      details: ['Relational Schema Design', 'JPA/Hibernate ORM', 'ACID Compliance']
    },
    {
      name: 'MySQL',
      category: 'databases',
      stack: 50,
      durability: 85,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🐬',
      level: 'Proficient',
      lore: 'High-speed relational data store for structured data, joins, and transactions.',
      details: ['SQL Queries', 'Constraints & Foreign Keys', 'Stored Procedures']
    },

    // Core Concepts
    {
      name: 'Data Structures & Algorithms',
      category: 'core',
      stack: 64,
      durability: 99,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '⚔️',
      level: 'Expert (500+ Solved)',
      lore: 'Mastery over Arrays, Trees, Graphs, DP, Binary Search, and Greedy algorithms across LeetCode & Codeforces.',
      details: ['LeetCode Profile', 'Codeforces Profile', 'Graph Theory', 'Dynamic Programming']
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
      lore: 'Clean software engineering principles: Encapsulation, Polymorphism, Inheritance, Abstraction, and SOLID.',
      details: ['Design Patterns', 'Polymorphism', 'Clean Architecture']
    },
    {
      name: 'Database Management (DBMS)',
      category: 'core',
      stack: 55,
      durability: 90,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🗄️',
      level: 'Proficient',
      lore: 'Comprehensive understanding of normalization, indexing, concurrency control, and query optimization.',
      details: ['Normalization (1NF-BCNF)', 'Indexing & B-Trees', 'Transactions & Locks']
    },
    {
      name: 'Computer Networks & OS',
      category: 'core',
      stack: 45,
      durability: 88,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🌐',
      level: 'Proficient',
      lore: 'Deep knowledge of TCP/IP, HTTP/HTTPS protocols, processes, threads, memory management, and socket operations.',
      details: ['TCP/IP & OSI Stack', 'Process Scheduling', 'Virtual Memory', 'REST Protocol']
    },

    // Tools
    {
      name: 'Git & GitHub',
      category: 'tools',
      stack: 64,
      durability: 96,
      rarity: 'Epic',
      rarityColor: 'text-[#AA00AA]',
      icon: '🐙',
      level: 'Advanced',
      lore: 'Version control mastery for branch management, pull requests, collaboration, and repository integrity.',
      details: ['Branch Workflows', 'Merge Conflict Resolution', 'GitHub Actions']
    },
    {
      name: 'Postman',
      category: 'tools',
      stack: 64,
      durability: 92,
      rarity: 'Rare',
      rarityColor: 'text-[#55FFFF]',
      icon: '🚀',
      level: 'Advanced',
      lore: 'API testing platform used for automated test suites, endpoint verification, header simulation, and documentation.',
      details: ['REST Endpoint Testing', 'Auth Header Testing', 'Collection Runners']
    },
    {
      name: 'RESTful API Architecture',
      category: 'tools',
      stack: 64,
      durability: 95,
      rarity: 'Legendary',
      rarityColor: 'text-[#FFAA00]',
      icon: '📦',
      level: 'Advanced',
      lore: 'Design of predictable, standard HTTP REST endpoints with clean URI schemas, status codes, and DTO contracts.',
      details: ['Clean DTOs', 'Global Exception Handling', 'Resource URIs']
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
            <span>INVENTORY INSPECTION</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            PLAYER ARSENAL & SKILLS
          </h2>
          <p className="text-gray-300 font-mono text-sm max-w-xl mx-auto">
            Hover over an inventory slot to inspect skill lore, durability, and practical battlefield applications.
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
