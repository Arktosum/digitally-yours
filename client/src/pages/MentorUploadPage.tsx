import React from "react";
import UploadDocuments from "../components/UploadDocuments";
import Footer from "../components/Footer";
const MentorUploadPage: React.FC = () => {
  const handleUpload = async (files: File[], title: string) => {
    console.log("Uploading:", files);
    const form = new FormData();
    form.append("title", title); // assuming you've added a title state
    files.forEach((f) => form.append("documents", f));
    try {
      const res = await fetch(
        "https://digitally-yours.onrender.com/mentor/upload",
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      console.log("Upload success:", data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 p-4">
        <h1 className="text-xl font-semibold mb-4">Hello, Mentor!</h1>
        <UploadDocuments onUpload={handleUpload} />
      </main>
      <Footer />
    </div>
  );
};

export default MentorUploadPage;
