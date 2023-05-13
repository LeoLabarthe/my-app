import React from "react";
import CV from "../../Assets/CV.jpg";
import "./cv.css";

const cv = () => {
  return (
    <div id="CV">
      <img className="cv" src={CV} />
    </div>
  );
};

export default cv;
