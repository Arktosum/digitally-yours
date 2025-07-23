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
    <div className="bg-white font-inter rounded shadow p-4 space-y-4 border-[1px] border-gray-300">
      <h2 className="text-lg font-medium">Upload Documents</h2>
      <hr className="text-gray-300" />
      <label className="block text-md font-semibold">
        Title
        <input
          type="text"
          className="my-5 w-full rounded px-5 py-3 text-sm border-[1px] border-gray-300"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Enter Title"
        />
      </label>

      <div className="block text-md">Attach Documents</div>
      <div
        className={`w-full border-2 border-dashed rounded p-6 text-center ${
          dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center gap-2 justify-center">
          <img src="/download.svg" alt="" />
          <p>
            Drag and Drop Here
            <br />
            or
            <br />
            <span
              className="underline text-blue-400 cursor-pointer"
              onClick={openFileDialog}
            >
              Browse files
            </span>
          </p>
          <div className="w-full">
            {files.length > 0 && (
              <div className="mt-4 text-left">
                <p className="font-semibold">
                  Selected file{files.length > 1 ? "s" : ""}:
                </p>
                <ul className="">
                  {files.map((f, i) => (
                    <li className="text-[0.9rem] w-full overflow-clip text-ellipsis" key={i}>{f.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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

      <div className="text-[#A5A4AC] text-sm my-5">
        Accepted File Types : .pdf and .docx only
      </div>
      <button
        className="w-full bg-[#ECE6F0] text-[#0d0c0e] text-poppins py-2 rounded disabled:opacity-[50%]"
        disabled={!files.length}
        onClick={upload}
      >
        Upload
      </button>
      <div className="my-10 text-black bg-white border-[1px] border-[#D1D1D1] p-5 text-sm">
        <b className="font-bold">Note:</b> Please upload only relevant course
        material, notes, or resources that learners can view or download. Avoid
        uploading personal files or unrelated content.
      </div>
    </div>
  );
};

export default UploadDocuments;
