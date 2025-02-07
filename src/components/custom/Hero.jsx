import { ChevronRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative bg-cover bg-center bg-fixed bg-[url('/images/hero.jpg')] text-white text-center py-24 pt-36 h-[85vh] rounded-b-4xl"
    >
      <div className="absolute inset-0 rounded-b-4xl bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl text-blue-100 md:text-6xl font-bold mb-6">
          Empower Your Business with Cutting-Edge Technology
        </h1>
        <p className="text-lg text-gray-200  mb-8">
          Unlock the full potential of your business with our innovative IT
          consulting services. From custom software solutions to AI-driven
          automation, we help you stay ahead of the competition with technology
          that drives growth, efficiency, and digital transformation.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300"
        >
          Get Started <ChevronRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
