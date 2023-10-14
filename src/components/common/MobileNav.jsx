import React from "react";

const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  return (
    <>
      <div
        className={`fixed lg:hidden hero_bg_color top-0 h-full flex flex-col justify-center transition-all duration-200 ease-in items-center z-[41] w-full bg-white ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <ul className="text-center flex flex-col items-center">
          <li>
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="/chatroom"
              className="text-black text-[20px] sm:text-[30px] opacity-70 ff_outfit font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              Chat-Room
            </a>
          </li>
          <li className="py-5">
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="/brand"
              className="text-black text-[20px] sm:text-[30px] opacity-70 ff_outfit font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              Invest
            </a>
          </li>
          <li>
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="/founder"
              className="text-black text-[20px] sm:text-[30px] opacity-70 ff_outfit font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              Become a Co-Founder
            </a>
          </li>
          <li className="pt-5">
            <a
              href="/"
              onClick={() => setActiveNavOverlay(false)}
              aria-current="page"
            >
              <button className="lg:hidden overflow-hidden flex justify-center items-center h-[40px] w-[110px] text-sm text-blue hover:text-white font-semibold rounded-[100px] bg-white hover:bg-blue border-solid border-[2px] border-blue">
                Log In
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
