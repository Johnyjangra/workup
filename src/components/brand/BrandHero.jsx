import React from "react";
import Header from "../common/Header";
import dots from "../../assets/svg/BrandHeroBg.svg";
const BrandHero = () => {
  return (
    <div className="bgHeroBrand bg-no-repeat bg-cover relative">
      <img
        src={dots}
        alt="dots"
        className=" absolute top-[50%] start-0 translate-y-[-50%] pointer-events-none"
      />
      <Header />
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 mt-3">
        <p className="text-white ff_outfit font-semibold text-[48px] leading-[120%] text-center mt-16">
          Investment
        </p>
        <p className="text-[#DFDDFD] text-center ff_inter text-sm font-normal mt-2 mb-7">
          The is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
        {/* inputs */}
        <div className="flex sm:flex-row flex-col items-center justify-center sm:mb-10 mb-5">
          <div>
            <p className=" text-white ff_inter text-base font-normal mb-2">
              Full Name
            </p>
            <form>
              <input
                type="text"
                required
                className="p-4 bg-[rgba(255,255,255,0.20)] rounded-lg md:w-[350px] max-w-[350px] w-full text-[#EEECFD] text-sm placeholder:text-sm font-normal placeholder:font-normal border-[#CBC7FA] border focus-visible:outline-none placeholder:text-[#EEECFD]"
                placeholder="Your first name"
              />
            </form>
          </div>
          <div className="sm:ms-6 sm:mt-0 mt-5">
            <p className=" text-white ff_inter text-base font-normal mb-2">
              Email
            </p>
            <form>
              <input
                type="text"
                required
                className="p-4 bg-[rgba(255,255,255,0.20)] rounded-lg md:w-[350px] max-w-[350px] w-full text-[#EEECFD] text-sm placeholder:text-sm font-normal placeholder:font-normal border-[#CBC7FA] border focus-visible:outline-none placeholder:text-[#EEECFD]"
                placeholder="Email address"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-center pb-[30px]">
          <button className="text-[#666666] text-sm font-normal ff_inter border rounded-full bg-white py-[14px] w-[182px] input_border_gradient">
            join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandHero;
