

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClockIcon } from "lucide-react";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import isoTimeFormat from "../lib/isoTimeFormat";
import BlurCircle from "../components/BlurCircle";

const SeatLayout = () => {
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showData, setShowData] = useState(null);
  const [matchedKey, setMatchedKey] = useState(null);

  const navigate = useNavigate();

  // Fetch dummy show
  useEffect(() => {
    const foundShow = dummyShowsData.find((s) => s._id === id);
    if (foundShow) {
      setShowData({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);

  // Match date logic
  const findMatchingKey = (dateTimeObj, dateParam) => {
    if (!dateTimeObj) return null;
    const keys = Object.keys(dateTimeObj);
    if (keys.length === 0) return null;
    if (!dateParam) return keys[0];
    if (dateTimeObj[dateParam]) return dateParam;

    const d = new Date(dateParam);
    if (!isNaN(d.getTime())) {
      const iso = d.toISOString().split("T")[0];
      if (dateTimeObj[iso]) return iso;
    }

    const endsWithMatch = keys.find((k) => k.endsWith(String(dateParam)));
    return endsWithMatch || keys[0];
  };

  useEffect(() => {
    if (!showData) return;
    const best = findMatchingKey(showData.dateTime, date);
    setMatchedKey(best);
  }, [showData, date]);

  if (!showData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        Loading show details...
      </div>
    );
  }

  const availableTimings = matchedKey ? showData.dateTime[matchedKey] || [] : [];

  // Seat grid
  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 12;
  const pricePerSeat = 180;

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalPrice = selectedSeats.length * pricePerSeat;

  return (
  
  <div className="relative flex flex-col md:flex-row justify-center items-start gap-12 px-6 md:px-16 lg:px-28 py-20 text-white min-h-screen bg-[#0b0b0f] overflow-hidden">


      {/* 🔥 Background Glow Circles */}
      <BlurCircle top="-120px" left="-100px" />
      <BlurCircle bottom="10%" right="-150px" />
      <BlurCircle top="60%" left="70%" />

      {/* Left Timings Card */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 z-10">
        <div className="bg-[#1a0f12]/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-[#ff004f]/20">
          <h2 className="text-xl font-semibold text-[#ff004f] mb-4 text-center">
            Available Timings
          </h2>

          {matchedKey && (
            <p className="text-xs text-gray-500 text-center mb-3">
              Date: <span className="text-gray-300">{matchedKey}</span>
            </p>
          )}

          {availableTimings.length > 0 ? (
            <div className="flex flex-col gap-3">
              {availableTimings.map((item) => (
                <div
                  key={item.time}
                  onClick={() => setSelectedTime(item)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedTime?.time === item.time
                      ? "bg-[#ff004f] text-white scale-[1.05] shadow-[0_0_15px_rgba(255,0,79,0.7)]"
                      : "bg-[#1b0d10]/80 hover:bg-[#ff004f]/30 text-gray-300"
                  }`}
                >
                  <ClockIcon className="w-4 h-4" />
                  <p className="text-sm">{isoTimeFormat(item.time)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center mt-4">
              No showtimes available.
            </p>
          )}
        </div>
      </div>

      {/* Right: Seat Layout */}
      <div className="flex-1 flex flex-col items-center text-gray-300 relative z-10">
        {selectedTime ? (
          <>
            <h3 className="text-2xl font-semibold mb-6 text-[#ff004f]">
              Select Your Seat
            </h3>

            {/* Curved Screen Indicator */}
            <div className="relative w-full max-w-3xl mb-10">
              <div className="absolute inset-x-0 top-0 mx-auto w-[80%] h-[6px] bg-gradient-to-r from-[#ff1b4d] via-[#ff004f] to-[#b30036] rounded-t-full shadow-[0_0_40px_rgba(255,0,79,0.8)]"></div>
              <p className="text-center text-xs text-gray-400 mt-4 tracking-widest">
                SCREEN SIDE
              </p>
            </div>

            {/* Seat Grid */}
            <div className="bg-[#140a0d]/70 rounded-2xl p-8 shadow-[0_0_20px_rgba(255,0,79,0.2)] w-full max-w-4xl backdrop-blur-md border border-[#ff004f]/10">
              <div className="flex flex-col items-center gap-4">
                {rows.map((row) => (
                  <div key={row} className="flex gap-3 items-center">
                    <span className="w-4 text-sm text-gray-400">{row}</span>
                    {Array.from({ length: seatsPerRow }, (_, i) => {
                      const seat = `${row}${i + 1}`;
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <div
                          key={seat}
                          onClick={() => handleSeatClick(seat)}
                          className={`w-8 h-8 flex items-center justify-center text-[10px] rounded-md transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? "bg-[#ff004f] border-[#ff004f] text-white shadow-[0_0_15px_rgba(255,0,79,0.9)] scale-110"
                              : "bg-[#1b0d10] border-[#ff004f]/30 text-gray-300 hover:bg-[#ff004f]/40 hover:text-white"
                          }`}
                        >
                          {i + 1}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-sm mt-20">
            Select a timing from the left to view seats.
          </p>
        )}
      </div>

      {/* Bottom Bar */}
      {selectedSeats.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-[#0f0f10]/95 border-t border-[#ff004f]/30 px-6 md:px-20 py-4 flex justify-between items-center text-white z-50 backdrop-blur-lg">
          <div>
            <p className="text-sm text-gray-400">Selected Seats:</p>
            <p className="font-semibold text-lg text-[#ff004f]">{selectedSeats.join(", ")}</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-lg font-semibold">₹{totalPrice}</p>
            <button
              onClick={() =>
                navigate(
                  `/checkout/${id}?seats=${selectedSeats.join(
                    ","
                  )}&date=${matchedKey}&time=${selectedTime?.time}`
                )
              }
              className="bg-[#ff004f] px-6 py-2 rounded-lg font-semibold hover:bg-[#ff004f]/80 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,79,0.6)]"
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatLayout;
