import React from "react";
import "./left.scss";

const Left = () => {
  return (
    <div className="leftHome">
      <div className="innerH1">
          <h1>
            Barista <span>&</span>
          </h1>

          <h1 className="lower">Web Developer.</h1>
      </div>

      <div className="innerP">
          <p>
            Seven years pulling shots, leading teams, and pouring latte art from
            the heart — now writing the same <span>obsessive</span>
            care into every line of code I ship.
          </p>
      </div>

      <p className="sroll">Scroll to begin ---</p>
    </div>
  );
};

export default Left;
