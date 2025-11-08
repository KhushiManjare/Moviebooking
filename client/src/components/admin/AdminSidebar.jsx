import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, PlusSquare, List, ClipboardList } from "lucide-react";
import { assets } from "../../assets/assets";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assets.profile,
  };

  const adminNavLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquare },
    { name: "List Shows", path: "/admin/list-shows", icon: List },
    { name: "List Bookings", path: "/admin/list-bookings", icon: ClipboardList },
  ];

  // 🎨 Red tones
  const activeBg = "rgba(139, 0, 0, 0.25)";
  const activeText = "#ff2e2e";

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center py-8 w-60 border-r border-gray-800">
      {/* ✅ Make QuickShow logo a proper NavLink */}
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="text-2xl font-bold mb-6 text-red-600 hover:text-red-500 transition-colors duration-200"
      >
       
      </button>

      {/* Profile */}
      <img
        className="h-16 w-16 rounded-full border border-gray-700"
        src={user.imageUrl}
        alt="Admin"
      />
      <p className="mt-2 text-base font-semibold">
        {user.firstName} {user.lastName}
      </p>

      {/* Nav Links */}
      <div className="mt-8 w-full">
        {adminNavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="relative flex items-center gap-3 px-6 py-3 transition-all duration-200"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: activeBg, color: activeText }
                : { color: "#d1d5db" }
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute right-0 top-0 h-full w-1 bg-red-600 rounded-l" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
