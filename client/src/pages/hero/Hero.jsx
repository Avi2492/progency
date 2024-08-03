import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { RiQuestionAnswerLine } from "@remixicon/react";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="relative isolate z-0 bg-base-200 px-6 pt-18 lg:px-8">
          <div className="relative mx-auto max-w-4xl py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
                Empowering Digital Solutions for Your Business
              </h1>
              <p className="mt-6 text-2xl text-gray-800 font-medium mb-6">
                Services that we will offer to grow your Business
              </p>
              <h2 className="text-6xl font-bold text-orange-500 mt-2">
                <Typewriter
                  options={{
                    strings: [
                      "Website Development.",
                      "App Development.",
                      "CMS Development.",
                      "Digital Marketing",
                      "Social Media Optimize",
                      "SEO for Websites",
                      "Logo Design.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <Link to={"https://alvo.chat/4h0s"}>
                  <button className="btn btn-info text-orange-500 flex gap-2 bg-slate-200 p-2 rounded-lg cursor-pointer text-lg font-semibold">
                    <RiQuestionAnswerLine /> Talk to Our Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
