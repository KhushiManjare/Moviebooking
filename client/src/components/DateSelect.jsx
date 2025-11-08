import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlurCircle from "./BlurCircle";
<div style={{ background: "yellow", padding: "20px" }}>
  DateSelect component visible test
</div>

const DateSelect = ({ dateTime = {}, id }) => {
  const dates = Object.keys(dateTime);
  const [selectedDate, setSelectedDate] = useState(dates[0] || null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div
      id="dateSelect"
      className="relative z-20 my-40 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[60vh]"
    >
      {/* Background Glows */}
      <BlurCircle top="-100px" left="-150px" size="400px" intensity={0.6} />
      <BlurCircle bottom="-100px" right="-150px" size="400px" intensity={0.6} />

      {/* Date Section Box */}
      <div
        className="relative bg-[#1a0b14]/80 border border-pink-600/30 
                   backdrop-blur-md shadow-lg rounded-xl px-6 py-8 
                   flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left Side - Dates */}
        <div className="flex flex-col w-full md:w-2/3 z-10">
          <h2 className="text-lg font-semibold text-white mb-4">Choose Date</h2>

          <div className="flex items-center gap-3 text-gray-200">
            {/* Left Arrow */}
            <button onClick={scrollLeft} className="hover:text-pink-400 transition">
              <ChevronLeft size={28} />
            </button>

            {/* Scrollable Dates */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full pb-2"
            >
              {dates.map((date) => {
                const d = new Date(date);
                const day = d.getDate();
                const month = d.toLocaleDateString("en-US", { month: "short" });

                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`flex flex-col items-center justify-center h-16 w-16 min-w-[4rem] rounded-md 
                                text-sm font-medium border transition-all duration-300
                                ${
                                  selectedDate === date
                                    ? "bg-[#ff004f] text-white border-[#ff004f]"
                                    : "bg-[#2d2f36]/50 border-pink-600/20 text-gray-300 hover:bg-pink-600/20"
                                }`}
                  >
                    <span className="text-base">{day}</span>
                    <span className="text-xs">{month}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button onClick={scrollRight} className="hover:text-pink-400 transition">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Right Side - Book Button */}
        <div className="flex justify-end mt-8 md:mt-0 md:ml-6 z-10">
          <button
            className="bg-[#ff004f] text-white px-8 py-2 rounded-md 
                       hover:bg-[#e60046] transition-all shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
