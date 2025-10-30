import React from 'react';

const IntroBackground = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Anukaran Gaire</h1>
      <p className="text-2xl max-w-2xl drop-shadow-md">
        Passionate about Engineering & Computer Science | Building AI & Tech Solutions
      </p>
    </section>
  );
};

export default IntroBackground;
