import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full px-4 py-6 mt-5 bg-[#F5F5F5] text-center text-sm text-gray-500">
    <img
      src="/brand-logo.png"
      alt="Digitally Yours"
      className="h-10 mx-auto mb-2"
    />
    <div>© 2025 Digitally Yours. All Rights Reserved</div>
    <nav className="mt-2 space-x-4 ">
      {["Home", "About Us", "Contact Us"].map((link) => (
        <a key={link} href="#" className="hover:underline text-sm">
          {link}
        </a>
      ))}
    </nav>
  </footer>
);

export default Footer;
