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
const Brand = () => {
  return (
    <div className=" overflow-hidden">
      <BrandHero />
      <BrandAbout />
      <BrandWhatDo />
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
