import React from "react";
import { NavLink } from "react-router-dom";
import blogClass from "../../../styles/BlogCard.module.css";

const BlogCard = (props, ref) => {
  return (
    <NavLink ref={ref} className={blogClass.card_body} to={props.adress || "/"}>
      <img
        src={props.imgsrc}
        alt={props.imgalt}
        className={blogClass.card_image}
      />
      <h4 className={blogClass.title}>{props.title}</h4>
    </NavLink>
  );
};

const forwardBlog = React.forwardRef(BlogCard);
export default forwardBlog;
