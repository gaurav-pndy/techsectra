import React from "react";
import { Lightbulb, FileText, Code, Rocket } from "lucide-react";

const HowItWorks = ({ process }) => {
  const stepIcons = [Lightbulb, FileText, Code, Rocket];

  return (
    <section
      id="process"
      className="pt-20 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            How It Works ?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
            <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
          </div>

          <div className="">
            {process.map((step, index) => {
              const StepIcon = stepIcons[index % stepIcons.length];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative group">
                  <div className="hidden lg:flex items-center justify-center">
                    <div className={`w-1/2 ${isEven ? "pr-12" : "pr-0"}`}>
                      {isEven && (
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                          <div className="w-full h-60 overflow-hidden">
                            <img
                              src={step.image || "/api/placeholder/600/300"}
                              alt={`Step ${index + 1} illustration`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="p-5">
                            <h3 className="text-2xl font-semibold text-blue-900 mb-2 flex items-center justify-start gap-3">
                              {step.step}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-left">
                              {step.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <StepIcon size={32} />
                      </div>
                    </div>

                    <div className={`w-1/2 ${isEven ? "pl-0" : "pl-12"}`}>
                      {!isEven && (
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                          <div className="w-full h-60 overflow-hidden">
                            <img
                              src={step.image || "/api/placeholder/600/300"}
                              alt={`Step ${index + 1} illustration`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-900 mb-2 flex items-center gap-3">
                              {step.step}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                      <div className="w-full h-48 md:h-72 overflow-hidden">
                        <img
                          src={step.image || "/api/placeholder/600/300"}
                          alt={`Step ${index + 1} illustration`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <div className="flex items-center gap-6 ">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            <StepIcon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-blue-900">
                              {step.step}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 pl-16">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
