// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { Heart, Star, Play, Ticket } from "lucide-react";
// // // import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
// // // import { timeFormat } from "../lib/timeFormat";
// // // import BlurCircle from "../components/BlurCircle";
// // // import MovieCard from "../components/MovieCard";
// // // import Footer from "../components/Footer";
// // // import Loading from "../components/Loading";

// // // const MovieDetails = () => {
// // //   const  navigate=useNavigate()
// // //   const { id } = useParams();
// // //   const [movie, setMovie] = useState(null);
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // // const getShow =async()=>{
// // //   const show=dummyShowsData.find(show=>show.id===id)
// // //   if(show){
// // //     setShow({
// // //       movie:show,
// // //       dateTime:dummyDateTimeData
// // //     })
// // //   }
// // // }
// // //   const dates = [
// // //     { day: "24", month: "Jul" },
// // //     { day: "25", month: "Jul" },
// // //     { day: "26", month: "Jul" },
// // //     { day: "27", month: "Jul" },
// // //   ];

// // //   const handleBookNow = () => {
// // //     if (!selectedDate) {
// // //       alert("⚠️ Please select a date before booking!");
// // //     } else {
// // //       alert(`✅ You selected ${selectedDate.day} ${selectedDate.month}`);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     const foundShow = dummyShowsData.find((s) => s._id === id);
// // //     if (foundShow) setMovie(foundShow);
// // //   }, [id]);

// // //     if (!movie) return <Loading />;

// // //   return (
// // //     <>
// // //       <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
// // //         {/* ✨ Background Circles */}
// // //         <BlurCircle top="10%" left="5%" />
// // //         <BlurCircle bottom="10%" right="5%" />

// // //         {/* 🎬 Movie Details */}
// // //         <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
// // //           {/* Poster */}
// // //           <img
// // //             src={movie.poster_path}
// // //             alt={movie.title}
// // //             className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
// // //           />

// // //           {/* Info Section */}
// // //           <div className="max-w-2xl">
// // //             <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
// // //               {movie.original_language === "en"
// // //                 ? "ENGLISH"
// // //                 : movie.original_language.toUpperCase()}
// // //             </p>

// // //             <h1 className="text-4xl md:text-5xl font-bold mb-4">
// // //               {movie.title}
// // //             </h1>

// // //             <div className="flex items-center gap-2 mb-4">
// // //               <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
// // //               <p className="text-gray-200 text-sm">
// // //                 {movie.vote_average.toFixed(1)} IMDb Rating
// // //               </p>
// // //             </div>

// // //             <p className="text-gray-300 text-sm leading-relaxed mb-5">
// // //               {movie.overview}
// // //             </p>

// // //             <p className="text-gray-400 text-sm mb-8">
// // //               {timeFormat(movie.runtime)} •{" "}
// // //               {movie.genres.map((g) => g.name).join(", ")} •{" "}
// // //               {new Date(movie.release_date).toLocaleDateString("en-IN", {
// // //                 day: "numeric",
// // //                 month: "short",
// // //                 year: "numeric",
// // //               })}
// // //             </p>

// // //             {/* 🎟 Action Buttons */}
// // //             <div className="flex flex-wrap gap-4">
// // //               <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
// // //                 <Play size={18} />
// // //                 Watch Trailer
// // //               </button>

// // //               <button className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition">
// // //                 <Ticket size={18} />
// // //                 Buy Tickets
// // //               </button>

// // //               <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
// // //                 <Heart size={18} />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* 👥 Cast Section */}
// // //         {movie.casts && (
// // //   <div className="mt-16 w-full max-w-6xl">
// // //     <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
// // //     <div className="overflow-x-auto no-scrollbar pb-4">
// // //       <div className="flex items-center gap-5 w-max px-2">
// // //         {movie.casts.slice(0, 12).map((cast, index) => (
// // //           <div key={index} className="text-center flex-shrink-0 w-[80px]">
// // //             <img
// // //               src={cast.profile_path}
// // //               alt={cast.name}
// // //               className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
// // //             />
// // //             <p className="text-xs text-gray-300 truncate">{cast.name}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </div>
// // // )}


