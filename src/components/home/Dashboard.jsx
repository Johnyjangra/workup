import React from "react";
import { Tab } from "@headlessui/react";
import dashboard from "../../assets/webp/dahboart-img.png";
const Dashboard = () => {
  return (
    <>
      <div className="pt-[163px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <Tab.Group>
            <Tab.List className="flex justify-center gap-[94px]">
              <Tab>
                <div className="ff_outfit font-semibold leading-normal text-lg text-[#111223]">
                  Updated with your Dashboard
                </div>
              </Tab>
              <Tab>
                <div className="ff_outfit font-semibold leading-normal text-lg text-[#111223]">
                  Accounts
                </div>
              </Tab>
              <Tab>
                <div className="ff_outfit font-semibold leading-normal text-lg text-[#111223]">
                  Cards
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-wrap items-center">
                  <div className="w-6/12">
                    <img src={dashboard} alt="dashboard-img" />
                  </div>
                  <div className="w-6/12">
                    <h3>Updated with your Dashboard</h3>
                    <p>
                      Et tempor justo aliquam orci augue vitae fringilla purus
                      eget. Id vitae odio consequat aliquet volutpat convallis
                      mi tortor. Eget mattis malesuada commodo urnavolutpat nisi
                      rutrum leo. Curabitur id gravida urna consectetur.
                    </p>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
