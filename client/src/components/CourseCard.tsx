import React from "react";

interface CourseCardProps {
  title: string;
  onExplore: () => void;
  onDownload: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  onExplore,
  onDownload,
}) => (
  <div className="p-5 m-5 bg-[#FBF4F7] font-inter border-[1px] border-gray-600 rounded-xl shadow-lg">
    <h3 className="text-lg font-bold mb-10 text-center">{title}</h3>
    <div className="flex flex-col gap-5">
      <button
        className="flex-1 bg-[#ECE6F0] text-black py-2 rounded border-1 border-gray-300"
        onClick={onExplore}
      >
        Explore
      </button>
      <button
        className="flex-1 bg-[#ECE6F0] text-black py-2 rounded border-1 border-gray-300"
        onClick={onDownload}
      >
        Download ↓
      </button>
    </div>
  </div>
);

export default CourseCard;
