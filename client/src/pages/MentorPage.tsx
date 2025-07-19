import React from "react";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 px-4">
        <h1 className="text-2xl font-semibold mb-2">Welcome, Mentor!</h1>
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
        {["Digital Literacy", "Financial Literacy", "Computer Skills"].map(
          (course) => (
            <CourseCard
              key={course}
              title={course}
              onExplore={() => console.log("Explore", course)}
              onDownload={() => console.log("Download", course)}
            />
          )
        )}
      </main>

      <div
        onClick={() => {
          navigate("/mentor/upload");
        }}
        className="bg-blue-300 px-5 py-2 w-fit rounded-xl my-2 self-center text-white flex justify-center items-center gap-5"
      >
        Upload Course
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-upload"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
