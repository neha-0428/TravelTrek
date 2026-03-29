import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Contact Information */}
        <p className="text-center text-sm">
          Contact us at{" "}
          <a
            href="mailto:support@traveltrek.com"
            className="text-blue-300 underline"
          >
            support@traveltrek.com
          </a>{" "}
          | Call: 1-800-TRAVELT
        </p>

        {/* Quick Links */}
        <div className="flex space-x-4 text-sm">
          <a href="/" className="hover:text-blue-300">
            Home
          </a>
          <a href="/about" className="hover:text-blue-300">
            About
          </a>
          <a href="/contact" className="hover:text-blue-300">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-blue-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-300" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs mt-4">
          © {new Date().getFullYear()} TravelTrek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
