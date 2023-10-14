import React from "react";
import WhyDoesImage from "../../assets/png/workDoImg.png";
import sideImage from "../../assets/svg/WhatDoSideImg.svg";
import rightDots from "../../assets/svg/workUpRight.svg";
import dots from "../../assets/svg/workDoDot.svg";
const BrandWhatDo = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={sideImage}
          alt="sideImage"
          className="absolute xl:top-[31%] md:bottom-[-9%] bottom-[-7%] start-0 max-w-[100px] w-full lg:block hidden pointer-events-none"
        />
        <img
          src={rightDots}
          alt="rightDots"
          className=" absolute end-0 bottom-[-60%] pointer-events-none max-w-[150px] w-full lg:block hidden"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 md:mt-32 mt-16">
          <div className="flex flex-wrap items-center lg:flex-row flex-col">
            <div className="lg:w-6/12 md:w-10/12 w-full relative z-10">
              <img
                src={WhyDoesImage}
                alt="WhyDoesImage"
                className="lg:w-full w-11/12 pointer-events-none relative z-10"
              />
              <img src={dots} alt="dots" className="absolute top-[-30px] start-[-36px]" />
            </div>
            <div className="lg:w-6/12 w-full flex lg:justify-end lg:mt-0 mt-10">
              <div className="mb-0">
                <p className="ff_outfit font-medium lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-Black leading-normal relative after:contents-[''] after:absolute after:w-[202px] after:start-0 after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] mb-0">
                  What does WorkUp do?
                </p>
                <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[440px] lg:mt-5 mt-1">
                  WorkUp MVP is a{" "}
                  <span className="font-medium">cutting-edge banking</span>{" "}
                  automation & spend management platform that empowers users to
                  effortlessly open business transaction accounts and issue
                  <span className="font-medium">
                    {" "}
                    debit cards directly from our intuitive dashboard.
                  </span>
                </p>
                <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[451px] mt-2">
                  By seamlessly integrating with Xero accounting software, Work
                  Up leverages reconciliation matches and Xero tax amounts to
                  automate financial rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandWhatDo;
