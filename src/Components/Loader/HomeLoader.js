import React from "react";
import style from "../../styles/HomeLoader.module.css";

const HomeLoader = () => {
  return (
    <div className={style.container}>
      <h1 className={style.text}>مهتا</h1>
      <div className={style.drop_container}>
        <div className={style.drop}></div>
      </div>
      <div className={style.eco}></div>
    </div>
  );
};

export default HomeLoader;
