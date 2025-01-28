import React, { useState } from "react";

import Logo from "../assets/RegisterKoro-logo.png";
import Mail from "../assets/socialMedia/Mail.png";
import Phone from "../assets/socialMedia/Phone.png";
import Facebook from "../assets/socialMedia/Facebook.png";
import Instagram from "../assets/socialMedia/Instagram.png";
import Twitter from "../assets/socialMedia/Twiter.png";
import PPP from "../assets/socialMedia/Pppp.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className=" flex flex-row-reverse bg-[#1C4670] h-10 w-full text-white text-xs gap-2 md:gap-6 items-center align-middle pr-4 ">
        <div className="flex gap-2">
          <div className="w-3 h-3">
            <img src={Instagram} alt="Instagram" />
          </div>
          <div className="w-3 h-3">
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className="w-3 h-3">
            <img src={Twitter} alt="Twitter" />
          </div>
          <div className="w-3 h-3">
            <img src={PPP} alt="PPP" />
          </div>
        </div>

        <div>
          <p>|</p>
        </div>
        <div className="flex gap-2">
          <img className="w-3 h-3" src={Phone} alt="Mobile number" />
          <span>+91 9999999999</span>
        </div>
        <div>
          <p>|</p>
        </div>
        <div className="flex gap-2">
          <img className="w-3 h-3 mt-1" src={Mail} alt="Email address" />
          <span className="text-white text-sm ">www.registerkaro.in</span>
        </div>
      </div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo} // Replace with your logo's path
              alt="RegisterKaro Logo"
              className="h-8"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="./" className="hover:text-blue-600">
              Home
            </a>
            <div className="relative group">
              <a href="./" className="hover:text-blue-600 flex items-center">
                Our Services <span className="ml-1">▼</span>
              </a>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg hidden group-hover:block">
                <a
                  href="./"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="./"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="./"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            </div>
            <a href="./" className="hover:text-blue-600">
              Blog
            </a>
            <a href="./" className="hover:text-blue-600">
              Contact Us
            </a>
            <a href="./" className="hover:text-blue-600">
              About Us
            </a>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Search Icon and CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* Talk An Expert Button */}
            <a
              href="./"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow transition"
            >
              Talk An Expert
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 p-6 text-sm font-medium text-gray-700">
              <a href="./" className="hover:text-blue-600">
                Home
              </a>
              <div className="relative">
                <a href="./" className="hover:text-blue-600 flex items-center">
                  Our Services <span className="ml-1">▼</span>
                </a>
                {/* Dropdown Menu for Mobile */}
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="./"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Service 1
                  </a>
                  <a
                    href="./"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Service 2
                  </a>
                  <a
                    href="./"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Service 3
                  </a>
                </div>
              </div>
              <a href="./" className="hover:text-blue-600">
                Blog
              </a>
              <a href="./" className="hover:text-blue-600">
                Contact Us
              </a>
              <a href="./" className="hover:text-blue-600">
                About Us
              </a>
              <div className="flex items-center space-x-4">
                {/* Search Icon */}
                <button className="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                {/* Talk An Expert Button */}
                <a
                  href="./"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow transition"
                >
                  Talk An Expert
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export { Header };
