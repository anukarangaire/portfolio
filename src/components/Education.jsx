import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Grade 11",
      school: "Mid Valley Secondary School",
      year: "2025",
      gpa: "Grade 11 GPA: 4.0/4.0",
    },
    {
      title: "Secondary School",
      school: "Everest English School",
      year: "Pass year: 2025",
      gpa: "Grade 10 GPA: 3.91/4.0",
    },
    {
      title: "Grade 12",
      school: "Mid Valley Secondary School",
      year: " graduation year:2026",
      gpa: "Results: Awaiting",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-12">Education</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
            <p className="font-medium mb-1">{edu.school}</p>
            <p className="text-gray-600 mb-1">{edu.year}</p>
            <p className="text-purple-700 font-bold">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
