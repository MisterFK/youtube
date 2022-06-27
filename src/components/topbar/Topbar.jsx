import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const LogoUser = ({ seed, name, lastname }) => {
    const initial = (
      "" +
      name.slice(0, 1) +
      lastname.slice(0, 1)
    ).toUpperCase();

    var color = Math.floor(Math.abs(Math.sin(seed) * 16777215));
    color = color.toString(16);
    // pad any colors shorter than 6 characters with leading 0s
    while (color.length < 6) {
      color = "0" + color;
    }
    return (
      <span className="topAvatar" style={{ backgroundColor: "#" + color }}>
        {initial}
      </span>
    );
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ecommerce Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <LogoUser seed="95345126" name="Michael" lastname="delo" />
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
        </div>
      </div>
    </div>
  );
}
