import "./header.css";
import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
// import Accordion from "../../components/Accordion/Accordion";
// import { accordionData } from "../../utils/content";

export default function Header({ goTo, link }) {
  return (
    <div className="hrnet-header">
      <Link to="/">
        <img src={logo} alt="HRnet" className="hrnet-logo" />
      </Link>

      <div className="hrnet-title">HRnet</div>
      <div className="hrnet-nav">
        <Link to={link}>
          <p className="hrnet-link">{goTo}</p>
        </Link>
      </div>
    </div>
  );
}
