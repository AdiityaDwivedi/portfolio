import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Cpu } from 'lucide-react';
import { sound } from '../utils/audio';

export default function EducationQuest() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A231D] relative z-10 border-b-4 border-[#1A1009]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/60 border border-mc-gold/50 text-mc-gold font-minecraft text-xs">
            <span>QUEST LOG & MILESTONES</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            ACADEMIC GUILD & TRAINING
          </h2>
          <p className="text-gray-300 font-mono text-sm">
            Institutional education providing the theory behind scalable computer systems.
          </p>
        </div>

        {/* Education Quest Card (Styled like an enchanted quest tome) */}
        <div className="bg-[#1C1510] border-4 border-[#8B5A2B] p-6 sm:p-8 shadow-2xl relative">
          
          {/* Top Quest Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#8B5A2B]/40 pb-4 mb-6 gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#8B5A2B]/30 border-2 border-[#8B5A2B] flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-mc-gold" />
              </div>
              <div>
                <span className="font-minecraft text-[10px] text-mc-gold uppercase tracking-wider">
                  MAIN QUEST IN PROGRESS
                </span>
                <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold">
                  Bakhtiyarpur College of Engineering
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2 font-minecraft text-xs">
              <span className="bg-[#55AA55] text-black px-2.5 py-1 font-bold">
                CGPA: 7.4
              </span>
            </div>
          </div>

          {/* Degree & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2.5 text-gray-200 text-sm font-medium">
              <Cpu className="w-4 h-4 text-[#4DEEEA]" />
              <span>Bachelor of Technology — Computer Science Engineering (IoT)</span>
            </div>

            <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 sm:justify-end">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-mc-gold" />
                <span>2024 – 2028 (Undergraduate)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Patna, Bihar</span>
              </div>
            </div>
          </div>

          {/* Curriculum & Key Learnings */}
          <div className="bg-black/40 p-4 border border-[#8B5A2B]/40 space-y-3">
            <div className="font-minecraft text-xs text-mc-gold flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>KEY CURRICULUM & SYSTEM TOPICS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-gray-300">
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ IoT Architectures & Sensors</div>
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ Data Structures & Algorithms</div>
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ Database Management Systems</div>
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ Operating Systems</div>
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ Computer Networks & Protocols</div>
              <div className="bg-[#2D1F16] p-2 border border-white/10">▪ Object-Oriented Software Design</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
