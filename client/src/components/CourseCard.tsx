import React from 'react';

interface CourseCardProps {
  title: string;
  onExplore: () => void;
  onDownload: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, onExplore, onDownload }) => (
  <div className="mt-4 w-full max-w-md bg-white rounded-lg shadow p-4">
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <div className="flex space-x-2">
      <button className="flex-1 bg-yellow-500 text-white py-2 rounded" onClick={onExplore}>Explore</button>
      <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded" onClick={onDownload}>Download ↓</button>
    </div>
  </div>
);

export default CourseCard;
