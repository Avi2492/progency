import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import {
  RiMenuLine,
  RiCloseLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
} from "@remixicon/react";

const menuItems = [
  {
    to: "https://github.com/Avi2492",
    icon: RiGithubLine,
  },
  {
    to: "https://www.linkedin.com/company/spherisoft/",
    icon: RiLinkedinLine,
  },
  {
    to: "https://www.facebook.com/profile.php?id=61564196824423&mibextid=ZbWKwL",
    icon: RiFacebookLine,
  },
  {
    to: "https://www.instagram.com/spherisoft?igsh=c3AxaGZ3NTRoYXQ4",
    icon: RiInstagramLine,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="fixed top-0 right-0 z-50 py-2 w-full backdrop-blur-md border-b shadow-lg bg-gray-50/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center text-2xl space-x-2">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8 justify-center items-center">
              {/* Follow Us */}
              {menuItems.map((item, id) => (
                <li key={id}>
                  <Link
                    to={item.to}
                    className="text-white bg-gradient-to-br from-orange-300 to-orange-600 text-xl cursor-pointer  rounded-full p-1 flex items-center font-bold"
                  >
                    <item.icon size={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">
            <RiMenuLine
              onClick={toggleMenu}
              className="cursor-pointer text-2xl"
              size={28}
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 rounded-lg ring-1 bg-gray-50">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-end">
                    <div className="-ml-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="btn btn-neutral"
                      >
                        <span className="sr-only">Close menu</span>
                        <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center mb-4">
                      <Link to={"/"}>
                        <Logo />
                      </Link>
                    </div>
                    <nav className="flex gap-2 justify-center">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold"
                        >
                          <span className="text-white font-bold bg-gradient-to-br from-orange-300 to-orange-600 text-xl cursor-pointer  rounded-full px-2 py-2 flex items-center gap-2">
                            <item.icon size={24} />
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
