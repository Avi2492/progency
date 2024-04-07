import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="text-3xl">
          <Logo />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Services</Link>
          </li>
          <li>
            <Link to={"/"}>Projects</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
