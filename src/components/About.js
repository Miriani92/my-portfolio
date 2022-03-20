import React from "react";
import { faLinkedin, faGit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchImage from "../images/search.jpg";

const About = () => {
  return (
    <article className="about-container">
      <div className="about-wrapper">
        <div classname="more-wrapper">
          <h4>more about me</h4>
          <p className="paragraph">
            Hello I am front-end developer from Georgia, I enjoy building web
            that is interactive, easy to use, beautiful, accessible to all , I
            discovered web development in my life a few years ago and since then
            I have been trying to acquire knowledge and grow as developer
          </p>
          <h4>What I Know</h4>
          <p className="paragraph">
            As i mentioned i'am front end developer primery focus on react,so i
            have good knowladge of<em> html css vanila javascript</em> , i like
            using <em>figma</em> for my design and creating simple beck-end
            using <em>strapi </em>
            and <em>graphql</em>
          </p>
        </div>
        <div className="searchSection">
          <h4>you can find me</h4>
          <img className="searchImage" src={searchImage} />
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/mirian-tsintsadze-277676227/"
              target="_blank"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              className="git"
              href="https://github.com/Miriani92"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGit} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
