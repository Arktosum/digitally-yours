import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1">
        <div className="mt-2 bg-[#FBF4F7] p-5 flex  flex-col items-center">
          <p className="font-bold mb-4 text-xl text-center">
            <span className="text-[#FFA500] font-bold ">
              Because Learning has no limits —{" "}
            </span>{" "}
            and neither should access to it.
          </p>
          <p className="text-[#2E2E2E] text-sm font-inter mb-6 flex flex-col items-center">
            <span>Explore easy lessons, hands-on tips, and build</span>
            <span>confidence step by step.</span>
          </p>

          <button
            className="w-full bg-[#FFA500] font-poppins font-bold text-sm mb-5 text-white py-3 rounded hover:bg-yellow-600"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="px-5 text-sm my-5 font-poppins flex flex-col justify-center items-center gap-5">
          <div className="font-semibold text-xl">Why Digital Literacy?</div>
          <div className="text-center">
            In today’s world, it’s not a luxury—it’s a lifeline. Yet millions,
            especially people with disabilities, are left behind for lack of
            access and support. Through my time at Youth4Jobs, I’ve seen how
            small steps in digital learning spark life‑changing independence.
            This platform is my way of opening doors, to confidence,
            opportunity, and belonging in a digital world.
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src="/landing_hero.png" alt="" />
        </div>

        <div className="px-5 my-1 text-xl font-semibold font-poppins text-center">
          What We Offer?
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="font-poppins bg-[#CFE2F3] flex flex-col gap-5 p-5 rounded-xl">
            <div className="font-bold text-center flex justify-center items-center gap-2">
              <img src="/earth.png" alt="" className="w-5 h-5" />
              <div>Bridging Digital Literacy</div>
            </div>
            <div className="text-sm text-center">
              Making digital literacy accessible to everyone, especially people
              with disabilities, through inclusive content, tools, and training
              that remove barriers to participation.
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col justify-center items-center p-5">
          <div className="font-poppins bg-[#F1B57E] flex flex-col gap-5 p-5 rounded-xl">
            <div className="font-bold text-center flex justify-center items-center  gap-2">
              <img src="/idea.png" alt="" className="w-7 h-7" />
              <div className="text-sm">Empowering Through Knowledge</div>
            </div>
            <div className="text-sm text-center">
              Offering clear and simple modules on digital skills, financial
              literacy, and AI awareness to help learners gain confidence,
              independence, and real-world readiness.
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col justify-center items-center p-5">
          <div className="font-poppins bg-[#FFEAC4] flex flex-col gap-5 p-5 rounded-xl">
            <div className="font-bold text-center flex justify-center items-center gap-2">
              <img src="/chat.png" alt="" className="w-5 h-5" />
              <div className="text-sm">Supporting Trainers & Communities</div>
            </div>
            <div className="text-sm text-center">
              Providing trainers with ready-to-use notes, activities, and
              resources to ensure consistent, high-quality, and inclusive
              learning experiences across all settings.
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-col justify-center items-center p-5">
          <div className="font-poppins bg-[#DFEEE4] flex flex-col gap-5 p-5 rounded-xl">
            <div className="font-bold text-center flex justify-center items-center gap-2">
              <img src="/handshake.png" alt="" className="w-6 h-6" />
              <div> Creating Lifelong Impact</div>
            </div>
            <div className="text-sm text-center">
              Fostering meaningful, long-term change by enabling individuals to
              access opportunities, make informed choices, and actively engage
              in the digital world.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
