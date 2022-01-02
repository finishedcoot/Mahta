import React from "react";
import footerClass from "../../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      key="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={({ duration: 2.5 }, { delay: 1 })}
      exit={{ opacity: 0 }}
      className={footerClass.footer_container}
    >
      <div className={footerClass.copy_right}>
        <span>
          Copyright 2021 Mahta Charity | All Rights Reserved |{" "}
          <Link to={"/"} className={footerClass.footer_links}>
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to={"/"} className={footerClass.footer_links}>
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className={footerClass.spacer}></div>
      <div className={footerClass.social_media}>
        <Link to={"/"} className={footerClass.footer_links}>
          <FontAwesomeIcon
            icon={faInstagram}
            className={footerClass.social_icons}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </motion.div>
  );
};

export default Footer;
