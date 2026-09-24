import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import prefect from "../assets/prefect.jpg";
import trinity from "../assets/trinity.jpg";
import math_olympiad from "../assets/math_olympiad.jpg";
// import honor5 from "../assets/honor5.jpg";

const Achievements = () => {
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef();

  const featured = [
    { src: prefect, caption: "Appointed as a School Prefect", category: "Honour" },
    { src: trinity, caption: "Trinity SciTech 2025", category: "Leadership and ECA" },
    { src: math_olympiad, caption: "Math Olympiad Winner", category: "Leadership and ECA" },
    // { src: honor5, caption: "Leadership Award", category: "Honour" },
  ];

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ESC key le close + body scroll lock
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setSelected(null);
    if (selected) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-900 to-blue-950 py-20 px-5 overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Achievements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            A few highlights — click any card to view in full size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featured.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item)}
              className={`group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800/50 aspect-[3/4] text-left hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/20 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

              {/* Zoom icon on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-0.5">
                  {item.category}
                </p>
                <p className="text-sm text-white font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ── See more CTA ── */}
        <div className="flex justify-center mt-10">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/50"
          >
            See More Certificates
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ═══════════ LIGHTBOX MODAL ═══════════ */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="max-w-4xl w-full animate-[zoomIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/20 bg-slate-900">
              <img
                src={selected.src}
                alt={selected.caption}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-xs text-yellow-400 font-semibold uppercase tracking-widest mb-1">
                {selected.category}
              </p>
              <p className="text-white font-bold text-lg">
                {selected.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Achievements;