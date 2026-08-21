import React from "react";
import { Element } from "react-scroll";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./shared/components/layouts/RootLayout";
import Silk from "./shared/components/layouts/Silk";
import About from "./pages/About";
import Craft from "./pages/Craft";
import Code from "./pages/Code";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="app">
      <RootLayout>
        {/* 1. Wrapper to hold both background and content */}
        <div
          style={{ position: "relative", width: "100%", minHeight: "100vh" }}
        >
          {/* 2. Absolute positioned container for the background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0, // Behind everything
              pointerEvents: "none", // Ensures the animation doesn't block mouse clicks
            }}
          >
            <Silk
              speed={4}
              scale={1.2}
              color="#1f1f1f"
              noiseIntensity={0.8}
              rotation={1.86}
            />
          </div>

          {/* 3. Content layer positioned on top */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Element name="home">
              <Homepage />
            </Element>

            <Element name="about">
              <About />
            </Element>

            <Element name="craft">
              <Craft />
            </Element>

            <Element name="code">
              <Code />
            </Element>

            <Element name="contact">
              <Contact />
            </Element>



          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default App;
