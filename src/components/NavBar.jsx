import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className="bg-white bg-opacity-50 shadow-lg fixed top-0 w-full z-20">
      <div className="flex flex-row justify-between items-center h-16 px-10">
        <div className="text-black text-5xl italic font-bold transition duration-200 hover:text-blue-800">
          TravelTrek
        </div>
        <div>
          <ul className="list-none flex flex-row space-x-8">
            <li>
              <Link
                to="home" // Adjust based on your section ID
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll in milliseconds
                className="text-black text-lg font-medium transition duration-200 hover:text-blue-800 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about" // Adjust based on your section ID
                smooth={true}
                duration={500}
                className="text-black text-lg font-medium transition duration-200 hover:text-blue-800 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact" // Adjust based on your section ID
                smooth={true}
                duration={500}
                className="text-black text-lg font-medium transition duration-200 hover:text-blue-800 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
