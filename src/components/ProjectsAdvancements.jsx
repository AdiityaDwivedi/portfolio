import React from 'react';
import { sound } from '../utils/audio';

export const projectsData = [
  {
    id: 'notified',
    title: 'NOTIFIED — STREAMING MICROSERVICES',
    subtitle: 'Event-Driven Video Streaming & Transcoding Architecture',
    category: 'Distributed Microservices',
    shortDescription: 'A 4-microservice event-driven video streaming backend using Spring Boot, Apache Kafka, FFmpeg, Redis caching, AWS S3, and Docker.',
    features: [
      'Architected a 4-microservice backend (Content, Video, Encoding, Streaming) using Spring Boot and Apache Kafka, decoupling CPU-intensive video processing from API requests to eliminate HTTP upload timeouts common in monolithic setups.',
      'Built an asynchronous transcoding pipeline using Kafka events (VideoUploaded, VideoEncoded) and FFmpeg to convert raw uploads into 4 adaptive bitrate (ABR) profiles and upload HLS segments directly to AWS S3.',
      'Integrated Redis caching in the streaming service to serve playback manifests and metadata with sub-10ms cache hits, reducing redundant database and S3 lookups compared to uncached vanilla REST endpoints.',
      'Engineered a fault-tolerant movie lifecycle state machine (Processing, Ready, Failed, Deleted) persisted in MySQL/TiDB, and containerized all services with Docker Compose and Render Blueprints.'
    ],
    tags: ['SPRING BOOT', 'APACHE KAFKA', 'REDIS', 'AWS S3', 'FFMPEG', 'DOCKER', 'MYSQL / TIDB', 'RENDER'],
    thought: 'CPU-heavy video transcoding blocks HTTP threads and causes timeouts in traditional monoliths. Notified decouples upload ingestion from FFmpeg encoding over Kafka events while serving HLS playback manifests in under 10ms via Redis.',
    githubUrl: null,
    liveUrl: null,
    status: 'MICROSERVICES',
    borderAccent: 'hover:border-[#FFAA00]'
  },
  {
    id: 'messtrack',
    title: 'MESSTRACK — HOSTEL MANAGEMENT',
    subtitle: 'Hostel Mess Management & Polling System',
    category: 'Full-Stack Web App',
    shortDescription: 'A full-stack hostel mess management platform with JWT auth, 3-tier RBAC, daily menus, announcements, and live student voting.',
    features: [
      'Developed a full-stack hostel mess management platform with REST APIs for managing daily menus, announcements, polls, and live student voting.',
      'Implemented JWT authentication, BCrypt password hashing, and 3-tier Role-Based Access Control (RBAC) via Spring Security for Students, Hostel Admins, and Super Admins.',
      'Built server-side voting validation to prevent duplicate votes and reject submissions on expired polls, integrating the React frontend via Axios.'
    ],
    tags: ['REACT', 'SPRING BOOT', 'SPRING SECURITY', 'POSTGRESQL', 'JWT', 'BCRYPT', '3-TIER RBAC', 'AXIOS'],
    thought: 'Hostel meal scheduling and food quality feedback were traditionally handled with scattered messages and manual logs. MessTrack digitizes daily menus, announcements, and tamper-proof poll voting with role-based access.',
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
    shortDescription: 'A Spring Boot REST backend engineered with layered architecture, DTO mapping, and @ControllerAdvice error handling to track job pipelines.',
    features: [
      'Built a RESTful backend API to track job applications and company pipelines using layered architecture (Controllers, Services, Repositories) and Spring Data JPA.',
      'Designed relational data models with JPA/Hibernate and PostgreSQL to manage relationships across users, companies, and application stages.',
      'Implemented DTO mapping to decouple API contracts from database entities and centralized error handling using @ControllerAdvice.'
    ],
    tags: ['JAVA', 'SPRING BOOT', 'POSTGRESQL', 'JPA / HIBERNATE', 'DTO PATTERN', '@CONTROLLERADVICE'],
    thought: 'Applying across multiple platforms makes tracking interview stages difficult. This backend models company pipelines, application statuses, and structured error diagnostics with clean layered separation.',
    githubUrl: 'https://github.com/AdiityaDwivedi/job-tracker-api',
    liveUrl: null,
    status: 'REPO LIVE',
    borderAccent: 'hover:border-[#4DEEEA]'
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
            Event-driven microservices, full-stack systems, and REST APIs. Click any card to inspect full architecture details.
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
