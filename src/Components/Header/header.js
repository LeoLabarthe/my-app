import React from "react";
import "./header.css";
const header = () => {
  return (
    <div className="header">
      <h1>Leo Labarthe - Mon CV en ligne </h1>
      <ul>
        <a href="#CV">
          <li>Mon CV</li>
        </a>
        <a href="#Contact">
          {" "}
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default header;
