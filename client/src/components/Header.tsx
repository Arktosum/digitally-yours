import React from "react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow-md">
    <button aria-label="Menu" className="p-2" onClick={onMenuClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-11"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <img src="/brand-logo.png" alt="Digitally Yours" className="h-14" />
  </header>
);

export default Header;
