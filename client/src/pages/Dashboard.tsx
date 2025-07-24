import React from "react";
import HeroCard from "../components/HeroCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const heart_svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 py-6 flex flex-col items-center">
        <img
          src="/hero_image_transparent.png"
          alt="Digital learning illustration"
          className="w-full max-w-md mb-4"
        />
        <h1 className="text-xl font-poppins font-bold text-center">
          Welcome to Digitally Yours!
        </h1>
        <div className="my-5 font-inter font-medium text-center text-orange-500 flex">
          <p>Spreading Digital Literacy With </p>
          <span className="">{heart_svg}</span>
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
