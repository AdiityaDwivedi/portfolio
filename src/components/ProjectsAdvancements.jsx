import React from 'react';
import { sound } from '../utils/audio';

export const projectsData = [
  {
    id: 'messtrack',
    title: 'MESSTRACK — HOSTEL MANAGEMENT',
    subtitle: 'Hostel Mess Management & Polling System',
    category: 'Full-Stack Web App',
    shortDescription: 'A full-stack hostel mess management system with secure authentication, real-time polling, and menu administration.',
    features: [
      'Built full-stack architecture with React frontend and Spring Boot REST backend communicating via secured JSON contracts.',
      'Implemented JWT authentication, BCrypt encryption, and Role-Based Access Control for Students and Admins.',
      'Engineered dynamic menu management, broadcast announcements, and student feedback loops.',
      'Developed robust voting/polling engine with one-vote-per-user validation and automated poll expiry schedules.'
    ],
    tags: ['REACT', 'SPRING BOOT', 'POSTGRESQL', 'JWT', 'BCRYPT', 'REST APIS', 'RBAC'],
    thought: 'Hostel meal scheduling and food quality complaints were traditionally managed with chaotic paper logs and messages. MessTrack was designed to digitize meal voting and bring transparent accountability to campus residences.',
    githubUrl: 'https://github.com/AdiityaDwivedi/messtrack',
    liveUrl: 'https://messtrack-three.vercel.app/',
    status: 'ONLINE',
    borderAccent: 'hover:border-[#55FF55]'
  },
  {
    id: 'job-tracker',
    title: 'JOB TRACKER API — PIPELINE',
    subtitle: 'Career & Application Pipeline Engine',
    category: 'Backend REST API',
    shortDescription: 'A high-throughput Spring Boot REST backend engineered to track, manage, and audit corporate job applications and interview stages.',
    features: [
      'Designed normalized relational data schemas using JPA/Hibernate to manage multi-tiered relationships between Users, Companies, and Applications.',
      'Engineered strict 3-tier layered architecture segregating Controllers, Business Logic Services, and Persistence Repositories.',
      'Decoupled domain models using Data Transfer Objects (DTOs) for clean API contracts and payload hygiene.',
      'Centralized global exception handling using @ControllerAdvice and custom domain exceptions for standardized API error diagnostics.'
    ],
    tags: ['JAVA', 'SPRING BOOT', 'POSTGRESQL', 'JPA / HIBERNATE', 'DTO PATTERN', '@CONTROLLERADVICE'],
    thought: 'Applying to dozens of engineering opportunities across platforms makes tracking application status difficult. This backend service models recruitment stages, interview notes, and deadlines into a structured relational API.',
    githubUrl: 'https://github.com/AdiityaDwivedi/job-tracker-api',
    liveUrl: null,
    status: 'REPO LIVE',
    borderAccent: 'hover:border-[#4DEEEA]'
  },
  {
    id: 'green-fleet',
    title: 'GREEN FLEET — ROUTE OPTIMIZER',
    subtitle: 'Logistics Route & Carbon Emission Optimization',
    category: 'Algorithms & Logistics',
    shortDescription: 'An algorithmic system engineered to optimize commercial delivery routes, reduce vehicle fuel consumption, and monitor carbon emission metrics.',
    features: [
      'Explores graph-based pathfinding and heuristics for multi-stop vehicle delivery routes.',
      'Calculates carbon footprint estimates based on distance, cargo weight, and vehicle fuel efficiency.',
      'Models load optimization algorithms to maximize delivery vehicle capacity utilization.',
      'Designed to transform theoretical graph optimization logic into a practical logistics dashboard.'
    ],
    tags: ['PYTHON', 'C++', 'GRAPH ALGORITHMS', 'ROUTE OPTIMIZATION', 'HEURISTICS', 'DATA MODELING'],
    thought: 'Commercial delivery logistics generate significant fuel waste on suboptimal multi-stop paths. This project explores practical pathfinding algorithms to plan smarter routes and calculate carbon savings.',
    githubUrl: 'https://github.com/AdiityaDwivedi',
    liveUrl: null,
    status: 'IN PROGRESS',
    borderAccent: 'hover:border-[#FFAA00]'
  }
];

export default function ProjectsAdvancements({ onSelectProject }) {
  const handleCardClick = (id) => {
    sound.playClick();
    if (onSelectProject) {
      onSelectProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#18130E] relative z-10 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-[#8C6D3F] text-[#FFAA00] font-minecraft text-xs">
            <span>WHERE DID MY TIME GO?</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide drop-shadow-md">
            PROJECTS & ADVANCEMENTS
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto">
            Practical systems, APIs, and algorithms. Click any card to inspect full architecture details.
          </p>
        </div>

        {/* Anubhav-Style Uniform Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className={`bg-[#201913] border-4 border-[#3A281A] p-6 sm:p-7 relative transition-all duration-200 flex flex-col justify-between shadow-[6px_6px_0_0_#0a0806] ${proj.borderAccent} hover:-translate-y-1 group`}
            >
              <div className="space-y-4">
                {/* Title (Centered pixel heading) */}
                <h3 className="font-minecraft text-center text-sm sm:text-base text-[#FFAA00] group-hover:text-white transition-colors leading-snug tracking-wider min-h-[44px] flex items-center justify-center">
                  {proj.title}
                </h3>

                {/* Short 2-3 Line Summary (Identical to Anubhav's card text) */}
                <p className="text-gray-300 font-mono text-xs leading-relaxed text-center min-h-[64px] flex items-center justify-center">
                  {proj.shortDescription}
                </p>
              </div>

              {/* View Details Action Button at bottom */}
              <div className="pt-6 mt-4 border-t border-white/10 flex justify-center">
                <button
                  onClick={() => handleCardClick(proj.id)}
                  className="mc-btn-stone w-full py-2.5 px-4 font-minecraft text-[11px] tracking-wider transition-all group-hover:mc-btn-green"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
