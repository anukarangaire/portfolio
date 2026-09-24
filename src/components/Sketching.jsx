import React, { useState, useEffect, useRef } from "react";

const ArtGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Yaha tapaiko actual artwork images halnus
  const artworks = [
    {
      src: "/art/portrait1.jpg",
      title: "Portrait Study",
      medium: "Pencil on Paper",
      year: "2024",
    },
    {
      src: "/art/portrait2.jpg",
      title: "Faces & Expressions",
      medium: "Charcoal",
      year: "2024",
    },
    {
      src: "/art/portrait3.jpg",
      title: "Realistic Portrait",
      medium: "Graphite",
      year: "2025",
    },
    {
      src: "/art/sketch1.jpg",
      title: "Quick Sketch",
      medium: "Pencil",
      year: "2025",
    },
  ];

  return (
    <section
      id="art"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">

        {/* ── Header ── */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
         

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Art & Sketching
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            When I'm free I'm sketching — capturing faces, expressions, and details with pencil and charcoal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {artworks.map((art, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(art)}
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-sm">{art.title}</p>
                <p className="text-yellow-400 text-xs">{art.medium}</p>
                <p className="text-white/50 text-xs">{art.year}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/80 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* ── View full gallery CTA ── */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/portfolio/#/art"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 text-sm"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-yellow-400 hover:text-slate-900 transition-all flex items-center justify-center"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl border-2 border-yellow-400/30"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">{selectedImage.title}</p>
              <p className="text-yellow-400 text-sm">{selectedImage.medium} · {selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe for modal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ArtGallery;