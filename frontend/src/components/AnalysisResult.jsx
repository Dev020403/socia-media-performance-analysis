import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

const AnalysisResult = ({ analysis }) => {
  const breakdownResponse = analysis.response.split("\n"); // Assuming each section is separated by a newline

  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={20} className="text-blue-500" />
        <h2 className="text-lg font-medium">Analysis Result</h2>
      </div>

      {<div className="bg-black/50 rounded-xl p-6">
        <p className="text-gray-400 mb-4">
          Analysis generated on{" "}
          <span className="font-semibold">{analysis.timestamp}</span>:
        </p>
        <p className="text-white mb-4">{analysis.question}</p>

        <div className="space-y-6">
          <p className="text-white font-medium text-lg mb-2">Key Points:</p>
          {breakdownResponse.map((point, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2">
                <ArrowRight size={18} className="text-blue-500" />
                <p className="text-white">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-white font-medium text-lg mb-2">Summary:</p>
          <p className="text-white">{analysis.summary}</p>
        </div>
      </div>}
    </div>
  );
};

export default AnalysisResult;
