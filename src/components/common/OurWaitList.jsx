import React, { useState } from "react";
import arrow from "../../assets/svg/waitlist-arrow.svg";
const OurWaitList = () => {
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
      <div>
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="h-[160px] sm:h-[198px] max-w-[761px] mx-auto bg-gradientOne rounded-2xl sm:px-12 px-4 flex flex-col items-center justify-center">
            <h2 className="ff_outfit text-white font-medium lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] text-center leading-[100%] mb-1 ms:mb-2 md:mb-5">
              Join our waitlist
            </h2>
            <form className="bg-white relative h-[40px] sm:h-[52px] w-full input_border_gradient !border-[1px] max-w-[464px] mx-auto waitlist_shado rounded-[100px] ps-[22px] flex items-center justify-between mt-3 sm:mt-2 mb-0">
              <input
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalform,
                    email: e.target.value,
                  })
                }
                className="w-full outline-none 2xl:text-base ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="Email"
                placeholder="Enter your email"
                value={typicalform.email}
              />
              <p className="mb-0 text-rose-500 font-medium absolute bottom-[-55%]">
                {error && typicalform.email === "" ? (
                  "Email is required"
                ) : error && regex.test(typicalform.email) === false ? (
                  <p className="text-rose-500 font-medium">Email Not Valid</p>
                ) : (
                  ""
                )}
              </p>
              <button
                onClick={OnsubmitHandler}
                className="bg-gradientOne h-[32px] sm:h-[36px] group min-w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]"
              >
                <img
                  className="group-hover:translate-x-[7px] transition duration-300"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWaitList;
