import React from "react";

const BrandProgress = () => {
  return (
    <>
      <div className="bg-[#F7FCFE] py-16">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className=" ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium text-black leading-[135%] text-center relative after:contents-[''] after:absolute after:w-[132px] after:start-50 after:md:translate-x-[-200%] after:h-[4px] after:rounded-md after:bg-blue after:top-[-6%] after:translate-x-[-150%]">
            What’s Our Progress?
          </p>
          <div className="flex justify-center mt-4 mb-12">
            <p className="text-center ff_inter text-md text-[#4A4C4C] font-normal max-w-[940px]">
              We have made substantial progress in our development journey. We
              initiated the design phase for our prototype, and we are now ready
              to commence development and fulfil the banking partnership
              requirements to launch the MVP as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProgress;
