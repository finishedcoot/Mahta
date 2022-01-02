import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import style from "../../../styles/LCards.module.css";

const Cards = (props) => {
  return (
    <div className={style.card_body}>
      <Link className={style.modal} to={props.adress}>
        <LazyLoadImage
          effect="blur"
          className={style.card_image}
          src={props.imgsrc}
          alt={props.imgalt}
          width={"100%"}
          height={"100%"}
        />
      </Link>

      {/* <img
        src={props.imgsrc}
        alt={props.imgalt}
        className={}
      /> */}
    </div>
  );
};

export default Cards;
