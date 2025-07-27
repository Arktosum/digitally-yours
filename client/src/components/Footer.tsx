import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="w-full px-4 py-6 mt-5 bg-[#F5F5F5] text-center text-sm text-gray-500">
    <img
      src="/brand-logo.png"
      alt="Digitally Yours"
      className="h-10 mx-auto mb-2"
    />
    <div>© 2025 Digitally Yours. All Rights Reserved</div>
    <nav className="mt-2 space-x-4 text-sm">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <a
        href="mailto:jaanvayy18@gmail.com"
        className="hover:text-blue-300 transition"
      >
        Contact Us
      </a>
    </nav>
  </footer>
);

export default Footer;
