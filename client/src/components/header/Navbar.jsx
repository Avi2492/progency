import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

const menuItems = [
  {
    name: "Projects",
    to: "/",
  },
  {
    name: "Services",
    to: "/",
  },
  {
    name: "Contact Us",
    to: "/",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 pb-2">
      <div className="inline-flex items-center space-x-2 text-2xl cursor-pointer">
        <Logo />
      </div>
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-8 ">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.to} className="text-xl font-bold cursor-pointer">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <button className="btn btn-outline btn-info">Chat With Us</button>
      </div>
      <div className="lg:hidden">
        <RiMenuLine onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 text-2xl cursor-pointer">
                  <Logo />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="btn btn-outline"
                  >
                    <span className="sr-only">Close menu</span>
                    <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 mb-6">
                <nav className="grid gap-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-base-200"
                    >
                      <span className="ml-3 text-base font-medium text-gray-400 cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <button className="btn btn-outline btn-info">Chat With Us</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
