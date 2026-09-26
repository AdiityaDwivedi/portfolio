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
          <div className="text-center pb-4 border-b border-[#8C6D3F]/40 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B1B10] tracking-tight">
              Aditya Kumar
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-700 font-mono">
              <span>📞 +91 7054253164</span>
              <span>✉️ aditya22dwivedi22@gmail.com</span>
              <a href="https://github.com/AdiityaDwivedi" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">
                github.com/AdiityaDwivedi
              </a>
              <a href="https://linkedin.com/in/adiityadwivedi" target="_blank" rel="noreferrer" className="underline font-bold text-blue-900">
                linkedin.com/in/adiityadwivedi
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              SKILLS
            </h3>
            <div className="text-xs space-y-1 font-mono text-gray-800">
              <p><strong>Languages:</strong> C++, Java, JavaScript</p>
              <p><strong>Frameworks:</strong> Spring Boot, Spring Security, React</p>
              <p><strong>Databases:</strong> MySQL, PostgreSQL</p>
              <p><strong>Core Concepts:</strong> DSA, OOP, CN, DBMS, OS</p>
              <p><strong>Tools:</strong> Git, GitHub, Postman, REST APIs</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              EDUCATION
            </h3>
            <div className="flex justify-between items-start text-xs font-mono">
              <div>
                <p className="font-bold text-gray-900 text-sm">Bakhtiyarpur College of Engineering</p>
                <p className="text-gray-700">Bachelor of Technology – Computer Science Engineering (IoT)</p>
                <p className="text-gray-600">Patna, Bihar</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-900 bg-amber-200/80 px-2 py-0.5 border border-amber-400">
                  CGPA: 7.4
                </span>
                <p className="text-gray-600 mt-1">2024 – 2028</p>
              </div>
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
                    MessTrack | Hostel Mess Management System
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
                  Stack: React, Spring Boot, PostgreSQL, JWT, BCrypt, RBAC
                </div>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 leading-relaxed font-sans">
                  <li>Built full-stack hostel mess management system with React, Spring Boot, and PostgreSQL with RESTful APIs.</li>
                  <li>Implemented JWT authentication, BCrypt password hashing, and role-based access control for Students, Hostel Admins, and Super Admins.</li>
                  <li>Developed menu, announcements, polls, and voting modules with protected CRUD operations.</li>
                  <li>Implemented one-vote-per-user validation and poll expiry checks for the voting system.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 text-sm">
                    Job Tracker API | Enterprise Application Backend
                  </span>
                  <a href="https://github.com/AdiityaDwivedi/job-tracker-api" target="_blank" rel="noreferrer" className="text-blue-800 underline text-xs font-mono font-bold">
                    GitHub Link
                  </a>
                </div>
                <div className="text-xs text-gray-700 font-mono mb-1">
                  Stack: Java, Spring Boot, PostgreSQL, JPA / Hibernate, DTOs
                </div>
                <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 leading-relaxed font-sans">
                  <li>Built a RESTful job tracking backend for managing users, companies, and job applications using Spring Boot and PostgreSQL.</li>
                  <li>Designed relational data models with JPA/Hibernate to manage relationships between entities.</li>
                  <li>Implemented a layered architecture separating controllers, services, and persistence logic for maintainable backend development.</li>
                  <li>Used DTOs to separate API request/response models from database entities and maintain clean API contracts.</li>
                  <li>Implemented centralized exception handling with @ControllerAdvice and custom exceptions for consistent API error responses.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Problem Solving */}
          <div>
            <h3 className="font-minecraft text-xs text-[#8C6D3F] uppercase border-b-2 border-[#8C6D3F]/60 pb-1 mb-2">
              PROBLEM SOLVING & COMPETITIVE CODING
            </h3>
            <div className="text-xs font-mono text-gray-800 flex flex-wrap items-center justify-between">
              <span><strong>Problems Solved:</strong> 500+ across LeetCode, Codeforces, AlgoZenith, and GeeksforGeeks</span>
              <div className="space-x-3 mt-1 sm:mt-0">
                <a href="https://leetcode.com/u/adiityadwivedi/" target="_blank" rel="noreferrer" className="text-amber-800 underline font-bold">
                  LeetCode Profile ➔
                </a>
                <a href="https://codeforces.com/profile/AdiityaDwivedi" target="_blank" rel="noreferrer" className="text-blue-800 underline font-bold">
                  Codeforces Profile ➔
                </a>
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
