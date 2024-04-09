import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappLine } from "@remixicon/react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 bg-base-200">
      <div className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-2xl font-bold md:text-4xl">Get in touch</p>
              <p className="mt-4 text-lg text-gray-400">
                Our friendly team would love to help you.
              </p>
              <div className="mt-8 space-y-4">
                <Link to={"https://alvo.chat/4h0s"}>
                  <button className="btn btn-info w-full text-white">
                    <RiWhatsappLine /> WhatsApp
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <img
            alt="Contact us"
            className="hidden max-h-full w-[450px] rounded-lg object-cover lg:block"
            src="./../../../public/contact.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
