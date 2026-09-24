import React, { useState, useEffect, useRef } from "react";
import profileImage from "../assets/profile1.jpg";

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="bio"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-900 to-blue-950 py-20 px-5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* ================= LEFT ================= */}
        <div
          className={`w-full lg:w-[54%] flex flex-col justify-between gap-8 z-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight text-white">
              Anukaran <br />
              <span className="text-yellow-400">Gaire</span>
            </h1>

            <div className="flex items-center border-l-4 border-yellow-400 pl-4">
              <p className="text-lg font-semibold text-blue-100">
                Grade 12 Student, Nepal 🇳🇵
              </p>
            </div>

            <p className="text-yellow-400 text-lg font-bold italic">
              "Building technology that creates real social impact"
            </p>

            <p className="text-blue-100/80 text-base leading-relaxed max-w-xl">
              I'm an aspiring student dedicated to building technology that
              creates real social impact. My interests span artificial
              intelligence, wearable devices, and accessible solutions that
              help people in need.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <div className="text-xl font-black text-yellow-400">
                  Grade 12
                </div>
                <div className="text-sm font-semibold text-white/50">
                  Graduating 2026
                </div>
              </div>
            </div>

            <div className="w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-xl font-black text-blue-300">Nepal</div>
                
              </div>
            </div>

            <div className="w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <div className="text-xl font-black text-yellow-400">CS</div>
                <div className="text-sm font-semibold text-white/50">
                  Engineering Focus
                </div>
              </div>
            </div>
          </div>

          {/* ================= INTEREST PILLARS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-400 bg-slate-800/50 rounded-lg">
              <span className="text-lg">🤖</span>
              <span className="font-semibold text-sm text-blue-100">
                Artificial Intelligence
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-blue-400 bg-slate-800/50 rounded-lg">
              <span className="text-lg">⌚</span>
              <span className="font-semibold text-sm text-blue-100">
                Wearable Tech
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-green-400 bg-slate-800/50 rounded-lg">
              <span className="text-lg">🌍</span>
              <span className="font-semibold text-sm text-blue-100">
                Social Impact
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-purple-400 bg-slate-800/50 rounded-lg">
              <span className="text-lg">♿</span>
              <span className="font-semibold text-sm text-blue-100">
                Accessibility
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: CURVED IMAGE SIDE ================= */}
        <div
          className={`w-full lg:w-[44%] relative min-h-[320px] lg:min-h-[460px] flex items-stretch transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full h-full min-h-[320px] lg:min-h-[460px] rounded-t-[4rem] lg:rounded-t-none lg:rounded-l-[10rem] overflow-hidden border-t-[6px] lg:border-t-0 lg:border-l-[6px] border-yellow-400 shadow-2xl">
            {/* Dot grid overlay */}
            {/* <div className="absolute inset-0 z-10 opacity-20 mix-blend-screen bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" /> */}

            {/* Soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/20 blur-[80px] z-10 pointer-events-none" />

            {/* Photo — replace src with your own portrait */}
           <img
  src={profileImage}
  alt="Anukaran Gaire"
  className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000"
/>


            {/* Bottom accent wave */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-yellow-400 z-10"
              style={{
                height: "clamp(50px, 12vw, 90px)",
                clipPath: "ellipse(110% 100% at 50% 100%)",
              }}
            >
              

              <div className="absolute top-2 left-3 bg-slate-900/90 backdrop-blur-md rounded-xl shadow p-2">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;