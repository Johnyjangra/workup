import React from "react";
import mission from "../../assets/webp/our-mission-img.webp";
import dotsImg from "../../assets/png/mission-left-img.png";
import smallImg from "../../assets/png/feature-dots-img.png"
const OurMisson = () => {
  return (
    <>
      <div className="bg-[#F7FCFE] lg:py-[85px] py-10 relative overflow-hidden">
        <img className="absolute pointer-events-none top-[7%] start-0 sm:w-[10%] md:w-[10%] lg:w-[7%] xxl:w-[unset] hidden sm:block" src={dotsImg} alt="dots-img" />
        <img className="absolute pointer-events-none bottom-[-8%] end-0" src={smallImg} alt="dots-img" />
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px]  mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-between items-center">
            <div className="lg:w-6/12 sm:w-9/12 mx-auto lg:mx-[unset]">
              <img
                className="lg:h-[481px] lg:w-[534px] w-full"
                src={mission}
                alt="about-mission"
              />
            </div>
            <div className="lg:w-5/12 lg:pe-[30px]">
              <h2 className="ff_railway text-lightBlack lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] font-medium leading-normal mb-0 lg:mb-[14px] inline-block pt-8 lg:pt-0
              "><span className="relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-20%] before:content-[''] before:start-0">Our Miss</span>ion</h2>
              <p className="ff_inter text-xs sm:text-sm text-black opacity-70 2xl:text-base font-normal mb-0 leading-[160%]">
                Our mission is to harness the power of AI-driven automation to
                empower Australian businesses. We propel all sized businesses
                towards success by automating financial tasks, from tax payments
                to bank transfers, report building. Creating an ecosystem where
                AI acts as the autopilot for finance. Join us in building a
                future where businesses thrive effortlessly and reach new
                heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMisson;
