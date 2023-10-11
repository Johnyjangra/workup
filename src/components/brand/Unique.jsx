import React from "react";
import uniqueImg from "../../assets/webp/UniqueImg.webp";
import uniqueLayerText from "../../assets/svg/UniqueTextLayer.svg";
import uniqueImgLayer from "../../assets/svg/UniqeImgLayer.svg";
import { UniqueArrow } from "../common/Icons";
const Unique = () => {
  return (
    <>
      <div className="uniqueBg py-20 rounded-[10px] relative overflow-hidden lg:mt-0 mt-20">
        <img
          src={uniqueLayerText}
          alt="uniqueLayerText"
          className="absolute top-[-10%] end-[-15%] pointer-events-none lg:block hidden"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-6/12 w-full flex items-center justify-center relative xl:pe-10">
              <img
                src={uniqueImg}
                alt="uniqueImg"
                className="w-full max-w-[475px]"
              />
              <img
                src={uniqueImgLayer}
                alt="uniqueImgLayer"
                className="absolute pointer-events-none"
              />
            </div>
            <div className="lg:w-6/12 w-full sm:ps-3 lg:mt-0 mt-16 relative z-10">
              <p className=" text-white ff_outfit text-lg font-medium tracking-[-0.24px] leading-[106%] relative after:contents-[''] after:absolute after:w-[116px] after:start-0 after:h-[4px]  after:rounded-md after:bg-white after:top-[-36%]">
                What are WorkUp's
              </p>
              <p className="text-white ff_outfit sm:text-xl text-[30px] font-medium leading-[106%] mt-3">
                Unique insights?
              </p>
              <p className="text-[#D1DFFF] ff_inter md:text-md sm:text-[18px] text-[15px] font-normal leading-[160%] tracking-[-0.2px] mt-5 lg:max-w-[526px]">
                At WorkUp, we provide users with the exceptional ability to
                seamlessly automate their finances, ensuring they never overlook
                tax payments or accumulate tax debts. At our core, we take pride
                in being the exclusive integration platform that empowers users
                to seamless{" "}
                <span className="xl:whitespace-nowrap">
                  leverage the finest accounting software while automating
                </span>{" "}
                payments and transfers.
              </p>
              <div className="mt-9 border-[1px_solid_#7282FF] bg-white rounded-full overflow-hidden flex justify-between pe-2 py-2 max-w-[400px] ps-4">
                <input
                  type="text"
                  className="bg-white ff_inter sm:text-sm text-[13px] text-[#666666] font-normal py-2 ps-4 focus-visible:outline-none placeholder:text-[#666666]"
                  placeholder="Enter email to join waitlist"
                />
                <button className="UniqueBtn rounded-full p-[18px_27px] w-[90px] flex items-center justify-center group">
                  <UniqueArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;
