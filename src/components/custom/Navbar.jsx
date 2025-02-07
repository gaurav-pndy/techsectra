import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Menu, X } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navRef = useRef();
  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: "#000b5c",
      ease: "power4.out",
      scrollTrigger: {
        trigger: navRef.current,
        start: "top top",
        scrub: true,
      },
    });
  });
  return (
    <nav className="fixed z-20 w-full ">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 md:px-8 mt-2 rounded-2xl transition-all duration-300"
      >
        <div className="flex justify-between h-12 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero">
              <span className=" text-2xl md:text-4xl font-bold text-blue-400">
                TechSectra
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-xl text-gray-200 hover:text-blue-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-xl text-gray-200 hover:text-blue-300"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-xl text-gray-200 hover:text-blue-300"
            >
              Why Us
            </a>
            <a
              href="#process"
              className="text-xl text-gray-200 hover:text-blue-300"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-xl text-gray-200 hover:text-blue-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden px-4 pt-5 pb-3 space-y-1 bg-white absolute top-0 w-full h-screen transition-all duration-300 ${
          isMenuOpen ? "" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 float-end"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={24} />}
        </button>
        <a
          href="#about"
          className="block px-3 py-5 text-gray-700 hover:bg-gray-100 mt-20 text-center text-2xl"
        >
          About
        </a>
        <a
          href="#services"
          className="block px-3 py-5 text-gray-700 hover:bg-gray-100 text-center text-2xl"
        >
          Services
        </a>
        <a
          href="#why-us"
          className="block px-3 py-5 text-gray-700 hover:bg-gray-100 text-center text-2xl"
        >
          Why Us
        </a>
        <a
          href="#process"
          className="block px-3 py-5 text-gray-700 hover:bg-gray-100 text-center text-2xl"
        >
          Process
        </a>
        <a
          href="#contact"
          className="block px-3 py-5 text-gray-700 hover:bg-gray-100 text-center text-2xl"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
