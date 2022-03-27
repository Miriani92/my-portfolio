import React from "react";

const Project = ({ img, title, text, link }) => {
  return (
    <div className="post">
      <img className="projectImage" src={img} alt="image" />
      <div className="post-preview">
        <h4 className="post-title">{title}</h4>
        <a href={link} className="post-seemore" target="_blank">
          See More
        </a>
      </div>
    </div>
  );
};

export default Project;
