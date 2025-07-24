import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
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
    fetch("https://digitally-yours.onrender.com/mentor/uploads")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data["uploads"]);
      });
  }, []);

  const filteredCourses = courses.filter(
    (item) =>
      new RegExp(searchCourse, "i").test(item.title) && item.type == "learner"
  );

  const courseCategories: { title: string; url: string }[] = [
    {
      title: "Flip Book",
      url: "https://heyzine.com/flip-book/15a1ea322c.html",
    },
    { title: "AI", url: "AI" },
    { title: "Computer Skills", url: "CS" },
    { title: "Digital Literacy", url: "DL" },
    { title: "Financial Literacy", url: "FL" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <h1 className="text-2xl font-inter font-semibold my-1 mb-6 px-4">
          Welcome, Learner!
        </h1>
        <div className="bg-[#FBF4F7] p-5 flex  flex-col items-center">
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
        <div className="px-2 flex justify-end mx-2 text-sm mt-10 mb-5">
          <div
            onClick={() => {
              navigate("/courses/view_all");
            }}
            className="bg-[#ECE6F0] px-4 py-2 w-fit self-center text-black flex justify-center items-center gap-5 rounded-full"
          >
            View All
          </div>
        </div>
        <div className="flex flex-col gap-5 my-5">
          {courseCategories.map((course) => {
            if (course.title == "Flip Book") {
              return (
                <div className="p-5 m-5 bg-[#FBF4F7] font-inter border-[1px] border-gray-600 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-10 text-center">
                    {course.title}
                  </h3>
                  <div className="flex relative flex-col gap-5">
                    <button
                      className="flex-1 bg-[#ECE6F0] text-black py-2 rounded border-1 border-gray-300"
                      onClick={() => {
                        window.location.href = course.url;
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="p-5 m-5 bg-[#FBF4F7] font-inter border-[1px] border-gray-600 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-10 text-center">
                    {course.title}
                  </h3>
                  <div className="flex relative flex-col gap-5">
                    <button
                      className="flex-1 bg-[#ECE6F0] text-black py-2 rounded border-1 border-gray-300"
                      onClick={() => {
                        navigate(`/courses/view_all_category/${course.url}`);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
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
