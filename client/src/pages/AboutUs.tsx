import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-2">About Us</h1>
        <div className="flex justify-center items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-[20px_9px_20px_-10px_rgba(0,0,0,0.9)] border-1">
            <img
              src="/about_us.png"
              alt=""
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 my-5 text-sm font-inter">
          <div>Hi, I'm Janvi .</div>
          <div>
            This project began with a simple but powerful goal: to make digital
            literacy accessible for everyone, especially people with
            disabilities. During my internship at Youth4Jobs, I had the
            privilege of working closely with communities that often face
            digital exclusion. What started as research and note-taking quickly
            grew into something much more meaningful: an inclusive curriculum
            filled with empathy, practical knowledge, and hope.
          </div>
          <div>
            I created these notes not just to teach skills, but to open doors -
            to confidence, to independence, and to opportunity. Every section
            here was crafted with care, with accessibility at its heart, and
            with the belief that learning should never be out of reach.
          </div>
          <div>
            This website is my way of keeping that promise alive by making these
            materials freely available for anyone who might need them. Whether
            you’re a trainer, a student, or simply someone looking to learn, I
            hope you find value here. And more importantly, I hope you feel
            seen, supported, and empowered.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
