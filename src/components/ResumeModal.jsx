import React from 'react';
import { sound } from '../utils/audio';
import { X, Download, Printer, ExternalLink, BookOpen, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handleClose = () => {
    sound.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Outer Minecraft Panel */}
      <div className="mc-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-8 relative shadow-2xl bg-[#EAD7B0] text-[#1E1E1E]">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b-2 border-[#8C6D3F] pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📖</span>
            <div>
              <span className="font-minecraft text-xs text-[#8C6D3F] uppercase">
                ENCHANTED RESUME SCROLL
              </span>
              <h2 className="font-minecraft text-base sm:text-xl text-[#2B1B10] font-bold">
                ADITYA KUMAR
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="mc-btn-stone px-3 py-1.5 text-xs font-minecraft flex items-center space-x-1"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT / PDF</span>
            </button>

            <button
              onClick={handleClose}
              className="w-8 h-8 mc-btn-stone flex items-center justify-center text-sm font-bold"
              title="Close Tome"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-sm font-body">
          
          {/* Header Info */}
          <div className="text-center pb-4 border-b border-[#8C6D3F]/40 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B1B10] tracking-tight">
              Aditya Kumar
            </h1>
            <p className="text-xs font-bold text-[#2B1B10]/85 tracking-wide">
              Backend Developer | Java | Spring Boot | Distributed Systems
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-700 font-mono pt-1">
              <span>📞 +91 7054253164</span>
              <span>✉️ aditya22dwivedi22@gmail.com</span>
              <a href="https://github.com/AdiityaDwivedi" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">
                github.com/AdiityaDwivedi
              </a>
              <a href="https://linkedin.com/in/adiityadwivedi" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">
                linkedin.com/in/adiityadwivedi
              </a>
              <a href="https://adiityadwivedi.vercel.app/" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              SUMMARY
            </h3>
            <p className="text-xs text-gray-800 leading-relaxed font-sans">
              Computer Science undergraduate specializing in backend development and event-driven microservices using Java and Spring Boot. Experienced in designing scalable REST APIs, asynchronous processing pipelines with Apache Kafka, Redis caching, AWS S3 storage, and containerized deployments with Docker. Strong foundation in Data Structures, Algorithms (500+ problems), OOP, and DBMS.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              TECHNICAL SKILLS
            </h3>
            <div className="text-xs space-y-1 font-mono text-gray-800">
              <p><strong>Languages:</strong> Java, C++, JavaScript, SQL</p>
              <p><strong>Backend & Architecture:</strong> Spring Boot, Microservices, Apache Kafka, Spring Security, Spring Data JPA, Hibernate, REST APIs, JWT</p>
              <p><strong>Databases & Caching:</strong> MySQL, PostgreSQL, TiDB, Redis</p>
              <p><strong>Cloud & DevOps:</strong> Docker, Docker Compose, AWS S3, Render, FFmpeg, Git, GitHub, Maven, Postman</p>
              <p><strong>Frontend & Core CS:</strong> React.js, Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              PROJECTS
            </h3>
            
            <div className="space-y-4">
              {/* Project 1 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 text-sm">
                    Notified – Event-Driven Video Streaming Microservices
                  </span>
                </div>
                <div className="text-xs text-gray-700 font-mono mb-1">
                  Stack: Spring Boot, Apache Kafka, Redis, AWS S3, FFmpeg, Docker, MySQL/TiDB, Render
                </div>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 leading-relaxed font-sans">
                  <li>Architected a 4-microservice backend (Content, Video, Encoding, Streaming) using Spring Boot and Apache Kafka, decoupling CPU-intensive video processing from API requests to eliminate HTTP upload timeouts common in monolithic setups.</li>
                  <li>Built an asynchronous transcoding pipeline using Kafka events (VideoUploaded, VideoEncoded) and FFmpeg to convert raw uploads into 4 adaptive bitrate (ABR) profiles and upload HLS segments directly to AWS S3.</li>
                  <li>Integrated Redis caching in the streaming service to serve playback manifests and metadata with sub-10ms cache hits, reducing redundant database and S3 lookups compared to uncached vanilla REST endpoints.</li>
                  <li>Engineered a fault-tolerant movie lifecycle state machine (Processing, Ready, Failed, Deleted) persisted in MySQL/TiDB, and containerized all services with Docker Compose and Render Blueprints.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 text-sm">
                    MessTrack – Hostel Mess Management System
                  </span>
                  <div className="space-x-2 text-xs font-mono">
                    <a href="https://github.com/AdiityaDwivedi/messtrack" target="_blank" rel="noreferrer" className="text-blue-800 underline font-bold">
                      GitHub
                    </a>
                    <span>•</span>
                    <a href="https://messtrack-three.vercel.app/" target="_blank" rel="noreferrer" className="text-green-800 underline font-bold">
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="text-xs text-gray-700 font-mono mb-1">
                  Stack: React, Spring Boot, PostgreSQL, JWT, BCrypt, 3-Tier RBAC
                </div>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 leading-relaxed font-sans">
                  <li>Developed a full-stack hostel mess management platform with REST APIs for managing daily menus, announcements, polls, and live student voting.</li>
                  <li>Implemented JWT authentication, BCrypt password hashing, and 3-tier Role-Based Access Control (RBAC) via Spring Security for Students, Hostel Admins, and Super Admins.</li>
                  <li>Built server-side voting validation to prevent duplicate votes and reject submissions on expired polls, integrating the React frontend via Axios.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 text-sm">
                    Job Tracker API
                  </span>
                  <a href="https://github.com/AdiityaDwivedi/job-tracker-api" target="_blank" rel="noreferrer" className="text-blue-800 underline text-xs font-mono font-bold">
                    GitHub
                  </a>
                </div>
                <div className="text-xs text-gray-700 font-mono mb-1">
                  Stack: Java, Spring Boot, PostgreSQL, JPA/Hibernate, DTOs, @ControllerAdvice
                </div>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 leading-relaxed font-sans">
                  <li>Built a RESTful backend API to track job applications and company pipelines using layered architecture (Controllers, Services, Repositories) and Spring Data JPA.</li>
                  <li>Implemented DTO mapping to decouple API contracts from database entities and centralized error handling using @ControllerAdvice.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Problem Solving */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              PROBLEM SOLVING
            </h3>
            <div className="text-xs font-sans text-gray-800 space-y-1">
              <p><strong>Competitive Programming:</strong> Solved 500+ problems across LeetCode, Codeforces, AlgoZenith, and GeeksforGeeks.</p>
              <p><strong>Core Topics:</strong> Arrays, Strings, Recursion, Binary Search, Linked Lists, Stacks, Queues, Trees, Graphs, and Dynamic Programming.</p>
              <div className="space-x-3 pt-1 font-mono">
                <a href="https://leetcode.com/u/adiityadwivedi/" target="_blank" rel="noreferrer" className="text-amber-800 underline font-bold">
                  LeetCode Profile ➔
                </a>
                <a href="https://codeforces.com/profile/AdiityaDwivedi" target="_blank" rel="noreferrer" className="text-blue-800 underline font-bold">
                  Codeforces Profile ➔
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              EDUCATION
            </h3>
            <div className="text-xs text-gray-800 flex flex-wrap justify-between items-baseline gap-2">
              <div>
                <p className="font-bold text-gray-900">Bakhtiyarpur College of Engineering</p>
                <p className="italic text-gray-700">B.Tech. in Computer Science and Engineering (IoT)</p>
              </div>
              <div className="text-right font-mono text-gray-700">
                <p className="font-bold">2024 – 2028</p>
                <p className="italic">Bihar, India</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-4 border-t-2 border-[#8C6D3F] flex flex-wrap justify-between items-center gap-3">
          <span className="font-minecraft text-[10px] text-gray-600">
            Crafted for Aditya Kumar • 2026 Edition
          </span>
          <div className="flex space-x-3">
            <button
              onClick={handlePrint}
              className="mc-btn-green px-4 py-2 text-xs font-minecraft flex items-center space-x-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SAVE AS PDF</span>
            </button>
            <button
              onClick={handleClose}
              className="mc-btn-stone px-4 py-2 text-xs font-minecraft"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
