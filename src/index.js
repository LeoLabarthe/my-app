import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header/header";
import Profil from "./Components/Profil/profil";
import Contact from "./Components/Contact/contact";
import CV from "./Components/CV/cv";
import Cloud from "./Components/Cloud/cloud";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="calc">
      <Header />
      <Profil />
      <CV />
      <Contact />
      <Cloud />
    </div>
  </React.StrictMode>
);