// // //         {/* 📅 Choose Date Section */}
// // //         <div className="mt-20 mb-0 flex justify-center items-center w-full">
// // //           <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
// // //             <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
// // //               Choose Date
// // //             </h2>

// // //             <div className="flex items-center gap-8">
// // //               {/* Left Arrow */}
// // //               <button className="text-gray-300 hover:text-white text-2xl transition-all">
// // //                 &lt;
// // //               </button>

// // //               {/* Date Buttons */}
// // //               <div className="flex items-center gap-5">
// // //                 {dates.map((date, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => setSelectedDate(date)}
// // //                     className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
// // //                       selectedDate?.day === date.day
// // //                         ? "bg-[#ff004f] hover:bg-[#e60046]"
// // //                         : "bg-[#2a1b20] hover:bg-[#3a2229]"
// // //                     }`}
// // //                   >
// // //                     <span>{date.day}</span>
// // //                     <span
// // //                       className={`text-xs ${
// // //                         selectedDate?.day === date.day
// // //                           ? "text-white"
// // //                           : "text-gray-400"
// // //                       }`}
// // //                     >
// // //                       {date.month}
// // //                     </span>
// // //                   </button>
// // //                 ))}
// // //               </div>

// // //               {/* Right Arrow */}
// // //               <button className="text-gray-300 hover:text-white text-2xl transition-all">
// // //                 &gt;
// // //               </button>

// // //               {/* Book Now Button */}
// // //               <button
// // //                 onClick={handleBookNow}
// // //                 className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
// // //               >
// // //                 Book Now
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>


// // // <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
// // // <div className='flex flex-wrap max-sm:justify-center gap-8'>
// // //   {dummyShowsData.slice(0,4).map((movie, index)=>(
// // //     <MovieCard key={index} movie={movie}/>
// // //   ))}
// // // </div>
// // // <div className='flex justify-center mt-20'>
// // // //   <button onClick={()=>navigate('/movies')} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>Show more</button>
// // // // </div>

// // //         {/* 🦶 Footer */}
      
// // //       </div>
    
// // //     </>
// // //   );
// // // };



// // // export default MovieDetails;
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { Heart, Star, Play, Ticket } from "lucide-react";
// // import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
// // import { timeFormat } from "../lib/timeFormat";
// // import BlurCircle from "../components/BlurCircle";
// // import MovieCard from "../components/MovieCard";
// // import Loading from "../components/Loading";
// // import toast from "react-hot-toast";

