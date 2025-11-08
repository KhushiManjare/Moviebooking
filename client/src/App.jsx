// import React from "react";
// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import MovieDetails from "./pages/MovieDetails";
// import MyBookings from "./pages/MyBookings";
// import SeatLayout from "./pages/SeatLayout";
// import Favourite from "./pages/Favourite";

// // Admin pages
// import Layout from "./pages/admin/Layout";
// import Dashboard from "./pages/admin/Dashboard";
// import ListShows from "./pages/admin/ListShows";
// import ListBookings from "./pages/admin/ListBookings";
// import AddShows from "./pages/admin/AddShows";

// const App = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <>
//       <Toaster />
//       {!isAdminRoute && <Navbar />}

//       <Routes>
//         {/* 👇 Default route goes to Home now */}
//         <Route path="/" element={<Home />} />

//         {/* User routes */}
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<MovieDetails />} />
//         <Route path="/movies/:id/:date" element={<SeatLayout />} />
//         <Route path="/my-bookings" element={<MyBookings />} />
//         <Route path="/favourite" element={<Favourite />} />

//         {/* Admin routes */}
//         <Route path="/admin" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="add-shows" element={<AddShows />} />
//           <Route path="list-shows" element={<ListShows />} />
//           <Route path="list-bookings" element={<ListBookings />} />
//           <Route path="*" element={<Navigate to="/admin" replace />} />
//         </Route>
//       </Routes>

//       {!isAdminRoute && <Footer />}
//     </>
//   );
// };

// export default App;
// 













import React, { useEffect, Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SignIn, SignUp } from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";
import Favourite from "./pages/Favourite";

// Admin pages
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";
import AddShows from "./pages/admin/AddShows";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // 👇 Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/:date" element={<SeatLayout />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/favourite" element={<Favourite />} />

          {/* Clerk authentication routes */}
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-shows" element={<AddShows />} />
            <Route path="list-shows" element={<ListShows />} />
            <Route path="list-bookings" element={<ListBookings />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </Suspense>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
