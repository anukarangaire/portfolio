import React from "react";
import IntroBackground from "../components/IntroBackground";
import Bio from "../components/Bio";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero / Intro background */}
<IntroBackground />
<Bio id="bio" />
<Education id="education" />

   
    </div>
  );
};

export default Home;
