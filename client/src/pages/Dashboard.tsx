import React from "react";
import HeroCard from "../components/HeroCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";



const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 py-6 mb-5 flex flex-col items-center">
        <img
          src="/hero_image_transparent.png"
          alt="Digital learning illustration"
          className="w-full max-w-md"
        />
        <h1 className="text-xl font-poppins font-bold text-center">
          Welcome to Digitally Yours!
        </h1>
        <div className="my-4 font-inter font-medium text-center flex justify-center items-center gap-2">
          <p className="text-[#ff6f61]">Spreading Digital Literacy With </p>
          <span className=""><img src="/heart.png" className="w-5 h-5" alt="" /></span>
        </div>
        <HeroCard
          onGuideClick={() => {
            navigate("/mentor");
          }}
          onLearnClick={() => {
            navigate("/courses");
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
