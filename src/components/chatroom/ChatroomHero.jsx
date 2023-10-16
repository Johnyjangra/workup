import React from "react";
import Header from "../common/Header";
import arrow from "../../assets/svg/waitlist-arrow.svg";
const ChatroomHero = () => {
  return (
    <>
      <div className="bgHerochat bg-[url('./assets/webp/ChatroomHeroImg.webp')] bg-no-repeat bg-cover">
        <Header />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 sm:pb-[64px] pb-[50px]">
          <h2 className="text-white ff_outfit font-semibold text-[32px] sm:text-[38px] md:text-10 lg:text-[48px] 2xl:text-[60px] leading-[120%] text-center mt-[41px]">
            Chatroom
          </h2>
          <p className="text-[#DFDDFD] text-center ff_inter text-xs sm:text-sm  font-normal mt-2 max-w-[553px] mx-auto 2xl:text-[20px]">
            The is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <form className="bg-transparent h-[44px] sm:h-[52px] w-full max-w-[353px] mx-auto rounded-[100px] sm:ps-[22px] flex items-center justify-between mt-4 border border-white sm:pe-[19px] px-3">
            <input
              required
              className="w-full bg-transparent outline-none ff_inter text-xs sm:text-sm 2xl:text-[18px] font-normal leading-normal text-white placeholder:text-white"
              type="email"
              placeholder="Enter email to join waitlist"
            />
            <button className="bg-[#E939D9] group h-[32px] sm:h-[38px] w-[50px] rounded-[100px] flex justify-center items-center mt-[1px]">
              <img
                className="group-hover:translate-x-[7px] transition duration-300"
                src={arrow}
                alt="arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatroomHero;
