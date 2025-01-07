import React from "react";

const AnalysisOptions = ({
  postTypes,
  postType,
  setPostType,
  prompt,
  setPrompt,
  handleAnalyze,
  isLoading,
}) => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
      <div className="space-y-6">
        {/* Post Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Post Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {postTypes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setPostType(id)}
                className={`p-4 rounded-xl font-medium transition-all flex flex-col items-center gap-2 ${
                  postType === id
                    ? "bg-blue-600 text-white"
                    : "bg-black/50 text-gray-400 hover:bg-black/70"
                }`}
              >
                <Icon size={24} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Enter Your Question
          </label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask about your content performance..."
            className="w-full flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={isLoading || !postType || !prompt.trim()}
          className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
            isLoading || !postType || !prompt.trim()
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
          }`}
        >
          {isLoading ? "Processing..." : "Analyze Data"}
        </button>
      </div>
    </div>
  );
};

export default AnalysisOptions;
