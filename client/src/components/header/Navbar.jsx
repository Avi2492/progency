import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiGithubLine } from "@remixicon/react";

const menuItems = [
  {
    name: "Star us",
    to: "https://github.com/Avi2492",
    icon: RiGithubLine,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="fixed top-0 right-0 z-50 py-2 bg-gray-50 w-full shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center text-2xl space-x-2">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-white font-semibold bg-gradient-to-br from-orange-300 to-orange-600 text-xl cursor-pointer  rounded-lg px-2 py-2 flex items-center gap-2"
                  >
                    🌟 {item.name} <item.icon />
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
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold"
                        >
                          <span className="text-white font-semibold bg-gradient-to-br from-orange-300 to-orange-600 text-xl cursor-pointer  rounded-lg px-2 py-2 flex items-center gap-2">
                            🌟 {item.name} <item.icon />
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
