import React, { useState } from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg";
import liner from "../../assets/svg/workUpSeekLiner.svg";
const WorkUpSeek = () => {
  const [typicalform, setTypicalForm] = useState({
    email: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (typicalform.email !== "" && regex.test(typicalform.email)) {
      setError(false);
      setTypicalForm({
        email: "",
      });
    }
  };
  return (
    <>
      <div className="relative">
        <img
          src={liner}
          alt="liner"
          className="absolute xl:end-[-15%] md:end-[-20%] end-[-25%] top-[-15%] pointer-events-none"
        />
        <div className="bg-[#F7FCFE] md:py-[70px] py-12 overflow-hidden mt-5 mb-10 md:mb-[70px] lg:mb-32">
          <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
            <p className="text-center text-lightBlack ff_outfit font-medium leading-[106%] tracking-[-0.24px] text-lg 2xl:text-[26px] relative after:contents-[''] after:absolute after:w-[114px] after:start-[50%] after:translate-x-[-50%] after:h-[4px]  after:rounded-md after:bg-[#1C1D1D] after:top-[-26%]">
              What does
            </p>
            <p className=" text-center mt-[6px] text-lightBlack font-medium leading-[106%] tracking-[-0.4px] ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] 2xl:text-[44px]">
              WorkUp Seek?
            </p>
            <div className="flex justify-center mt-4 pt-2">
              <p className=" text-[#4A4C4C] text-center ff_inter 2xl:text-[22px] sm:text-md text-[16px] font-normal leading-[160%] max-w-[641px]">
                We are seeking an aligned and powerful partnership
                with...........who shares our vision for empowering the world of
                business. Together, we aim to revolutionise the way businesses
                manage their finances and offer exceptional value to our
                customers.
              </p>
            </div>
            <form
              className="bg-white group h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto waitlistshado rounded-[100px] ps-[22px] flex items-center justify-between mb-0 input_border_gradient shadow mt-9"
              onSubmit={(e) => OnsubmitHandler(e)}
            >
              <input
                className="w-full outline-none ff_inter text-xs sm:text-sm 2xl:text-[18px] font-normal leading-normal text-[#666666] placeholder:text-[#4D4D4D]"
                type="email"
                placeholder="Enter email to join waitlist"
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalform,
                    email: e.target.value,
                  })
                }
                value={typicalform.email}
              />
              <button className="bg-btnGradient h-[32px] sm:h-[36px] min-w-[70px] max-w-[70px]: rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className="group-hover:translate-x-[7px] transition duration-300"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
            <p className="mb-0 text-rose-500 font-medium pointer-events-none  h-[24px] sm:text-center text-start sm:ms-0 ms-5 sm:me-[300px]">
              {error && typicalform.email === "" ? (
                "Email is required"
              ) : error && regex.test(typicalform.email) === false ? (
                <p className="text-rose-500 font-medium">Email Not Valid</p>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkUpSeek;
