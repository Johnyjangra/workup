import React from "react";
import BrandAbout from "../components/brand/BrandAbout";
import BrandWhatDo from "../components/brand/BrandWhatDo";
import Market from "../components/brand/Market";
import BrandProgress from "../components/brand/BrandProgress";
import Unique from "../components/brand/Unique";
import BusnessModal from "../components/brand/BusnessModal";
import WorkUpTeam from "../components/brand/WorkUpTeam";
import BrandHero from "../components/brand/BrandHero";
import Footer from "../components/common/Footer";
import ProblemSolving from "../components/home/ProblemSolving";
import WorkUpSeek from "../components/brand/WorkUpSeek";
import OurWaitList from "../components/common/OurWaitList";
const Brand = () => {
  return (
    <div className=" overflow-hidden">
      <BrandHero />
      <BrandAbout />
      <BrandWhatDo />
      <div className="lg:mt-[150px] md:mt-[100px] mt-[70px] md:mb-[100px] mb-[70px]">
        <OurWaitList />
      </div>
      <Market />
      <BrandProgress />
      <ProblemSolving />
      <Unique />
      <BusnessModal />
      <WorkUpSeek />
      <WorkUpTeam />
      <Footer />
    </div>
  );
};

export default Brand;
