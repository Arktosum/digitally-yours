import React from "react";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-1">
        <h1 className="text-2xl font-inter font-semibold my-10 px-4">
          Welcome, Mentor!
        </h1>
        <div className="bg-[#FBF4F7] p-5 flex  flex-col items-center">
          <p className="font-medium mb-4 text-xl">
            <span className="text-[#FFA500] font-extrabold">
              Because Learning has no limits —{" "}
            </span>{" "}
            and neither should access to it.
          </p>
          <p className="text-[#2E2E2E] text-sm font-inter mb-4 flex flex-col items-center">
            <span>Explore easy lessons, hands-on tips, and build</span>
            <span>confidence step by step.</span>
          </p>
        </div>
        <p className="my-15 px-2 text-md font-bold font-inter text-center">
          Hello! What Do you want to Teach Today?
        </p>
        <div className="px-2 mx-2 relative flex justify-between">
          <img
            src="search_icon.svg"
            alt="icon"
            className="pointer-events-none absolute right-10 top-1/2 w-5 h-5 transform -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Courses"
            className=" w-[100%] bg-[#ECE6F0] rounded-full py-3 px-5 shadow focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-5 my-10">
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
        </div>
      </main>

      <div
        onClick={() => {
          navigate("/mentor/upload");
        }}
        className="bg-[#ECE6F0] px-10 py-3 w-fit rounded my-10 self-center text-black flex justify-center items-center gap-5"
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
