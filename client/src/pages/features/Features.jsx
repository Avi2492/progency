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
        className="mb-20 mt-20"
      >
        <h2 className="text-5xl font-bold text-center mb-10 text-black">
          Why Choose{" "}
          <span className="text-orange-500 bg-clip-text text-transparent font-bold">
            spherisoft?
          </span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-600 flex items-center justify-center">
                  <benefit.icon className="text-white" size={60} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-orange-500">
                  {benefit.title}
                </h3>
                <p className="text-black text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <hr />
    </>
  );
};

export default Features;
