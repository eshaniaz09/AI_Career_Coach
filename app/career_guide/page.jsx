"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Sparkles, RefreshCw, Trash2, Target, Lightbulb, GraduationCap, Loader2, Copy, Check } from "lucide-react";

const CareerGuidance = () => {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [degree, setDegree] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const userName = "User";

  // BUILD PROMPT
  const buildPrompt = () =>
    `You are a professional career counselor. Create a personalized career roadmap for someone with the following profile:

**Profile:**
- Skills: ${skills || "N/A"} 
- Interests: ${interests || "N/A"} 
- Education: ${degree || "N/A"}

**Important Formatting Rules:**
- Use clear markdown headings (##, ###)
- Keep paragraphs SHORT (2-3 sentences maximum)
- Use bullet points extensively
- Make it scannable and easy to read
- Be specific and actionable
- Avoid generic advice

**Required Structure:**

## 🎯 Career Path Overview
[1-2 sentence summary of the recommended career direction]

## 📚 Key Learning Areas
[List 4-6 specific skills/technologies to master]
- [Skill 1]: [brief description]
- [Skill 2]: [brief description]

## 💼 Recommended Projects
[3-4 project ideas with clear outcomes]
1. **[Project Name]**: [1 sentence description]
2. **[Project Name]**: [1 sentence description]

## 🎓 Valuable Certifications
[3-5 relevant certifications]
- [Certification Name] - [Why it's valuable]

## 🚀 Career Progression & Salary
**Entry Level (0-2 years):** [Role title] - $XX,XXX - $XX,XXX
**Mid Level (2-5 years):** [Role title] - $XX,XXX - $XX,XXX
**Senior Level (5+ years):** [Role title] - $XX,XXX - $XXX,XXX

## 🌟 Next Steps
[3-5 immediate actionable steps to get started]

Keep it professional, concise, and motivating.`;

  // FETCH AI ROADMAP
  const getRoadmap = async () => {
    setError("");
    setIsLoading(true);
    setRoadmap("");

    try {
      const prompt = buildPrompt();

      const res = await fetch("/api/ai-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.output) setRoadmap(data.output.trim());
      else setError("No response from AI.");
    } catch (error) {
      setError("Error generating roadmap.");
    } finally {
      setIsLoading(false);
    }
  };

  // MAIN SUBMIT
  const handleGuidance = (e) => {
    e.preventDefault();
    if (!skills.trim() && !interests.trim() && !degree.trim()) {
      setError("Please enter your skills, interests, or degree.");
      return;
    }
    getRoadmap();
  };

  // REGENERATE ONLY ROADMAP (NOT INPUTS)
  const handleClearAndRegenerate = () => {
    getRoadmap();
  };

  // CLEAR EVERYTHING
  const handleClearAll = () => {
    setSkills("");
    setInterests("");
    setDegree("");
    setRoadmap("");
    setError("");
  };

  // COPY ROADMAP TO CLIPBOARD
  const handleCopyRoadmap = async () => {
    try {
      await navigator.clipboard.writeText(roadmap);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#163235] via-[#0e7472] to-[#163235]">
      {/* Spacer from top */}
      <div className="pt-20 md:pt-24 lg:pt-28"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16 gradient-title animate-gradient drop-shadow-lg flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-white sm:w-12 sm:h-12" />
          AI Career Guidance
        </h1>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/roadmap.jpg"
                fill
                alt="Career Guidance Visual"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e7472]/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Top Image Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="relative w-full h-48">
                <Image
                  src="/hello.jpg"
                  fill
                  alt="Career Planning"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200">
              <div className="space-y-5">
                {/* Skills Input */}
                <div>
                  <label htmlFor="skills" className="text-gray-700 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#0e7472]" />
                    Skills
                  </label>
                  <input
                    id="skills"
                    type="text"
                    placeholder="e.g. Python, Teamwork, Communication"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                  />
                </div>

                {/* Interests Input */}
                <div>
                  <label htmlFor="interests" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#0e7472]" />
                    Interests
                  </label>
                  <input
                    id="interests"
                    type="text"
                    placeholder="e.g. AI, Marketing, Data Science"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                  />
                </div>

                {/* Degree Input */}
                <div>
                  <label htmlFor="degree" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#0e7472]" />
                    Degree
                  </label>
                  <input
                    id="degree"
                    type="text"
                    placeholder="e.g. BBA, B.Tech, MBA"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    onClick={handleGuidance}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-[#163235] to-[#0e7472] text-white font-bold py-3 px-4 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    {isLoading ? "Processing..." : "Get Guidance"}
                  </button>

                  <button
                    onClick={handleClearAndRegenerate}
                    disabled={isLoading || !roadmap}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    New Roadmap
                  </button>

                  <button
                    onClick={handleClearAll}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Section */}
        {isLoading && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12 border border-gray-200 text-center">
            <Loader2 className="w-12 h-12 text-[#0e7472] mx-auto mb-4 animate-spin" />
            <p className="text-xl font-semibold text-gray-700">
              CareerCraft is preparing your career roadmap...
            </p>
          </div>
        )}

        {/* Roadmap Output Section */}
        {roadmap && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-12 border border-gray-200">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#0e7472]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Your Personalized Career Roadmap
                </h2>
              </div>
              <button
                onClick={handleCopyRoadmap}
                className="flex items-center gap-2 bg-[#0e7472] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#163235] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Roadmap
                  </>
                )}
              </button>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:my-3 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-2 prose-li:text-gray-700">
              <ReactMarkdown>{roadmap}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Image */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/whyUs.jpg"
                fill
                alt="Career Success"
                className="object-fit"
              />
            </div>
          </div>

          {/* Right - Importance Info */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Lightbulb className="w-7 h-7 text-yellow-500" />
              Career Guidance Importance
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The right guidance at the right time can change everything.
              AI-powered tools create personalized roadmaps crafted around <em>you</em>.
            </p>
            <ul className="space-y-3">
              {[
                { icon: "📍", text: "Identifies your strengths" },
                { icon: "🧠", text: "Suggests tailored career paths" },
                { icon: "💼", text: "Matches industry-relevant roles" },
                { icon: "🚀", text: "Keeps you ahead of trends" },
                { icon: "🔍", text: "Provides clarity" },
                { icon: "🛠️", text: "Helps confident decisions" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-base sm:text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Image Card */}
        <div className="mt-12 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src="/banner.jpeg"
              fill
              alt="Career Growth"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  Your Future Starts Here
                </h3>
                <p className="text-white/90 text-base sm:text-lg mt-2">
                  Let AI guide you to success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;