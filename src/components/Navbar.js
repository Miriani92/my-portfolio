import React from "react";
import { links } from "./Data";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="header">
          <Link className="logo" to="/">
            <em>Miriani Tsintsadze</em>
          </Link>
          <button className="button" onClick={navToggle}>
            <FaBars />
          </button>
        </div>
        <ul className={`${navbar ? "links-wrapper toggle" : "links-wrapper"}`}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Link className="link" key={id} to={url} onClick={navToggle}>
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
