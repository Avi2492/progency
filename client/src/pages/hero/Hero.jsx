import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { RiQuestionAnswerLine } from "@remixicon/react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-base-100 px-6 pt-18 lg:px-8">
        <div className="relative mx-auto max-w-4xl py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
              We are here to help and complete your
            </h1>
            <h2 className="text-5xl font-bold text-cyan-500 mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Projects",
                    "MOOC Courses Guidance",
                    "Research Papers Guidance",
                    "Professional Websites",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our dedicated team offers invaluable support, guiding individuals
              towards academic success and professional growth. Join us to
              unlock your full potential and excel in your educational journey.
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
