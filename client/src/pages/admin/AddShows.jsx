import React, { useEffect, useState } from "react";
import { StarIcon, CheckIcon, Trash2Icon } from "lucide-react";
import Title from "../../components/admin/Title";
import { dummyShowsData } from "../../assets/assets";
import { kConverter } from "../../lib/kConverter"; // ✅ Correct import

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  // ✅ Fetch Dummy Movies
  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  // ✅ Add Date & Time
  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });

    setDateTimeInput("");
  };

  // ✅ Remove Selected Time
  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time);
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filteredTimes };
    });
  };

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />
      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      {/* 🎬 Movie Selection Section */}
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie._id}
              className={`relative max-w-40 cursor-pointer hover:-translate-y-1 transition duration-300 ${
                selectedMovie?._id === movie._id ? "opacity-100" : "opacity-90"
              }`}
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full object-cover brightness-90"
                />
                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0 text-gray-400">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-gray-300">
                    {kConverter(movie.vote_count)} Votes
                  </p>
                </div>
              </div>

              {selectedMovie?._id === movie._id && (
                <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded">
                  <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              )}

              <p className="font-medium truncate">{movie.title}</p>
              <p className="text-gray-400 text-sm">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎞 Selected Movie Section */}
      {selectedMovie && (
        <div className="mt-8 flex flex-col gap-6 max-w-[400px]">
          <p className="text-lg font-medium">
            Selected Movie:{" "}
            <span className="text-primary">{selectedMovie.title}</span>
          </p>

          {/* 💰 Show Price */}
          <div className="flex flex-col">
            <label className="text-gray-400 text-sm mb-1">Show Price</label>
            <div className="relative w-1/2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                placeholder="Enter show price"
                value={showPrice}
                onChange={(e) => setShowPrice(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-gray-700 text-gray-200 placeholder-gray-500 rounded-md py-2 pl-8 pr-2 focus:outline-none focus:border-red-500 appearance-none"
              />
            </div>
          </div>

          {/* 🕒 Date and Time */}
          <div className="flex flex-col">
            <label className="text-gray-400 text-sm mb-1">
              Select Date and Time
            </label>
            <div className="flex items-center gap-2">
              <input
                type="datetime-local"
                value={dateTimeInput}
                onChange={(e) => setDateTimeInput(e.target.value)}
                className="flex-1 bg-[#0d0d0d] border border-gray-700 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
              />
              <button
                onClick={handleDateTimeAdd}
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md px-4 py-2"
              >
                Add Time
              </button>
            </div>
          </div>

          {/* 🗓️ Display Selected Times */}
          {Object.keys(dateTimeSelection).length > 0 && (
            <div className="mt-6">
              <h2 className="mb-2 text-gray-200 text-sm font-medium">
                Selected Date-Time
              </h2>
              <ul className="space-y-3">
                {Object.entries(dateTimeSelection).map(([date, times]) => (
                  <li key={date}>
                    <div className="font-medium text-gray-300">{date}</div>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm">
                      {times.map((time) => (
                        <div
                          key={time}
                          className="border border-red-500 px-2 py-1 flex items-center rounded"
                        >
                          <span>{time}</span>
                          <Trash2Icon
                            onClick={() => handleRemoveTime(date, time)}
                            width={15}
                            className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Add Show Button */}
          <button
            onClick={() => {
              if (!Object.keys(dateTimeSelection).length || !showPrice) {
                alert("Please add at least one date/time and show price!");
                return;
              }
              alert("Show added successfully!");
            }}
            className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 mt-3 text-sm font-medium self-start transition"
          >
            Add Show
          </button>
        </div>
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default AddShows;
