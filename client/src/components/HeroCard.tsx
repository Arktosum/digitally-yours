import React from "react";

interface HeroCardProps {
  onGuideClick?: () => void;
  onLearnClick?: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ onGuideClick, onLearnClick }) => (
  <div className="mt-6 w-full max-w-md bg-white rounded-lg shadow p-4">
    <h2 className="text-lg font-medium text-center mb-4">
      Choose Your Digital Path
    </h2>
    <div className="space-y-4">
      <div>
        <p className="text-center text-gray-600 mb-2">
          Mentor Someone Into The Digital World
        </p>
        <button
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          onClick={onGuideClick}
        >
          Be a Digital Guide
        </button>
      </div>
      <div>
        <p className="text-center text-gray-600 mb-2">
          Start Learning Essential Digital Skills
        </p>
        <button
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          onClick={onLearnClick}
        >
          Get Digitally Confident
        </button>
      </div>
    </div>
  </div>
);

export default HeroCard;
