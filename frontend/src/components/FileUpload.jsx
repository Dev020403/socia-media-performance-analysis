import React from "react";
import { Upload } from "lucide-react";

const FileUpload = ({ onFileUpload }) => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
      <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
        <input
          type="file"
          accept=".csv,application/json"
          onChange={onFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center gap-3"
        >
          <Upload size={32} className="text-blue-500" />
          <span className="text-lg text-gray-300">Upload CSV or JSON File</span>
          <span className="text-sm text-gray-400">
            Drag and drop or click to select
          </span>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
