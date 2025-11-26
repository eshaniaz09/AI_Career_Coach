"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import "./CareerGuidance.css";

const CareerGuidance = () => {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [degree, setDegree] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const userName = "User";

  // BUILD PROMPT
  const buildPrompt = () =>
    `You are a professional career counselor. 
Given these details: 
- Name: ${userName}
- Skills: ${skills || "N/A"} 
- Interests: ${interests || "N/A"} 
- Degree: ${degree || "N/A"}

Create a complete career roadmap for the user’s professional growth.

**Formatting rules**:
- Use markdown syntax only.
- Start with: 📑 **${userName} – ${degree || "Degree"} + ${
      skills || "Skills"
    } + ${interests || "Interests"}**
- Use markdown headings and bullet points.

Roadmap must include:
1. Goal
2. Learning Focus
3. Projects
4. Certifications
5. Future Role + Job Market + Salary.

Tone: Motivational and specific. Give only one focused path.`;

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

  return (
    <div className="career-guidance-page career-guidance-wrapper">
      <h1 className="career-guidance-heading">AI Career Guidance</h1>

      <div className="career-guidance-main">
        <div className="guidance-image-section">
          <Image
            src="/pic17.webp"
            width={500}
            height={500}
            alt="Side Visual"
            className="guidance-img-large"
          />
        </div>

        <div className="guidance-ai-container">
          <Image
            src="/pic14.jpeg"
            width={300}
            height={200}
            alt="Top Visual"
            className="guidance-ai-image"
          />

          <form onSubmit={handleGuidance} className="guidance-form-group">
            <label htmlFor="skills">Skills</label>
            <input
              id="skills"
              type="text"
              placeholder="e.g. Python, Teamwork"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <label htmlFor="interests">Interests</label>
            <input
              id="interests"
              type="text"
              placeholder="e.g. AI, Marketing"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />

            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              placeholder="e.g. BBA, B.Tech"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />

            {error && <div className="form-error">{error}</div>}

            <div className="form-actions">
              <button type="submit" className="themed-btn" disabled={isLoading}>
                {isLoading ? "Getting Guidance..." : "Get Career Guidance"}
              </button>

              {/* NEW ROADMAP (REGENERATE) BUTTON */}
              <button
                type="button"
                className="themed-btn secondary"
                onClick={handleClearAndRegenerate}
                disabled={isLoading || !roadmap}
              >
                New Roadmap
              </button>

              <button
                type="button"
                className="themed-btn danger"
                onClick={handleClearAll}
                disabled={isLoading}
              >
                Clear All
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* AI OUTPUT SECTION */}      
      <div className="guidance-chat-section">
        {isLoading && (
          <div className="loading-text">CareerCraft is preparing your career roadmap...</div>
        )}

        {roadmap && (
          <div className="roadmap-container">
            <h2>Your Personalized Career Roadmap</h2>
            <div className="roadmap-text">
              <ReactMarkdown>{roadmap}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="guidance-info-section">
        <div className="guidance-info-box">
          <Image src="/pic16.jpg" width={500} height={300} alt="Guidance Visual" />

          <div className="guidance-importance-container">
            <div className="guidance-importance-box">
              <h3>💬 Career Guidance Importance</h3>
              <p>
                The right guidance at the right time can change everything.
                AI-powered tools create personalized roadmaps crafted around <em>you</em>.
              </p>

              <ul>
                <li>📍 Identifies your strengths</li>
                <li>🧠 Suggests tailored career paths</li>
                <li>💼 Matches industry-relevant roles</li>
                <li>🚀 Keeps you ahead of trends</li>
                <li>🔍 Provides clarity</li>
                <li>🛠️ Helps confident decisions</li>
              </ul>
            </div>

            <Image
              src="/pic13.jpg"
              width={400}
              height={300}
              alt="Career Guidance"
              className="guidance-importance-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
