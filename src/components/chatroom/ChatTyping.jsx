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
  PostPencil,
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
import sideDots from "../../assets/svg/jhoneSlideDots.svg";
const ChatTyping = () => {
  return (
    <>
      <div className="relative">
        <img
          src={sideDots}
          alt="sideDots"
          className="absolute top-[7%] start-0"
        />
        <img
          src={Likeleft}
          alt="topImage"
          className=" absolute top-[33%] pointer-events-none start-0 lg:block hidden"
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
          className=" absolute top-[56%] pointer-events-none end-0 lg:block hidden"
        />
        <img
          src={topImage}
          alt="topImage"
          className=" absolute top-[-3%] pointer-events-none start-0 xl:block hidden"
        />
        <div className="md:mt-[80px] sm:mt-12 mt-10 lg:pb-40 sm:pb-20 relative z-10">
          <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto sm:px-5 px-3 xl:px-0">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-[60px] ">
                <span className=" cursor-pointer">
                  <ChatroomLines />
                </span>
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center text-xs sm:text-sm 2xl:text-[18px] hidden">
                  <PostPencil />
                  Create a Post
                </button>
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center text-xs sm:text-sm 2xl:text-[18px] hidden">
                  <AlbumIcon />
                  Photo/Video Album
                </button>
                <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:flex items-center text-xs sm:text-sm 2xl:text-[18px] hidden">
                  <LiveCamera />
                  Live Video
                </button>
              </div>
              <span className=" cursor-pointer">
                <AddPost />
              </span>
            </div>
            <div className="flex items-center justify-between overflow-scroll pb-2 md:hidden">
              <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:hidden flex items-center text-xs sm:text-sm 2xl:text-[18px] whitespace-nowrap">
                <PostPencil />
                Create a Post
              </button>
              <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:hidden flex items-center text-xs sm:text-sm 2xl:text-[18px] whitespace-nowrap mx-5">
                <AlbumIcon />
                Photo/Video Album
              </button>
              <button className=" ff_inter font-normal leading-[154%] text-[#707070] md:hidden flex items-center text-xs sm:text-sm 2xl:text-[18px]  whitespace-nowrap">
                <LiveCamera />
                Live Video
              </button>
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
                  <p className=" ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px]">
                    Typing...
                  </p>
                </div>
              </div>
              <div className="flex sm:items-center sm:gap-[37px] gap-2 flex-wrap mt-6">
                {/* <div className="flex sm:items-center sm:gap-[37px] gap-3 sm:flex-row flex-col"> */}
                <button className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px] p-[9px] bg-[#F7F7F7] rounded-full flex items-center">
                  <PhotoIcon />
                  Photo/Video
                </button>
                <button className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px] sm:p-[9px] p-1 bg-[#F7F7F7] rounded-full flex items-center">
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
                          <p className=" ff_outfit font-normal leading-[154%] text-[#140524] sm:text-md text-[18px] 2xl:text-[22px]">
                            John Doe
                          </p>
                          <p className="flex items-center ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px]">
                            5 hrs <AddMember />
                          </p>
                        </div>
                      </div>
                      <TypingDot />
                    </div>
                    <p className="ff_inter font-normal leading-[150%] text-[#4D4D4D] text-xs sm:text-sm 2xl:text-[18px]sm:ms-[26px] ms-2 mt-[15px] pb-[22px]">
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
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px] me-[18px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
                          />
                          <img
                            src={LikeThumb}
                            alt="Like"
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px] me-[18px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
                          />
                          <img
                            src={Smile}
                            alt="Like"
                            className="sm:h-[40px] h-[30px] w-[30px] sm:w-[40px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-150"
                          />
                        </div>
                        <p className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px] sm:ms-7 sm:my-0 my-3">
                          Lorem ipsum and 291 others
                        </p>
                      </div>
                      <p className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px] me-[32px]">
                        55 comments
                      </p>
                    </div>
                    <hr className="h-[1px] bg-[#E5E5E5] mb-[20px] sm:ms-[18px] ms-2 sm:me-[32px] me-1" />
                    <div className="flex flex-row  sm:items-center sm:ms-[18px] ms-2 pb-6 sm:gap-[30px] gap-4">
                      {/* <div className="flex items-center justify-between sm:gap-[30px] gap-4 "> */}
                      <button className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px]flex items-center">
                        <ShareIcon /> Share
                      </button>
                      <button className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px]flex items-center">
                        <LikeWhite /> Like
                      </button>
                      {/* </div> */}
                      <button className="ff_inter font-normal leading-[154%] text-[#666666] text-xs sm:text-sm 2xl:text-[18px]flex items-center">
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