// // const MovieDetails = () => {
// //   const navigate = useNavigate();
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   const dates = [
// //     { day: "24", month: "Jul" },
// //     { day: "25", month: "Jul" },
// //     { day: "26", month: "Jul" },
// //     { day: "27", month: "Jul" },
// //   ];

// //   useEffect(() => {
// //     const foundShow = dummyShowsData.find((s) => s._id === id);
// //     if (foundShow) setMovie(foundShow);
// //   }, [id]);

// //   if (!movie) return <Loading />;

// //   // ✅ Handles Book Now click
// //   const handleBookNow = () => {
// //     if (!selectedDate) {
// //       toast.error("Please select a date before booking!");
// //       return;
// //     }
// //     // Navigate to SeatLayout with movie ID + date
// //     navigate(`/book/${movie._id}?date=${selectedDate.day}-${selectedDate.month}`);
// //   };

// //   return (
// //     <>
// //       <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
// //         {/* ✨ Background Circles */}
// //         <BlurCircle top="10%" left="5%" />
// //         <BlurCircle bottom="10%" right="5%" />

// //         {/* 🎬 Movie Details */}
// //         <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
// //           <img
// //             src={movie.poster_path}
// //             alt={movie.title}
// //             className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
// //           />

// //           <div className="max-w-2xl">
// //             <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
// //               {movie.original_language === "en"
// //                 ? "ENGLISH"
// //                 : movie.original_language.toUpperCase()}
// //             </p>

// //             <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

// //             <div className="flex items-center gap-2 mb-4">
// //               <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
// //               <p className="text-gray-200 text-sm">
// //                 {movie.vote_average.toFixed(1)} IMDb Rating
// //               </p>
// //             </div>

// //             <p className="text-gray-300 text-sm leading-relaxed mb-5">{movie.overview}</p>

// //             <p className="text-gray-400 text-sm mb-8">
// //               {timeFormat(movie.runtime)} • 
// //               {movie.genres.map((g) => g.name).join(", ")} • 
// //               {new Date(movie.release_date).toLocaleDateString("en-IN", {
// //                 day: "numeric",
// //                 month: "short",
// //                 year: "numeric",
// //               })}
// //             </p>

// //             <div className="flex flex-wrap gap-4">
// //               <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
// //                 <Play size={18} /> Watch Trailer
// //               </button>

// //               <button className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition">
// //                 <Ticket size={18} /> Buy Tickets
// //               </button>

// //               <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
// //                 <Heart size={18} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 👥 Cast Section */}
// //         {movie.casts && (
// //           <div className="mt-16 w-full max-w-6xl">
// //             <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
// //             <div className="overflow-x-auto no-scrollbar pb-4">
// //               <div className="flex items-center gap-5 w-max px-2">
// //                 {movie.casts.slice(0, 12).map((cast, index) => (
// //                   <div key={index} className="text-center flex-shrink-0 w-[80px]">
// //                     <img
// //                       src={cast.profile_path}
// //                       alt={cast.name}
// //                       className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
// //                     />
// //                     <p className="text-xs text-gray-300 truncate">{cast.name}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* 📅 Choose Date + Book Now */}
// //         <div className="mt-20 mb-0 flex justify-center items-center w-full">
// //           <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
// //             <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
// //               Choose Date
// //             </h2>

// //             <div className="flex items-center gap-8">
// //               <button className="text-gray-300 hover:text-white text-2xl transition-all">
// //                 &lt;
// //               </button>

// //               <div className="flex items-center gap-5">
// //                 {dates.map((date, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => setSelectedDate(date)}
// //                     className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
// //                       selectedDate?.day === date.day
// //                         ? "bg-[#ff004f] hover:bg-[#e60046]"
// //                         : "bg-[#2a1b20] hover:bg-[#3a2229]"
// //                     }`}
// //                   >
// //                     <span>{date.day}</span>
// //                     <span
// //                       className={`text-xs ${
// //                         selectedDate?.day === date.day
// //                           ? "text-white"
// //                           : "text-gray-400"
// //                       }`}
// //                     >
// //                       {date.month}
// //                     </span>
// //                   </button>
// //                 ))}
// //               </div>

// //               <button className="text-gray-300 hover:text-white text-2xl transition-all">
// //                 &gt;
// //               </button>

// //               {/* ✅ Book Now kept beside calendar */}
// //               <button
// //                 onClick={handleBookNow}
// //                 className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
// //               >
// //                 Book Now
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 🎥 You May Also Like */}
// //         <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
// //         <div className="flex flex-wrap max-sm:justify-center gap-8">
// //           {dummyShowsData.slice(0, 4).map((m, index) => (
// //             <MovieCard key={index} movie={m} />
// //           ))}
// //         </div>
// //         <div className="flex justify-center mt-20">
// //           <button
// //             onClick={() => navigate("/movies")}
// //             className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
// //           >
// //             Show more
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MovieDetails;
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Heart, Star, Play, Ticket } from "lucide-react";
// import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
// import { timeFormat } from "../lib/timeFormat";
// import BlurCircle from "../components/BlurCircle";
// import MovieCard from "../components/MovieCard";
// import Loading from "../components/Loading";
// import toast from "react-hot-toast";
// import SeatLayout from "../pages/SeatLayout"; // ✅ added import

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showSeatLayout, setShowSeatLayout] = useState(false); // ✅ controls seat layout visibility

