import React from "react";
import { links } from "./Data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navToggle = () => {
    setNavbar((prevstate) => !prevstate);
  };

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="header">
          <a className="logo" href="/">
            <em>Miriani Tsintsadze</em>
          </a>
          <button className="button" onClick={navToggle}>
            <FaBars />
          </button>
        </div>
        <ul className={`${navbar ? "links-wrapper toggle" : "links-wrapper"}`}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Link
                className="link"
                key={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={text}
                href={url}
                onClick={navToggle}
              >
                {text}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
