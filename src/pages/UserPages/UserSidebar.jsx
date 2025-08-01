import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaChartBar,
  FaFilter,
  FaTasks,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const UserSidebar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Sidebar links with icons
  // ! 👉 TASK 1: ADDED isAuthenticated CHECK TO HIDE OTHER PANELS
  const menuItems = isAuthenticated
    ? [
        { path: "/user/dashboard", label: "Dashboard", icon: <FaChartBar /> },
        { path: "/user/userpage", label: "Create Tasks", icon: <FaTasks /> },
        { path: "/user/calendar", label: "Calendar", icon: <FaCalendarAlt /> },
        {
          path: "/user/notifications",
          label: "Notifications",
          icon: <FaBell />,
        },
        { path: "/user/profile", label: "Profile", icon: <FaUser /> },
        // ! 👉 TASK 2: ADDED TASK FILTER
        { path: "/user/task-filter", label: "Task Filter", icon: <FaFilter /> },
      ]
    : [{ path: "/user/dashboard", label: "Dashboard", icon: <FaChartBar /> }];

  return (
    <div className="w-64 min-h-screen p-6 bg-gray-900 text-white glassmorphism border-r border-gray-700">
      <h2 className="text-2xl font-extrabold text-center text-gray-100 tracking-wide mb-6">
        🚀 User Panel
      </h2>

      <ul className="space-y-3">
        {menuItems.map(({ path, label, icon }) => (
          <li key={path}>
            <Link
              to={path}
              className={`flex items-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 text-lg font-medium ${
                location.pathname === path
                  ? "bg-blue-600 shadow-lg transform scale-105"
                  : "hover:bg-blue-700 hover:scale-105 transition"
              }`}
            >
              <span className="text-xl">{icon}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
