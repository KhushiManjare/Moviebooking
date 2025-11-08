// import { StarIcon } from 'lucide-react';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {timeFormat} from '../lib/timeFormat';

// const MoviesCart = ({ movie }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex-shrink-0 flex flex-col justify-between bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-64 p-3">
//       <img
//         onClick={() => {
//           navigate(`/movies/${movie._id}`);
//           scrollTo(0, 0);
//         }}
//         src={movie.backdrop_path}
//         alt=""
//         className="rounded-lg h-52 w-full object-cover cursor-pointer"
//       />

//       <p className="font-semibold mt-2 truncate">{movie.title}</p>

//       <p className="text-sm text-gray-400 mt-2">
//         {new Date(movie.release_date).getFullYear()}.
//         {movie.genres.slice(0, 2).map((genre) => genre.name).join('|')}.
//         {timeFormat(movie.runtime)}
//       </p>

//       <div className="flex items-center justify-between mt-4 pb-3">
//         <button
//           onClick={() => {
//             navigate(`/movies/${movie._id}`);
//             scrollTo(0, 0);
//           }}
//           className="px-4 py-2 text-xs bg-pink-600 hover:bg-pink-700 transition rounded-full font-medium text-white cursor-pointer"
//         >
//           Buy Tickets
//         </button>

//         <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
//           <StarIcon className="w-4 h-4 text-pink-600 fill-pink-600" />
//           {movie.vote_average.toFixed(1)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MoviesCart;
import { StarIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { timeFormat } from '../lib/timeFormat';

const MoviesCart = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-shrink-0 flex flex-col justify-between bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-64 p-3">
      {/* 🎬 Movie Poster */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt={movie.title}
        className="rounded-lg h-52 w-full object-cover cursor-pointer"
      />

      {/* 🎥 Movie Info */}
      <p className="font-semibold mt-2 truncate">{movie.title}</p>

      <p className="text-sm text-gray-400 mt-2">
        {new Date(movie.release_date).getFullYear()} ·{" "}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")} ·{" "}
        {timeFormat(movie.runtime)}
      </p>

      {/* 🎟️ Action Buttons */}
      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={() => {
            // ✅ Go to MovieDetails page and scroll to calendar section
            navigate(`/movies/${movie._id}?scrollTo=calendar`);
          }}
          className="px-4 py-2 text-xs bg-pink-600 hover:bg-pink-700 transition rounded-full font-medium text-white cursor-pointer"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
          <StarIcon className="w-4 h-4 text-pink-600 fill-pink-600" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MoviesCart;
