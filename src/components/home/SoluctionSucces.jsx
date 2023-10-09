import React from "react";
import mission from "../../assets/png/solution-mission.png"
import vision from "../../assets/png/solution-vision.png"
import value from "../../assets/png/solution-value.png"
const SoluctionSucces = () => {
  return (
    <>
      <div className="lg:pt-[60px] xl:pb-[122px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center">
            <div className="lg:w-5/12">
              <h2
                className="ff_railway text-lightBlack lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium leading-normal mb-0 lg:mb-[14px] inline-block pt-8 lg:pt-0 relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-3%] before:content-[''] before:start-0">Solution
              </h2>
              <p className="ff_inter text-xs sm:text-sm text-black opacity-70 font-normal mb-0 leading-[160%]">
              We grasp the struggles of business finance management and the risks of losing control. WorkUp's AI automation solution restores control, automating tax payments, securing profits, and managing expenses with ease
              </p>
            </div>
            <div className="lg:w-[6/12]">
             <div>
                <img className="mx-auto xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[165px] w-[165px] translate-y-[18%]"src={mission} alt="mission-circle" />
                <img className="xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[165px] w-[165px] inline-block translate-y-[-15%] translate-x-[10%]" src={vision} alt="vision" />
                <img className="xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[165px] w-[165px] inline-block translate-y-[-15%] translate-x-[-10%]" src={value} alt="value" />
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoluctionSucces;
