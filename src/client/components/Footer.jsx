import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <Link to="" className="nav__link">
              Find your dream home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Request Proposal
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Download home planner
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Contact Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Submit your property
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Come work with us
            </Link>
          </li>
        </ul>
        <p className="copyright">&copy; Copyright 2019 by Jonas Schmedtmann</p>
      </footer>
    );
  }
}

export default Footer;
