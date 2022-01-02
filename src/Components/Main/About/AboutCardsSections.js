import React from "react";
import style from "../../../styles/AboutCardsSections.module.css";
import aboutData from "../../../assets/data/about.json";

const AboutCardsSections = ({ id }) => {
  const activiesData = aboutData[0].subCategories;

  const subject = Object.entries(activiesData)
    .map(([event, e]) => e)
    .filter((subj) => String(subj.id) === id);

  return (
    <div className={style.container}>
      <img
        className={style.headImg}
        src={subject[0].img[0]}
        alt={subject[0].title}
      />
      <h1 className={style.title}>{subject[0].title}</h1>
      <p className={style.desc}>
        مهتا، موسسه اى خيريه و غيرانتفاعى است كه با كمك هاى افراد خير، سازمان ها
        و شركت هاى خصوصى و باتكيه بر منابع انسانى و متخصص علاقه مند داخلى و
        سرمايه علمی ايرانيان متخصص در خارج از كشور
      </p>
      <div className={style.galleryContainer}>
        {subject[0].img.slice(1).map((img) => (
          <img src={img} alt={subject[0].title} />
        ))}
      </div>
    </div>
  );
};

export default AboutCardsSections;
