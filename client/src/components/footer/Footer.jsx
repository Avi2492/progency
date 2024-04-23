import React from "react";
import { RiMailLine, RiLinkedinFill, RiGithubFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="flex footer items-center p-4 text-neutral-content justify-between bg-base-200">
      <span className="text-2xl">
        <Logo />
      </span>
      <div className="items-center grid-flow-col">
        <p className="flex gap-2 items-center">
          Copyright © 2024 - All right reserved by Progency
        </p>
      </div>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to={"mailto:avinashpandey2492002@gmail.com"}>
          <RiMailLine />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/progency-web-services-2210172b9/"}
        >
          <RiLinkedinFill />
        </Link>
        <Link to={"https://github.com/Avi2492"}>
          <RiGithubFill />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
