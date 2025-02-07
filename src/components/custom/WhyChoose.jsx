import React from "react";
import { ShieldCheck, TrendingUp, Headset, Cpu, Ratio } from "lucide-react"; // Icons for expertise, growth, and support

const WhyChoose = ({ valueProps }) => {
  return (
    <section id="why-us" className="lg:py-16 text-center ">
      <div className="text-center lg:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          Why Choose Us ?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {valueProps.map((prop, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-blue-50 to-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="flex justify-center mb-4">
              {index === 0 && (
                <ShieldCheck size={40} className="text-blue-600 " />
              )}
              {index === 1 && (
                <TrendingUp size={40} className="text-green-600 " />
              )}
              {index === 2 && <Cpu size={40} className="text-violet-900 " />}
              {index === 3 && (
                <Headset size={40} className="text-orange-600 " />
              )}
              {index === 4 && <Ratio size={40} className="text-slate-600 " />}
            </div>

            <h3 className="text-xl font-semibold mb-1 md:mb-4 text-blue-900">
              {prop.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600">{prop.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
