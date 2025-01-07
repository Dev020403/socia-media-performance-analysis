import React, { useState } from "react";
import Papa from "papaparse";
import FileUpload from "../components/FileUpload";
import AnalysisOptions from "../components/AnalysisOptions";
import DataPreview from "../components/DataPreview";
import AnalysisResult from "../components/AnalysisResult";
import { Film, Images, Image, Github, ArrowLeft } from "lucide-react";

const Analysis = () => {
  const [step, setStep] = useState(1);
  const [csvData, setCsvData] = useState(null);
  const [postType, setPostType] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const postTypes = [
    { id: "reel", label: "Reel", icon: Film },
    { id: "carousel", label: "Carousel", icon: Images },
    { id: "static", label: "Static Image", icon: Image },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;

      if (fileType === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const jsonData = JSON.parse(e.target.result);
            setCsvData(Array.isArray(jsonData) ? jsonData : [jsonData]);
            setStep(2);
          } catch (error) {
            alert("Invalid JSON file");
          }
        };
        reader.readAsText(file);
      } else if (fileType === "text/csv") {
        Papa.parse(file, {
          complete: (results) => {
            setCsvData(results.data);
            setStep(2);
          },
          header: true,
          skipEmptyLines: true,
        });
      } else {
        alert("Please upload a valid CSV or JSON file");
      }
    }
  };

  const handleBack = () => {
    setStep(1);
    setPostType("");
    setPrompt("");
    setAnalysis(null);
    setCsvData(null);
  };

  const handleAnalyze = () => {
    if (!postType) {
      alert("Please select a post type");
      return;
    }
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const analysis = generateAnalysis(csvData, postType, prompt);
      setAnalysis(analysis);
      setIsLoading(false);
    }, 1500);
  };

  const generateAnalysis = (data, type, prompt) => {
    const responses = {
      reel: {
        engagement: "Your Reels show a 4.2% average engagement rate",
        recommendation: "Consider creating shorter, more dynamic content",
        insights: "Peak viewing times are between 6-8 PM",
      },
      carousel: {
        engagement: "Carousels achieve 3.8% engagement on average",
        recommendation: "Use stronger opening slides to capture attention",
        insights: "Posts with 4-5 slides perform best",
      },
      static: {
        engagement: "Static posts maintain 3.5% engagement",
        recommendation: "Experiment with different image formats",
        insights: "Portrait orientation gets 20% more engagement",
      },
    };

    return {
      prompt: prompt,
      response: `Based on your ${type} content analysis and the question "${prompt}":

${responses[type].engagement}
${responses[type].recommendation}
${responses[type].insights}

Additional context from your data shows patterns in engagement across different content styles and posting times.`,
      timestamp: new Date().toLocaleString(),
    };
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">PostPulse</span>
            </div>
            <a
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            {step === 2 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            )}
            <h1 className="text-3xl font-bold">
              {step === 1 ? "Import Data" : "Analyze Content"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-600 text-gray-400"
                }`}
              >
                1
              </div>
              <div
                className={`w-16 h-1 ${
                  step >= 2 ? "bg-blue-500" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-blue-500 text-white"
                    : "bg-gray-600 text-gray-400"
                }`}
              >
                2
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {step === 1 ? (
              <FileUpload onFileUpload={handleFileUpload} />
            ) : (
              <AnalysisOptions
                postTypes={postTypes}
                postType={postType}
                setPostType={setPostType}
                prompt={prompt}
                setPrompt={setPrompt}
                handleAnalyze={handleAnalyze}
                isLoading={isLoading}
              />
            )}
            <DataPreview csvData={csvData} />
          </div>
          <div>
            {step === 2 && analysis ? (
              <AnalysisResult analysis={analysis} />
            ) : (
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-medium">Analysis Result</span>
                </div>
                <div className="bg-black/50 rounded-xl p-4 text-gray-400 text-center py-8">
                  No analysis available. Please upload data and select options
                  to generate an analysis.
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analysis;
