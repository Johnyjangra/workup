import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage from "../../assets/png/Progress1.png";
import sliderImage2 from "../../assets/png/progress2.png";
import sliderImage3 from "../../assets/png/Progress3.png";
const BrandProgress = () => {
  const ProgressSlider = {
    centerMode: true, // Enable center mode
    arrows: false,
    centerPadding: "10px", // Adjust this value to control spacing between centered slide and partially visible slides
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       centerMode: false,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  const first = React.useRef();
  return (
    <>
      <div className="bg-[#F7FCFE] py-16">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className=" ff_outfit lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium text-black leading-[135%] text-center relative after:contents-[''] after:absolute after:w-[132px] after:start-50 after:md:translate-x-[-200%] after:h-[4px] after:rounded-md after:bg-blue after:top-[-6%] after:translate-x-[-150%]">
            What’s Our Progress?
          </p>
          <div className="flex justify-center mt-4 mb-12">
            <p className="text-center ff_inter text-md text-[#4A4C4C] font-normal max-w-[940px]">
              We have made substantial progress in our development journey. We
              initiated the design phase for our prototype, and we are now ready
              to commence development and fulfil the banking partnership
              requirements to launch the MVP as soon as possible.
            </p>
          </div>
        </div>
        <Slider {...ProgressSlider} ref={first} className="ProgressSlide">
          <div className="px-3">
            <img src={sliderImage} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage2} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage3} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage3} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage2} alt="sliderImage" className="w-full h-full" />
          </div>
          <div className="px-3">
            <img src={sliderImage3} alt="sliderImage" className="w-full h-full" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BrandProgress;
