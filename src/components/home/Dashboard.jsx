import React from "react";
import { Tab } from "@headlessui/react";
import dashboard from "../../assets/webp/dahboart-img.webp";
import circle from "../../assets/png/dashboard-rgb-circle.png"
import semi_circle from "../../assets/png/dashboard-right-semicircle.png"
const Dashboard = () => {
  return (
    <>
      <div className="py-12 xl:pt-[163px] relative">
      <img className="absolute pointer-events-none end-0 bottom-[-3%] lg:bottom-0 hidden md:block md:w-[6%] 2xl:w-[5%]" src={semi_circle} alt="rgb-semircle" />
        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <Tab.Group>
            <div className="overflow-x-scroll md:overflow-auto scroll_bar">
              <Tab.List className="flex justify-center flex-wrap pb-0 mb-1 lg:mb-[116px] w-[510px] sm:w-[710px] md:mb-10 md:w-full mx-auto  max-w-[685px] relative before:absolute before:content-[''] md:before:h-[4px] before:w-full before:bottom-0 before:rounded-[26px] md:before:bg-[#F0F0F0]">
                <Tab className="focus-visible:outline-none md:focus-visible:before:bg-[#2CB9E9] relative md:pb-4 before:absolute before:content-[''] md:before:h-[4px] before:w-full before:bottom-0 before:rounded-[26px] before:start-[-3px]">
                  <div className="ff_outfit font-semibold leading-normal text-[20px] sm:text-lg text-[#111223]">
                    Updated with your Dashboard
                  </div>
                </Tab>
                <Tab className="focus-visible:outline-none md:focus-visible:before:bg-[#2CB9E9] md:pb-4 ps-8 md:ps-[94px] relative before:absolute before:content-[''] md:before:h-[4px] before:w-full before:bottom-0 before:rounded-[26px] before:start-0">
                  <div className="ff_outfit font-semibold leading-normal text-[20px] sm:text-lg text-[#111223]">
                    Accounts
                  </div>
                </Tab>
                <Tab className="focus-visible:outline-none md:focus-visible:before:bg-[#2CB9E9] md:pb-4 ps-8 md:ps-[94px] relative before:absolute before:content-[''] md:before:h-[4px] before:w-full before:bottom-0 before:rounded-[26px] before:start-0">
                  <div className="ff_outfit font-semibold leading-normal text-[20px] sm:text-lg text-[#111223]">
                    Cards
                  </div>
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                  <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
                    <img className="absolute pointer-events-none top-[-10%] hidden md:block w-[30%] left-[-10%]" src={circle} alt="rgb-circle" />
                    <img
                      className="drop-shadow-lg w-full xl:h-[447px] xl:w-[570px]"
                      src={dashboard}
                      alt="dashboard-img"
                    />
                  </div>
                  <div className="md:w-5/12">
                    <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
                      Updated with your Dashboard
                    </h3>
                    <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
                      Et tempor justo aliquam orci augue vitae fringilla purus
                      eget. Id vitae odio consequat aliquet volutpat convallis
                      mi tortor. Eget mattis malesuada commodo urnavolutpat nisi
                      rutrum leo. Curabitur id gravida urna consectetur.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
              <div className="flex flex-wrap items-center justify-center md:justify-between">
                  <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
                  <img className="absolute top-[-10%] hidden md:block w-[30%] left-[-10%]" src={circle} alt="rgb-circle" />
                    <img
                      className="drop-shadow-lg w-full xl:h-[447px] xl:w-[570px]"
                      src={dashboard}
                      alt="dashboard-img"
                    />
                  </div>
                  <div className="md:w-5/12">
                    <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
                    Accounts
                    </h3>
                    <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
                      Et tempor justo aliquam orci augue vitae fringilla purus
                      eget. Id vitae odio consequat aliquet volutpat convallis
                      mi tortor. Eget mattis malesuada commodo urnavolutpat nisi
                      rutrum leo. Curabitur id gravida urna consectetur.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
              <div className="flex flex-wrap items-center justify-center md:justify-between">
                  <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
                  <img className="absolute top-[-10%] hidden md:block w-[30%] left-[-10%]" src={circle} alt="rgb-circle" />
                    <img
                      className="drop-shadow-lg w-full xl:h-[447px] xl:w-[570px]"
                      src={dashboard}
                      alt="dashboard-img"
                    />
                  </div>
                  <div className="md:w-5/12">
                    <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
                    Cards
                    </h3>
                    <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
                      Et tempor justo aliquam orci augue vitae fringilla purus
                      eget. Id vitae odio consequat aliquet volutpat convallis
                      mi tortor. Eget mattis malesuada commodo urnavolutpat nisi
                      rutrum leo. Curabitur id gravida urna consectetur.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
