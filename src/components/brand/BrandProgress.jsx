import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage from "../../assets/webp/Progress1.webp";
import sliderImage2 from "../../assets/webp/progress2.webp";
import sliderImage3 from "../../assets/webp/Progress3.webp";
import leftbtn from "../../assets/svg/ProgressLeftBtn.svg";
import rightbtn from "../../assets/svg/progressRightBtn.svg";
import {
  LeftArrow,
  ProgressLeft,
  ProgressRight,
  RightArrow,
} from "../common/Icons";
const BrandProgress = () => {
  const ProgressSlider = {
    centerMode: true, // Enable center mode
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    centerPadding: "140px", // Adjust this value to control spacing between centered slide and partially visible slides
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          dots: false,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const first = React.useRef();
  return (
    <>
      <div className="bg-[#F7FCFE] py-20 md:mb-28 mb-20">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className=" ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium text-black leading-[135%] text-center relative after:contents-[''] after:absolute after:w-[132px] after:start-[50%] after:h-[4px] after:rounded-md after:bg-blue after:top-[-6%] after:translate-x-[-50%]">
            What’s Our Progress?
          </p>
          <div className="flex justify-center mt-4 mb-12">
            <p className="text-center ff_inter sm:text-md text-[18px] text-[#4A4C4C] font-normal max-w-[940px] mb-10">
              We have made substantial progress in our development journey. We
              initiated the design phase for our prototype, and we are now ready
              to commence development and fulfil the banking partnership
              requirements to launch the MVP as soon as possible.
            </p>
          </div>
        </div>
        <Slider {...ProgressSlider} ref={first} className="ProgressSlide py-10">
          <div className="mx-5">
            <img
              src={sliderImage}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage2}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage2}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
        </Slider>
        {/* <div className="flex items-center justify-center gap-6 sm:mt-11 mt-5">
          <img
            src={leftbtn}
            alt="leftbtn"
            className=" cursor-pointer"
            onClick={() => first.current.slickPrev()}
          />

          <img
            src={rightbtn}
            alt="rightbtn"
            className=" cursor-pointer"
            onClick={() => first.current.slickNext()}
          />
        </div> */}
        <div className="flex items-center justify-center gap-6 sm:mt-12">
          <div
            className="h-[38px] w-[38px] group  transition duration-300 flex justify-center items-center rounded-full arrows_bg  cursor-pointer"
            onClick={() => first.current.slickNext()}
          >
            <span>
              <ProgressLeft />
            </span>
          </div>
          <div
            className="h-[38px] w-[38px] group flex justify-center transition duration-300 items-center rounded-full arrows_bg hover:border-hidden cursor-pointer"
            onClick={() => first.current.slickPrev()}
          >
            <ProgressRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProgress;
