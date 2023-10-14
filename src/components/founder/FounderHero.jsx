import React from "react";
import Header from "../common/Header";
import arrow from "../../assets/svg/waitlist-arrow.svg"
const FounderHero = () => {
  return (
    <div className="bgHeroBrand bg-no-repeat bg-cover">
      <Header />
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 mt-3 pb-[119px]">
        <h2 className="text-white ff_outfit font-semibold text-[32px] sm:text-[38px] md:text-10 lg:text-[48px] leading-[120%] text-center mt-16">
        Become a Co-founder
        </h2>
        <p className="text-[#DFDDFD] text-center ff_inter text-xs sm:text-sm font-normal mt-2 max-w-[553px] mx-auto">
        The is a long established fact that a reader will be distracted by the readable content of a page.
        </p>
        <form className="bg-white group h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto rounded-[100px] ps-[22px] flex items-center justify-between mt-4 input_border_gradient">
              <input
                required
                className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="text"
                placeholder="Enter email to join waitlist"
              />
              <button className="bg-gradientOne h-[32px] sm:h-[36px] w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className="group-hover:translate-x-[7px] transition duration-300"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
      </div>
    </div>
  );
};

export default FounderHero;
