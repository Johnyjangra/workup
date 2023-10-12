import React from "react";
import workTeam from "../../assets/webp/WorkUpTeamImg.webp";
import TeamLine from "../../assets/svg/workUpTeamLLine.svg";
import dots from "../../assets/svg/teamDot.svg";
const WorkUpTeam = () => {
  return (
    <div className="relative">
      <img
        src={TeamLine}
        alt="TeamLine"
        className="absolute start-0 sm:top-[20%] top-[10%] pointer-events-none"
      />
      <img src={dots} alt="dots" className=" absolute start-0 bottom-0 pointer-events-none" />
      <p className="ff_outfit font-normal lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-Black leading-normal relative after:contents-[''] after:absolute after:w-[160px] after:start-[50%] after:translate-x-[-50%] after:h-[4px]  after:rounded-md after:bg-blue after:top-[-4%] mb-0 text-center">
        WorkUp Team
      </p>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 lg:mt-20 sm:mt-10 mt-5 lg:mb-[280px] sm:mb-[200px] mb-[100px]">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className="lg:w-6/12 md:w-10/12 w-full lg:pe-16">
            <img
              src={workTeam}
              alt="workTeam"
              className="w-full relative z-10"
            />
          </div>
          <div className="lg:w-6/12 w-full lg:mt-0 mt-5 relative z-10">
            <p className=" sm:text-sm text-[14px] font-normal leading-[160%] text-[#4D4D4D] ff_inter">
              Workup is spearheaded by our Founder, Luke Howard. With extensive
              experience in the hospitality sector, Luke has successfully owned
              multiple small businesses, employing meticulous financial
              discipline and utilising comprehensive spreadsheet reporting to
              guide these businesses towards success.
            </p>
            <p className=" sm:text-sm text-[14px] font-normal leading-[160%] text-[#4D4D4D] mt-1 ff_inter">
              Additionally, our team includes ElkTech, a software development
              company specialising in building fintech startups. Our team
              structure consists of a team lead and full-stack developer, two
              front-end developers, a backend developer, two UI/UX developers,
              and a QA engineer.
            </p>
            <p className="text-black ff_outfit text-md font-medium leading-[160%]">
              Luke Howard
            </p>
            <p className="text-black ff_outfit text-base font-normal leading-[140%]">
              Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkUpTeam;
