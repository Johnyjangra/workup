import React from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg"
const OurWaitList = () => {
  return (
    <>
      <div>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="h-[198px] w-[761px] mx-auto bg-gradientOne rounded-2xl">
            <h2 className="ff_outfit text-white font-medium text-xl text-center">Join our waitlist</h2>
            <div className="bg-white h-[52px] max-w-[464px] mx-auto">
                <input type="text" />
                <button><img src={arrow} alt="arrow" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWaitList;
