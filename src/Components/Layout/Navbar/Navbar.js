import React from "react";
import { useLocation } from "react-router";
import styles from "../../../styles/Navbar.module.css";
// import mahtaLogo from "/statics/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className={styles.navbar}>
      <div className={styles.toolbar__navigation}>
        <div className={styles.toolbar__logo}>
          <NavLink className={styles.home_link} to="/">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className={`${
                location.pathname === "/" || location.pathname === "/about"
                  ? styles.home
                  : ""
              }`}
              src={"/statics/logo.svg"}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className={styles.spacer}> </div>
        <div className={styles.toolbar_navigation_items}>
          <ul>
            <li>
              <NavLink
                style={{ fontFamily: "shabnam" }}
                className={`${
                  location.pathname === "/donation" ? styles.active : ""
                } ${styles.helpus} ${styles.navlink}`}
                to="/donation"
              >
                کمک به مهتا
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${
                  location.pathname === "/about" ? styles.active : ""
                } ${styles.about} ${styles.navlink}`}
                to="/about"
              >
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${location.pathname === "/" ? styles.active : ""} ${
                  styles.home
                } ${styles.navlink}`}
                to="/"
              >
                خانه
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
