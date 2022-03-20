import React from "react";
import { links } from "./Data";
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
              <a className="link" key={id} href={url} onClick={navToggle}>
                {text}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
