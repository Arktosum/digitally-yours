import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

interface Course {
  filename: string;
  original: string;
  type: string;
  title: string;
  uploadedAt: Date;
  url: string;
}

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchCourse, setSearchCourse] = useState<string>("");
  useEffect(() => {
    fetch("https://digitally-yours.onrender.com/mentor/uploads")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data["uploads"]);
      });
  }, []);

  const filteredCourses = courses.filter(
    (item) =>
      new RegExp(searchCourse, "i").test(item.title) && item.type == "trainer"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <h1 className="text-2xl font-inter font-semibold my-1 mb-6 px-4">
          Welcome, Mentor!
        </h1>
        <div className="bg-[#FBF4F7] p-5 flex flex-col items-center">
          <p className="font-bold mb-4 text-xl  text-center">
            <span className="text-[#FFA500] font-bold">
              Because Learning has no limits —{" "}
            </span>{" "}
            and neither should access to it.
          </p>
          <p className="text-[#2E2E2E] text-sm font-inter mb-4 flex flex-col items-center">
            <span>Explore easy lessons, hands-on tips, and build</span>
            <span>confidence step by step.</span>
          </p>
        </div>
        <p className="my-6 mt-10 px-2 text-md font-bold font-inter text-center">
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
            value={searchCourse}
            onChange={(e) => {
              setSearchCourse(e.target.value);
            }}
          />
        </div>
        <div className="px-2 flex justify-between mx-2 text-sm mt-10 mb-5">
          <div
            onClick={() => {
              navigate("/mentor/upload");
            }}
            className="bg-[#ECE6F0] px-4 py-2 w-fit self-center text-black flex justify-center items-center gap-2 rounded-full"
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
          <div
            onClick={() => {
              navigate("/mentor/view_all");
            }}
            className="bg-[#ECE6F0] px-4 py-2 w-fit self-center text-black flex justify-center items-center gap-5 rounded-full"
          >
            View All
          </div>
        </div>
        <div className="flex flex-col">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.original}
              title={course.title}
              onDownload={() => {
                const link = document.createElement("a");
                link.href = `https://digitally-yours.onrender.com/uploads/${course.original}`; // must be accessible
                link.download = course.original;
                link.target = "_blank"; // optional
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          ))}
          {filteredCourses.length == 0 && (
            <div className="font-poppins font-bold mx-auto text-xl">
              {" "}
              Course not found!{" "}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;