//   const dates = [
//     { day: "24", month: "Jul" },
//     { day: "25", month: "Jul" },
//     { day: "26", month: "Jul" },
//     { day: "27", month: "Jul" },
//   ];

//   useEffect(() => {
//     const foundShow = dummyShowsData.find((s) => s._id === id);
//     if (foundShow) setMovie(foundShow);
//   }, [id]);

//   if (!movie) return <Loading />;

//   // ✅ Handle Book Now click
//   const handleBookNow = () => {
//     if (!selectedDate) {
//       toast.error("Please select a date before booking!");
//       return;
//     }
//     // ✅ Show SeatLayout below calendar
//     setShowSeatLayout(true);
//   };

//   return (
//     <>
//       <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
//         <BlurCircle top="10%" left="5%" />
//         <BlurCircle bottom="10%" right="5%" />

//         {/* 🎬 Movie Info */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
//           <img
//             src={movie.poster_path}
//             alt={movie.title}
//             className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
//           />

//           <div className="max-w-2xl">
//             <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
//               {movie.original_language === "en"
//                 ? "ENGLISH"
//                 : movie.original_language.toUpperCase()}
//             </p>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

//             <div className="flex items-center gap-2 mb-4">
//               <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
//               <p className="text-gray-200 text-sm">
//                 {movie.vote_average.toFixed(1)} IMDb Rating
//               </p>
//             </div>

//             <p className="text-gray-300 text-sm leading-relaxed mb-5">{movie.overview}</p>

//             <p className="text-gray-400 text-sm mb-8">
//               {timeFormat(movie.runtime)} •{" "}
//               {movie.genres.map((g) => g.name).join(", ")} •{" "}
//               {new Date(movie.release_date).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
//                 <Play size={18} /> Watch Trailer
//               </button>

//               <button className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition">
//                 <Ticket size={18} /> Buy Tickets
//               </button>

//               <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
//                 <Heart size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 👥 Cast Section */}
//         {movie.casts && (
//           <div className="mt-16 w-full max-w-6xl">
//             <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
//             <div className="overflow-x-auto no-scrollbar pb-4">
//               <div className="flex items-center gap-5 w-max px-2">
//                 {movie.casts.slice(0, 12).map((cast, index) => (
//                   <div key={index} className="text-center flex-shrink-0 w-[80px]">
//                     <img
//                       src={cast.profile_path}
//                       alt={cast.name}
//                       className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
//                     />
//                     <p className="text-xs text-gray-300 truncate">{cast.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 📅 Choose Date + Book Now */}
//         <div className="mt-20 mb-0 flex justify-center items-center w-full">
//           <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
//             <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
//               Choose Date
//             </h2>

//             <div className="flex items-center gap-8">
//               <button className="text-gray-300 hover:text-white text-2xl transition-all">
//                 &lt;
//               </button>

//               <div className="flex items-center gap-5">
//                 {dates.map((date, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedDate(date)}
//                     className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
//                       selectedDate?.day === date.day
//                         ? "bg-[#ff004f] hover:bg-[#e60046]"
//                         : "bg-[#2a1b20] hover:bg-[#3a2229]"
//                     }`}
//                   >
//                     <span>{date.day}</span>
//                     <span
//                       className={`text-xs ${
//                         selectedDate?.day === date.day
//                           ? "text-white"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       {date.month}
//                     </span>
//                   </button>
//                 ))}
//               </div>

//               <button className="text-gray-300 hover:text-white text-2xl transition-all">
//                 &gt;
//               </button>

