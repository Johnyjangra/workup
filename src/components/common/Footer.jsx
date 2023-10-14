import React from "react";
import logo from "../../assets/svg/footer-logo.svg";
import "font-awesome/css/font-awesome.min.css";
import left_img from "../../assets/svg/joinBgLiner.svg";
import right_img from "../../assets/svg/joinBgLinerRight.svg";
import arrow from "../../assets/svg/waitlist-arrow.svg";
import footer_vacter from "../../assets/svg/footer-bottom-vacter.svg";
const Footer = () => {
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
                required
                className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-gradientOne h-[32px] sm:h-[36px] min-w-[70px] group rounded-[100px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]">
                <img
                  className=" group-hover:translate-x-[7px] transition duration-300 ease-linear"
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
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.7227" cy="17.9041" r="17" fill="#FAFAFA" />
                    <g clip-path="url(#clip0_1432_8207)">
                      <path
                        d="M19.7214 13.8966H20.8169V11.9886C20.6279 11.9626 19.9779 11.9041 19.2209 11.9041C17.6414 11.9041 16.5594 12.8976 16.5594 14.7236V16.4041H14.8164V18.5371H16.5594V23.9041H18.6964V18.5376H20.3689L20.6344 16.4046H18.6959V14.9351C18.6964 14.3186 18.8624 13.8966 19.7214 13.8966Z"
                        fill="#1A202C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1432_8207">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(11.7227 11.9041)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/"
                  className="social_icon"
                >
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#FAFAFA" />
                    <g clip-path="url(#clip0_1431_8182)">
                      <path
                        d="M20.481 10H14.519C12.5786 10 11 11.5786 11 13.519V19.4811C11 21.4214 12.5786 23 14.519 23H20.4811C22.4214 23 24 21.4214 24 19.4811V13.519C24 11.5786 22.4214 10 20.481 10V10ZM23.2379 19.4811C23.2379 21.0012 22.0012 22.2379 20.481 22.2379H14.519C12.9988 22.2379 11.7621 21.0012 11.7621 19.4811V13.519C11.7621 11.9988 12.9988 10.7621 14.519 10.7621H20.4811C22.0012 10.7621 23.2379 11.9988 23.2379 13.519V19.4811Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M17.4999 12.9454C15.5399 12.9454 13.9453 14.54 13.9453 16.5C13.9453 18.46 15.5399 20.0546 17.4999 20.0546C19.4599 20.0546 21.0545 18.46 21.0545 16.5C21.0545 14.54 19.4599 12.9454 17.4999 12.9454V12.9454ZM17.4999 19.2925C15.9602 19.2925 14.7074 18.0398 14.7074 16.5C14.7074 14.9603 15.9602 13.7075 17.4999 13.7075C19.0397 13.7075 20.2924 14.9603 20.2924 16.5C20.2924 18.0398 19.0397 19.2925 17.4999 19.2925V19.2925Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M21.1402 11.6831C20.561 11.6831 20.0898 12.1543 20.0898 12.7334C20.0898 13.3127 20.561 13.7839 21.1402 13.7839C21.7194 13.7839 22.1906 13.3127 22.1906 12.7334C22.1906 12.1542 21.7194 11.6831 21.1402 11.6831ZM21.1402 13.0217C20.9813 13.0217 20.852 12.8923 20.852 12.7334C20.852 12.5745 20.9813 12.4452 21.1402 12.4452C21.2992 12.4452 21.4285 12.5745 21.4285 12.7334C21.4285 12.8923 21.2992 13.0217 21.1402 13.0217Z"
                        fill="#1A202C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1431_8182">
                        <rect
                          width="13"
                          height="13"
                          fill="white"
                          transform="translate(11 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/"
                  className="social_icon"
                >
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17" cy="17" r="17" fill="#FAFAFA" />
                    <g clip-path="url(#clip0_1431_8198)">
                      <path
                        d="M23 13.4692C22.5166 13.6813 22.0014 13.8218 21.4644 13.8901C22.0169 13.5602 22.4386 13.0418 22.6368 12.417C22.1217 12.7241 21.5529 12.9411 20.9468 13.0621C20.4577 12.5413 19.7606 12.2188 19.0001 12.2188C17.5246 12.2188 16.3367 13.4164 16.3367 14.8846C16.3367 15.0958 16.3546 15.2989 16.3984 15.4923C14.1828 15.3842 12.2222 14.3223 10.9051 12.7046C10.6752 13.1036 10.5403 13.5602 10.5403 14.0518C10.5403 14.9748 11.0156 15.7929 11.7241 16.2666C11.2959 16.2585 10.8759 16.1342 10.52 15.9384C10.52 15.9465 10.52 15.9571 10.52 15.9676C10.52 17.2627 11.4438 18.3385 12.6552 18.5863C12.4383 18.6456 12.2019 18.6741 11.9565 18.6741C11.7859 18.6741 11.6136 18.6643 11.4519 18.6286C11.7972 19.684 12.7771 20.4599 13.9423 20.4851C13.0355 21.1944 11.8842 21.6218 10.6378 21.6218C10.4193 21.6218 10.2096 21.6121 10 21.5852C11.1806 22.3466 12.5797 22.7812 14.0885 22.7812C18.9927 22.7812 21.674 18.7188 21.674 15.1974C21.674 15.0796 21.6699 14.9658 21.6642 14.8529C22.1932 14.4775 22.6376 14.0087 23 13.4692Z"
                        fill="#1A202C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1431_8198">
                        <rect
                          width="13"
                          height="13"
                          fill="white"
                          transform="translate(10 11)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/"
                  className="social_icon"
                >
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.7227" cy="17.9041" r="17" fill="#FAFAFA" />
                    <g clip-path="url(#clip0_1431_8206)">
                      <path
                        d="M22.7197 22.904V22.9036H22.7225V18.8693C22.7225 16.8957 22.2976 15.3755 19.9904 15.3755C18.8812 15.3755 18.1369 15.9841 17.833 16.5612H17.8009V15.5597H15.6133V22.9036H17.8912V19.2672C17.8912 18.3097 18.0727 17.3839 19.2584 17.3839C20.4267 17.3839 20.4441 18.4765 20.4441 19.3286V22.904H22.7197Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M11.9023 15.5603H14.183V22.9042H11.9023V15.5603Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M13.0436 11.9041C12.3144 11.9041 11.7227 12.4958 11.7227 13.225C11.7227 13.9542 12.3144 14.5583 13.0436 14.5583C13.7728 14.5583 14.3645 13.9542 14.3645 13.225C14.364 12.4958 13.7723 11.9041 13.0436 11.9041V11.9041Z"
                        fill="#1A202C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1431_8206">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(11.7227 11.9041)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  href="#invest"
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
