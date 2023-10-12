import React from "react";
import logo from "../../assets/svg/footer-logo.svg";
import 'font-awesome/css/font-awesome.min.css';
import left_img from "../../assets/svg/joinBgLiner.svg"
import right_img from "../../assets/svg/joinBgLinerRight.svg"
import arrow from "../../assets/svg/waitlist-arrow.svg"
import { FacebookIcon, InstagramIcon, LinkdinIcon, TwitterIcon } from "../common/Icons";
const MyFooter = () => {
  return (
    <>
      <div className="footer_bg mt-[150px] pt-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
      <div className="h-[160px] max-w-[973px] mx-auto sm:h-[198px] bg-gradientOne rounded-2xl sm:px-12 px-8 flex flex-col items-center justify-center relative overflow-hidden translate-y-[-100%]">
      <img className="absolute top-0 start-0 z-[0]" src={left_img} alt="lines-group" />
            <img className="absolute top-0 end-0 z-[0]" src={right_img} alt="lines-group" />
            <h2 className="ff_outfit text-white font-medium lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-center leading-[100%] mb-1 ms:mb-2 md:mb-5 relative z-10">Join our Demo</h2>
            <div className="bg-white relative z-[10] h-[44px] sm:h-[52px] w-full max-w-[464px] mx-auto box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); shadow-xl rounded-[100px] ps-[22px] flex items-center border-[2px] border-solid border-[#4BB4FE] mt-3 sm:mt-2 mb-0">
                <input className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]" type="text" placeholder="Enter your email"/>
                <button className="bg-gradientOne h-[32px] sm:h-[36px] w-[70px] rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px] group"><img className="tranisition duration-300 group-hover:translate-x-[5px]" src={arrow} alt="arrow" /></button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-start mt-[-140px] sm:mt-[-160px]">
            <div className="md:w-5/12">
              <img src={logo} alt="workup logo" />
              <p className=" ff_inter text-white opacity-70 text-xs font-medium leading-normal pt-3 mb-3 max-w-[500px]">
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex gap-4">
                <a href="facebook.com" className="h-[34px] w-[34px] rounded-[100%] bg-white flex justify-center items-center footer_icon transition duration-300">
                    <FacebookIcon/>
                </a>
                <a href="instagram.com" className="h-[34px] w-[34px] rounded-[100%] bg-white flex justify-center items-center footer_icon transition duration-300">
                    <InstagramIcon/>
                </a>
                <a href="Twitter.com" className="h-[34px] w-[34px] rounded-[100%] bg-white flex justify-center items-center footer_icon transition duration-300">
                   <TwitterIcon/>
                </a>
                <a href="linkdin.com" className="h-[34px] w-[34px] rounded-[100%] bg-white flex justify-center items-center footer_icon transition duration-300">
                   <LinkdinIcon/>
                </a>
              </div>
            </div>
            <div className="xl:w-4/12 md:w-6/12 lg:w-5/12 w-full flex justify-between mt-5 lg:mt-0">
                <div className="flex flex-col w-6/12">
                    <h3 className="ff_open_sans text-white text-md font-semibold leading-normal mb-[10px]">Home</h3>
                    <a  href="#" className="ff_inter text-white text-xs font-medium leading-normal">Chatroom</a>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal mt-[14px]">Invest</a>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal mt-[14px]">Become a cofounder</a>
                </div>
                <div className="flex flex-col w-6/12">
                <h3 className="ff_open_sans text-white text-md font-semibold leading-normal mb-[10px]">Links</h3>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal">Contact us</a>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal mt-[14px]">FAQ</a>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal mt-[14px]">Privacy</a>
                    <a href="#" className="ff_inter text-white text-xs font-medium leading-normal mt-[14px]">Terms & conditions</a>
                </div>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-[#FFFFFF1A] pt-8 md:pt-16 xl:pt-[97px]"></div>
        <p className="text-center ff_open_sans text-[#96DBF4] text-xs px-[20px] sm:text-base font-semibold leading-[32px] sm:pt-4 pb-5 sm:pb-[22px]">Copyright 2023 JesMor Enterprises, All Rights Reserved.</p>
      </div>
    </>
  );
};

export default MyFooter;
