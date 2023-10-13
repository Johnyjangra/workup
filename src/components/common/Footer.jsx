import React from "react";
import logo from "../../assets/svg/footer-logo.svg";
import "font-awesome/css/font-awesome.min.css";
import left_img from "../../assets/svg/joinBgLiner.svg";
import right_img from "../../assets/svg/joinBgLinerRight.svg";
import arrow from "../../assets/svg/waitlist-arrow.svg";
import facebook from "../../assets/svg/footer-fb-logo.svg"
import instagram from "../../assets/svg/footer-insta-logo.svg"
import linkdin from "../../assets/svg/footer-linkdin-logo.svg"
import twitter from "../../assets/svg/footer-twitter-logo.svg"
const Footer = () => {
  const Today = new Date().getFullYear();
  return (
    <>
      <div className="footer_bg mt-[150px] pt-12">
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
      <div className="h-[160px] max-w-[973px] mx-auto sm:h-[198px] bg-gradientOne rounded-2xl sm:px-12 px-8 flex flex-col items-center justify-center relative overflow-hidden translate-y-[-100%]">
      <img className="absolute pointer-events-none top-0 start-0 z-[0]" src={left_img} alt="lines-group" />
            <img className="absolute pointer-events-none top-0 end-0 z-[0]" src={right_img} alt="lines-group" />
            <h2 className="ff_outfit text-white font-medium lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-center leading-[100%] mb-1 ms:mb-2 md:mb-5 relative z-10">Join Free Demo</h2>
            <form className="bg-white z-[10] relative h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25); shadow-xl rounded-[100px] ps-[22px] flex items-center justify-between mt-3 sm:mt-2 mb-0">
              <input
                required
                className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-gradientOne h-[32px] sm:h-[36px] min-w-[70px] group rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className=" group-hover:translate-x-[7px] transition duration-300"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-between items-start mt-[-140px] sm:mt-[-160px]">
            <div className="md:w-5/12">
              <a href="/"><img src={logo} alt="workup logo" /></a>
              <p className="ff_inter text-white opacity-70 text-xs font-medium leading-normal pt-3 mb-3 max-w-[500px]">
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                >
                <img className="min-h-[32px] min-w-[34px] transition duration-300 hover:translate-y-[-4px] " src={facebook} alt="facebook" />
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/"
                  className="h-[34px] w-[34px] transition duration-300 hover:translate-y-[-4px]"
                >
                <img src={instagram} alt="instagram" />
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/"
                  className="h-[34px] w-[34px] transition duration-300 hover:translate-y-[-4px]"
                >
                 <img src={twitter} alt="twitter" />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/"
                  className="h-[34px] w-[34px] transition duration-300 hover:translate-y-[-4px]"
                >
                 <img src={linkdin} alt="linkdin" />
                </a>
              </div>
            </div>
            <div className="xl:w-4/12 md:w-6/12 lg:w-5/12 w-full flex justify-between mt-5 lg:mt-0">
              <div className="flex flex-col w-6/12">
                <h3 className="ff_open_sans text-white text-md font-semibold leading-normal mb-[10px]">
                  Home
                </h3>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal inline-block transition duration-300 hover:opacity-80"
                >
                  Chatroom
                </a>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal mt-[14px] transition duration-300 hover:opacity-80 inline-block"
                >
                  Invest
                </a>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal mt-[14px] inline-block transition duration-300 hover:opacity-80"
                >
                  Become a cofounder
                </a>
              </div>
              <div className="flex flex-col w-6/12">
                <h3 className="ff_open_sans text-white text-md font-semibold leading-normal mb-[10px]">
                  Links
                </h3>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal inline-block transition duration-300 hover:opacity-80"
                >
                  Contact us
                </a>
                <a
                  href="#faq"
                  className="ff_inter text-white text-xs font-medium leading-normal mt-[14px] inline-block transition duration-300 hover:opacity-80"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal mt-[14px] inline-block transition duration-300 hover:opacity-80"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="ff_inter text-white text-xs font-medium leading-normal mt-[14px] inline-block transition duration-300 hover:opacity-80"
                >
                  Terms & conditions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-[#FFFFFF1A] pt-8 md:pt-16 xl:pt-[97px]"></div>
        <p className="text-center ff_open_sans text-[#96DBF4] text-xs px-[20px] sm:text-base font-semibold sm:leading-[32px] pt-4 pb-5 sm:pb-[22px]">
          Copyright {Today} JesMor Enterprises, All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
