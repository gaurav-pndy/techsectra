import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  LoaderCircle,
} from "lucide-react";
import Navbar from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";
import About from "./components/custom/About";
import Services from "./components/custom/Services";
import WhyChoose from "./components/custom/WhyChoose";
import Contact from "./components/custom/Contact";
import HowItWorks from "./components/custom/HowItWorks";

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

const fetchGoogleSheetData = async () => {
  try {
    const response = await fetch(URL);
    const text = await response.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows.map((row) =>
      row.c.map((cell) => cell?.v || "")
    );

    console.log("ro", json.table);

    const structuredData = {
      // about: { title: rows[0][2], content: rows[0][2] },
      about: rows
        .filter((row) => row[0] === "About Us")
        .map((row) => ({ title: row[1], description: row[2], image: row[3] })),
      services: rows
        .filter((row) => row[0] === "Services")
        .map((row) => ({ title: row[1], description: row[2], image: row[3] })),
      valueProps: rows
        .filter((row) => row[0] === "Why Choose Us")
        .map((row) => ({ title: row[1], content: row[2] })),
      process: rows
        .filter((row) => row[0] === "How It Works")
        .map((row) => ({ step: row[1], content: row[2], image: row[3] })),
    };

    console.log("str", structuredData);

    return structuredData;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return null;
  }
};

const App = () => {
  const [data, setData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchGoogleSheetData().then(setData);
  }, []);

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen animate-spin">
        <LoaderCircle size={60} className="text-blue-600" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />

      <About about={data.about} />

      <Services services={data.services} />

      <WhyChoose valueProps={data.valueProps} />

      <HowItWorks process={data.process} />
      <Contact />

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2024 TechSectra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
