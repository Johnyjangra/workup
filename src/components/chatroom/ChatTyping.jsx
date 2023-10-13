import React from "react";
import {
  AddMember,
  ChatroomLines,
  ClockIcon,
  PhotoIcon,
  TypingDot,
} from "../common/Icons";
import jhone from "../../assets/svg/jhonePhoto.svg";
import Like from "../../assets/svg/LikeBtn.svg";
import LikeThumb from "../../assets/svg/LikeThumb.svg";
import Smile from "../../assets/svg/SmileYellow.svg";
const ChatTyping = () => {
  return (
    <>
      <div className="mt-28">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="bg-white shadow-[0px_5px_21px_0px_rgba(0,0,0,0.05)] rounded-md pt-6 pb-7 ps-[26px]">
            <div className="flex items-center">
              <img
                src={jhone}
                alt="jhone"
                className="h-[65px] max-w-[65px] w-full"
              />
              <div className="flex flex-col items-start ms-[14px]">
                <p className=" ff_outfit font-normal leading-[154%] text-[#140524] text-md">
                  John Doe
                </p>
                <p className=" ff_inter font-normal leading-[154%] text-[#666666] text-sm">
                  Typing...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[37px] mt-6">
              <button className="ff_inter font-normal leading-[154%] text-[#666666] text-sm p-[9px] bg-[#F7F7F7] rounded-full flex items-center">
                <PhotoIcon />
                Photo/Video
              </button>
              <button className="ff_inter font-normal leading-[154%] text-[#666666] text-sm p-[9px] bg-[#F7F7F7] rounded-full flex items-center">
                <ClockIcon />
                Feeling/Activity
              </button>
              <button className="bg-[#F7F7F7] rounded-full flex items-center">
                <TypingDot />
              </button>
            </div>
          </div>
          {/* image box */}
          <div className="bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between px-[26px] pt-[26px]">
              <div className="flex items-center">
                <img
                  src={jhone}
                  alt="jhone"
                  className="h-[65px] max-w-[65px] w-full"
                />
                <div className="flex flex-col items-start ms-[14px]">
                  <p className=" ff_outfit font-normal leading-[154%] text-[#140524] text-md">
                    John Doe
                  </p>
                  <p className="flex items-center ff_inter font-normal leading-[154%] text-[#666666] text-sm">
                    5 hrs <AddMember />
                  </p>
                </div>
              </div>
              <TypingDot />
            </div>
            <p className="ff_inter font-normal leading-[150%] text-[#4D4D4D] text-sm ms-[26px] mt-[15px] pb-[22px]">
              Link any existing business account in seconds.
            </p>
            {/* image */}
            <div className="flex items-center justify-between ms-[18px] mb-[29px]">
              <div className="flex items-center">
                <img
                  src={Like}
                  alt="Like"
                  className="h-[40px] w-[40px] me-[18px]"
                />
                <img
                  src={LikeThumb}
                  alt="Like"
                  className="h-[40px] w-[40px] me-[18px]"
                />
                <img src={Smile} alt="Like" className="h-[40px] w-[40px]" />
                <p className="ff_inter font-normal leading-[154%] text-[#666666] text-sm ms-7">
                  Lorem ipsum and 291 others
                </p>
              </div>
              <p className="ff_inter font-normal leading-[154%] text-[#666666] text-sm me-[32px]">
                55 comments
              </p>
            </div>
            <hr className="h-[1px] bg-[#E5E5E5] mb-[20px]" />
            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatTyping;
