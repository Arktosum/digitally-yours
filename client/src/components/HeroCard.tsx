import React from "react";

interface HeroCardProps {
  onGuideClick?: () => void;
  onLearnClick?: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ onGuideClick, onLearnClick }) => (
  <div className="my-6 w-full max-w-md bg-[#FBF4F7] border-[1px] border-[#D1D1D1] rounded-lg shadow-lg px-4 py-6">
    <h2 className="text-lg font-inter font-bold text-center mb-10">
      Choose Your Digital Path
    </h2>
    <div className="space-y-10">
      <div>
        <p className="text-center text-sm font-bold text-black mb-2">
          Mentor Someone Into The Digital World
        </p>
        <button
          className="w-full bg-[#FFA500] font-poppins font-bold text-sm  text-white py-3 rounded hover:bg-yellow-600"
          onClick={onGuideClick}
        >
          Be a Digital Guide
        </button>
      </div>
      <div>
        <p className="text-center text-sm font-bold text-black mb-2">
          Start Learning Essential Digital Skills
        </p>
        <button
          className="w-full bg-[#FFA500] mb-6 font-poppins font-bold text-sm  text-white py-3 rounded hover:bg-yellow-600"
          onClick={onLearnClick}
        >
          Get Digitally Confident
        </button>
      </div>
    </div>
  </div>
);

export default HeroCard;
