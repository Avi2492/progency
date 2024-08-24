import React from "react";
import { motion } from "framer-motion";
import { SERVICE_PLANS } from "../../utils/constants";
import { RiCheckLine } from "@remixicon/react";

const ServicePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="flex flex-col space-y-6 pb-8 pt-8">
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Services that we will{" "}
            <span className="text-orange-500 font-bold">providing ?</span>
          </p>
          <p className="mx-auto max-w-5xl text-center text-base text-gray-600 md:text-xl">
            At Spherisoft, we offer a comprehensive range of digital services
            designed to help your business thrive in today’s competitive
            landscape. Our expertise spans across multiple areas, ensuring that
            all your digital needs are met under one roof.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-2 md:px-4">
          <div>
            <div className="mt-8 space-y-4 md:mt-12">
              <div className="grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8">
                {SERVICE_PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-lg border border-gray-200 bg-orange-200"
                  >
                    <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-8 mb-4">
                      <p className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-600 flex items-center justify-center">
                        <plan.price size={40} />
                      </p>
                      <div className="flex w-full flex-col items-start justify-start space-y-1 mt-2">
                        <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                          {plan.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
                      <div className="flex w-full flex-col space-y-4">
                        {plan.features.map((feature) => (
                          <div
                            key={feature}
                            className="inline-flex w-full space-x-3"
                          >
                            <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                              <RiCheckLine className="h-4 w-4" />
                            </div>
                            <p className="w-full text-base leading-normal text-gray-600">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <hr className="mt-16" />
    </>
  );
};

export default ServicePage;
