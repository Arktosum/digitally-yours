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
      <div className="p-3 flex items-center gap-5">
        <img src="/brand-logo.png" alt="Digitally Yours" className="h-12" />
        <span className="font-inter font-bold text-xl text-[#0A5CAC]">
          Digitally <span className="text-[#F9871D]">Yours</span>
        </span>
      </div>
      <hr className="w-[70%] text-gray-300 mx-auto mt-2 mb-10" />
      <nav className="p-5 space-y-6 flex flex-col gap-5">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center hover:text-blue-600 gap-5"
        >
          <img src="/home.svg" alt="" />
          Home
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="flex items-center hover:text-blue-600 gap-5"
        >
          <img src="/about.svg" alt="" />
          About Us
        </Link>
        <Link
          to="/change-path"
          onClick={onClose}
          className="flex items-center hover:text-blue-600 gap-5"
        >
          <img src="/change.svg" className="w-6 h-6" alt="" />
          Change Digital Path
        </Link>
        <button
          onClick={() => {
            navigator.share?.({
              title: "Digitally Yours",
              url: window.location.href,
            });
            onClose();
          }}
          className="flex items-center hover:text-blue-600 gap-5"
        >
          <img src="/share.svg" alt="" />
          Share it to a friend
        </button>
      </nav>
    </div>
  </div>
);

export default SideNav;
