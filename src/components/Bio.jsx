import React from "react";

const Bio = () => {
  return (
    <section
      id="bio"
      className="relative bg-gradient-to-b from-slate-900 to-blue-950 py-2 md:px-1 overflow-hidden"
    >
     
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          {/* Quick Info Cards */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-yellow-400 ">
            <div className="flex items-center mb-4">
              <div className="w-10 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-blue-100 text-lg">Grade 12 Student</p>
            <p className="text-yellow-400 font-semibold">Nepal 🇳🇵</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Interests</h3>
            </div>
            <p className="text-blue-100 text-lg">Engineering &</p>
            <p className="text-yellow-400 font-semibold">Computer Science</p>
          </div>
        </div>

        {/* Main Bio Section */}
        <div className="bg-gradient-to-br from-slate-800/70 to-blue-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-10 hover:border-yellow-400 transition-all duration-300 shadow-xl">
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2 text-white">My Story</h3>
              <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-blue-50 text-lg leading-relaxed mb-6">
            I'm an aspiring student dedicated to building technology that
            creates real social impact. My interests span artificial
            intelligence, wearable devices, and accessible solutions that help
            people in need.
          </p>

          {/* Interest Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-yellow-400/20 border border-yellow-400 text-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all cursor-default">
              Artificial Intelligence
            </span>
            <span className="px-4 py-2 bg-blue-400/20 border border-blue-400 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all cursor-default">
              Wearable Tech
            </span>
            <span className="px-4 py-2 bg-green-400/20 border border-green-400 text-green-400 rounded-full text-sm font-semibold hover:bg-green-400 hover:text-slate-900 transition-all cursor-default">
              Social Impact
            </span>
            <span className="px-4 py-2 bg-purple-400/20 border border-purple-400 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all cursor-default">
              Accessibility
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Bio;