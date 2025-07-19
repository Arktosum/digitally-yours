import React, {
  useState,
  useRef,
  type DragEvent,
  type ChangeEvent,
} from "react";

interface UploadDocumentsProps {
  onUpload: (files: File[], title: string) => void;
}

const UploadDocuments: React.FC<UploadDocumentsProps> = ({ onUpload }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("Default Title");
  const handleFiles = (fileList: FileList) => {
    const valid = Array.from(fileList).filter((f) =>
      [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(f.type)
    );
    setFiles(valid);
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = () => setDragActive(false);
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const upload = () => onUpload(files, title);

  const openFileDialog = () => inputRef.current?.click();

  return (
    <div className="bg-white rounded shadow p-4 space-y-4">
      <h2 className="text-lg font-medium">Upload Documents</h2>

      <label className="block">
        Title
        <input
          type="text"
          className="mt-1 w-full border rounded px-3 py-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Enter Title"
        />
      </label>

      <div
        className={`w-full border-2 border-dashed rounded p-6 text-center ${
          dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-upload"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
          <p>
            Drag and Drop Here
            <br />
            or
            <br />
            <span
              className="underline text-blue-600 cursor-pointer"
              onClick={openFileDialog}
            >
              Browse files
            </span>
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            multiple
            onChange={onChange}
          />
        </div>
      </div>

      <button
        className="w-full bg-purple-200 text-gray-700 py-2 rounded disabled:opacity-50"
        disabled={!files.length}
        onClick={upload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDocuments;
