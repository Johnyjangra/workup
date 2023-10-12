import React from "react";
import BrandAbout from "../components/brand/BrandAbout";
import BrandWhatDo from "../components/brand/BrandWhatDo";
import Market from "../components/brand/Market";
import BrandProgress from "../components/brand/BrandProgress";
import Unique from "../components/brand/Unique";
import BusnessModal from "../components/brand/BusnessModal";
import WorkUpTeam from "../components/brand/WorkUpTeam";
import BrandHero from "../components/brand/BrandHero";
const Brand = () => {
  return (
    <div className=" overflow-hidden">
      <BrandHero />
      <BrandAbout />
      <BrandWhatDo />
      <Market />
      <BrandProgress />
      <Unique />
      <BusnessModal />
      <WorkUpTeam />
    </div>
  );
};

export default Brand;
