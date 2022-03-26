import React from "react";
import image from "../images/myImage.jpg";
const Home = () => {
  return (
    <div id="Home">
      <div className="home-contentwrapper">
        <img className="myImage" src={image} alt="myImage" />
        <h4>Hi, my name is miriani and i'm front-end web developer</h4>
      </div>
    </div>
  );
};

export default Home;
