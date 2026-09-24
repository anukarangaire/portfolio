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
      title: "Grade 10",
      school: "Everest English School",
      status: "Completed 2024",
      // stream: "General Science",
      highlight: "Built first interest in computer science through school projects.",
    },
    {
      title: "Grade 11",
      school: "Mid Valley Secondary School",
      status: "Completed 2025",
      highlight: "Started exploring AI and small coding projects outside class.",
    },
    {
      title: "Grade 12",
      school: "Mid Valley Secondary School",
      status: "Graduated 2026",
      highlight: "Focused on college applications and personal tech projects.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden"
    >
      {/* Glow accents to match Bio */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Education</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building a strong academic foundation with excellence and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-slate-900 font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
              </div>

              <p className="text-white/70 mb-1 font-medium">{edu.school}</p>
              <p className="text-yellow-400 text-sm font-semibold mb-4">{edu.status}</p>

              <div className="pt-4 border-t border-slate-700 space-y-2">
               
                <p className="text-blue-100 text-sm leading-relaxed">{edu.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;