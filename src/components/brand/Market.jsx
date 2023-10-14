import React from "react";
import linerSide from "../../assets/svg/marketLiner.svg";
const Market = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={linerSide}
          alt="linerSide"
          className="start-0 absolute pointer-events-none lg:bottom-[-10%] md:bottom-[-20%] md:block hidden"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 lg:mt-28 lg:mb-[167px] mb-[80px] mt-16">
          <div className="flex flex-wrap xl:flex-row flex-col items-center ">
            <div className="xl:w-[35%] md:w-6/12 w-full flex flex-col justify-center ">
              <div className="bgPinkMarket bg-no-repeat bg-center bg-contain xl:py-2 lg:py-5 pe-16 xl:translate-x-[25px]">
                <p className="ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-white text-center font-medium leading-[135%]">
                  2.4
                </p>
                <p className="ff_outfit text-center font-semibold sm:text-md text-[15px] leading-[125%] text-white">
                  Million
                </p>
                <p className="text-center text-white sm:text-md text-[15px] font-light leading-[135%] pb-2 ff_outfit">
                  Australian customers
                </p>
              </div>
            </div>
            <div className="xl:w-[30%] md:w-6/12 w-full flex justify-center">
              <div className="bgCircle bg-no-repeat bg-[100%_100%] sm:py-28 py-16 px-20 bg-center bg-contain">
                <p className="ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-black font-medium max-w-[200px] leading-[135%] text-center] text-center ">
                  How big is{" "}
                  <span className="sm:whitespace-normal whitespace-nowrap sm:flex block">
                    the target{" "}
                  </span>
                  market?
                </p>
              </div>
            </div>
            <div className="xl:w-[35%] md:w-6/12 w-full flex flex-col justify-center">
              <div className="bgBlueMarket bg-no-repeat bg-center bg-contain xl:py-2 lg:py-5 ps-16 xl:translate-x-[-25px]">
                <p className="ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-white text-center font-medium leading-[135%]">
                  400
                </p>
                <p className="ff_outfit text-center font-semibold sm:text-md text-[15px] leading-[125%] text-white">
                  Million
                </p>
                <p className="text-center text-white sm:text-md text-[15px] font-light leading-[135%] pb-2 ff_outfit">
                  Global customers
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:mt-10 mt-5">
            <div className="bg-white marketShadow py-10 md:px-12 px-4 max-w-[990px] after:contents-[''] after:absolute after:end-0 BackLayer relative after:w-[250px] after:h-[100px] after:top-0 after:bg-no-repeat after:bg-cover after:bg-center before:contents-[''] before:absolute before:w-[200px] before:h-[200px] before:start-0 before:bottom-0 before:bg-[100%_100%] before:bg-no-repeat after:pointer-events-none before:pointer-events-none rounded-xl">
              <p className="text-black text-center md:sm:text-md text-[15px] sm:text-[18px] ff_inter leading-[160%] font-normal">
                Our target market encompasses more than{" "}
                <span className="text-[#6790FE] font-medium">
                  2.4 million customers in Australis alone.
                </span>{" "}
                Furthermore on a global scale we estimate a potential customer
                base of{" "}
                <span className="text-[#6790FE] font-medium">
                  over 400million.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
