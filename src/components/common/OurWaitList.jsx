import React from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg"
const OurWaitList = () => {
  return (
    <>
      <div>
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="h-[160px] sm:h-[198px] max-w-[761px] mx-auto bg-gradientOne rounded-2xl sm:px-12 px-8 flex flex-col items-center justify-center">
            <h2 className="ff_outfit text-white font-medium lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] text-center leading-[100%] mb-1 ms:mb-2 md:mb-5">Join our waitlist</h2>
            <form className="bg-white h-[44px] sm:h-[52px] w-full input_border_gradient !border-[1px] max-w-[464px] mx-auto waitlist_shado rounded-[100px] ps-[22px] flex items-center justify-between mt-3 sm:mt-2 mb-0">
              <input
                required
                className="w-full outline-none 2xl:text-base ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-gradientOne h-[32px] sm:h-[36px] group min-w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img className="group-hover:translate-x-[7px] transition duration-300" src={arrow} alt="arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWaitList;
