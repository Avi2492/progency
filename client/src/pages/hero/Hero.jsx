import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { RiQuestionAnswerLine } from "@remixicon/react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-base-200 px-6 pt-18 lg:px-8">
        <div className="relative mx-auto max-w-4xl py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
              Empowering Digital Solutions for Your Business
            </h1>
            <h2 className="text-6xl font-bold text-cyan-500 mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Web Development.",
                    "App Development.",
                    "UI / UX Design.",
                    "Logo Design.",
                    "We do it all.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 font-medium">
              Welcome to <span className="text-cyan-500">Progency</span>, where
              creativity meets technology. We're a team of innovative designers,
              developers, and strategists dedicated to transforming your visions
              into reality
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link to={"https://alvo.chat/4h0s"}>
                <button className="btn btn-info text-white">
                  <RiQuestionAnswerLine /> Talk to Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
