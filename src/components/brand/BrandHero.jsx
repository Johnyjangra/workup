import React, { useState } from "react";
import Header from "../common/Header";
import dots from "../../assets/svg/BrandHeroBg.svg";
const BrandHero = () => {
  const [typicalform, setTypicalForm] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      typicalform.name !== "" &&
      typicalform.email !== "" &&
      regex.test(typicalform.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        email: "",
      });
    }
  };
  return (
    <div className="bg-[url('./assets/webp/BrandHeroBg.webp')] bg-no-repeat bg-cover relative sm:min-h-[455px]">
      <img
        src={dots}
        alt="dots"
        className=" absolute top-[50%] start-0 translate-y-[-50%] pointer-events-none lg:block hidden"
      />
      <Header />
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        <p className="text-white ff_outfit font-semibold text-[48px] 2xl:text-[60px] leading-[120%] text-center mt-[15px]">
          Investment
        </p>
        <p className="text-[#DFDDFD] text-center ff_inter text-xs sm:text-sm 2xl:text-[20px] font-normal mt-2 mb-7">
          The is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
        {/* inputs */}
        <form onSubmit={(e) => OnsubmitHandler(e)}>
          <div className="flex sm:flex-row flex-col items-center justify-center mb-5">
            <div className="w-full md:w-[350px] ">
              <p className=" text-white ff_inter text-base 2xl-[20px] font-normal mb-2">
                Full Name
              </p>
              <input
                type="text"
                className="px-4 pt-4 pb-[17px] bg-[rgba(255,255,255,0.20)] rounded-lg md:w-[350px] w-full text-[#EEECFD] text-xs sm:text-sm 2xl:text-[18px] placeholder:text-sm font-normal placeholder:font-normal border-[#CBC7FA] border focus-visible:outline-none placeholder:text-[#EEECFD] h-[52px]"
                placeholder="Your first name"
                onChange={(e) =>
                  setTypicalForm({ ...typicalform, name: e.target.value })
                }
                value={typicalform.name}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none  h-[24px] ms-[16px]">
                {error && typicalform.name === ""
                  ? "Name is required"
                  : error && typicalform.name === false}
              </p>
            </div>
            <div className="sm:ms-6 sm:mt-0 mt-5 w-full md:w-[350px]">
              <p className=" text-white ff_inter text-base 2xl-[20px] font-normal mb-2">
                Email
              </p>
              <input
                type="email"
                className="px-4 pt-4 pb-[20px] bg-[rgba(255,255,255,0.20)] rounded-lg md:w-[350px] w-full text-[#EEECFD] text-xs sm:text-sm 2xl:text-[18px] placeholder:text-sm font-normal placeholder:font-normal border-[#CBC7FA] border focus-visible:outline-none placeholder:text-[#EEECFD] h-[52px]"
                placeholder="Email address"
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalform,
                    email: e.target.value,
                  })
                }
                value={typicalform.email}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ms-[16px]">
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
          <div className="flex justify-center pb-10">
            <button className="text-[#666666] text-xs sm:text-sm 2xl:text-[18px] font-normal ff_inter border rounded-full bg-white w-[182px] input_border_gradient h-[47px] flex justify-center items-center hover:bg-btnGradient hover:text-white transition-all ease-in-out duration-200">
              join waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandHero;
