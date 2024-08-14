import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { RiQuestionAnswerLine } from "@remixicon/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-20 mt-20"
      >
        <div className="relative w-full">
          <div className="relative isolate z-0 bg-base-200 px-6 pt-18 lg:px-8">
            <div className="relative mx-auto max-w-4xl py-24">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">
                  Empowering Digital Solutions for Your Business
                </h1>
                <p className="mt-6 text-2xl text-orange-500 font-medium mb-6">
                  Services that we will offer to grow your Business
                </p>
                <h2 className="text-6xl font-bold text-orange-500">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Development",
                        "Graphic Design",
                        "CMS Development",
                        "Digital Marketing",
                        "Interior Design",
                        "Video Editing",
                        "SEO Optimize",
                        "Logo Design",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <div className="mt-10 flex items-center justify-center gap-x-2">
                  <Link to={"https://alvo.chat/4h0s"}>
                    <button className="btn btn-info text-white flex gap-2 bg-gradient-to-br from-orange-300 to-orange-600 p-2 rounded-lg cursor-pointer text-lg font-semibold">
                      <RiQuestionAnswerLine size={24} /> Talk to Our Team
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </motion.div>
    </>
  );
};

export default Hero;
