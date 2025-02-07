import React from "react";
import { Briefcase, Shield, Users } from "lucide-react";

const About = ({ about }) => {
  return (
    <section id="about" className="pt-16  lg:py-16 text-center">
      <div className="text-center lg:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          About Us
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {about.map((info, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center cursor-pointer shadow-md transform hover:scale-105 transition duration-300 rounded-2xl"
              style={{
                backgroundImage: `url(${info.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-80 transition-opacity duration-300 hover:opacity-60 rounded-2xl"></div>

              <div className="relative pointer-events-none p-6 text-white">
                <div className="mb-4 flex justify-center">
                  {index === 0 && <Briefcase size={32} />}
                  {index === 1 && <Shield size={32} />}
                  {index === 2 && <Users size={32} />}
                </div>

                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                <p className="text-cyan-300 text-sm md:text-base md:px-2">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
