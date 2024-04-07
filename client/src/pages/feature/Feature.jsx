import React from "react";
import {
  RiLayout2Fill,
  RiOpenaiFill,
  RiGitPullRequestLine,
  RiArticleFill,
} from "@remixicon/react";

const Feature = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tightsm:text-4xl lg:text-5xl mb-2">
          Progency helps you build fast projects
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Empowering students and freshers, we specialize in providing expert
          assistance for projects, term papers, assignments, and research
          papers.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 mb-6">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <RiLayout2Fill className="h-9 w-9 text-info" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-info">
            Design & Development
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Crafting captivating digital experiences, we specialize in bespoke
            website development, blending innovation with functionality to
            elevate your online presence.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <RiOpenaiFill className="h-9 w-9 text-info" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-info">
            AI & Machine Learning
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Empower your business with cutting-edge AI and ML solutions tailored
            to your needs, driving efficiency and innovation.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <RiGitPullRequestLine className="h-9 w-9 text-info" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-info">
            IoT & Electronics
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Transforming concepts into connected realities, our IoT project
            development services seamlessly integrate cutting-edge technology to
            deliver innovative solutions tailored to your needs.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <RiArticleFill className="h-9 w-9 text-info" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-info">
            Term & Research Papers
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Need help tackling your term papers? Our expert writers craft
            top-notch papers tailored to your needs, ensuring academic success
            and timely completion of courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
