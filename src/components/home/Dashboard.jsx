import React, { useState } from "react";
import semi_circle from "../../assets/png/dashboard-right-semicircle.png";
import { tabsData } from "../common/Helper";
import { DashboardRight } from "../common/Icons";
const Dashboard = () => {
  const [value, setValue] = useState(tabsData[0]);
  const [border, setborder] = useState(0);
  return (
    <>
      <div className="relative">
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <div className="py-12 sm:py-[70px] xl:pt-[163px]">
            <span
              className="absolute pointer-events-none end-0 bottom-[-3%] lg:bottom-0 hidden md:block md:w-[6%] 2xl:w-[5%]"
            ><DashboardRight/></span>
            <div className="text-center">
              <div className="overflow-auto sm:overflow-visible md:overflow-auto scroll_bar_hide">
                <div
                  className={` flex gap-8 justify-between  relative after:absolute after:h-[5px] after:bg-[#F0F0F0] w-[460px] sm:w-auto after:w-full sm:after:w-[calc(100%_+_70px)] after:top-[40px] md:after:top-[46px] after:left-1/2 after:translate-x-[-50%] sm:inline-block after:rounded-[10px] before:transition-all before:duration-200 before:ease-linear
        
              before:absolute before:h-[5px] before:bg-sky before:z-10 before:top-[40px] md:before:top-[46px] before:rounded-[10px] mb-10 md:mb-0 ${
                border === 0
                  ? "before:left-0 before:translate-x-[0%] md:before:translate-x-[-8.5%] before:w-[calc(60%)] md:before:w-[calc(60%)]"
                  : border === 1
                  ? "before:left-[50%] before:translate-x-[40%] md:before:translate-x-[15%] before:w-[calc(25%)] md:before:w-[calc(30%)]"
                  : border === 2
                  ? "before:left-[85.1%]  before:translate-x-[-20%] md:before:translate-x-[0%] before:w-[calc(25%)] md:before:w-[calc(20%)]"
                  : ""
              } `}
                >
                  {tabsData.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          index === 0 ? "" : "sm:ps-8 md:ps-[94px]"
                        } inline-block md:mb-10 lg:mb-[116px]`}
                      >
                        <button
                          key={index}
                          className={` ff_outfit font-semibold leading-normal text-[18px] sm:text-[20px] md:text-lg`}
                          onClick={() => {
                            setValue(val);
                            setborder(index);
                          }}
                        >
                          {val.heading}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <span>{value.parall}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
