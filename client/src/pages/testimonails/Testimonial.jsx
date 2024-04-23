import React from "react";
import { RiCodeBlock, RiFlashlightLine } from "@remixicon/react";
import Logo from "../../components/logo/Logo";
const Testimonial = () => {
  return (
    <>
      <div className="stats shadow flex justify-around items-center text-center">
        <div className="stat">
          <div className="stat-figure text-cyan-500">
            <RiCodeBlock size={40} />
          </div>
          <div className="stat-title">Total Projects</div>
          <div className="stat-value text-cyan-500">10+</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-info">
            <RiFlashlightLine size={40} />
          </div>
          <div className="stat-title">Satisfied Clients</div>
          <div className="stat-value text-info">100+</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <Logo />
          </div>
          <div className="stat-value">100%</div>
          <div className="stat-title">Tasks done by us</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
