import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 md:px-0 bg-base-200 h-full ">
        <div className="my-4">
          <h1 className="text-5xl font-bold text-center">Our Amazing Team</h1>
          <p className="mt-2 text-gray-500 text-center text-xl">
            Our diverse team of talented individuals is committed to delivering
            excellence in every project. Together, we collaborate, innovate, and
            inspire to achieve remarkable results
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 mx-4 my-4">
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
                  src="https://media.licdn.com/dms/image/D4D03AQE4-CQwv6cbUw/profile-displayphoto-shrink_400_400/0/1697217256521?e=1718236800&v=beta&t=M9tZ9u1-Pm5mFdtOuwqqf1EgRjtqMLuh0uatKdEcTTM"
                  alt=""
                  className="z-0 h-full w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h1 className="text-xl font-bold text-black">
                    Avinash Pandey
                  </h1>
                  <h6 className="text-base font-semibold text-black">
                    Software Developer
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
