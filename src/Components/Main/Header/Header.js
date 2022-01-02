import React from "react";
import headerClass from "../../../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div
      className={`${headerClass.container}
        ${props.home ? headerClass.homeHead : headerClass.not_home_container}`}
    >
      {props.topicLogo && <img src={props.topicLogo} alt="blood droplets" />}
      {props.topic2 && <h1 className={headerClass.mahta}>{props.topic2}</h1>}
      {props.topicTitle && (
        <h1 className={headerClass.mahta}>{props.topicTitle}</h1>
      )}
      {props.topice3 && <h2 className={headerClass.mahta}>{props.topice3}</h2>}
      {props.topicDescribtion && (
        <p className={headerClass.intro}>{props.topicDescribtion}</p>
      )}
      {props.linkback && (
        <Link className={headerClass.link} to={props.linkback}>
          {props.linkname}
        </Link>
      )}
      {props.topic4 && <h2 className={headerClass.come}>{props.topic4}</h2>}
    </div>
  );
};

export default Header;
