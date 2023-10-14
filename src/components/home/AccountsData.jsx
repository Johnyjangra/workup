import React from 'react'
import circle from "../../assets/png/dashboard-rgb-circle.png";
import dashboard from "../../assets/webp/dahboart-img.webp";

const AccountsData = () => {
  return (
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
        <div className="md:w-5/12 text-start">
          <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
            Accounts
          </h3>
          <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
            Et tempor justo aliquam orci augue vitae fringilla purus eget. Id
            vitae odio consequat aliquet volutpat convallis mi tortor. Eget
            mattis malesuada commodo urnavolutpat nisi rutrum leo. Curabitur id
            gravida urna consectetur.
          </p>
        </div>
      </div>
  );
}

export default AccountsData