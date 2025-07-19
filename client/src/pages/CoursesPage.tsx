import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

interface Course {
  filename: string;
  original: string;
  title: string;
  uploadedAt: Date;
  url: string;
}
const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("https://digitally-yours.onrender.com/mentor/uploads")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data["uploads"]);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 px-4 py-6">
        <h1 className="text-2xl font-semibold mb-2">Welcome, Learner!</h1>
        <div className="bg-[#FBF4F7] p-4">
          <p className="font-medium  mb-4 text-xl ">
            <span className="text-orange-500 font-extrabold">
              Because Learning has no limits —{" "}
            </span>{" "}
            and neither should access to it.
          </p>
          <p className="text-gray-600 mb-4">
            Explore easy lessons, hands-on tips, and build confidence step by
            step.
          </p>
        </div>
        <p className="my-2 px-2 text-xl">
          Hello! What Do you want to Teach Today?
        </p>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Courses"
            className="w-full max-w-md mx-auto bg-white rounded-full py-3 px-5 shadow focus:outline-none"
          />
          <button className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </button>
        </div>

        {courses.map((course) => (
          <CourseCard
            key={course.url}
            title={course.title}
            onExplore={() => {
              window.open(course.url, "_blank");
            }}
            onDownload={async () => {}}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
