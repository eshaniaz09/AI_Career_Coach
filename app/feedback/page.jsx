"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { MessageSquare } from "lucide-react";


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', rating: '', feedback: '' });
    }, 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`inline-block text-4xl cursor-pointer transition-all duration-300 hover:scale-125 ${
          i < rating ? 'text-yellow-400' : 'text-gray-400'
        }`}
        onClick={() => setFormData({ ...formData, rating: i + 1 })}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#163235] via-[#0e7472] to-[#163235]">
      {/* Spacer from top */}
      <div className="pt-20 md:pt-24 lg:pt-28"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16 gradient-title  animate-gradient drop-shadow-lg">
          Give Us FeedBack
        </h1>

        {/* Hero Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-white/10 backdrop-blur-sm">
              <Image
                src="/wantFB.jpg"
                fill
                alt="We want your feedback"
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Top Banner Image */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src="/feedback.jpg"
                  fill
                  alt="Feedback banner"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
              <p className="text-lg sm:text-xl text-gray-700 text-center font-medium">
                We value your feedback! Help us improve CareerCraft by sharing your experience.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-12 border border-gray-200">
          {isSubmitted ? (
            <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-lg">
                Your feedback has been submitted. We appreciate your input!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Form Section - Takes 2 columns on large screens */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      How would you rate your experience? *
                    </label>
                    <div className="flex items-center gap-2 my-4">
                      {renderStars(parseInt(formData.rating) || 0)}
                    </div>
                    <small className="text-gray-600 text-sm">
                      {formData.rating
                        ? `${formData.rating} out of 5 stars`
                        : 'Click to rate'}
                    </small>
                  </div>

                  {/* Feedback Textarea */}
                  <div>
                    <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Your Feedback *
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you think about CareerCraft..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none resize-none text-gray-700"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-linear-to-r from-[#163235] to-[#0e7472] text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg"
                  >
                    Submit Feedback
                  </button>
                </div>
              </div>

              {/* Emoji Image - Takes 1 column on large screens */}
              <div className="flex items-center justify-center lg:col-span-1">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-full lg:h-auto lg:max-w-xs transform hover:rotate-12 transition-transform duration-500">
                  <Image
                    src="/emoji.avif"
                    alt="Emoji"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl"><MessageSquare className="w-8 h-8 text-black" /></span>
                What We Do With Your Feedback
              </h3>
              <ul className="space-y-3">
                {[
                  "Improve our AI algorithms and user experience",
                  "Add new features based on user needs",
                  "Fix bugs and technical issues",
                  "Enhance our career guidance tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#0e7472] text-xl mt-1 shrink-0">✓</span>
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/pic20.webp"
                  fill
                  alt="Feedback mascot"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;