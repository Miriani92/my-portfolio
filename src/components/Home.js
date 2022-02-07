import React from "react";
import image from "../images/myImage.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="home-contentwrapper">
        <img className="myImage" src={image} />
        <h3>hi my name is miriani and i'm front end web developer</h3>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
