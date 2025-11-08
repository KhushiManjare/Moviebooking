import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import BlurCircle from "../components/BlurCircle";
import { dummyBookingData } from "../assets/assets";
import { timeFormat } from "../lib/timeFormat";
import { dateFormat } from "../lib/dateFormat";




const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-28 md:pt-36 min-h-[80vh] text-white">
      {/* Background Blur Effects */}
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg md:text-xl font-semibold mb-6">My Bookings</h1>

      {bookings.length > 0 ? (
        bookings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-primary/10 border border-primary/20 rounded-lg mt-3 p-2 md:p-4 max-w-4xl w-full hover:bg-primary/20 transition-all"
          >
            {/* LEFT: Movie Info */}
            <div className="flex flex-row items-center w-full">
              <img
                src={item.show.movie.poster_path}
                alt={item.show.movie.title}
                className="w-28 h-20 md:w-36 md:h-24 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-center p-3 text-sm leading-tight">
                <p className="text-base font-semibold">{item.show.movie.title}</p>
                <p className="opacity-75">{timeFormat(item.show.movie.runtime)}</p>
                <p className="opacity-75">{dateFormat(item.show.showDateTime)}</p>
              </div>
            </div>

            {/* RIGHT: Booking Info */}
            <div className="flex flex-col md:items-end md:text-right justify-between p-3 pr-5">
              <div className="flex items-center gap-3">
                <p className="text-xl font-semibold mb-2">
                  {currency}
                  {item.amount}
                </p>
                {!item.isPaid && (
                  <button className="bg-primary px-8 py-1.5 mb-2 text-sm rounded-full font-medium cursor-pointer hover:scale-105 transition-transform">
                    Pay Now
                  </button>
                )}
              </div>

              <div className="text-xs md:text-sm leading-tight">
                <p>
                  <span className="text-gray-400">Total Tickets:</span>{" "}
                  {item.bookedSeats?.length || 0}
                </p>
                <p>
                  <span className="text-gray-400">Seat Number:</span>{" "}
                  {item.bookedSeats?.join(", ") || "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No bookings yet.</p>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
