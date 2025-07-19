import React from "react";
import HeroCard from "../components/HeroCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 px-4 py-6 flex flex-col items-center">
        <img
          src="/hero-image.png"
          alt="Digital learning illustration"
          className="w-full max-w-md mb-4"
        />
        <h1 className="text-2xl font-semibold text-center">
          Welcome to Digitally Yours!
        </h1>
        <p className="mt-2 text-center text-orange-500">
          Spreading Digital Literacy With ♥
        </p>
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

export default LandingPage;
