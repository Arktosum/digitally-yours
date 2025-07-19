import React from "react";
import { Link } from "react-router-dom";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-50 flex ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    } transition-opacity duration-300 `}
  >
    {/* Backdrop */}
    <div className="w-full bg-[#00000030] bg-opacity-50" onClick={onClose} />

    {/* Side panel sliding from left */}
    <div
      className={`absolute left-0 top-0 h-full bg-white shadow-xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } rounded-r-2xl borderize`}
      style={{ width: "70%" }}
    >
      <div className="p-4 border-b flex items-center gap-5">
        <img src="/brand-logo.png" alt="Digitally Yours" className="h-10" />
        <span className="font-bold text-lg">Digitally Yours</span>
      </div>
      <nav className="p-5 space-y-6">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center hover:text-blue-600"
        >
          <span className="mr-2">🏠</span>Home
        </Link>
        <Link
          to="/reports"
          onClick={onClose}
          className="flex items-center hover:text-blue-600"
        >
          <span className="mr-2">📄</span>Reports
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="flex items-center hover:text-blue-600"
        >
          <span className="mr-2">ℹ️</span>About Us
        </Link>
        <Link
          to="/change-path"
          onClick={onClose}
          className="flex items-center hover:text-blue-600"
        >
          <span className="mr-2">🔁</span>Change Digital Path
        </Link>
        <button
          onClick={() => {
            navigator.share?.({
              title: "Digitally Yours",
              url: window.location.href,
            });
            onClose();
          }}
          className="flex items-center hover:text-blue-600"
        >
          <span className="mr-2">🔗</span>Share it to a friend
        </button>
      </nav>
    </div>
  </div>
);

export default SideNav;
