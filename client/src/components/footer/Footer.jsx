import React from "react";

import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <footer className="px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-center">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="mt-4 grow md:ml-12 md:mt-0">
            <p className="text-base font-semibold text-gray-700">
              All © reserved 2024 Made with ❤️
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>UI / UX Design</li>
              <li>App Development</li>
              <li>API reference</li>
              <li>API status</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">
              Social Links
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
