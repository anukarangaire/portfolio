import React, { useState, useEffect, useRef } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const educationData = [
    {
      title: "Grade 11",
      school: "Mid Valley Secondary School",
      year: "2025",
      gpa: " GPA: 4.0/4.0",
    },
    {
      title: "Grade 10",
      school: "Everest English School",
      year: "Pass year: 2024",
      gpa: "GPA: 3.91/4.0",
    },
    {
      title: "Grade 12",
      school: "Mid Valley Secondary School",
      year: "Expected: 2026",
      gpa: "In Progress",
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mt-4">
            Building a strong academic foundation with excellence and dedication.
          </p>
        </div>

        <div className="  grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br $ shadow-lg transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-5  border rounded-3xl flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.title}
                </h3>

                <p className="text-white/70 mb-1 font-medium">{edu.school}</p>
                <p className="text-white/60 mb-3 text-sm">{edu.year}</p>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <p
                    className={`font-bold text-lg ${
                      edu.gpa.includes("4.0")
                        ? "text-yellow-400"
                        : edu.gpa.includes("3.91")
                        ? "text-green-400"
                        : "text-orange-400"
                    }`}
                  >
                    {edu.gpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
