"use client";

import React, { useState } from 'react';
import { Mail, Instagram, Clock, Send, CheckCircle, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#163235] via-[#0e7472] to-[#163235]">
      {/* Spacer from top */}
      <div className="pt-20 md:pt-24 lg:pt-28"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16 text-white gradient-title animate-gradient drop-shadow-lg">
          Contact Us
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Contact Info */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#0e7472]" />
                Get in Touch
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Have questions about CareerCraft? We'd love to hear from you. Send
                us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mt-8">
              {/* Email */}
              <div className="bg-black/20 rounded-xl p-6 border border-blue-100 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-600 mb-2 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Email
                </h3>
                <a
                  href="mailto:eshaniaz5@gmail.com"
                  className="text-[#0e7472] hover:text-[#163235] font-medium transition-colors duration-300 break-all"
                >
                  eshaniaz5@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-black/20 rounded-xl p-6 border border-pink-100 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-600 mb-2 flex items-center gap-2">
                  <Instagram className="w-6 h-6 text-pink-600" />
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/itz_esh.09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0e7472] hover:text-[#163235] font-medium transition-colors duration-300"
                >
                  @itz_esh.09
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-black/20 rounded-xl p-6 border border-green-100 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-600 mb-2 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-green-600" />
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Send className="w-8 h-8 text-[#0e7472]" />
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl p-8 text-center shadow-lg">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-lg">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
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

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none text-gray-700"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0e7472] focus:ring-2 focus:ring-[#0e7472]/20 transition-all duration-300 outline-none resize-none text-gray-700"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-[#163235] to-[#0e7472] text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="bg-linear-to-r from-[#0e7472] to-[#163235] rounded-2xl shadow-2xl p-8 sm:p-10 text-center text-white transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Phone className="w-8 h-8" />
            Need Immediate Help?
          </h3>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            For urgent matters, please reach out to us directly via email or
            Instagram. We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="mailto:eshaniaz5@gmail.com"
              className="bg-white text-[#0e7472] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="https://instagram.com/itz_esh.09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0e7472] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;