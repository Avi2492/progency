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
    </footer>
  );
};

export default Footer;
