import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="Tasty">
            <h3>Tasty</h3>
          </div>
          <ul className="links">
            <li>
              <Link to={"/Home"} className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/Menu"} className="links">
                Menu
              </Link>
            </li>
            <li>
              <Link to={"/Specialties"} className="links">
                Specialties
              </Link>
            </li>
            <li>
              <Link to={"/Reservation"} className="links">
                Reservation
              </Link>
            </li>
            <li>
              <Link to={"/Blog"} className="links">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="links">
                About
              </Link>
            </li>
            <li>
              <Link to={"/Add"} className="links">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
