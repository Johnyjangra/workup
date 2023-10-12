import React from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg";
import heroImg from "../../assets/svg/hero.svg";
import heroIconOne from "../../assets/svg/hero-icon-layer-one.svg";
import heroIconTwo from "../../assets/svg/hero-icon-layer-two.svg";
import heroIconDotted from "../../assets/svg/hero-dotted-img.svg";
import heroIconDottedTwo from "../../assets/svg/hero-dotted-img-2.svg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute end-0 top-[-10%] -z-10 hidden sm:block"
          src={heroIconOne}
          alt="hero-icon-layer-one"
        />
        <img
          className="absolute bottom-[0%] hidden sm:block"
          src={heroIconTwo}
          alt="hero-icon-layer-one"
        />
        <img
          className="absolute top-[20%] hidden sm:block"
          src={heroIconDotted}
          alt="hero-icon-layer-one"
        />
        <img
          className="absolute end-0 hidden sm:block"
          src={heroIconDottedTwo}
          alt="hero-icon-layer-one"
        />
        <img
          className="absolute end-0 bottom-0 hidden sm:block"
          src={heroIconDottedTwo}
          alt="hero-icon-layer-one"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 text-center xlpt-10 calc_height_custom flex justify-evenly items-center flex-col">
          <div>
            <h1 className="text-[28px] sm:text-xl xl:text-2xl ff_outfit font-semibold text-black leading-[110%]">
              Superpower your business finance
            </h1>
            <p className="text-md sm:text-lg ff_outfit pt-2 sm:pt-0 xl:pt-2">
              Empowering Autopilot Automation
            </p>
            <form className="bg-white h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto waitlistshado rounded-[100px] ps-[22px] flex items-center justify-between mt-3 xl:mt-14 mb-0 input_border_gradient shadow">
              <input
                required
                className="wfull outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-gradientOne h-[32px] sm:h-[36px] w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img src={arrow} alt="arrow" />
              </button>
            </form>
          </div>
          <div className="pt-8 lg:pt-4 relative">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
