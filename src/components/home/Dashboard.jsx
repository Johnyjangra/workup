import React from "react";
import { Tab } from "@headlessui/react";
const Dashboard = () => {
  return (
    <>
      <div className="pt-[163px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <Tab.Group>
            <Tab.List className="text-center">
              <Tab><div className="ff_outfit text-lg text-[#111223]">Updated with your  Dashboard</div></Tab>
              <Tab><div>Accounts</div></Tab>
              <Tab><div>Cards</div></Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
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
