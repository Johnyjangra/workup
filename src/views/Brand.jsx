import React from "react";
import BrandAbout from "../components/brand/BrandAbout";
import BrandWhatDo from "../components/brand/BrandWhatDo";
import Market from "../components/brand/Market";
import BrandProgress from "../components/brand/BrandProgress";
const Brand = () => {
  return (
    <div>
      <BrandAbout />
      <BrandWhatDo />
      <Market />
      <BrandProgress />
    </div>
  );
};

export default Brand;
