import React from "react";
import { RiExternalLinkLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0 bg-base-200 h-full">
      <div className="my-2">
        <h1 className="text-5xl font-bold text-center mt-2">Our Projects</h1>
        <p className="mt-8 text-gray-500 text-center text-xl">
          Our projects exemplify innovative solutions crafted to meet diverse
          business needs. With a focus on efficiency and scalability, our
          creations promise to elevate your company's operations, driving growth
          and enhancing competitiveness in today's dynamic market landscape.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 mx-4 my-8">
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg"
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-bold text-base-200">
                  Shopping Web App
                </h1>
                <h6 className="text-base font-semibold text-base-200">
                  <Link
                    to={"https://online-shopping-app-eight.vercel.app/"}
                    className="flex gap-2"
                  >
                    Live Website <RiExternalLinkLine />
                  </Link>
                </h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-bold text-base-200">
                  Social Media App
                </h1>
                <h6 className="text-base font-semibold text-base-200">
                  <Link
                    to={"https://social-media-avinash.vercel.app/"}
                    className="flex gap-2"
                  >
                    Live Website <RiExternalLinkLine />
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-bold text-base-200">
                  Modern UI/UX AI Website
                </h1>
                <h6 className="text-base font-semibold text-base-200">
                  <Link
                    to={"https://uiux-website.vercel.app/"}
                    className="flex gap-2"
                  >
                    Live Website <RiExternalLinkLine />
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
