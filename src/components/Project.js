import React from "react";

const Project = ({ img, title, text, link }) => {
  return (
    <div className="post">
      <img className="projectImage" src={img} alt="image" />
      <div className="post-preview">
        <h6 className="post-title">{title}</h6>
        <p className="post-intro"> {text} </p>
        <a href={link}>See More</a>
      </div>
    </div>
  );
};

export default Project;
