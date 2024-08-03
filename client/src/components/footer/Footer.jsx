import React from "react";
import { RiMailLine, RiLinkedinFill, RiGithubFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="flex items-center p-4 text-neutral-content justify-between">
      <span className="text-2xl">
        <Logo />
      </span>
      <div className="flex gap-1">
        <Link to={"mailto:avinashpandey2492002@gmail.com"}>
          <RiMailLine />
        </Link>
        <Link to={"www.linkedin.com/in/avinash-pandey2492"}>
          <RiLinkedinFill />
        </Link>
        <Link to={"https://github.com/Avi2492"}>
          <RiGithubFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
