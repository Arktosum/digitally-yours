import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 p-4">
        <h1 className="text-xl font-semibold mb-4">About Us</h1>
        <div className="flex justify-center items-center">
          <div className=" w-48 h-48 rounded-full overflow-hidden ">
            <img
              src="/about_us.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 my-10 text-center text-sm font-inter">
          <div>
            This platform was born out of an internship experience at
            Youth4Jobs, where I had the opportunity to create learning content
            for persons with disabilities. While working on that project, I
            realised how important it is to make information not just
            available—but accessible, understandable, and inclusive.
          </div>

          <div>
            The content shared here is designed with thought and intention — to
            support learners, trainers, and anyone who believes that learning
            should be inclusive and barrier-free. From practical knowledge to
            simplified explanations, the goal is to make learning easier, not
            harder—no matter who you are or where you come from.
          </div>

          <div>
            This isn’t just a collection of documents. It’s a step towards
            building a space where everyone has a chance to learn with dignity
            and confidence.
          </div>
          <div>
            Welcome to a platform that believes in access, empathy, and the
            power of well-made content.
          </div>

          <div>
            <p className="font-medium mb-4 text-xl">
              <span className="text-[#FFA500] font-extrabold">
                Because Learning has no limits —{" "}
              </span>{" "}
              and neither should access to it.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
