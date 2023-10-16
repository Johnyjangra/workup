import React, { useState } from "react";
import Header from "../common/Header";
import arrow from "../../assets/svg/waitlist-arrow.svg"
const FounderHero = () => {
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
    <div className="bg-[url('./assets/webp/BrandHeroBg.webp')] bg-no-repeat bg-cover">
      <Header />
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 pb-[80px] sm:pb-[95px]">
        <h2 className="text-white ff_outfit font-semibold text-[32px] sm:text-[38px] md:text-10 lg:text-[48px] 2xl:text-[60px] leading-[120%] text-center mt-10">
        Become a Co-founder
        </h2>
        <p className="text-[#DFDDFD] text-center ff_inter text-xs sm:text-sm 2xl:text-[20px] font-normal mt-2 max-w-[553px] 2xl:max-w-[600px] mx-auto">
        The is a long established fact that a reader will be distracted by the readable content of a page.
        </p>
        <form className="bg-white relative h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto rounded-[100px] ps-[22px] flex items-center justify-between mt-4 input_border_gradient">
              <input
               
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalform,
                    email: e.target.value,
                  })
                }
                value={typicalform.email}
                className="w-full 2xl:text-base outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="email"
                placeholder="Enter email to join waitlist"
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
              <button  onClick={OnsubmitHandler} className="bg-gradientOne group h-[32px] sm:h-[36px] min-w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className="group-hover:translate-x-[7px] transition duration-300"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
      </div>
    </div>
  );
};

export default FounderHero;
