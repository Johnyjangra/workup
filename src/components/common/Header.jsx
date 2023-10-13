import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav.jsx";
import LogoImg from "../../assets/svg/logo.svg";
import LogoImg2 from "../../assets/svg/white-logo.svg";
import Hero from "../home/Hero.jsx";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
    } else if (!activeNavOverlay) {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [activeNavOverlay]);
  const path = useLocation().pathname;
  return (
    <>
      <div
        className={`${
          path === "/"
            ? "bg-[url('./assets/png/hero-bg.png')] bg-cover bg-no-repeat"
            : ""
        } "relative"`}
      >
        <div>
          <MobileNav
            activeNavOverlay={activeNavOverlay}
            setActiveNavOverlay={setActiveNavOverlay}
          />
          <nav className="w-full sm:pb-6 pt-[20px] sm:pt-[23px]">
            <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-between">
                  <a href="/">
                    {path === "/" ? (
                      <img
                        className="w-[80%] sm:w-[100%]"
                        src={LogoImg}
                        alt="logo"
                      />
                    ) : (
                      <img
                        className="w-[80%] sm:w-[100%]"
                        src={LogoImg2}
                        alt="logo"
                      />
                    )}
                  </a>
                  <div className="hidden lg:block">
                    <div className="flex items-center">
                      <a
                        href="#chat-room"
                        className={`${
                          path === "/" ? "text-black opacity-70" : " text-white"
                        } text-sm font-medium ff_outfit mr-6 xl:mr-[44px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}
                      >
                        Chat Room
                      </a>
                      <a
                        href="#invest"
                        className={`${
                          path === "/" ? "text-black" : "text-white"
                        } text-black text-sm font-medium ff_outfit mr-6 xl:mr-[44px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}
                      >
                        Invest
                      </a>
                      <a
                        href="#co-founder"
                        className={`${
                          path === "/" ? "text-black" : "text-white"
                        } text-black text-sm font-medium ff_outfit mr-6 xl:mr-[30px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}
                      >
                        Become a Co-Founder
                      </a>
                      <button
                        className={`${
                          path === "/"
                            ? "bg-white text-blue"
                            : "bg-transparent text-white"
                        } "hidden sm:flex justify-center items-center overflow-hidden h-[43px] w-[95px] text-sm font-semibold rounded-[100px] border-solid border-[2px] border-white duration-300 ease-linear hover:text-white hover:bg-blue pb-[2px]"`}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden">
                    <div
                      className=" relative z-50 text-white cursor-pointer"
                      onClick={() => setActiveNavOverlay(!activeNavOverlay)}
                    >
                      {activeNavOverlay ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.7819 4.0319C11.8353 3.97852 11.8778 3.91513 11.9067 3.84536C11.9357 3.77559 11.9506 3.7008 11.9506 3.62525C11.9507 3.54971 11.9358 3.4749 11.907 3.4051C11.8781 3.33529 11.8358 3.27185 11.7824 3.2184C11.729 3.16495 11.6656 3.12254 11.5959 3.09359C11.5261 3.06464 11.4513 3.04972 11.3758 3.04967C11.3002 3.04962 11.2254 3.06446 11.1556 3.09332C11.0858 3.12219 11.0223 3.16452 10.9689 3.2179L7.4999 6.6869L4.0319 3.2179C3.92396 3.10996 3.77756 3.04932 3.6249 3.04932C3.47225 3.04932 3.32584 3.10996 3.2179 3.2179C3.10996 3.32584 3.04932 3.47225 3.04932 3.6249C3.04932 3.77756 3.10996 3.92396 3.2179 4.0319L6.6869 7.4999L3.2179 10.9679C3.16445 11.0213 3.12206 11.0848 3.09313 11.1546C3.0642 11.2245 3.04932 11.2993 3.04932 11.3749C3.04932 11.4505 3.0642 11.5253 3.09313 11.5952C3.12206 11.665 3.16445 11.7285 3.2179 11.7819C3.32584 11.8898 3.47225 11.9505 3.6249 11.9505C3.70049 11.9505 3.77533 11.9356 3.84517 11.9067C3.915 11.8777 3.97845 11.8353 4.0319 11.7819L7.4999 8.3129L10.9689 11.7819C11.0768 11.8897 11.2232 11.9502 11.3758 11.9501C11.5283 11.95 11.6746 11.8893 11.7824 11.7814C11.8902 11.6735 11.9507 11.5271 11.9506 11.3745C11.9505 11.222 11.8898 11.0757 11.7819 10.9679L8.3129 7.4999L11.7819 4.0319Z"
                            fill="#2ABAE9"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 -0.5 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                            fill="#2ABAE9"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {path === "/" ? <Hero /> : ""}
      </div>
    </>
  );
};

export default Header;
