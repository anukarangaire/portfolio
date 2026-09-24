import React, { useState, useEffect, useRef } from "react";

// Replace these with your actual project images, saved into src/assets/
import neudexHand from "../assets/neudex-hand.jpg";
import neudexTeam from "../assets/neudex-team.jpg";

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-900 to-blue-950 py-20 px-5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Things I've built, from concept to working prototype.
          </p>
        </div>

        {/* Featured project */}
        <div
          className={`relative rounded-3xl border border-slate-700 bg-slate-800/50 overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
            🏆 3rd Place — Featured Project
          </div>

          <div className="grid md:grid-cols-2">
            {/* Images */}
            <div className="grid grid-cols-2 gap-1 md:gap-0">
              <img
                src={neudexHand}
                alt="N.E.U.D.E.X robotic hand prototype"
                className="w-full h-full object-cover min-h-[220px]"
              />
              <img
                src={neudexTeam}
                alt="Presenting N.E.U.D.E.X at the science exhibition"
                className="w-full h-full object-cover min-h-[220px]"
              />
            </div>

            {/* Details */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-1">N.E.U.D.E.X</h3>
              <p className="text-yellow-400 text-sm font-semibold mb-4">
                Neuro-Driven Exoskeleton
              </p>

              <p className="text-blue-100/80 text-sm leading-relaxed mb-4">
                {/* Replace with the real explanation of how it works — e.g. EMG/muscle-signal
                    control, servo-driven fingers, what problem it solves, your role in the build. */}
                A robotic hand prototype built with 3D-printed fingers and servo
                motors, designed to explore assistive and accessible technology.
                Presented at the 14th Southwestern Science Exhibition & Career
                Management 2026, hosted by Mid Valley SS/College.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 rounded-full text-xs font-semibold">
                  Robotics
                </span>
                <span className="px-3 py-1 bg-blue-400/10 border border-blue-400/40 text-blue-300 rounded-full text-xs font-semibold">
                  3D Printing
                </span>
                <span className="px-3 py-1 bg-green-400/10 border border-green-400/40 text-green-300 rounded-full text-xs font-semibold">
                  Assistive Tech
                </span>
              </div>

              <p className="text-white/40 text-xs">
                Team project · Robotics Club · Mid Valley SS/College
              </p>
            </div>
          </div>
        </div>

        {/* Space for future projects — duplicate this card structure as you add more */}
      </div>
    </section>
  );
};

export default Projects;