import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-base-200 px-6 pt-10 lg:px-8">
        <div className="relative mx-auto max-w-4xl py-20">
          <div className="absolute inset-x-4 -top-[2rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5356FF" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
              We are here to help and complete your
            </h1>
            <h2 className="text-5xl font-bold text-cyan-500 mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Semester Projects",
                    "MOOC Courses",
                    "Term Papers",
                    "Research Papers",
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
              <button className="btn btn-info text-white">
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
