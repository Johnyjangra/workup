import React from "react";
import { FeatureData } from "../common/Helper";
import right_img from "../../assets/png/feature-right-img.png"
import dots_img from "../../assets/png/feature-dots-img.png"
const Feature = () => {
  return (
    <>
      <div className="lg:pb-[126px] lg:pt-[115px] py-10 relative">
        <img className="absolute end-0 top-[5%] w-[9%] hidden xl:block" src={right_img} alt="dots" />
        <img className="absolute left-[-1%] hidden xl:block top-[24%]" src={dots_img} alt="dots-group" />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <h2 className=" ff_outfit text-lightBlack lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium leading-[120%] text-center mb-8 lg:mb-[57px]">
            Plugs & Play Features
          </h2>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[24px] place-items-center content-center relative">
          <img className="absolute left-[10%] top-[60%] hidden xl:block" src={dots_img} alt="dots-group" />
          <img className="absolute right-[21.5%] h-[50px] w-[31px] bottom-[-5%] hidden xl:block" src={dots_img} alt="dots-group" />
            {FeatureData.map((MyData, i) => {
              return (
                <div
                  className={`${
                    i === 0
                      ? "max-[639.98px]:w-[80%] xl:col-[1/2] xl:row-[1/2] md:row-[1/2] md:col-[1/2]"
                      : i === 1
                      ? "max-[639.98px]:w-[80%] xl:col-[2/3] xl:row-[1/2] md:row-[1/2] md:col-[2/3]"
                      : i === 2
                      ? "max-[639.98px]:w-[80%] xl:col-[3/4] xl:row-[1/2] md:row-[1/2] md:col-[3/4]"
                      : i === 3
                      ? "max-[639.98px]:w-[80%] xl:col-[4/5] xl:row-[1/2] md:row-[2/3] md:col-[1/2]"
                      : i === 4
                      ? "max-[639.98px]:w-[80%] xl:col-[1/2] xl:row-[2/3] md:row-[2/3] md:col-[2/3] xl:translate-x-1/2"
                      : i === 5
                      ? "max-[639.98px]:w-[80%] xl:col-[2/3] xl:row-[2/3] md:row-[2/3] md:col-[3/4] xl:translate-x-1/2"
                      : i === 6
                      ? "max-[639.98px]:w-[80%] xl:col-[3/4] xl:row-[2/3] md:row-[3/4] md:col-[1/2] xl:translate-x-1/2"
                      : i === 7
                      ? "max-[639.98px]:w-[80%] xl:col-[2/3] xl:row-[3/4] md:row-[3/4] md:col-[2/3]"
                      : i === 8
                      ? "max-[639.98px]:w-[80%] xl:col-[3/4] xl:row-[3/4] md:row-[3/4] md:col-[3/4] sm:translate-x-1/2 md:translate-x-[unset]"
                      : i === 9
                  }`}
                  key={i}
                >
                  <div className="flex justify-center items-center flex-col h-[229px] mx-auto xl:w-[267px] bg-white rounded-xl border border-solid hover:border-0 border-[#E5E5E5] feature_card transition duration-300">
                    <span>{MyData.icon}</span>
                    <h4 className="ff_outfit text-lightBlack font-medium text-[18px] sm:text-md leading-[120%] pt-[26px] mb-3 sm:mb-4">
                      {MyData.heading}
                    </h4>
                    <p className="ff_inter text-xs sm:text-sm leading-normal text-black opacity-70 text-center px-4 sm:px-[36px] md:px-4 lg:px-[36px]">
                      {MyData.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
