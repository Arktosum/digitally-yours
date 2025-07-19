import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MentorUploadPage from "./pages/MentorUploadPage";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import "./App.css";
import MentorPage from "./pages/MentorPage";
import CoursesPage from "./pages/CoursesPage";
export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <BrowserRouter>
      <Header onMenuClick={() => setSideOpen(true)} />
      <SideNav isOpen={sideOpen} onClose={() => setSideOpen(false)} />
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/mentor/upload" element={<MentorUploadPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
