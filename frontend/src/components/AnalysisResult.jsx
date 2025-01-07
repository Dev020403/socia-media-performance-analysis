import React from "react";
import { MessageSquare } from "lucide-react";

const AnalysisResult = ({ analysis }) => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={20} className="text-blue-500" />
        <h2 className="text-lg font-medium">Analysis Result</h2>
      </div>
      <div className="bg-black/50 rounded-xl p-4">
        <p className="text-gray-400 mb-4">
          Analysis generated on {analysis.timestamp}:
        </p>
        <p className="text-white">{analysis.response}</p>
      </div>
    </div>
  );
};

export default AnalysisResult;
