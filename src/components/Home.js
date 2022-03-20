import React from "react";
import image from "../images/myImage.jpg";
const Home = () => {
  return (
    <>
      <div className="home-contentwrapper">
        <img className="myImage" src={image} alt="myImage" />
        <h3>hi my name is miriani and i'm front end web developer</h3>
      </div>
    </>
  );
};

export default Home;
