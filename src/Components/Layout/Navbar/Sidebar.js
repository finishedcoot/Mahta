import React from "react";

import style from "../../../styles/Sidebar.module.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { NavLink } from "react-router-dom";

const Sidebar = ({ show, drawerClickHandler }) => {
  // let drawerClasses = [style.side_drawer];
  // if (props.show) {
  //   drawerClasses = [style.side_drawer, style.open];
  // }

  return (
    <div>
      <div className={style.toolbar__toggle_button}>
        <DrawerToggleButton show={show} click={drawerClickHandler} />
      </div>
      <nav className={`${style.side_drawer} ${show ? style.open : ""}`}>
        <ul className={style.side_drawer_link_list}>
          <li>
            <NavLink className={style.side_drawer_links} to="/donation">
              کمک به مهتا
            </NavLink>
          </li>
          <li>
            <NavLink className={style.side_drawer_links} to="/about">
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink className={style.side_drawer_links} to="/">
              خانه
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
