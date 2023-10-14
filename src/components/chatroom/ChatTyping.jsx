import React from "react";
import {
  AddMember,
  AddPost,
  AlbumIcon,
  ChatroomLines,
  ClockIcon,
  CommentWhite,
  LikeWhite,
  LiveCamera,
  PhotoIcon,
  // PostPencil,
  ShareIcon,
  TypingDot,
} from "../common/Icons";
import jhone from "../../assets/svg/jhonePhoto.svg";
import Like from "../../assets/svg/LikeBtn.svg";
import LikeThumb from "../../assets/svg/LikeThumb.svg";
import Smile from "../../assets/svg/SmileYellow.svg";
import { ChatRoomData } from "../common/Helper";
import topImage from "../../assets/svg/chatroomtop.svg";
import Likeleft from "../../assets/svg/likeLeftLiner.svg";
import Dots from "../../assets/svg/LikeRightDot.svg";
import RightDots from "../../assets/svg/rightDotLiner.svg";
import bottom from "../../assets/svg/chatroomBottom.svg";
const ChatTyping = () => {
  return (
    <>
      <div className="relative">
        <img
          src={topImage}
          alt="topImage"
          className=" absolute top-[30%] pointer-events-none start-0 lg:block hidden"
        />
        <img
          src={bottom}
          alt="topImage"
          className=" absolute bottom-[2%] pointer-events-none end-0 lg:block hidden"
        />
        <img
          src={topImage}
          alt="topImage"
          className=" absolute bottom-[12%] pointer-events-none start-0 lg:block hidden"
        />
        <img
          src={Dots}
          alt="topImage"
          className=" absolute top-[30%] pointer-events-none end-0 lg:block hidden"
        />
        <img
          src={RightDots}
          alt="topImage"
          className=" absolute top-[54%] pointer-events-none end-0 lg:block hidden"
        />
        <img
          src={Likeleft}
          alt="topImage"
          className=" absolute top-[-3%] pointer-events-none start-0 lg:block hidden"
        />
        <div className="md:mt-[108px] sm:mt-[80px] mt-10 md:mb-40 sm:mb-20 md:pb-40 sm:pb-20 relative z-10">
          <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto sm:px-5 px-3 xl:px-0">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-[60px] ">
                <ChatroomLines />
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center md:text-sm text-[14px] hidden">
                  {/* <PostPencil /> */}
                  Create a Post
                </button>
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center md:text-sm text-[14px] hidden">
                  <AlbumIcon />
                  Photo/Video Album
                </button>
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center md:text-sm text-[14px] hidden">
                  <LiveCamera />
                  Live Video
                </button>
              </div>
              <AddPost />
            </div>
            <div className="bg-white shadow-[0px_5px_21px_0px_rgba(0,0,0,0.05)] rounded-md pt-6 pb-7 sm:ps-[26px] ps-2 mb-6">
              <div className="flex items-center">
                <img
                  src={jhone}
                  alt="jhone"
                  className="h-[65px] max-w-[65px] w-full"
                />
                <div className="flex flex-col items-start ms-[14px]">
                  <p className=" ff_outfit font-normal leading-[154%] text-[#140524] sm:text-md text-[18px]">
                    John Doe
                  </p>
                  <p className=" ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px]">
                    Typing...
                  </p>
                </div>
              </div>
              <div className="flex sm:items-center sm:gap-[37px] gap-4 flex-wrap mt-6">
                {/* <div className="flex sm:items-center sm:gap-[37px] gap-3 sm:flex-row flex-col"> */}
                <button className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] p-[9px] bg-[#F7F7F7] rounded-full flex items-center">
                  <PhotoIcon />
                  Photo/Video
                </button>
                <button className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] p-[9px] bg-[#F7F7F7] rounded-full flex items-center">
                  <ClockIcon />
                  Feeling/Activity
                </button>
                {/* </div> */}
                <button className="rounded-full flex sm:items-center items-start">
                  <TypingDot />
                </button>
              </div>
            </div>
            {ChatRoomData.map((chat, index) => {
              return (
                <div key={index}>
                  {/* image box */}
                  <div className="bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.08)] mb-8 rounded-lg">
                    <div className="flex items-center justify-between sm:px-[26px] px-2 pt-[26px]">
                      <div className="flex items-center">
                        <img
                          src={jhone}
                          alt="jhone"
                          className="h-[65px] max-w-[65px] w-full rounded-full"
                        />
                        <div className="flex flex-col items-start ms-[14px]">
                          <p className=" ff_outfit font-normal leading-[154%] text-[#140524] sm:text-md text-[18px]">
                            John Doe
                          </p>
                          <p className="flex items-center ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px]">
                            5 hrs <AddMember />
                          </p>
                        </div>
                      </div>
                      <TypingDot />
                    </div>
                    <p className="ff_inter font-normal leading-[150%] text-[#4D4D4D] sm:text-sm text-[14px] sm:ms-[26px] ms-2 mt-[15px] pb-[22px]">
                      Link any existing business account in seconds.
                    </p>
                    {/* image */}
                    <div className=" rounded-xl overflow-hidden mb-[22px] relative">
                      <img src={chat.image} alt="image1" className="w-full" />
                      <button className=" capitalize font-medium ff_inter text-white sm:text-base text-[15px] rounded-full bg-[rgba(0,0,0,0.20)] flex items-center justify-center sm:px-[38px] px-4 h-[46px] absolute bottom-0 start-0 mb-[17px] ms-[17px] transition-all ease-in-out duration-300 hover:bg-black">
                        Robert charley
                      </button>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:items-center justify-between sm:ms-[18px] ms-2 mb-[29px]">
                      <div className="flex sm:flex-row flex-col sm:items-center">
                        <div className="flex items-center">
                          <img
                            src={Like}
                            alt="Like"
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px] me-[18px]"
                          />
                          <img
                            src={LikeThumb}
                            alt="Like"
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px] me-[18px]"
                          />
                          <img
                            src={Smile}
                            alt="Like"
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px]"
                          />
                        </div>
                        <p className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] sm:ms-7 sm:my-0 my-3">
                          Lorem ipsum and 291 others
                        </p>
                      </div>
                      <p className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] me-[32px]">
                        55 comments
                      </p>
                    </div>
                    <hr className="h-[2px] bg-[#E5E5E5] mb-[20px] sm:ms-[18px] ms-2 me-[32px]" />
                    <div className="flex sm:flex-row flex-col sm:items-center sm:ms-[18px] ms-2 pb-6 sm:gap-[30px] gap-4">
                      <div className="flex items-center justify-between sm:gap-[30px] gap-4 pe-10">
                        <button className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] flex items-center">
                          <ShareIcon /> Share
                        </button>
                        <button className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] flex items-center">
                          <LikeWhite /> Like
                        </button>
                      </div>
                      <button className="ff_inter font-normal leading-[154%] text-[#666666] sm:text-sm text-[14px] flex items-center">
                        <CommentWhite /> Comment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatTyping;
