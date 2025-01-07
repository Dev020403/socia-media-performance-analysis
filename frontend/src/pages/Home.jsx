import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
