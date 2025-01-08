import React from "react";
import { MessageSquare } from "lucide-react";

const AnalysisResultSkeleton = () => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 animate-pulse">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={20} className="text-blue-500" />
        <div className="h-6 w-32 bg-gray-700 rounded-md"></div>
      </div>

      <div className="bg-black/50 rounded-xl p-6 space-y-4">
        <div className="h-4 w-40 bg-gray-600 rounded-md"></div>
        <div className="h-4 w-full bg-gray-700 rounded-md"></div>

        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-800 rounded-xl p-4"
            >
              <div className="h-4 w-4 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-full bg-gray-700 rounded-md"></div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-600 rounded-md"></div>
          <div className="h-4 w-full bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResultSkeleton;
