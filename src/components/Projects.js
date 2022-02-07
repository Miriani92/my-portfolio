import React from "react";
import { posts } from "./Data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="main-section">
      <div className="main-container">
        <h3 style={{ textAlign: "center", paddingTop: "60px" }}>
          Some of my projects
        </h3>
        <div className="post-wrapper">
          {posts.map((post) => {
            const { id, img, title, text, link } = post;
            return <Project key={id} {...post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
