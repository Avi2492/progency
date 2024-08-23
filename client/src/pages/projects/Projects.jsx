import { RiExternalLinkLine } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Replibot - Anonymous Message Platform",
    description:
      "Receive spontaneous and unbiased feedback on any subject to spark creativity and enhance your projects. Perfect for fresh perspectives and constructive insights.",
    poster: "/replibot.jpg",
    weblink: "https://replibot.vercel.app/",
  },
  {
    title: "Moviesplixer - A movie and series web app",
    description:
      "Moviesplixer, where your streaming experience is personalized and seamless. Our platform boasts a range of features designed to enhance your enjoyment of movies.",
    poster: "/movieplixer.jpg",
    weblink: "https://moviesplixer.vercel.app/",
  },
  {
    title: "Carenow - Doctor appointment booking app",
    description:
      "CareNow is a comprehensive doctor's appointment app designed to connect patients with healthcare providers seamlessly.",
    poster: "/carenow.jpg",
    weblink: "https://carenow.vercel.app/",
  },
];

const Projects = () => {
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
            Projects we have{" "}
            <span className="text-orange-500 font-bold">Completed</span>
          </p>
          <p className="mx-auto max-w-5xl text-center text-base text-gray-600 md:text-xl">
            At Spherisoft, we take pride in delivering high-quality digital
            solutions that make a real impact. Here’s a showcase of some of our
            recent projects across various industries. Each project reflects our
            commitment to innovation, creativity, and excellence.
          </p>
        </div>

        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border">
              <img
                src={post.poster}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="mb-2 flex justify-center">
                <Link to={post.weblink}>
                  <button className="bg-gradient-to-br from-orange-300 to-orange-600 text-white p-1 rounded-lg cursor-pointer flex gap-2 py-1 px-2">
                    <RiExternalLinkLine size={24} /> Live
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <hr className="mt-6" />
    </>
  );
};

export default Projects;
