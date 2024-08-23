import React from "react";

import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className="mx-auto w-full">
      <footer className="px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <Link to={"/"}>
            <Logo />
          </Link>

          <p className="text-base font-semibold text-gray-700">
            All © reserved 2024 Made with ❤️
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-bold text-orange-500">Company</p>
            <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-500">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-bold text-orange-500">Services</p>
            <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-500">
              <li>UI / UX Design</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>Website Development</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-bold text-orange-500">Legal</p>
            <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-bold text-orange-500">
              Social Links
            </p>
            <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-500">
              <li>Email</li>
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
