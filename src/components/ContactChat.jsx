import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Mail, Phone, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactChat() {
  const [copiedField, setCopiedField] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const email = 'aditya22dwivedi22@gmail.com';
  const phone = '+91 7054253164';
  const github = 'https://github.com/AdiityaDwivedi';
  const linkedin = 'https://linkedin.com/in/adiityadwivedi';

  const copyToClipboard = (text, fieldName) => {
    sound.playOrb();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sound.playLevelUp();
    const subject = encodeURIComponent(`Portfolio Message from ${senderName || 'Recruiter/Developer'}`);
    const body = encodeURIComponent(
      `Hello Aditya,\n\nSender: ${senderName || 'Anonymous'} (${senderEmail || 'Not provided'})\n\nMessage:\n${chatMessage}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#181818] relative z-10 border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-white/20 text-mc-green font-minecraft text-xs">
            <span>CONTACT</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-md mx-auto">
            Have a project, role, or question? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: CLEAN DIRECT MESSAGE FORM */}
          <div className="lg:col-span-7 bg-[#141414] border-4 border-[#333333] p-5 sm:p-7 shadow-2xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 mb-5 font-minecraft text-xs">
              <span className="text-white flex items-center space-x-2">
                <Send className="w-4 h-4 text-mc-green" />
                <span>SEND A MESSAGE</span>
              </span>
              <span className="text-mc-green text-[10px] flex items-center space-x-1.5">
                <span className="w-2 h-2 bg-mc-green rounded-full inline-block animate-pulse" />
                <span>INBOX OPEN</span>
              </span>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-minecraft text-gray-300 mb-1.5">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-black/80 border-2 border-white/20 px-3.5 py-2.5 text-white text-xs font-mono focus:border-mc-green focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-minecraft text-gray-300 mb-1.5">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full bg-black/80 border-2 border-white/20 px-3.5 py-2.5 text-white text-xs font-mono focus:border-mc-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-minecraft text-gray-300 mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Hey Aditya, let's talk about..."
                  className="w-full bg-black/80 border-2 border-white/20 p-3.5 text-white text-xs font-mono focus:border-mc-green focus:outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mc-btn-green w-full py-3 text-xs font-minecraft flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* RIGHT: DIRECT CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email */}
            <div className="bg-[#1C1C1C] border-2 border-[#333333] hover:border-mc-green/60 p-4 text-white shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-white flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-mc-green" />
                  <span>EMAIL</span>
                </span>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="mc-btn-stone px-2 py-1 text-[10px] font-minecraft flex items-center space-x-1"
                >
                  {copiedField === 'email' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'email' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                className="font-mono text-sm text-gray-300 break-all hover:text-white underline block"
              >
                {email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#1C1C1C] border-2 border-[#333333] hover:border-[#FFAA00]/60 p-4 text-white shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-white flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#FFAA00]" />
                  <span>PHONE</span>
                </span>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="mc-btn-stone px-2 py-1 text-[10px] font-minecraft flex items-center space-x-1"
                >
                  {copiedField === 'phone' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedField === 'phone' ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <a
                href={`tel:${phone}`}
                className="font-mono text-sm text-gray-300 hover:text-white underline block"
              >
                {phone}
              </a>
            </div>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="bg-[#1C1C1C] border-2 border-[#333333] hover:border-[#4DEEEA]/60 p-4 text-white shadow-lg block transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-white flex items-center space-x-2">
                  <LinkedinIcon className="w-4 h-4 text-[#4DEEEA]" />
                  <span>LINKEDIN</span>
                </span>
                <span className="font-minecraft text-[10px] text-[#4DEEEA] group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
              <span className="font-mono text-xs text-gray-300 group-hover:text-white underline break-all block">
                linkedin.com/in/adiityadwivedi
              </span>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="bg-[#1C1C1C] border-2 border-[#333333] hover:border-mc-emerald/60 p-4 text-white shadow-lg block transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-white flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4 text-mc-emerald" />
                  <span>GITHUB</span>
                </span>
                <span className="font-minecraft text-[10px] text-mc-emerald group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
              <span className="font-mono text-xs text-gray-300 group-hover:text-white underline break-all block">
                github.com/AdiityaDwivedi
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
