import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import sectionClass from "../../../styles/Section.module.css";

const Sections = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={sectionClass.mainpart}>
      <div className={sectionClass.secondpart}>
        {" "}
        <section className={sectionClass.container1}>
          <h2 data-aos="fade-right">کتابها و مقالات</h2>
          <img
            data-aos="fade-left"
            src={"/statics/Book.svg"}
            alt={"Hemophilia-Book"}
            className={sectionClass.secimg1}
          ></img>
          <div className={sectionClass.infoContainer1}>
            <NavLink to="/library">مطالعه کنیم</NavLink>
          </div>
        </section>
      </div>

      <div className={sectionClass.secondpart}>
        <section className={sectionClass.container2}>
          <h2 data-aos="fade-left">فیلم های آموزشی</h2>
          <img
            data-aos="fade-right"
            src={"/statics/Teaching.svg"}
            alt={"Hemophilia-Teaching"}
            className={sectionClass.secimg2}
          ></img>
          <div className={sectionClass.infoContainer2}>
            <NavLink to="/theatre">تماشا کنیم</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sections;
