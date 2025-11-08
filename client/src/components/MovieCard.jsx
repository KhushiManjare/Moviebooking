import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie._id}`)}
      className="bg-[#1b0d12]/80 border border-[#ff004f]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,0,79,0.3)] transition transform hover:scale-105 cursor-pointer w-[220px]"
    >
      {/* Movie Poster */}
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      {/* Info Section */}
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">
          {movie.title}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          <Star className="w-4 h-4 text-[#ff004f] fill-[#ff004f]" />
          <p className="text-gray-300 text-xs">
            {movie.vote_average?.toFixed(1)} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
