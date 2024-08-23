import React from "react";
import { motion } from "framer-motion";
import { RiSendPlaneLine } from "@remixicon/react";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto w-1/2 md:w-1/4 sm:w-1/3 rounded-full border-2 border-orange-500 bg-gray-50 p-2 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-lg">
              <span>
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
              </span>
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Got a project{" "}
            <span className="text-orange-500 font-bold">in mind?</span>
          </p>
          <p className="mx-auto max-w-5xl text-center text-base text-gray-600 md:text-xl">
            We’d love to hear from you! Whether you need a stunning website, a
            custom mobile app, or creative design services, Spherisoft is here
            to turn your ideas into reality.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-8 md:py-18">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-orange-500 md:text-4xl">
                  Contact Us Today
                </p>
                <p className="mt-4 text-lg text-gray-900">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className=" w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="w-full  items-center gap-1.5">
                      <label
                        className="text-lg font-medium leading-none text-orange-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-orange-300 bg-transparent px-3 py-2 text-sm placeholder:text-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-orange-500"
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-lg font-medium leading-none text-orange-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-orange-300 bg-transparent px-3 py-2 text-sm placeholder:text-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-orange-500"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-lg font-medium leading-none text-orange-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-orange-300 bg-transparent px-3 py-2 text-sm placeholder:text-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-orange-500"
                      type="tel"
                      id="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-lg font-medium leading-none text-orange-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-orange-300 bg-transparent px-3 py-2 text-sm placeholder:text-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-orange-500"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                      rows={5}
                    />
                  </div>
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2 w-full rounded-md px-3 py-2 font-bold text-white shadow-sm text-xl hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 bg-gradient-to-br from-orange-300 to-orange-600"
                  >
                    Send Message <RiSendPlaneLine size={24} />
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="/contact.svg"
            />
          </div>
        </div>
      </motion.div>
      <hr className="mt-6" />
    </>
  );
};

export default Contact;
