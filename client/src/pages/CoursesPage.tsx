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
const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchCourse, setSearchCourse] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/mentor/uploads")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data["uploads"]);
      });
  }, []);

  const filteredCourses = courses.filter(
    (item) =>
      new RegExp(searchCourse, "i").test(item.title) && item.type == "learner"
  );

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-1">
        <h1 className="text-2xl font-inter font-semibold my-10 px-4">
          Welcome, Learner!
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
          Hello! What Do you want to Learn Today?
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


        <div className="flex justify-end mx-5">
          <div onClick={()=>{
            navigate('/courses/view_all');
          }}
          className="bg-[#ECE6F0] px-10 py-3 w-fit my-10 self-center text-black flex justify-center items-center gap-5 rounded-full">
            View All
          </div>
        </div>

        <div className="flex flex-col gap-5 my-10">
          {filteredCourses.map((course) => {
            if (course.filename == "flip_book") {
              return (
                <div className="p-5 m-5 bg-[#FBF4F7] font-inter border-[1px] border-gray-600 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-10 text-center">
                    {course.title}
                  </h3>
                  <div className="flex relative flex-col gap-5">
                    <img
                      src="search_icon.svg"
                      alt="icon"
                      className="pointer-events-none absolute left-[66%] top-1/2 w-5 h-5 transform -translate-y-1/2 text-gray-400"
                    />

                    <button
                      className="flex-1 bg-[#ECE6F0] text-black py-2 rounded border-1 border-gray-300"
                      onClick={() => {
                        window.location.href = course.original;
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <CourseCard
                  key={course.original}
                  title={course.title}
                  onDownload={() => {
                    const link = document.createElement("a");
                    link.href = `http://localhost:4000/uploads/${course.original}`; // must be accessible
                    link.download = course.original;
                    link.target = "_blank"; // optional
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              );
            }
          })}
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

export default CoursesPage;
