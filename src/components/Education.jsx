import React, { useState, useEffect, useRef } from "react";

const Education = () => {
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

  const educationData = [
    {
      year: "2024",
      title: "Grade 10",
      school: "Everest English School",
      status: "Completed",
      subjects: ["Computer Science", "Mathematics", "Science"],
      highlight: "Built first interest in computer science through school projects.",
    },
    {
      year: "2025",
      title: "Grade 11",
      school: "Mid Valley Secondary School",
      status: "Completed",
      subjects: ["Physics", "Computer Science", "Mathematics"],
      highlight: "Started exploring AI and small coding projects outside class.",
    },
    {
      year: "2026",
      title: "Grade 12",
      school: "Mid Valley Secondary School",
      status: "Graduated",
      subjects: ["Computer Science", "Mathematics", "English"],
      highlight: "Focused on college applications and personal tech projects.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">

        {/* ── Header ── */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-yellow-400 uppercase">
              My Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Education</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Building a strong academic foundation with excellence and dedication.
          </p>
        </div>

        {/* ── Compact 3-column grid ── */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-yellow-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/20 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-9 h-9 rounded-xl bg-yellow-400 text-slate-900 font-extrabold text-sm flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                0{index + 1}
              </div>

              {/* Year badge — top right */}
              <div className="absolute -top-3 right-5 px-3 py-1 bg-slate-900 border border-yellow-400/40 text-yellow-400 text-xs font-bold rounded-full">
                {edu.year}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4 mt-2">
                
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {edu.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-0.5 truncate">{edu.school}</p>
                </div>
              </div>

              {/* Status pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-xs font-semibold mb-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {edu.status}
              </div>

              {/* Subject pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {edu.subjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-900/60 border border-slate-700 text-white/60"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Divider + Highlight */}
              <div className="pt-4 border-t border-slate-700">
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {edu.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className={`text-center mt-14 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/portfolio/#/certificates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 text-sm"
          >
            View Certificates
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;