//               {/* ✅ Book Now beside calendar */}
//               <button
//                 onClick={handleBookNow}
//                 className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ✅ SeatLayout shows here after Book Now is clicked */}
//         {showSeatLayout && (
//           <div className="mt-16 w-full max-w-6xl">
//             <SeatLayout />
//           </div>
//         )}

//         {/* 🎥 You May Also Like */}
//         <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
//         <div className="flex flex-wrap max-sm:justify-center gap-8">
//           {dummyShowsData.slice(0, 4).map((m, index) => (
//             <MovieCard key={index} movie={m} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-20">
//           <button
//             onClick={() => navigate("/movies")}
//             className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
//           >
//             Show more
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Heart, Star, Play, Ticket } from "lucide-react";
// import { dummyShowsData } from "../assets/assets";
// import { timeFormat } from "../lib/timeFormat";
// import BlurCircle from "../components/BlurCircle";
// import MovieCard from "../components/MovieCard";
// import Loading from "../components/Loading";
// import toast from "react-hot-toast";
// import { useLocation } from "react-router-dom";


// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const dates = [
//     { day: "24", month: "Jul" },
//     { day: "25", month: "Jul" },
//     { day: "26", month: "Jul" },
//     { day: "27", month: "Jul" },
//   ];

//   useEffect(() => {
//     const foundShow = dummyShowsData.find((s) => s._id === id);
//     if (foundShow) setMovie(foundShow);
//   }, [id]);

//   if (!movie) return <Loading />;

//   // ✅ Handle Book Now click
//   const handleBookNow = () => {
//     if (!selectedDate) {
//       toast.error("Please select a date before booking!");
//       return;
//     }
//     // ✅ Redirect to SeatLayout page with movie ID and selected date
//     navigate(`/movies/${movie._id}/${selectedDate.day}`);
//   };

//   return (
//     <>
//       <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
//         {/* ✨ Background Circles */}
//         <BlurCircle top="10%" left="5%" />
//         <BlurCircle bottom="10%" right="5%" />

//         {/* 🎬 Movie Info */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
//           <img
//             src={movie.poster_path}
//             alt={movie.title}
//             className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
//           />

//           <div className="max-w-2xl">
//             <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
//               {movie.original_language === "en"
//                 ? "ENGLISH"
//                 : movie.original_language.toUpperCase()}
//             </p>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

//             <div className="flex items-center gap-2 mb-4">
//               <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
//               <p className="text-gray-200 text-sm">
//                 {movie.vote_average.toFixed(1)} IMDb Rating
//               </p>
//             </div>

//             <p className="text-gray-300 text-sm leading-relaxed mb-5">{movie.overview}</p>

//             <p className="text-gray-400 text-sm mb-8">
//               {timeFormat(movie.runtime)} •{" "}
//               {movie.genres.map((g) => g.name).join(", ")} •{" "}
//               {new Date(movie.release_date).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </p>
// <div className="flex flex-wrap gap-4">
//   {/* 🎬 Watch Trailer */}
//   <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
//     <Play size={18} /> Watch Trailer
//   </button>

//   {/* 🎟️ Buy Tickets — scrolls to Choose Date section */}
//   <button
//     onClick={() => {
//       const element = document.getElementById("calendar-section");
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "center" });
//       }
//     }}
//     className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition"
//   >
//     <Ticket size={18} /> Buy Tickets
//   </button>

//   {/* ❤️ Favourite */}
//   <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
//     <Heart size={18} />
//   </button>
// </div>

            

//         {/* 👥 Cast Section */}
//         {movie.casts && (
//           <div className="mt-16 w-full max-w-6xl">
//             <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
//             <div className="overflow-x-auto no-scrollbar pb-4">
//               <div className="flex items-center gap-5 w-max px-2">
//                 {movie.casts.slice(0, 12).map((cast, index) => (
//                   <div key={index} className="text-center flex-shrink-0 w-[80px]">
//                     <img
//                       src={cast.profile_path}
//                       alt={cast.name}
//                       className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
//                     />
//                     <p className="text-xs text-gray-300 truncate">{cast.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 📅 Choose Date + Book Now */}
//         <div
//   id="calendar-section"
//   className="mt-20 mb-0 flex justify-center items-center w-full"
// >
//   <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
//     <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
//       Choose Date
//     </h2>

