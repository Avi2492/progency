import React from "react";
import { RiCodeBlock, RiFlashlightLine } from "@remixicon/react";
import Logo from "../../components/logo/Logo";
const Testimonial = () => {
  return (
    <>
      <div className="stats shadow flex justify-center items-center text-center">
        <div className="stat">
          <div className="stat-figure text-cyan-500">
            <RiCodeBlock size={40} />
          </div>
          <div className="stat-title">Total Projects</div>
          <div className="stat-value text-cyan-500">10k+</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-info">
            <RiFlashlightLine size={40} />
          </div>
          <div className="stat-title">Satisfied Students</div>
          <div className="stat-value text-info">20k+</div>
          <div className="stat-desc">51% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <Logo />
          </div>
          <div className="stat-value">100%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc">by us</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
