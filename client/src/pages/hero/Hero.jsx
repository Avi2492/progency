import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-8xl font-bold mb-4">
            We are here to help and make your
          </h1>
          <h2 className="text-7xl font-bold text-cyan-500">
            <Typewriter
              options={{
                strings: [
                  "Projects",
                  "Class Courses",
                  "Term Papers",
                  "Research Papers",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="py-6 text-xl font-medium">
            Our dedicated team offers invaluable support, guiding individuals
            towards academic success and professional growth. Join us to unlock
            your full potential and excel in your educational journey.
          </p>
          <button className="btn btn-info text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
