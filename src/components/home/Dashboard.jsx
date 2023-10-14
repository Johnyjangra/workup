import React, { useState } from "react";
import semi_circle from "../../assets/png/dashboard-right-semicircle.png";
import DashboarsData from "./DashboarsData";
import AccountsData from "./AccountsData";
import CardsData from "./CardsData";
const Dashboard = () => {
  const tabsData = [
    {
      heading: "Updated with your Dashboard",
      parall: <DashboarsData />,
      para: "1",
    },
    {
      heading: "Accounts",
      parall: <AccountsData />,
      para: "2",
    },
    {
      heading: "Cards",
      parall: <CardsData />,
      para: "3",
    },
  ];
  const [value, setValue] = useState(tabsData[0]);
  const [border, setborder] = useState(0);
  return (
    <>
      <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
        {" "}
        <div className="py-12 xl:pt-[163px]">
          <img
            className="absolute pointer-events-none end-0 bottom-[-3%] lg:bottom-0 hidden md:block md:w-[6%] 2xl:w-[5%]"
            src={semi_circle}
            alt="rgb-semircle"
          />
          <div className="text-center">
            <div className="md:overflow-x-scroll overflow-auto sm:overflow-visible md:overflow-auto scroll_bar_hide">
              <div
                className={` flex gap-8 justify-between  relative after:absolute after:h-[8px] after:bg-[#F0F0F0] w-[460px] sm:w-auto after:w-full sm:after:w-[calc(100%_+_70px)] after:top-[40px] md:after:top-[46px] after:left-1/2 after:translate-x-[-50%] sm:inline-block after:rounded-[10px] before:transition-all before:duration-200 before:ease-linear
            
            before:absolute before:h-[8px] before:bg-sky before:z-10 before:top-[40px]   md:before:top-[46px]  before:rounded-[10px] mb-10 md:mb-0 ${
              border === 0
                ? "before:left-0 before:translate-x-[-10.5%] md:before:translate-x-[-8.5%] before:w-[calc(70%)] md:before:w-[calc(60%)]"
                : border === 1
                ? "before:left-[50%] before:translate-x-[40%] md:before:translate-x-[15%] before:w-[calc(25%)] md:before:w-[calc(30%)]"
                : border === 2
                ? "before:left-[85.1%]  before:translate-x-[-10%] md:before:translate-x-[0%] before:w-[calc(25%)] md:before:w-[calc(20%)]"
                : ""
            } `}>
                {tabsData.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index === 0 ? "" : "sm:ps-8 md:ps-[94px]"
                      } inline-block md:mb-10 lg:mb-[116px]`}>
                      <button
                        key={index}
                        className={` ff_outfit font-semibold leading-normal text-[18px] sm:text-[20px] md:text-lg`}
                        onClick={() => {
                          setValue(val);
                          setborder(index);
                        }}>
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

      {/* <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
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
                  <img
                    className="absolute pointer-events-none top-[-10%] hidden md:block w-[30%] left-[-10%]"
                    src={circle}
                    alt="rgb-circle"
                  />
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
                    eget. Id vitae odio consequat aliquet volutpat convallis mi
                    tortor. Eget mattis malesuada commodo urnavolutpat nisi
                    rutrum leo. Curabitur id gravida urna consectetur.
                  </p>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-wrap items-center justify-center md:justify-between">
                <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
                  <img
                    className="absolute top-[-10%] hidden md:block w-[30%] left-[-10%]"
                    src={circle}
                    alt="rgb-circle"
                  />
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
                    eget. Id vitae odio consequat aliquet volutpat convallis mi
                    tortor. Eget mattis malesuada commodo urnavolutpat nisi
                    rutrum leo. Curabitur id gravida urna consectetur.
                  </p>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-wrap items-center justify-center md:justify-between">
                <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
                  <img
                    className="absolute top-[-10%] hidden md:block w-[30%] left-[-10%]"
                    src={circle}
                    alt="rgb-circle"
                  />
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
                    eget. Id vitae odio consequat aliquet volutpat convallis mi
                    tortor. Eget mattis malesuada commodo urnavolutpat nisi
                    rutrum leo. Curabitur id gravida urna consectetur.
                  </p>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div> */}
    </>
  );
};

export default Dashboard;
