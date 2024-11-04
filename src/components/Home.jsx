import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import About from "./About";
import Contact from "./Contact";
import bgImage from "../assets/bg1.jpg"; // Correct the path if needed
import Popular from "./Popular";

export default function Home() {
  return (
    <div>
      {/* Sticky Navbar at the top with higher z-index */}
      <NavBar className="sticky top-0 z-20" />

      {/* Full-screen search section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Search section */}
        <Search />
      </section>

      {/* Popular Destination Section */}
      <section id="popular" className="w-full bg-gray-100">
        <Popular />
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-white">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gray-100">
        <Contact />
      </section>
    </div>
  );
}
