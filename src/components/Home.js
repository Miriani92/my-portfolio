import React from "react";
import image from "../images/myImage.jpg";
const Home = () => {
  return (
    <>
      <div className="home-contentwrapper">
        <img className="myImage" src={image} alt="myImage" />
        <h4>Hi, my name is miriani and i'm front-end web developer</h4>
      </div>
    </>
  );
};

export default Home;
