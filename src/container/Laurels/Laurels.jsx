import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
    </div>

    <div className="app__wrapper_img"></div>
  </div>
);

export default Laurels;
