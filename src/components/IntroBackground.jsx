import React, { useState, useEffect } from "react";

const roles = ["Aspiring Engineer", "Robotics Builder",  "AI Enthusiast"];

const IntroBackground = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-6 md:px-16 overflow-hidden py-16 md:py-0">

      <div className="absolute inset-0 opacity-[0.13] mix-blend-screen bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:50px_22px] pointer-events-none" />
      <div className="absolute top-0 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

    
      <div className={`relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <div className="relative group">

          {/* Rotating dashed ring */}
          <div className="absolute -inset-6 rounded-full border border-dashed border-yellow-400/30 animate-[spin_20s_linear_infinite] pointer-events-none" />

          {/* Corner brackets — tech/HUD feel */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-yellow-400" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-yellow-400" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-yellow-400" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-yellow-400" />

          {/* Glow behind image */}
          <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-2xl group-hover:bg-yellow-400/40 transition-all duration-500" />

          <div className="relative border-4 border-yellow-400 p-2 bg-slate-900 shadow-2xl transform transition-transform group-hover:scale-105 duration-300 rounded-lg overflow-hidden">
            <img
              src="bg.jpg"
              alt="Anukaran Gaire"
              className="object-cover w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] md:w-[380px] md:h-[500px] rounded-md grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Scanline overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

         

          {/* Bottom badge */}
          <div className="absolute -bottom-5 -right-5 bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-full font-bold shadow-lg shadow-yellow-400/30 transform rotate-6 group-hover:rotate-0 transition-transform duration-300 text-xs sm:text-sm whitespace-nowrap">
            🤖 Robotics · CS · Nepal
          </div>
        </div>
      </div>

      {/* ═══════════ TEXT SIDE ═══════════ */}
      <div className={`md:w-1/2 md:pl-16 text-center md:text-left z-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

       

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
          A CREATIVE
          <br /> STUDENT
        </h1>

        <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6 mx-auto md:mx-0 rounded-full" />

        <p className="text-lg md:text-xl mb-3 max-w-md mx-auto md:mx-0 text-gray-300 leading-relaxed">
          Passionate about turning ideas into reality through technology.
        </p>

        {/* Rotating role with fade */}
        <div className="h-8 mb-5 overflow-hidden">
          <p key={roleIndex} className="text-yellow-400 font-semibold text-lg animate-[fadeInUp_0.5s_ease-out]">
            {roles[roleIndex]}
          </p>
        </div>

        <p className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Anukaran Gaire
        </p>

        <p className="text-md text-gray-400 mb-6 italic">
          Learning, Building & Growing Every Day
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
          {["Python", "Arduino", "React", "AI/ML"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/80 border border-slate-700 text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex space-x-4 justify-center md:justify-start mb-8">
          {/* Email */}
          <a href="mailto:imanukarangaire@gmail.com" aria-label="Email"
            className="group relative p-3.5 bg-slate-800 hover:bg-yellow-400 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1">
            <svg className="h-5 w-5 text-yellow-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/anukarangaire" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="group relative p-3.5 bg-slate-800 hover:bg-yellow-400 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1">
            <svg className="h-5 w-5 text-yellow-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anukarangaire/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="group relative p-3.5 bg-slate-800 hover:bg-yellow-400 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1">
            <svg className="h-5 w-5 text-yellow-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-105">
              See Projects →
            </button>
          </a>
          <a href="/portfolio/#/certificates" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 hover:scale-105">
              View Certificates
            </button>
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default IntroBackground;