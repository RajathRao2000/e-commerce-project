import React from "react";
import { useRouter } from "next/router";

import hero from "../../../../public/assets/images/hero_bg.jpg";

console.log(hero)

const HeroSection = () => {
  const router = useRouter();
  const before =
    "before:absolute before:w-screen before:h-full before:bg-black/70 h-[50vh]";

  return (
    <div className="hero-container relative h-[50vh] min-h-[660px] ">
      <div
        style={{ backgroundImage: `url(${hero.src})` }}
        className={`w-screen bg-cover bg-no-repeat h-full min-h-[400px] relative ${before}`}
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <div className="text-5xl font-bold">
            Discover Limitless Possibilities:{" "}
            <p className="font-semibold">Shop Our Latest Collection Now!</p>
          </div>
          <div className="text flex flex-col gap-3">
            From fashion-forward finds to must-have essentials, explore a world
            of endless choices
            <button
              onClick={() => router.replace("/store")}
              className="p-3 w-fit bg-white text-black border-2 border-black font-bold  rounded-full hover:brightness-50 flex items-center gap-2"
            >
              <p className=" leading-none pb-1">Explore Now </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
