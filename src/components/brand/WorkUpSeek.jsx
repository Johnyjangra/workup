import React from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg";
const WorkUpSeek = () => {
  return (
    <>
      <div className="bg-[#F7FCFE] py-32 mt-5 mb-20 md:mb-32 sm:mb-30">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-center text-lightBlack ff_outfit font-medium leading-[106%] tracking-[-0.24px] text-lg relative after:contents-[''] after:absolute after:w-[114px] after:start-[50%] after:translate-x-[-50%] after:h-[4px]  after:rounded-md after:bg-[#1C1D1D] after:top-[-26%]">
            What does
          </p>
          <p className=" text-center mt-[6px] text-lightBlack font-medium leading-[106%] tracking-[-0.4px] ff_outfit text-xl">
            WorkUp Seek?
          </p>
          <div className="flex justify-center mt-4 pt-2">
            <p className=" text-[#4A4C4C] text-center ff_inter sm:text-md text-[16px] font-normal leading-[160%] max-w-[641px]">
              We are seeking an aligned and powerful partnership
              with...........who shares our vision for empowering the world of
              business. Together, we aim to revolutionise the way businesses
              manage their finances and offer exceptional value to our
              customers.
            </p>
          </div>
          <form className="bg-white group h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto waitlistshado rounded-[100px] ps-[22px] flex items-center justify-between xl:mt-14 mb-0 input_border_gradient shadow mt-9">
            <input
              required
              className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#4D4D4D]"
              type="text"
              placeholder="Enter email to join waitlist"
            />
            <button className="bg-btnGradient h-[32px] sm:h-[36px] w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
              <img
                className="group-hover:translate-x-[7px] transition duration-300"
                src={arrow}
                alt="arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkUpSeek;
