/* eslint-disable react/no-unknown-property */

const Logo = () => {
  return (
    <>
      {/* <p className="font-bold flex items-center cursor-pointer">
        <span className="text-gray-900">spheri</span>
        <span className="text-orange-500">soft</span>
      </p> */}
      <svg width="250" height="40" xmlns="http://www.w3.org/2000/svg">
        <text
          x={"20"}
          y={"35"}
          font-family="Arial"
          fontWeight={"bold"}
          font-size="30"
          fill="black"
        >
          spheri
        </text>
        <text
          x={"110"}
          y={"35"}
          font-family="Arial"
          fontWeight={"bold"}
          font-size="30"
          fill="#FB773C"
        >
          soft
        </text>
      </svg>
    </>
  );
};

export default Logo;
