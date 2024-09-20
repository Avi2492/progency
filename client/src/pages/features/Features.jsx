import React from "react";

import { motion } from "framer-motion";
import { benefits } from "../../utils/constants.js";

const Features = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Why Choose{" "}
            <span className="text-orange-500 font-bold">spherisoft ?</span>
          </p>
          <p className="mx-auto max-w-5xl text-center text-base text-gray-600 md:text-xl">
            We’re dedicated to delivering high-quality digital solutions that
            meet your specific needs. Whether you’re looking to build a new
            website, develop a mobile app, or enhance your brand’s visibility,
            Spherisoft has the expertise to bring your vision to life. Let’s
            work together to achieve your digital goals!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-orange-600 flex items-center justify-center">
                  <benefit.icon className="text-white" size={40} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-orange-500">
                  {benefit.title}
                </h3>
                {/* <p className="text-black text-sm">{benefit.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <hr className="mt-16" />
    </>
  );
};

export default Features;
