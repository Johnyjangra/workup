import React from "react";
import { FormCard } from "../common/Helper";
const RegisterNow = () => {
  return (
    <>
      <div className="lg:pt-[111px] py-12 xl:pb-[105px] relative">
        <img src="" alt="" />
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <form className="max-w-[946px] mx-auto px-4 sm:px-8 lg:px-[52px] sm:pt-8 lg:pt-[43px] py-6 sm:pb-8 lg:pb-[52px] shadow-lg leading-normal rounded-xl">
            <h3 className="ff_outfit text-black text-base sm:text-[20px] opacity-70 font-semibold leading-normal mb-3">
              Register Now
            </h3>
            <p className="ff_inter text-xs sm:text-base test-black opacity-70 leading-normal mb-6 lg:mb-10 font-normal text-black">
              Let’s empower the world of business together.
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <div className="w-full mb-4 sm:mb-5 lg:mb-[36px]">
                <p className="ff_inter text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-[11px]">
                  Full Name
                </p>
                <input
                  className="border h-[45px] sm:h-[52px] p-4 border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-black opacity-40 placeholder:ff_inter outline-none"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="w-full mb-5 sm:mb-0">
                <p className="ff_inter text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-[11px]">
                  Email
                </p>
                <input
                  className="border h-[45px] sm:h-[52px] p-4 border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-black opacity-40 placeholder:ff_inter outline-none"
                  placeholder="Email"
                  type="Email"
                />
              </div>
            </div>
            <p className="ff_inter text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-3 lg:mb-4">
              About You
            </p>
            <textarea className="p-4 mb-5 lg:mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"></textarea>
            <p className="ff_inter text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-3 lg:mb-4">
              Why WorkUp
            </p>
            <textarea className="p-4 mb-5 lg:mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"></textarea>
            <p className="ff_inter text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-3 lg:mb-4">
              Why You
            </p>
            <textarea className="p-4 mb-5 lg:mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"></textarea>
            <h3 className="ff_outfit text-xs sm:text-base font-normal leading-[112.5%] text-black mb-[27px]">
              Would be helpful if you had one of the follow, if not all good.
            </h3>

            <div className="flex flex-wrap">
              {FormCard.map((obj, i) => {
                return (
                  <div
                    key={i}
                    className={`${ i === 0 ? "sm:pr-3" : i === 2 ? "sm:pr-3" : "sm:pl-1 lg:pl-0"} lg:w-3/12 w-full sm:w-6/12 pb-4 lg:pb-0`}
                  >
                    <div
                      className="border items-center border-[#E5E5E5] px-[10px] border-solid rounded-xl flex w-full lg:w-[190px] h-[70px]"
                    >
                      <span>{obj.icon}</span>
                      <h5 className="ff_outfit ps-[10px] mb-0 text-[#1d1d1d] opacity-70 text-xs font-normal leading-[120%]">
                        {obj.heading}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="ff_inter text-xs sm:text-base text-white font-semibold h-[46px] w-[149px] bg-btnGradient rounded-[100px] lg:mt-[45px] mt-1 sm:mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterNow;
