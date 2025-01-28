import React from "react";
import Facebook from "../assets/socialMedia/Facebook.png";
import Google from "../assets/socialMedia/Google.png";
import Apple from "../assets/socialMedia/Apple.png";
import Insta from "../assets/socialMedia/Instagram.png";
import UpArrow from "../assets/Up-Arrow.png";

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-12 items-start p-16">
        {/* Left Column: Social Media and Description */}
        <div className="col-span-1  space-y-4">
          <p className="text-gray-300 text-sm md:text-base lg:text-md">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
            <a
              href="./"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="./"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img src={Google} alt="Google" />
            </a>
            <a
              href="./"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img src={Apple} alt="Apple" />
            </a>
            <a
              href="./"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <img src={Insta} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Middle Columns: Links */}
        <div className="space-y-4">
          <h4 className="text-orange-400 font-semibold mb-4 md:mb-6 lg:mb-8">
            Start a Business
          </h4>
          <ul className="space-y-2 text-sm md:text-base lg:text-lg">
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Enterprise
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Solutions
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-orange-400 font-semibold mb-4 md:mb-6 lg:mb-8">
            Government Registration
          </h4>
          <ul className="space-y-2 text-sm md:text-base lg:text-lg">
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Developers
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                App
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-orange-400 font-semibold mb-4 md:mb-6 lg:mb-8">
            Compliance & Tax
          </h4>
          <ul className="space-y-2 text-sm md:text-base lg:text-lg">
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Channels
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Scale
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Watch the Demo
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Our Competition
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-orange-400 font-semibold mb-4 md:mb-6 lg:mb-8">
            BIS & CDSCO
          </h4>
          <ul className="space-y-2 text-sm md:text-base lg:text-lg">
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Leadership
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Media Kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <a
          href="./"
          className="bg-orange-500 text-white p-2 rounded-full inline-block mb-4 hover:bg-orange-600 transition"
        >
          <img src={UpArrow} alt="upward Arrow" />
        </a>
        <p className="text-sm text-gray-400">
          &copy; 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
