import React from "react";
import "../scss/HomePage.scss";
import Left from "../components/Home Folder/LeftFolder/Left";
import Right from "../components/Home Folder/RightFolder/Right";

const Homepage = () => {
  return (
    <div className="home">
      <div className="wrapper">
          <Left />
          <Right />
      </div>
    </div>
  );
};

export default Homepage;
