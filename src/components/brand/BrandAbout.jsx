import React from "react";
import AboutImage from "../../assets/webp/AboutImage.webp";
import AboutTop from "../../assets/svg/AboutTopDots.svg";
import AboutBottom from "../../assets/svg/AboutBottomDot.svg";
const BrandAbout = () => {
  return (
    <>
      <p className="text-center ff_outfit font-semibold text-xl text-lightBlack leading-[120%] mt-16 relative after:contents-[''] after:absolute after:w-[132px] after:start-50 after:translate-x-[-120%] after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] mb-24">
        Pitch Deck
      </p>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        <div className="flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse">
          <div className="lg:w-5/12 w-full lg:mt-0 mt-5">
            <p className="ff_outfit font-medium lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-Black leading-normal relative after:contents-[''] after:absolute after:w-[132px] after:start-0 after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] mb-0">
              About Us
            </p>
            <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[485px] lg:mt-5 mt-1">
              WorkUp is a
              <span className="font-medium">
                comprehensive banking solution
              </span>
              designed specifically for Australian SMEs and accounting
              professionals,
              <span className="font-medium">
                offering an automated approach to managing business finances.
              </span>
            </p>
            <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[451px] mt-2">
              Our minimum viable product (MVP) will include
              <span className="font-medium">
                seamless integration with Xero
              </span>
              , the renowned accounting software, as well as Australian business
              transaction accounts featuring auto rules for automated payments
              and transfers
            </p>
          </div>
          <div className="lg:w-6/12 w-full relative">
            <img
              src={AboutTop}
              alt="AboutTop"
              className=" absolute pointer-events-none start-[13%] top-[3%]"
            />
            <img
              src={AboutBottom}
              alt="AboutTop"
              className=" absolute end-0 pointer-events-none bottom-[10%]"
            />
            <img src={AboutImage} alt="AboutImage" className="relative z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAbout;