//     <div className="flex items-center gap-8">
//       <button className="text-gray-300 hover:text-white text-2xl transition-all">
//         &lt;
//       </button>

//       <div className="flex items-center gap-5">
//         {dates.map((date, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedDate(date)}
//             className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
//               selectedDate?.day === date.day
//                 ? "bg-[#ff004f] hover:bg-[#e60046]"
//                 : "bg-[#2a1b20] hover:bg-[#3a2229]"
//             }`}
//           >
//             <span>{date.day}</span>
//             <span
//               className={`text-xs ${
//                 selectedDate?.day === date.day
//                   ? "text-white"
//                   : "text-gray-400"
//               }`}
//             >
//               {date.month}
//             </span>
//           </button>
//         ))}
//       </div>

//       <button className="text-gray-300 hover:text-white text-2xl transition-all">
//         &gt;
//       </button>
//     </div>
//   </div>
// </div>


//               {/* ✅ Book Now beside calendar */}
//               <button
//                 onClick={handleBookNow}
//                 className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 🎥 You May Also Like */}
//         <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
//         <div className="flex flex-wrap max-sm:justify-center gap-8">
//           {dummyShowsData.slice(0, 4).map((m, index) => (
//             <MovieCard key={index} movie={m} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-20">
//           <button
//             onClick={() => navigate("/movies")}
//             className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
//           >
//             Show more
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Heart, Star, Play, Ticket } from "lucide-react";
// import { dummyShowsData } from "../assets/assets";
// import { timeFormat } from "../lib/timeFormat";
// import BlurCircle from "../components/BlurCircle";
// import MovieCard from "../components/MovieCard";
// import Loading from "../components/Loading";
// import toast from "react-hot-toast";

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const dates = [
//     { day: "24", month: "Jul" },
//     { day: "25", month: "Jul" },
//     { day: "26", month: "Jul" },
//     { day: "27", month: "Jul" },
//   ];

//   useEffect(() => {
//     const foundShow = dummyShowsData.find((s) => s._id === id);
//     if (foundShow) setMovie(foundShow);
//   }, [id]);

//   if (!movie) return <Loading />;

//   // ✅ Handle Book Now click
//   const handleBookNow = () => {
//     if (!selectedDate) {
//       toast.error("Please select a date before booking!");
//       return;
//     }
//     // ✅ Redirect to SeatLayout page with movie ID and selected date
//     navigate(`/book/${movie._id}?date=${selectedDate.day}`);
//   };

//   // ✅ Handle Buy Tickets click (scroll to calendar section)
//   const handleBuyTickets = () => {
//     const section = document.getElementById("calendar-section");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

//   return (
//     <>
//       <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
//         {/* ✨ Background Circles */}
//         <BlurCircle top="10%" left="5%" />
//         <BlurCircle bottom="10%" right="5%" />

//         {/* 🎬 Movie Info */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
//           <img
//             src={movie.poster_path}
//             alt={movie.title}
//             className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
//           />

//           <div className="max-w-2xl">
//             <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
//               {movie.original_language === "en"
//                 ? "ENGLISH"
//                 : movie.original_language.toUpperCase()}
//             </p>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

//             <div className="flex items-center gap-2 mb-4">
//               <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
//               <p className="text-gray-200 text-sm">
//                 {movie.vote_average.toFixed(1)} IMDb Rating
//               </p>
//             </div>

//             <p className="text-gray-300 text-sm leading-relaxed mb-5">{movie.overview}</p>

//             <p className="text-gray-400 text-sm mb-8">
//               {timeFormat(movie.runtime)} •{" "}
//               {movie.genres.map((g) => g.name).join(", ")} •{" "}
//               {new Date(movie.release_date).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
//                 <Play size={18} /> Watch Trailer
//               </button>

//               {/* ✅ Updated Buy Tickets Button */}
//               <button
//                 onClick={handleBuyTickets}
//                 className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition"
//               >
//                 <Ticket size={18} /> Buy Tickets
//               </button>

//               <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
//                 <Heart size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 👥 Cast Section */}
//         {movie.casts && (
//           <div className="mt-16 w-full max-w-6xl">
//             <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
//             <div className="overflow-x-auto no-scrollbar pb-4">
//               <div className="flex items-center gap-5 w-max px-2">
//                 {movie.casts.slice(0, 12).map((cast, index) => (
//                   <div key={index} className="text-center flex-shrink-0 w-[80px]">
//                     <img
//                       src={cast.profile_path}
//                       alt={cast.name}
//                       className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
//                     />
//                     <p className="text-xs text-gray-300 truncate">{cast.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 📅 Choose Date + Book Now */}
//         <div
//           id="calendar-section"
//           className="mt-20 mb-0 flex justify-center items-center w-full"
//         >
//           <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
//             <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
//               Choose Date
//             </h2>

//             <div className="flex items-center gap-8">
//               <button className="text-gray-300 hover:text-white text-2xl transition-all">
//                 &lt;
//               </button>

//               <div className="flex items-center gap-5">
//                 {dates.map((date, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedDate(date)}
//                     className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
//                       selectedDate?.day === date.day
//                         ? "bg-[#ff004f] hover:bg-[#e60046]"
//                         : "bg-[#2a1b20] hover:bg-[#3a2229]"
//                     }`}
//                   >
//                     <span>{date.day}</span>
//                     <span
//                       className={`text-xs ${
//                         selectedDate?.day === date.day
//                           ? "text-white"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       {date.month}
//                     </span>
//                   </button>
//                 ))}
//               </div>

//               <button className="text-gray-300 hover:text-white text-2xl transition-all">
//                 &gt;
//               </button>

//               {/* ✅ Book Now beside calendar */}
//               <button
//                 onClick={handleBookNow}
//                 className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 🎥 You May Also Like */}
//         <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
//         <div className="flex flex-wrap max-sm:justify-center gap-8">
//           {dummyShowsData.slice(0, 4).map((m, index) => (
//             <MovieCard key={index} movie={m} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-20">
//           <button
//             onClick={() => navigate("/movies")}
//             className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
//           >
//             Show more
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieDetails;



import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, Star, Play, Ticket } from "lucide-react";
import { dummyShowsData } from "../assets/assets";
import { timeFormat } from "../lib/timeFormat";
import BlurCircle from "../components/BlurCircle";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    { day: "2025-07-24", labelDay: "24", month: "Jul" },
    { day: "2025-07-25", labelDay: "25", month: "Jul" },
    { day: "2025-07-26", labelDay: "26", month: "Jul" },
    { day: "2025-07-27", labelDay: "27", month: "Jul" },
  ];

  useEffect(() => {
    const foundShow = dummyShowsData.find((s) => s._id === id);
    if (foundShow) setMovie(foundShow);
  }, [id]);

  if (!movie) return <Loading />;

  // ✅ Scroll to calendar section when clicking "Buy Tickets"
  const handleBuyTickets = () => {
    const section = document.getElementById("calendar-section");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // ✅ Navigate to SeatLayout after selecting date
  const handleBookNow = () => {
    if (!selectedDate) {
      toast.error("Please select a date before booking!");
      return;
    }

    // ✅ Use correct path: /movies/:id/:date
    navigate(`/movies/${movie._id}/${selectedDate.day}`);
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f] to-[#1a0b14] flex flex-col justify-center items-center text-white px-6 md:px-16 lg:px-28 overflow-hidden pt-32">
        {/* ✨ Background Circles */}
        <BlurCircle top="10%" left="5%" />
        <BlurCircle bottom="10%" right="5%" />

        {/* 🎬 Movie Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl relative z-10">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-64 md:w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
          />

          <div className="max-w-2xl">
            <p className="uppercase text-pink-400 tracking-widest text-sm font-semibold mb-1">
              {movie.original_language === "en"
                ? "ENGLISH"
                : movie.original_language.toUpperCase()}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
              <p className="text-gray-200 text-sm">
                {movie.vote_average.toFixed(1)} IMDb Rating
              </p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-5">{movie.overview}</p>

            <p className="text-gray-400 text-sm mb-8">
              {timeFormat(movie.runtime)} •{" "}
              {movie.genres.map((g) => g.name).join(", ")} •{" "}
              {new Date(movie.release_date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>

            {/* 🎟️ Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#2d2f36] px-5 py-3 rounded-full text-sm hover:bg-[#3a3c44] transition">
                <Play size={18} /> Watch Trailer
              </button>

              <button
                onClick={handleBuyTickets}
                className="flex items-center gap-2 bg-[#ff004f] px-5 py-3 rounded-full text-sm hover:bg-[#e60046] transition"
              >
                <Ticket size={18} /> Buy Tickets
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#2d2f36] hover:bg-[#3a3c44] px-5 py-3 rounded-full transition">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 👥 Cast Section */}
        {movie.casts && (
          <div className="mt-16 w-full max-w-6xl">
            <p className="text-lg font-medium mb-6">Your Favourite Cast</p>
            <div className="overflow-x-auto no-scrollbar pb-4">
              <div className="flex items-center gap-5 w-max px-2">
                {movie.casts.slice(0, 12).map((cast, index) => (
                  <div key={index} className="text-center flex-shrink-0 w-[80px]">
                    <img
                      src={cast.profile_path}
                      alt={cast.name}
                      className="rounded-full h-16 w-16 object-cover mx-auto mb-2 border border-[#ff004f]/30 shadow-[0_0_10px_rgba(255,0,79,0.2)]"
                    />
                    <p className="text-xs text-gray-300 truncate">{cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 📅 Choose Date + Book Now */}
        <div
          id="calendar-section"
          className="mt-20 mb-0 flex justify-center items-center w-full"
        >
          <div className="bg-[#1b0d12]/90 backdrop-blur-xl border border-[#ff004f]/30 rounded-2xl p-10 md:p-12 shadow-[0_0_25px_rgba(255,0,79,0.25)] w-[95%] max-w-5xl flex flex-col items-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
              Choose Date
            </h2>

            <div className="flex items-center gap-8">
              <button className="text-gray-300 hover:text-white text-2xl transition-all">
                &lt;
              </button>

              <div className="flex items-center gap-5">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`text-white text-sm py-3 px-4 rounded-md flex flex-col items-center w-[70px] transition ${
                      selectedDate?.day === date.day
                        ? "bg-[#ff004f] hover:bg-[#e60046]"
                        : "bg-[#2a1b20] hover:bg-[#3a2229]"
                    }`}
                  >
                    <span>{date.labelDay}</span>
                    <span
                      className={`text-xs ${
                        selectedDate?.day === date.day
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {date.month}
                    </span>
                  </button>
                ))}
              </div>

              <button className="text-gray-300 hover:text-white text-2xl transition-all">
                &gt;
              </button>

              {/* ✅ Book Now beside calendar */}
              <button
                onClick={handleBookNow}
                className="ml-8 bg-[#ff004f] hover:bg-[#e60046] text-white text-sm font-semibold px-8 py-3 rounded-md shadow-lg transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* 🎥 You May Also Like */}
        <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
        <div className="flex flex-wrap max-sm:justify-center gap-8">
          {dummyShowsData.slice(0, 4).map((m, index) => (
            <MovieCard key={index} movie={m} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={() => navigate("/movies")}
            className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
          >
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

