import React from "react";

const Bio = () => {
  return (
    <section
      id="bio"
      className="py-20 bg-gray-100 flex flex-col items-center text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-12">About Me</h2>

      <div className="w-4xl grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
          <p>Grade 12 student from Nepal</p>
          <p>Passionate about Engineering & Computer Science</p>
        </div>

       
      </div>
    </section>
  );
};

export default Bio;
