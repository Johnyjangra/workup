import React from "react";
import BusnessModalImg from "../../assets/webp/BusinessModalImg.webp";
import sideLine from "../../assets/svg/BusinessImgLine.svg";
import BottomDot from "../../assets/svg/ModalBottomDot.svg";
const BusnessModal = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={sideLine}
          alt="sideLine"
          className="absolute max-w-[320px] max-h-[250px] top-[15%] w-full end-[-3%] pointer-events-none"
        />
        <img
          src={BottomDot}
          alt="BottomDot"
          className="absolute bottom-0 start-0 lg:block hidden pointer-events-none"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 md:py-32 sm:py-20 pt-20 pb-16">
          <div className="flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse">
            <div className="lg:w-5/12  w-full lg:mt-0 mt-10">
              <p className="ff_outfit font-medium lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-Black leading-normal relative after:contents-[''] after:absolute after:w-[200px] after:start-0 after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] mb-0 ">
                Business Model
              </p>
              <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[414px] lg:mt-5 mt-1">
                Our primary revenue model around a software-as-a-Services
                subscription model.
              </p>
              <p className="ff_inter text-xs sm:text-sm font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[414px]">
                Additionally, we anticipate through interchange fees. In the
                other revenue streams as leading insurance fetors terminal fees
                and more.
              </p>
            </div>
            <div className="lg:w-6/12 md:w-10/12 w-full relative">
              <img
                src={BusnessModalImg}
                alt="BusnessModalImg"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusnessModal;
