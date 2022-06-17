import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <Tilt>
        <div className="logo">
          <h1>D</h1>
        </div>
      </Tilt>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <Tilt>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
        </Tilt>
        <Tilt>
          <li className="nav-item">
            <a href="/">Events</a>
          </li>
        </Tilt>
        <Tilt>
          <li className="nav-item">
            <a href="/">FAQ</a>
          </li>
        </Tilt>
        <Tilt>
          <li className="nav-item">
            <a href="/">Student List</a>
          </li>
        </Tilt>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
