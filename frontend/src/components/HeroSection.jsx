import { ExternalLink } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black pt-10 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="text-blue-400">New:</span>
              <span className="text-gray-300 ml-2">
                AI-Powered Analytics 2.0 →
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Analyze social media
              <br />
              performance using{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                GenAI
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Transform your social media strategy with AI-powered insights. Get
              detailed analytics, engagement predictions, and content
              recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg font-medium"
                onClick={() => (window.location.href = "/analysis")}
              >
                Start Analyzing
                <ExternalLink size={20} />
              </button>
              <button className="bg-white/5 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg font-medium backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none aspect-square md:aspect-video lg:aspect-square">
              {/* Main Dashboard */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 p-2 sm:p-4 transform hover:-translate-y-1 transition-transform">
                <div className="bg-black/40 w-full h-full rounded-xl overflow-hidden">
                  {/* Header */}
                  <div className="border-b border-white/10 p-2 sm:p-4">
                    <div className="w-24 sm:w-32 h-3 sm:h-4 bg-white/10 rounded-full" />
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements - Hidden on mobile, visible on larger screens */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="hidden md:block absolute w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl backdrop-blur-sm border border-white/10"
                  style={{
                    top: `${20 + i * 15}%`,
                    right: `${-5 + i * 3}%`,
                    transform: `rotate(${3 - i * 3}deg)`,
                    zIndex: -i,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 py-12">
          {[
            ["10K+", "Active Users"],
            ["500M+", "Posts Analyzed"],
            ["98%", "Accuracy Rate"],
            ["24/7", "Real-time Analysis"],
          ].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat}</div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
