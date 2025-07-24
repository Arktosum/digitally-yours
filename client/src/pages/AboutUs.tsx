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

        <div className="flex flex-col gap-5 my-10  text-sm font-inter">
          <div>
            This platform was born out of an internship experience at
            Youth4Jobs, where I had the opportunity to create learning content
            for persons with disabilities. While working on that project, I
            realised how important it is to make information not just
            available—but accessible, understandable, and inclusive.
          </div>
          <div>
            During my time with Youth4Jobs, I witnessed the quiet power of
            digital literacy in action. A young person who had never touched a
            smartphone learned to apply for jobs online. A visually impaired
            learner used screen readers to explore new knowledge. A hesitant
            beginner learned to send their first email, then confidently
            navigate apps and tools on their own. Small moments of learning
            became life-changing breakthroughs.
          </div>
          <div>
            What started as research and note-taking quickly grew into something
            much more meaningful: an inclusive curriculum filled with empathy,
            practical knowledge, and hope.
          </div>
          <div>
            This platform is built on the belief that learning should be
            inclusive and barrier-free. The content shared here is designed with
            thought and intention to support learners, trainers, and anyone who
            believes in making education accessible for all. From practical
            knowledge to simplified explanations, the goal is to make learning
            easier, not harder — no matter who you are or where you come from.
          </div>
          <div>
            This isn’t just a collection of documents. It’s a step towards
            building a space where everyone has a chance to learn with dignity
            and confidence.
          </div>
          <div>
            That’s why I created this platform , to go beyond just teaching "how
            to use a computer." It’s about:
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital literacy for everyday independence</li>
            <li>
              Financial literacy to manage money and make informed decisions
            </li>

            <li>
              Basic computer skills to unlock work and learning opportunities
            </li>

            <li>
              AI awareness to understand the technology shaping our future
            </li>
          </ul>
          <div>
            This website is my way of keeping that promise alive by making these
            materials freely available for anyone who might need them. Whether
            you’re a trainer, a student, or simply someone looking to learn, I
            hope you find value here. And more importantly, I hope you feel
            seen, supported, and empowered.
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
