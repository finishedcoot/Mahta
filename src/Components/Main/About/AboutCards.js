import React, { useState } from "react";
import style from "../../../styles/AboutCards.module.css";
import aboutData from "../../../assets/data/about.json";
import AboutCardsSections from "./AboutCardsSections";

const AboutCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const activiesData = aboutData[0].subCategories;
  const moreDetail = (e) => {
    console.log(e.target);
    setActiveCard((prev) => (prev = e.target.id));
  };
  return (
    <div className={style.container}>
      {Object.entries(activiesData).map(([event, { id, title, img }]) => (
        <div key={event} className={style.card}>
          <img src={img[0]} alt={title} />
          <h1>{title}</h1>
          <p>
            مهتا، موسسه اى خيريه و غيرانتفاعى است كه با كمك هاى افراد خير،
            سازمان ها و شركت هاى خصوصى و باتكيه بر منابع انسانى و متخصص علاقه
            مند داخلى و سرمايه علمی ايرانيان متخصص در خارج از كشور
          </p>
          <h3 onClick={moreDetail} id={id} className={style.learnMore}>
            بیشتر
          </h3>
        </div>
      ))}
      {activeCard && <AboutCardsSections id={activeCard} />}
    </div>
  );
};

export default AboutCards;
