import React from "react";
import style from "../../../styles/HomeContent.module.css";
import Sections from "./Sections";

const HomeContent = () => {
  return (
    <div className={style.container}>
      <div className={style.homeHead}>
        <div className={style.homeinfo}>
          <img className={style.logo} src={"/statics/logo.svg"} alt="logo" />
          <h1 className={style.charity}>{"موسسه خیریه"}</h1>

          <h1 className={style.mahta}>{"مهتا"}</h1>

          <h2 className={style.mahta}>{"سازمان مردم نهاد"}</h2>
        </div>
        <img
          className={style.icon}
          src={"/statics/blood-donation-svgrepo-com.svg"}
          alt="blood droplets"
        />
      </div>

      <Sections />
    </div>
  );
};

export default HomeContent;
