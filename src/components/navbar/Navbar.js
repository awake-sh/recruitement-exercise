import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHome } from "../../assets/icons/tabs.svg";
import { ReactComponent as IconCampaigns } from "../../assets/icons/tabs.svg";

const LINKS = [
  { to: "/", text: "Home", icon: <IconHome /> },
  { to: "/campaigns", text: "Campaigns", icon: <IconHome /> },
];

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <nav className={"navbar__menu"}>
        <ul className={"tab__li"}>
          {LINKS.map((link) => (
            <li key={link.to} className={"tab__el"}>
              <Link to={link.to} className={"tab"}>
                <span className="tab__icon">{link.icon}</span>
                <span className="tab__text">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
