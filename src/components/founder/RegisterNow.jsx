import React, { useState } from "react";
import { FormCard } from "../common/Helper";
import {
  FormDotsGroup,
  FormLeftBottom,
  FormRightImg,
  FormTopLeft,
} from "../common/Icons";

const RegisterNow = () => {
  const [typicalform, setTypicalForm] = useState({
    name: "",
    email: "",
    aboutus: "",
    workup: "",
    myYou: "",
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
      typicalform.aboutus !== "" &&
      typicalform.workup !== "" &&
      typicalform.myYou !== "" &&
      regex.test(typicalform.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        email: "",
        aboutus: "",
        workup: "",
        myYou: "",
      });
    }
  };
  return (
    <>
      <div className="lg:pt-[111px] sm:pb-12 pb-2 pt-12 sm:pt-[70px] xl:pb-[92px] relative">
        <span className="absolute top-0 start-0 hidden xl:block">
          <FormTopLeft />
        </span>
        <span className="absolute start-0 bottom-[30%] w-[6%] hidden xl:block">
          <FormLeftBottom />
        </span>
        <span className="absolute end-0 top-[60%] w-[8%] hidden xl:block">
          <FormRightImg />
        </span>

        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <form
            onSubmit={(e) => OnsubmitHandler(e)}
            className="max-w-[946px] mx-auto px-4 sm:px-8 lg:px-[52px] bg-white sm:pt-8 lg:py-[52px] py-6 sm:pb-8 shadow-lg leading-normal rounded-xl relative"
          >
            <span className="absolute end-[-3%] top-[40%] z-[-2] hidden lg:block">
              <FormDotsGroup />
            </span>

            <h3 className="ff_outfit text-black text-base sm:text-[20px] opacity-70 font-semibold leading-normal mb-1 2xl:text-base">
              Register Now
            </h3>
            <p className="ff_inter text-xs sm:text-base test-black opacity-70 leading-normal mb-6 lg:mb-10 font-normal text-black 2xl:text-[20px]">
              To make WorkUp 's products better please leave your INFORMATION
              here.
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <div className="w-full mb-4 sm:mb-5 lg:mb-[36px]">
                <p className="ff_inter 2xl:text-[20px] text-xs sm:text-base test-black opacity-70 leading-normal font-normal text-black mb-[11px]">
                  Full Name
                </p>
                <input
                  onChange={(e) =>
                    setTypicalForm({ ...typicalform, name: e.target.value })
                  }
                  className="border h-[45px] sm:h-[52px] 2xl:text-base p-4 border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-[#999999] placeholder:opacity-40 placeholder:ff_inter outline-none"
                  placeholder="Your first name"
                  type="text"
                  value={typicalform.name}
                />
                {error && typicalform.name === "" ? (
                  <p className="text-rose-500 font-medium">Name is required</p>
                ) : (
                  typicalform !== ""
                )}
              </div>
              <div className="w-full mb-5 sm:mb-0">
                <p className="ff_inter 2xl:text-[20px] text-xs  sm:text-base test-black opacity-70 leading-normal font-normal text-black mb-[11px]">
                  Email
                </p>
                <input
                  onChange={(e) =>
                    setTypicalForm({
                      ...typicalform,
                      email: e.target.value,
                    })
                  }
                  className="border h-[45px] sm:h-[52px] p-4 2xl:text-base border-solid border-[#CCCCCC] w-full rounded-xl ff_inter text-sm font-normal text-[#999999] placeholder:opacity-40 placeholder:ff_inter outline-none"
                  placeholder="Email address"
                  type="email"
                  value={typicalform.email}
                />
                <p className="mb-0 text-rose-500 font-medium pointer-events-none ">
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
            <p className="ff_inter text-xs 2xl:text-[20px] sm:text-base test-black opacity-70 leading-normal font-normal text-black mb-3 lg:mb-4">
              About Us
            </p>
            <div className="mb-5 lg:mb-[36px]">
              <textarea
                onChange={(e) =>
                  setTypicalForm({ ...typicalform, aboutus: e.target.value })
                }
                value={typicalform.aboutus}
                type="text"
                className="p-4 ff_inter text-[#999999] text-sm font-normal placeholder:opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"
              ></textarea>
              {error && typicalform.aboutus === "" ? (
                <p className="text-rose-500 font-medium">text is required</p>
              ) : (
                typicalform !== ""
              )}
            </div>
            <p className="ff_inter text-xs 2xl:text-[20px] sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-3 lg:mb-4">
              Why WorkUp
            </p>
            <div className="mb-5 lg:mb-[36px]">
              <textarea
                onChange={(e) =>
                  setTypicalForm({ ...typicalform, workup: e.target.value })
                }
                value={typicalform.workup}
                type="text"
                className="p-4 ff_inter text-[#999999] text-sm font-normal placeholder:opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"
              ></textarea>
              {error && typicalform.workup === "" ? (
                <p className="text-rose-500 font-medium">text is required</p>
              ) : (
                typicalform !== ""
              )}
            </div>
            <p className="ff_inter 2xl:text-[20px] text-xs sm:text-base test-black opacity-80 leading-normal font-normal text-black mb-3 lg:mb-4">
              My You
            </p>
            <div className="mb-5 lg:mb-[36px]">
              <textarea
                onChange={(e) =>
                  setTypicalForm({ ...typicalform, myYou: e.target.value })
                }
                value={typicalform.myYou}
                type="text"
                className="p-4 ff_inter text-[#999999] text-sm font-normal placeholder:opacity-40 border border-solid rounded-xl border-[#cccccc] w-full h-[120px] sm:h-[150px] resize-none outline-none"
              ></textarea>
              {error && typicalform.myYou === "" ? (
                <p className="text-rose-500 font-medium">text is required</p>
              ) : (
                typicalform !== ""
              )}
            </div>
            <h3 className="ff_outfit 2xl:text-[20px] text-xs sm:text-base font-normal leading-[112.5%] text-black mb-[27px] capitalize">
              Must have ata least one of the requirements
            </h3>

            <div className="flex flex-wrap">
              {FormCard.map((obj, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i === 0
                        ? "sm:pr-3"
                        : i === 2
                        ? "sm:pr-3"
                        : "sm:pl-1 lg:pl-0 :"
                    } lg:w-3/12 w-full sm:w-6/12 pb-4 lg:pb-0`}
                  >
                    <div
                      className={`${
                        i === 3
                          ? "lg:items-start items-center py-[9px]"
                          : " items-center"
                      } border border-[#E5E5E5] px-[10px] border-solid rounded-xl flex w-full lg:w-[190px] h-[70px] 2xl:h-[80px]`}
                    >
                      <span>{obj.icon}</span>
                      <h5 className="ff_outfit 2xl:text-sm ps-[10px] mb-0 text-[#1c1d1d] opacity-70 text-xs font-normal leading-[120%]">
                        {obj.heading}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="ff_inter text-xs sm:text-base 2xl:text-[20px] text-white transition hover:bg-gradient-to-t from-[#4AB6FE] to-[#994FFF] font-medium tranisition duration-300 h-[46px] 2xl:h-[50px] w-[149px] bg-btnGradient rounded-[100px] lg:mt-[45px] mt-1 sm:mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterNow;
