import React, { useState } from "react";
import logo from "../../assets/svg/footer-logo.svg";
import "font-awesome/css/font-awesome.min.css";
import left_img from "../../assets/svg/joinBgLiner.svg";
import right_img from "../../assets/svg/joinBgLinerRight.svg";
import arrow from "../../assets/svg/waitlist-arrow.svg";
import footer_vacter from "../../assets/svg/footer-bottom-vacter.svg";
import { FacebookIcon, InstagramIcon, LinkdinIcon, TwitterIcon } from "./Icons";
const Footer = () => {
  const [typicalform, setTypicalForm] = useState({
    email: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      typicalform.email !== "" &&
      regex.test(typicalform.email)
    ) {
      setError(false);
      setTypicalForm({
        email: "",
      });
    }
  };
  const Today = new Date().getFullYear();
  return (
    <>
      <div className="bg-[url('./assets/webp/footer_bg.webp')] bg-no-repeat bg-cover mt-[150px] pt-12 relative">
        <img
          className="absolute bottom-0 right-0 w-[10%] lg:w-[8%] hidden sm:block"
          src={footer_vacter}
          alt="vacter"
        />
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <div className="h-[160px] max-w-[973px] mx-auto sm:h-[225px] bg-gradientOne rounded-2xl sm:px-12 px-4 flex flex-col items-center justify-center relative overflow-hidden translate-y-[-100%]">
            <img
              className="absolute pointer-events-none top-0 start-0 z-[0]"
              src={left_img}
              alt="lines-group"
            />
            <img
              className="absolute pointer-events-none top-0 end-0 z-[0]"
              src={right_img}
              alt="lines-group"
            />
            <h2 className="ff_outfit text-white font-medium lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] text-center leading-[100%] mb-1 ms:mb-2 md:mb-5 relative z-10">
              Join Free Demo
            </h2>
            <form className="bg-white z-[10] relative h-[40px] sm:h-[52px] w-full max-w-[464px] mx-auto box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25); shadow-xl rounded-[100px] ps-[22px] flex items-center justify-between mt-3 sm:mt-2 mb-0">
              <input
               onChange={(e) =>
                setTypicalForm({
                  ...typicalform,
                  email: e.target.value,
                })
              }    value={typicalform.email}
                className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="Email"
                placeholder="Enter your email"
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
              <button onClick={OnsubmitHandler} className="bg-gradientOne h-[32px] sm:h-[36px] min-w-[70px] group rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className="group-hover:translate-x-[7px] transition duration-300 ease-linear"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-between items-start mt-[-140px] sm:mt-[-160px]">
            <div className="md:w-5/12">
              <a href="/">
                <img src={logo} alt="workup logo" />
              </a>
              <p className="ff_inter text-white opacity-70 text-xs font-medium leading-normal 2xl:text-sm pt-3 mb-3 max-w-[500px]">
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex pb-3 gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="social_icon"
                >
                 <FacebookIcon/>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/"
                  className="social_icon"
                >
                 <InstagramIcon/>
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/"
                  className="social_icon"
                >
             <TwitterIcon/>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/"
                  className="social_icon"
                >
                <LinkdinIcon/>
                </a>
              </div>
            </div>
            <div className="xl:w-4/12 md:w-6/12 lg:w-5/12 w-full flex justify-between mt-5 lg:mt-0">
              <div className="flex flex-col w-6/12">
                <h3 className="ff_open_sans text-white 2xl:text-[22px] text-md font-semibold leading-normal mb-[10px]">
                  Home
                </h3>
                <a
                  href="/chatroom"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal inline-block transition duration-300 ease-linear hover:opacity-80">
                  Chatroom
                </a>
                <a
                  href="/brand"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal mt-[14px] transition duration-300 ease-linear hover:opacity-80 inline-block">
                  Invest
                </a>
                <a
                  href="/founder"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal mt-[14px] inline-block transition duration-300 ease-linear hover:opacity-80">
                  Become a cofounder
                </a>
              </div>
              <div className="flex flex-col w-6/12">
                <h3 className="ff_open_sans text-white 2xl:text-[22px] text-md font-semibold leading-normal mb-[10px]">
                  Links
                </h3>
                <a
                  href="/founder"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal inline-block transition duration-300 ease-linear hover:opacity-80">
                  Contact us
                </a>
                <a
                  href="#faqs"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal mt-[14px] inline-block transition duration-300 ease-linear hover:opacity-80">
                  FAQ
                </a>
                <a
                  href="/"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal mt-[14px] inline-block transition duration-300 ease-linear hover:opacity-80">
                  Privacy
                </a>
                <a
                  href="/"
                  className="ff_inter text-white text-xs 2xl:text-sm font-medium leading-normal mt-[14px] inline-block transition duration-300 ease-linear hover:opacity-80">
                  Terms & conditions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-[#FFFFFF1A] pt-8 md:pt-16 xl:pt-[85px]"></div>
        <p className="text-center ff_open_sans text-[#96DBF4] text-xs 2xl:text-md px-[20px] sm:text-base font-semibold sm:leading-[32px] py-[18px]">
          Copyright {Today} JesMor Enterprises, All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
