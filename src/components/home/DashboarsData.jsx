import React from "react";
import dashboard from "../../assets/webp/dahboart-img.webp";
import { DashboardImgTopCircle } from "../common/Icons";

const DashboarsData = () => {
  return (
    <>
      <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
            <span
              className="absolute pointer-events-none top-[-10%] hidden lg:block w-[30%] left-[-10%]"
             
            ><DashboardImgTopCircle/></span>
            <img
              className="drop-shadow-lg w-full xl:h-[447px] xl:w-[570px]"
              src={dashboard}
              alt="dashboard-img"
            />
          </div>
          <div className="md:w-5/12 text-start">
            <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
              Updated with your Dashboard
            </h3>
            <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
              Et tempor justo aliquam orci augue vitae fringilla purus eget. Id
              vitae odio consequat aliquet volutpat convallis mi tortor. Eget
              mattis malesuada commodo urnavolutpat nisi rutrum leo. Curabitur
              id gravida urna consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

 {
   /* {tabsData.map((val, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 0 ? "" : "ps-8 md:ps-[94px]"
                } inline-block md:mb-10 lg:mb-[116px]`}
              >
                <button
                  key={index}
                  className={`${
                    val.para == value.para
                      ? "bg-blue text-lightpurple"
                      : "bg-lightpurple text-white"
                  } ms-3 fs-3 fw-bold border-0 py-2 px-5`}
                  onClick={() => setValue(val)}
                >
                  {val.heading}
                </button>
              </div>
            );
          })}
          <p>{value.content}</p> */
 }

export default DashboarsData;
