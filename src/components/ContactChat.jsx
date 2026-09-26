import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react';
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
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-mc-green/50 text-mc-green font-minecraft text-xs">
            <span>MULTIPLAYER CHAT & SIGNBOARD</span>
          </div>
          <h2 className="font-minecraft text-2xl sm:text-4xl text-white tracking-wide">
            CONNECT WITH ADITYA
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
            Ready to craft remarkable software together? Send an in-game whisper or contact via communication channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: IN-GAME CHAT TERMINAL */}
          <div className="lg:col-span-7 bg-[#111111] border-4 border-[#373737] p-4 sm:p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Chat Window Top Bar */}
              <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 mb-4 font-minecraft text-xs">
                <span className="text-white flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-mc-green rounded-full inline-block animate-pulse" />
                  <span>CHAT CHANNEL: [GLOBAL]</span>
                </span>
                <span className="text-gray-400 text-[10px]">PING: 18ms</span>
              </div>

              {/* Chat Log History */}
              <div className="space-y-3 font-mono text-xs sm:text-sm bg-black/60 p-4 border border-white/10 mb-6 max-h-60 overflow-y-auto">
                <div className="text-yellow-400">
                  <span className="text-gray-400">[System]:</span> Welcome to Aditya's Overworld!
                </div>
                <div className="text-[#55FF55]">
                  <span className="text-mc-diamond">[Aditya]:</span> Hey there! I'm actively looking for Backend & Full-Stack software engineering opportunities.
                </div>
                <div className="text-gray-300">
                  <span className="text-mc-diamond">[Aditya]:</span> Type your message below to send me a direct whisper via email!
                </div>
              </div>

              {/* Message Composer Form */}
              <form onSubmit={handleSendMessage} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-minecraft text-gray-300 mb-1">
                      YOUR NAME / HANDLE:
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Recruiter / Alex"
                      className="w-full bg-black/80 border-2 border-white/20 px-3 py-2 text-white text-xs font-mono focus:border-mc-green focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-minecraft text-gray-300 mb-1">
                      YOUR EMAIL / CONTACT:
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. contact@company.com"
                      className="w-full bg-black/80 border-2 border-white/20 px-3 py-2 text-white text-xs font-mono focus:border-mc-green focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-minecraft text-gray-300 mb-1">
                    COMMAND / MESSAGE (/msg Aditya):
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Hey Aditya, let's talk about our open backend engineering role..."
                    className="w-full bg-black/80 border-2 border-white/20 p-3 text-white text-xs font-mono focus:border-mc-green focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mc-btn-green w-full py-3 text-xs font-minecraft flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE / SEND EMAIL</span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: MINECRAFT WOODEN SIGNBOARDS / QUICK CONTACTS */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Sign */}
            <div className="bg-[#6d4c28] border-4 border-[#3e2b16] p-4 text-white shadow-xl relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-[#FFF875] flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>OAK SIGN: DIRECT EMAIL</span>
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
                className="font-mono text-sm text-gray-100 break-all hover:text-white underline block"
              >
                {email}
              </a>
            </div>

            {/* Phone Sign */}
            <div className="bg-[#6d4c28] border-4 border-[#3e2b16] p-4 text-white shadow-xl relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-[#FFF875] flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>OAK SIGN: TELEPHONE</span>
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
                className="font-mono text-sm text-gray-100 hover:text-white underline block"
              >
                {phone}
              </a>
            </div>

            {/* LinkedIn Sign */}
            <div className="bg-[#2D4566] border-4 border-[#16273B] p-4 text-white shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-[#4DEEEA] flex items-center space-x-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN GUILD</span>
                </span>
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="font-mono text-xs text-gray-200 hover:text-white underline break-all block"
              >
                linkedin.com/in/adiityadwivedi ➔
              </a>
            </div>

            {/* GitHub Sign */}
            <div className="bg-[#2B2B2B] border-4 border-[#141414] p-4 text-white shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-minecraft text-xs text-mc-emerald flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB VAULT</span>
                </span>
              </div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="font-mono text-xs text-gray-200 hover:text-white underline break-all block"
              >
                github.com/AdiityaDwivedi ➔
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
