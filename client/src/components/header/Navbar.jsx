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
    <>
      <div className="relative w-full py-2 shadow-lg">
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
                    className="font-semibold text-black text-xl hover:text-blue-500 cursor-pointer hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">
            <RiMenuLine
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 rounded-lg shadow-lg ring-1 bg-slate-100">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link to={"/"}>
                        <Logo />
                      </Link>
                    </div>
                    <div className="-mr-2">
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
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold"
                        >
                          <span className="ml-3 font-bold text-lg text-blue-500 hover:text-blue-600 hover:underline">
                            {item.name}
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
