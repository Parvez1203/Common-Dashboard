import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-[#262626]">
      <div className="container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-6xl font-semibold mb-6">
            <span className="font-serif italic">Let's</span> collaborate!
          </h2>
          <a
            href="mailto:email@domain.com"
            className="text-xl flex items-center hover:text-[#414d43] transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="text-xl mx-2">email@domain.com</span>
          </a>
        </div>

        {/* Add vertical space */}
        <div className="h-60"></div>

        {/* Bottom Section */}
        <div className="relative flex flex-col">
          {/* Footer Links Section */}
          <div
            className="absolute bottom-0 right-0 flex gap-12 mb-4 mr-20"
            style={{
              marginRight: "0px",
              paddingRight: "159px",
              paddingBottom: "16px",
              marginLeft: "0px",
              marginBottom: "0px",
              top: "auto",
              left: "auto",
            }}
          >
            {/* Home Links */}
            <div>
              <h3 className="text-[#ACA296] text-lg mb-2">Home</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Our Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg text-[#ACA296] mb-2">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Bathroom Remodeling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Kitchen Remodeling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Window and Door Replacement
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Links */}
            <div>
              <h3 className="text-[#ACA296] mb-2 text-lg">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:text-[#414d43] transition-colors duration-300 font-semibold"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="absolute bottom-0 left-0 mb-4 ml-6">
            <p className="text-lg text-[#ACA296]">
              All rights reserved ©K&M Remodeling Services
            </p>
          </div>

          {/* Go Up Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-0 right-0 w-12 h-12 border-black border text-black rounded-full flex items-center justify-center hover:bg-[#414d43] transition-colors duration-300 mb-4 mr-6"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
