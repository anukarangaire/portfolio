import { useState } from "react";
import Masonry from "react-masonry-css";
import "../index.css"; 

// Import your images
import prefect from "../assets/prefect.jpg"
import CR_12 from "../assets/CR_12.jpg";
import award3 from "../assets/awar3.jpg";
import CR_ from "../assets/CR_!.jpg";
import honor5 from "../assets/honor5.jpg";
import story from "../assets/story.jpg";
import trinity from "../assets/trinity.jpg";
import ubjau from "../assets/ubjau.jpg";
import STEAM from "../assets/STEAM.jpg";
import journal from "../assets/journal.jpg";
import math_olympiad from "../assets/math_olympiad.jpg";
import quiz_first from "../assets/quiz_first.jpg";
import quiz_whitefield from "../assets/quiz_whitefield.jpg";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const certificates = [
    {src:prefect ,caption: "Appointed as a School Prefect",category:"Honour"},
    { src: trinity, caption: "Trinity SciTech 2025", category: "Leadership and ECA" },
    { src: ubjau, caption: "Ubjau Agricultural Marketplace", category: "Leadership and ECA" },
    { src: journal, caption: "Journal Publication", category: "Leadership and ECA" },
    { src: CR_12, caption: "Selected as Class representative for Grade 12", category: "Leadership and ECA" },
    { src: CR_, caption: "Selected as Class representative for Grade 11", category: "Leadership and ECA" },
    { src: STEAM, caption: "STEAM Participation", category: "Leadership and ECA" },
    { src: honor5, caption: "Leadership Award", category: "Honour" },
    { src: story, caption: "Story Writing Award", category: "Leadership and ECA " },
    { src: math_olympiad, caption: "Math Olympiad Winner", category: "Leadership and ECA" },
    { src: quiz_first, caption: "Quiz Competition 1st", category: "Leadership and ECA" },
    { src: award3, caption: "Best Debater 2023", category: "Leadership and ECA " },
    { src: quiz_whitefield, caption: "Quiz Whitefield Winner", category: "Honour" },
  ];



const categories = [
  "All", 
  ...new Set(certificates.map(cert => cert.category.trim()))
];


  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  const filteredCertificates = filter === "All"
    ? certificates
    : certificates.filter((cert) => cert.category === filter);

  return (
    <div className="certificates-container">
      <h1 className="certificates-header">My Certificates</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredCertificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.src}
              alt={cert.caption}
              loading="lazy"
              onClick={() => setSelectedImage(cert.src)}
            />
            <div className="certificate-caption">{cert.caption}</div>
          </div>
        ))}
      </Masonry>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="close-button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img src={selectedImage} alt="Certificate Large View" />
        </div>
      )}
    </div>
  );
};

export default Certificates;