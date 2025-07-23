import React from "react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow-md">
    <button aria-label="Menu" className="p-2" onClick={onMenuClick}>
      <svg className="w-10 h-10" fill="currentColor">
        <path
          d="M3 6h18M3 12h18M3 18h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
    <img src="/brand-logo.png" alt="Digitally Yours" className="h-12" />
  </header>
);

export default Header;
