import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav.jsx";
import LogoImg from "../../assets/svg/logo.svg";
import LogoImg2 from "../../assets/svg/white-logo.svg";
import Hero from "../home/Hero.jsx";
import { useLocation } from "react-router-dom";
import { CrossIcon, ToggleIcon, ToggleIconWhite } from "./Icons.jsx";
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
        } "relative"`}>
        <div>
          <MobileNav
            activeNavOverlay={activeNavOverlay}
            setActiveNavOverlay={setActiveNavOverlay}
          />
          <nav className="w-full pt-[20px] sm:py-6">
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
                        href="/chatroom"
                        className={`${
                          path === "/" ? "text-black opacity-70" : " text-white"
                        } text-sm font-medium ff_outfit mr-6 xl:mr-[44px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}>
                        Chat Room
                      </a>
                      <a
                        href="/brand"
                        className={`${
                          path === "/" ? "text-black opacity-70" : "text-white"
                        } text-black text-sm font-medium ff_outfit mr-6 xl:mr-[44px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}>
                        Invest
                      </a>
                      <a
                        href="/founder"
                        className={`${
                          path === "/" ? "text-black opacity-70" : "text-white"
                        } text-black text-sm font-medium ff_outfit mr-6 xl:mr-[30px] after:transition-all after:rounded-sm hover:text-[#2ABAE9] after:duration-300 duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-[#2ABAE9] after:w-0 hover:after:w-full after:h-[2px]`}>
                        Become a Co-Founder
                      </a>
                      <button
                        className={`${
                          path === "/"
                            ? "bg-[#edf7fd] text-blue"
                            : "bg-transparent text-white"
                        } "hidden sm:flex justify-center items-center overflow-hidden h-[43px] w-[95px] text-sm font-semibold rounded-[100px] border-solid border-[1px] border-[#edf7fd] duration-300 ease-linear hover:text-white hover:bg-blue pb-[2px]"`}>
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden">
                    <div
                      className=" relative z-50 text-white cursor-pointer"
                      onClick={() => setActiveNavOverlay(!activeNavOverlay)}>
                      {!activeNavOverlay && (
                        <div>
                          {" "}
                          {window.location.hash === "#chat-room" ? (
                            <ToggleIconWhite />
                          ) : (
                            <ToggleIcon />
                          )}
                        </div>
                      )}
                      {activeNavOverlay && (
                        <div>
                          {" "}
                          {window.location.hash === "#chat-room" ? (
                            <CrossIcon />
                          ) : (
                            <CrossIcon />
                          )}
                        </div>
                      )}

                      {/* {activeNavOverlay ? <CrossIcon /> : <ToggleIcon />} */}
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
