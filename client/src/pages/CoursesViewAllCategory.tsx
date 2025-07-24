import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
interface Course {
  filename: string;
  original: string;
  type: string;
  title: string;
  uploadedAt: Date;
  category: string;
  url: string;
}
type UserPageParams = { category: string };
export default function CoursesViewAllCategory() {
  const { category } = useParams<UserPageParams>();

  const [courses, setCourses] = useState<Course[]>([]);
  const [searchCourse, setSearchCourse] = useState<string>("");
  useEffect(() => {
    fetch("http://localhost:4000/mentor/uploads")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data["uploads"]);
      });
  }, []);

  const filteredCourses = courses.filter(
    (item) =>
      new RegExp(searchCourse, "i").test(item.title) &&
      item.type == "learner" &&
      item.category == category
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="my-15 px-2 text-md font-bold font-inter text-center">
        Hello! What Do you want to Learn Today?
      </p>
      <div className="w-full px-2 mx-2 relative flex justify-between">
        <img
          src="../../search_icon.svg"
          alt="icon"
          className="pointer-events-none absolute right-10 top-1/2 w-5 h-5 transform -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Courses"
          className="w-full bg-[#ECE6F0] rounded-full py-3 px-5 shadow focus:outline-none"
          value={searchCourse}
          onChange={(e) => {
            setSearchCourse(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col gap-5 my-10 w-full">
        {filteredCourses.map((course) => {
          if (course.filename == "flip_book") {
            return (
              <div className="p-5 m-5 bg-[#FBF4F7] font-inter border-[1px] border-gray-600 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-10 text-center">
                  {course.title}
                </h3>
                <div className="flex relative flex-col gap-5">
                  <img
                    src="../search_icon.svg"
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
      <Footer />
    </div>
  );
}
