import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, techEvents, about, events, sponsors} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = techEvents.display;
  const viewSkills = about.display;
  const viewAchievement = sponsors.display;
  const viewBlog = events.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-name">
            <img
              src="https://cseaceg.org.in/sync/assets/img/sync.png"
              alt="Pinacle"
              width="110"
              height="110"
            ></img>
          </span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">About</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Events</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Sponsors</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
