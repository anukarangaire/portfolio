import React from "react";
import { Link } from "react-router-dom";

import prefect from "../assets/prefect.jpg";
import trinity from "../assets/trinity.jpg";
import math_olympiad from "../assets/math_olympiad.jpg";
// import honor5 from "../assets/honor5.jpg";

const Achievements = () => {
  const featured = [
    { src: prefect, caption: "Appointed as a School Prefect", category: "Honour" },
    { src: trinity, caption: "Trinity SciTech 2025", category: "Leadership and ECA" },
    { src: math_olympiad, caption: "Math Olympiad Winner", category: "Leadership and ECA" },
    // { src: honor5, caption: "Leadership Award", category: "Honour" },
  ];

  return (
    <section
      id="achievements"
      className="relative bg-gradient-to-b from-slate-900 to-blue-950 py-20 px-5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Achievements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            A few highlights — see the full collection of certificates and awards below.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800/50 aspect-[3/4]"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs text-yellow-400 font-semibold mb-0.5">
                  {item.category}
                </p>
                <p className="text-sm text-white font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/certificates"
            className="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            See More Certificates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;