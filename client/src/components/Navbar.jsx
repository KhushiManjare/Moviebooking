// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import logo from "../assets/logo.svg";
// import { TicketPlus } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // detect if currently inside admin panel
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm px-5 py-3">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         {/* Logo - toggles between user and admin */}
//         <Link
//           to={isAdminRoute ? "/" : "/admin"}
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => setMenuOpen(false)}
//         >
//           <img src={logo} alt="Logo" className="w-32 h-auto" />
//         </Link>

//         {/* Desktop Links */}
//         {!isAdminRoute && (
//           <div className="hidden md:flex gap-6 items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
//             <Link to="/" className="text-white font-medium hover:text-red-500">
//               Home
//             </Link>
//             <Link
//               to="/Movies"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Movies
//             </Link>
//             <Link
//               to="/Theaters"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Theaters
//             </Link>
//             <Link
//               to="/Releases"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Releases
//             </Link>
//             <Link
//               to="/Favourite"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Favorites
//             </Link>
//           </div>
//         )}

//         {/* Desktop Right Section */}
//         <div className="hidden md:flex items-center gap-3">
//           {!isAdminRoute && (
//             <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
//               <FiSearch size={20} />
//             </button>
//           )}

//           {!user ? (
//             <button
//               onClick={openSignIn}
//               className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
//             >
//               Login
//             </button>
//           ) : (
//             <UserButton
//               afterSignOutUrl="/"
//               userProfileMode="modal"
//               appearance={{
//                 elements: {
//                   userButtonBox: "bg-white/10 border border-white/20",
//                 },
//               }}
//             >
//               <UserButton.MenuItems>
//                 <UserButton.Action
//                   label="My Bookings"
//                   labelIcon={<TicketPlus width={15} />}
//                   onClick={() => setTimeout(() => navigate("/my-bookings"), 0)}
//                 />
//               </UserButton.MenuItems>
//             </UserButton>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <div
//           className="block md:hidden text-white text-3xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {!isAdminRoute && menuOpen && (
//         <div className="absolute top-16 right-5 w-56 p-5 flex flex-col gap-3 bg-black/90 backdrop-blur-md rounded-xl md:hidden">
//           <Link
//             to="/"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/Movies"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Movies
//           </Link>
//           <Link
//             to="/Theaters"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Theaters
//           </Link>
//           <Link
//             to="/Releases"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Releases
//           </Link>
//           <Link
//             to="/Favourite"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Favorites
//           </Link>

//           {!user ? (
//             <button
//               onClick={openSignIn}
//               className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full w-full mt-2"
//             >
//               Login
//             </button>
//           ) : (
//             <UserButton
//               afterSignOutUrl="/"
//               userProfileMode="modal"
//               appearance={{
//                 elements: {
//                   userButtonBox: "bg-white/10 border border-white/20 w-full",
//                 },
//               }}
//             >
//               <UserButton.MenuItems>
//                 <UserButton.Action
//                   label="My Bookings"
//                   labelIcon={<TicketPlus width={15} />}
//                   onClick={() => setTimeout(() => navigate("/my-bookings"), 0)}
//                 />
//               </UserButton.MenuItems>
//             </UserButton>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import { inngest } from "@/inngest/index.js";

// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import logo from "../assets/logo.svg";
// import { TicketPlus } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // detect if currently inside admin panel
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm px-5 py-3">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         {/* Logo - toggles between user and admin */}
//         <Link
//           to={isAdminRoute ? "/" : "/admin"}
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => setMenuOpen(false)}
//         >
//           <img src={logo} alt="Logo" className="w-32 h-auto" />
//         </Link>

//         {/* Desktop Links */}
//         {!isAdminRoute && (
//           <div className="hidden md:flex gap-6 items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
//             <Link to="/" className="text-white font-medium hover:text-red-500">
//               Home
//             </Link>
//             <Link
//               to="/Movies"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Movies
//             </Link>
//             <Link
//               to="/Theaters"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Theaters
//             </Link>
//             <Link
//               to="/Releases"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Releases
//             </Link>
//             <Link
//               to="/Favourite"
//               className="text-white font-medium hover:text-red-500"
//             >
//               Favorites
//             </Link>
//           </div>
//         )}

//         {/* Desktop Right Section */}
//         <div className="hidden md:flex items-center gap-3">
//           {!isAdminRoute && (
//             <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
//               <FiSearch size={20} />
//             </button>
//           )}

