import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        Trailers
      </h2>

      {/* Big Player */}
      <div className="flex justify-center">
        <div className="w-full max-w-[960px] h-[540px] rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <iframe
            width="100%"
            height="100%"
            src={currentTrailer.videoUrl}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyTrailers.map((trailer) => (
          <button
            key={trailer.videoUrl}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative rounded-lg overflow-hidden group focus:outline-none"
          >
            <img
              src={trailer.image}
              alt={trailer.title}
              className={`w-full h-36 md:h-44 object-cover rounded-lg transition-all duration-300 
              ${
                currentTrailer.videoUrl === trailer.videoUrl
                  ? "scale-[1.02] brightness-100 border-2 border-blue-500"
                  : "brightness-75"
              }`}
            />

            {/* Blue Glow */}
            <span className="absolute inset-0 pointer-events-none rounded-lg transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.55)]" />

            {/* Play Button on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 ml-0.5"
                >
                  <path d="M5 3.868v16.264A1 1 0 0 0 6.565 21.2l12.27-8.082A1 1 0 0 0 18.834 11L6.565 2.8A1 1 0 0 0 5 3.868z" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrailerSection;
