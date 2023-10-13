import React from "react";

const RegisterNow = () => {
  return (
    <>
      <div className="py-10">
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <form className="max-w-[946px] mx-auto px-[52px] pt-[43px] pb-[52px] shadow-lg leading-normal rounded-xl">
            <h3 className="ff_outfit text-black text-base sm:text-[20px] opacity-70 font-semibold leading-normal mb-3">Register Now</h3>
            <p className="ff_inter text-base test-black opacity-70 leading-normal mb-10 font-normal text-black">Let’s empower the world of business together.</p>
            <div className="flex gap-10">
              <div className="w-full mb-[36px]">
                <p className="ff_inter text-base test-black opacity-80 leading-normal font-normal text-black mb-[11px]">Full Name</p>
                <input className="border h-[52px] p-4 border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-black opacity-40 placeholder:ff_inter outline-none" placeholder="Name" type="text" />
              </div>
              <div className="w-full">
                <p className="ff_inter text-base test-black opacity-80 leading-normal font-normal text-black mb-[11px]">Email</p>
                <input className="border h-[52px] p-4 border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-black opacity-40 placeholder:ff_inter outline-none" placeholder="Email" type="Email" />
              </div>
            </div>
            <p className="ff_inter text-base test-black opacity-80 leading-normal font-normal text-black mb-4">About You</p>
            <textarea className="p-4 mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[150px] resize-none outline-none"></textarea>
            <p className="ff_inter text-base test-black opacity-80 leading-normal font-normal text-black mb-4">Why WorkUp</p>
            <textarea className="p-4 mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[150px] resize-none outline-none"></textarea>
            <p className="ff_inter text-base test-black opacity-80 leading-normal font-normal text-black mb-4">Why You</p>
            <textarea className="p-4 mb-[36px] ff_inter text-black text-sm font-normal opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[150px] resize-none outline-none"></textarea>
            <h3 className="ff_outfit text-base font-normal leading-[112.5%] text-black mb-[27px]">Would be helpful if you had one of the follow, if not all good.</h3>
            {FormCard.map(())}
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterNow;