//           {!user ? (
//             <button
//               onClick={openSignIn}
//               className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
//             >
//               Login
//             </button>
//           ) : (
//             <UserButton
//               afterSignOutUrl="/"
//               userProfileMode="modal"
//               appearance={{
//                 elements: {
//                   userButtonBox: "bg-white/10 border border-white/20",
//                 },
//               }}
//             >
//               <UserButton.MenuItems>
//                 <UserButton.Action
//                   label="My Bookings"
//                   labelIcon={<TicketPlus width={15} />}
//                   onClick={() => setTimeout(() => navigate("/my-bookings"), 0)}
//                 />
//               </UserButton.MenuItems>
//             </UserButton>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <div
//           className="block md:hidden text-white text-3xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </div>
//       </div>
// <button
//   onClick={async () => {
//     await inngest.send({
//       name: "test/event",
//       data: { message: "Testing Inngest from Navbar!" },
//     });
//     alert("✅ Inngest event sent!");
//   }}
//   className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
// >
//   Test Inngest
// </button>

//       {/* Mobile Menu */}
//       {!isAdminRoute && menuOpen && (
//         <div className="absolute top-16 right-5 w-56 p-5 flex flex-col gap-3 bg-black/90 backdrop-blur-md rounded-xl md:hidden">
//           <Link
//             to="/"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/Movies"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Movies
//           </Link>
//           <Link
//             to="/Theaters"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Theaters
//           </Link>
//           <Link
//             to="/Releases"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Releases
//           </Link>
//           <Link
//             to="/Favourite"
//             className="text-white font-medium"
//             onClick={() => setMenuOpen(false)}
//           >
//             Favorites
//           </Link>

//          {!user ? (
//   <button
//     onClick={() => navigate("/login")}
//     className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
//   >
//     Login
//   </button>
// ) : (
//   <UserButton
//     afterSignOutUrl="/"
//     userProfileMode="modal"
//     appearance={{
//       elements: {
//         userButtonBox: "bg-white/10 border border-white/20",
//       },
//     }}
//   >
//     <UserButton.MenuItems>
//       <UserButton.Action
//         label="My Bookings"
//         onClick={() => setTimeout(() => navigate("/my-bookings"), 0)}
//       />
//     </UserButton.MenuItems>
//   </UserButton>
// )}

//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";
import { TicketPlus } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { signOut, openSignIn } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  // 👇 Logout function that also sends Inngest event
  const handleLogout = async () => {
    try {
      await inngest.send({
        name: "user/logout",
        data: {
          userId: user?.id || "unknown",
          message: `${user?.fullName || "User"} logged out successfully`,
        },
      });

      console.log("✅ Inngest logout event sent");
      await signOut(() => navigate("/"));
    } catch (error) {
      console.error("❌ Error sending Inngest logout event:", error);
      await signOut(() => navigate("/"));
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm px-5 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to={isAdminRoute ? "/" : "/admin"}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </Link>

        {/* Desktop Links */}
        {!isAdminRoute && (
          <div className="hidden md:flex gap-6 items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Link to="/" className="text-white font-medium hover:text-red-500">
              Home
            </Link>
            <Link
              to="/Movies"
              className="text-white font-medium hover:text-red-500"
            >
              Movies
            </Link>
            <Link
              to="/Theaters"
              className="text-white font-medium hover:text-red-500"
            >
              Theaters
            </Link>
            <Link
              to="/Releases"
              className="text-white font-medium hover:text-red-500"
            >
              Releases
            </Link>
            <Link
              to="/Favourite"
              className="text-white font-medium hover:text-red-500"
            >
              Favorites
            </Link>
          </div>
        )}

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {!isAdminRoute && (
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              <FiSearch size={20} />
            </button>
          )}

          {!user ? (
            <button
              onClick={openSignIn}
              className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
            >
              Login
            </button>
          ) : (
            <UserButton
              afterSignOutUrl="/"
              userProfileMode="modal"
              appearance={{
                elements: {
                  userButtonBox: "bg-white/10 border border-white/20",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => setTimeout(() => navigate("/my-bookings"), 0)}
                />
                <UserButton.Action
                  label="Logout"
                  onClick={handleLogout}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="block md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAdminRoute && menuOpen && (
        <div className="absolute top-16 right-5 w-56 p-5 flex flex-col gap-3 bg-black/90 backdrop-blur-md rounded-xl md:hidden">
          <Link
            to="/"
            className="text-white font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Movies"
            className="text-white font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/Theaters"
            className="text-white font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Theaters
          </Link>
          <Link
            to="/Releases"
            className="text-white font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Releases
          </Link>
          <Link
            to="/Favourite"
            className="text-white font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </Link>

          {!user ? (
            <button
              onClick={openSignIn}
              className="bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
