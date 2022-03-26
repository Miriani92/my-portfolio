import React from "react";
import { posts } from "./Data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="main-section" id="Projects">
      <div className="main-container">
        <h4 style={{ textAlign: "center", paddingTop: "60px" }}>My projects</h4>
        <div className="post-wrapper">
          {posts.map((post) => {
            return <Project key={post.id} {...post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
