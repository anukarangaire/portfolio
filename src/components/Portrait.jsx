
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ZoomIn } from "lucide-react";

const artworks = [
 
   {
    src: "/art/art5.jpeg",
    title: "Portrait Krishna",
    medium: "Pencil on Paper",
    year: "2025",
  },
    {
    src: "/art/art1.jpg",
    title: "Portrait Study",
    medium: "Pencil on Paper",
    year: "2024",
  },
  {
    src: "/art/art2.jpg",
    title: "Faces & Expressions",
    medium: "Charcoal",
    year: "2024",
  },
  {
    src: "/art/art3.jpg",
    title: "Realistic Portrait",
    medium: "Graphite",
    year: "2025",
  },
  {
    src: "/art/art4.jpg",
    title: "Quick Sketch",
    medium: "Pencil",
    year: "2025",
  },
   {
    src: "/art/art6.jpeg",
    title: "Portrait Krishna",
    medium: "Pencil on Paper",
    year: "2025",
  }, 
];

const Portrait = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 tracking-[0.3em] uppercase text-sm mb-3 py-7">
            My Creative World
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Portrait Gallery
          </h1>

          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-5" />

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A collection of my pencil sketches, realistic portraits,
            charcoal drawings and creative artwork.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {artworks.map((art, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(art)}
              className="group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-400/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn size={36} className="text-yellow-400" />
                </div>
              </div>

             
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-white/40 text-sm">
            Every sketch tells a story.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400"
            aria-label="Close image"
          >
            <X size={32} />
          </button>

          <div
            className="max-w-4xl w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full object-contain rounded-xl"
            />

           

           
          </div>
        </div>
      )}

    </section>
  );
};

export default Portrait;
