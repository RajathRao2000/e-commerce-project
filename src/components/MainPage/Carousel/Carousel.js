import React from "react";
import herogreen from "../../../assets/images/hero-green-product-edited-transp.png";
import heroblue from "../../../assets/images/hero-blue-product.jpg";
import herolaptop from "../../../assets/images/hero-laptop.jpg";
import { useReducer } from "react";
import Image from "next/image";
const BLUE = "BLUE";
const GREEN = "GREEN";


const Carousel = () => {
  const initial = {
    blue: true,
    green: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "BLUE":
        return { blue: true, green: false };
      case "GREEN":
        return { blue: false, green: true };
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <>
      <div
        className={`carousel-bg relative  ${
          state.blue ? "bg-[#f4fffe]" : "bg-green-50"
        }`}
      >
        <div className="carousel overflow-hidden h-[800px] md:h-[500px] relative flex w-screen ">
          <div
            className={`absolute ${
              state.blue ? " translate-x-0 " : " translate-x-[-100%] "
            } transition-transform`}
          >
            <div
              className={`hero-container1 flex-shrink-0 bg-[#f4fffe] relative  flex items-center flex-col md:h-auto md:min-h-[50vh] w-screen md:flex border-black`}
            >
              <div
                className={`flex flex-col-reverse gap-5 items-center max-w-[500px] md:flex-row md:max-w-none md:h-full `}
              >
                <div className="text p-3 grid gap-3 text-center md:text-left md:w-[350px] md:p-7 md:pr-0">
                  <h1 className="text-3xl font-bold">Unlock Your Inner Glow</h1>
                  <p className="text-xl">
                    Feel confident in your skin with Healthy Skin. Our premium
                    formula helps you achieve a radiant, flawless complexion
                    effortlessly
                  </p>
                </div>
                <div className="image md:w-full md:max-w-[500px] md:h-[500px]">
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
                    src={heroblue.src}
                    alt="blue-cosmetics"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute ${
              state.green ? "translate-x-0" : "translate-x-[100%] "
            } transition-transform`}
          >
            <div
              className={`hero-container2 w-screen bg-green-50  flex-shrink-0 relative  flex items-center flex-col md:h-auto md:min-h-[50vh] border-black md:flex `}
            >
              <div
                className={`flex flex-col-reverse gap-5 items-center max-w-[500px] md:flex-row md:max-w-none md:h-full `}
              >
                <div className="text p-3 grid gap-3 text-center md:text-left md:w-[350px] md:p-7 md:pr-0">
                  <h1 className="text-3xl font-bold">Unlock Your Inner Glow</h1>
                  <p className="text-xl">
                    Feel confident in your skin with Healthy Skin. Our premium
                    formula helps you achieve a radiant, flawless complexion
                    effortlessly
                  </p>
                </div>
                <div className="image md:w-full md:max-w-[500px] md:h-[500px]">
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
                    src={herogreen.src}
                    alt="green-cosmetics"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 ">
          <div className="carousel-btns flex gap-2 justify-center items-center">
            <button className=" " onClick={() => dispatch({ type: BLUE })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#009ca2"
                  stroke="black"
                  strokeWidth={state.blue ? 6 : 4}
                  d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
                ></path>
              </svg>
            </button>
            <button onClick={() => dispatch({ type: GREEN })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#51a13f"
                  stroke="black"
                  strokeWidth={state.green ? 6 : 4}
                  d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
