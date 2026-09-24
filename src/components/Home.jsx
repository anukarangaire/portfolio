import React from "react";
import IntroBackground from "../components/IntroBackground";
import Bio from "../components/Bio";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/skills";

const Home = () => {
  return (
    <div>
<IntroBackground />
<Bio id="bio" />
<Projects/>
<Education id="education" />
<Achievements/>
<Skills id="skill"/>
<Contact/>

   
    </div>
  );
};

export default Home;
