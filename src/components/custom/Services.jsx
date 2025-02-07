import React from "react";
import {
  ArrowRight,
  Brain,
  Cloud,
  Globe,
  ShieldIcon,
  Smartphone,
} from "lucide-react";

const Services = ({ services }) => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="space-y-10 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col-reverse ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 md:gap-12 transition-all duration-300 hover:transform hover:-translate-y-2`}
            >
              <div className="w-full lg:w-1/2 px-4 lg:px-12">
                <div className="text-center lg:text-left">
                  <div className="md:mb-6 inline-block">
                    <div className="p-4 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {index === 0 && <Globe size={40} />}
                      {index === 1 && <Smartphone size={40} />}
                      {index === 2 && <Cloud size={40} />}
                      {index === 3 && <Brain size={40} />}
                      {index === 4 && <ShieldIcon size={40} />}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 mb-2 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="group/btn inline-flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                    Learn More
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-xl w-56 md:w-96 lg:w-full max-w-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
