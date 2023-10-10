import React from "react";
import mission from "../../assets/png/solution-mission.png"
import vision from "../../assets/png/solution-vision.png"
import value from "../../assets/png/solution-value.png"
import right_img from "../../assets/png/soluction-right-img.png"
import dots_img from "../../assets/png/feature-dots-img.png"
const SoluctionSucces = () => {
  return (
    <>  
      <div className="lg:pt-[60px] xl:pb-[122px] relative pt-6 pb-12">
        <img className="absolute right-0 top-[-10%] hidden md:block lg:top-[-20%] md:w-[25%] lg:w-[20%] xl:w-[25%]" src={right_img} alt="like rainbow img" />
        <img className="absolute top-[6%] left-[-30px]" src={dots_img} alt="dots img" />
        <img className="absolute left-[1%] bottom-[0%] xl:bottom-[29%] hidden lg:block" src={dots_img} alt="dots img" />
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
                <img className="mx-auto xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[150px] w-[150px] translate-y-[18%]"src={mission} alt="mission-circle" />
                <img className="xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[150px] w-[150px] inline-block translate-y-[-15%] translate-x-[10%]" src={vision} alt="vision" />
                <img className="xl:h-[266px] xl:w-[266px] sm:h-[200px] sm:w-[200px] h-[150px] w-[150px] inline-block translate-y-[-15%] translate-x-[-10%]" src={value} alt="value" />
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoluctionSucces;
