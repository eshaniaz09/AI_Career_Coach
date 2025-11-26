import React from "react";
import Image from "next/image";
import { ArrowRight, Briefcase,Cpu, FileEdit, FileText, Link, Mic, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {

    const offers = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "AI Resume Builder",
      description:
        "Create professional resumes with AI-powered suggestions and multiple templates.",
    },
    {
      icon: <Mic className="w-10 h-10 text-primary" />,
      title: "AI Interview Practice",
      description:
        "Practice interviews with our intelligent AI coach that adapts to your role and experience.",
    },
    {
      icon: <FileEdit className="w-10 h-10 text-primary" />,
      title: "Cover Letter Generator",
      description:
        "Generate personalized cover letters tailored to the job description and your professional background.",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "AI Career Guidance",
      description:
        "Get personalized career roadmaps and actionable steps to achieve your goals.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Spacer from top */}
      <div className="pt-20 md:pt-24 lg:pt-28"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16 gradient-title animate-gradient">
          About CareerCraft
        </h1>

        {/* Hero Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/pic12.webp"
                fill
                alt="Team working together"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Mission Card */}
          <div className="order-1 lg:order-2   bg-black/20 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-blue-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-3xl"><Target className="w-10 h-10 text-red-600" /></span>
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              CareerCraft is an AI-powered career development platform designed
              to help professionals and students navigate their career journey
              with confidence. We combine cutting-edge artificial intelligence
              with proven career development strategies to provide personalized
              guidance, job recommendations, and interview preparation.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-black/20 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12 border border-blue-100 dark:border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            What We Offer
          </h2>
          
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="bg-black/30 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 dark:border-slate-600"
        >
          <div className="mb-3">{offer.icon}</div>

          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {offer.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {offer.description}
          </p>
        </div>
      ))}
    </div>
        </div>

        {/* Technology Section */}
        <div className="bg-[#050505e7] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl"><Cpu className="w-8 h-8 text-yellow-300 dark:text-white" /></span>
            Our Technology
          </h2>
          <p className="text-base sm:text-lg leading-relaxed opacity-95">
            Powered by Google's Gemini AI, our platform provides intelligent,
            context-aware responses that understand your unique background and
            career aspirations. We continuously improve our AI models to
            deliver more accurate and helpful career guidance.
          </p>
        </div>

        {/* Why Choose CareerCraft */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-black/30 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-blue-100 dark:border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-3xl"><Briefcase className="w-8 h-8 text-gray-800 dark:text-white" /></span>
              Why Choose CareerCraft?
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Personalized Experience",
                  description: "AI-driven recommendations based on your unique profile"
                },
                {
                  title: "24/7 Availability",
                  description: "Access career guidance whenever you need it"
                },
                {
                  title: "Professional Quality",
                  description: "Industry-standard tools and templates"
                },
                {
                  title: "User-Friendly",
                  description: "Intuitive interface designed for all skill levels"
                },
                {
                  title: "Secure & Private",
                  description: "Your data is protected and never shared"
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-gray-800 dark:text-white">{item.title}:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/whyUs.jpg"
                fill
                alt="Career growth illustration"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-indigo-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce cursor-pointer"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;