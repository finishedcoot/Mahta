import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import contentClass from "../../../styles/Library.module.css";
import LCards from "./LCards";
import hemophiliaInPic from "./img/hemophiliainpicCover_Page_1.jpg";
import fibrinogen from "./img/Fibrinogen.jpg";
import homeThreatment from "./img/homethreatment.jpg";
import paincover from "./img/paincover.jpg";
import WhatisHemoCover from "./img/WhatisCover.jpg";
import Header from "../Header/Header";
import glanzmanCover from "./Glanzman/glanzman/Glanzman_Page_01.jpg";
import openBook from "./img/open-book.svg";

const Library = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      if (index === 0) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 1 });
      }
      if (index === 1) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 1.2 });
      }
      if (index === 2) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 1.5 });
      }
      if (index === 3) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 1.9 });
      }
      if (index === 4) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 2.3 });
      }
      if (index === 5) {
        gsap.to(el, { duration: 2, opacity: 1, delay: 2.3 });
      }
    });
  }, []);
  const addToRefs = (el) => {
    revealRefs.current.push(el);
  };
  return (
    <div className={contentClass.container}>
      <Header
        topicLogo={openBook}
        topicTitle={"به کتابخانه مهتا خوش آمدید!"}
        topic4={"باهم بخوانیم"}
        topicDescribtion={
          "ما سعی کردیم معتبر ترین و بروز ترین کتاب ها و مقالات دنیا را برای شما فراهم و ترجمه کنیم و آنها را اینجا در اختیار شما برای مطالعه قرار بدهیم. "
        }
      />
      <div className={contentClass.card_holder}>
        {" "}
        <LCards
          ref={addToRefs}
          imgsrc={hemophiliaInPic}
          imgalt={"hemophilia in pictures"}

          // title={"هموفیلی در تصویر"}
        />
        <LCards
          ref={addToRefs}
          imgsrc={fibrinogen}
          imgalt={"Fibrinogen"}
          title={"مدیریت مشکلات زنان مبتلا"}
          adress={"/library/Fibrinogen"}
        />
        <LCards
          ref={addToRefs}
          imgsrc={homeThreatment}
          imgalt={"The hemophilia handbook"}
          title={"درمان در منزل"}
          adress={"/library/HomeTreatment"}
        />
        <LCards
          ref={addToRefs}
          imgsrc={paincover}
          imgalt={"Pain management"}
          title={"درد(پنجمین علامت حیاتی)"}
          adress={"/library/PainTheFifthSign"}
        />
        <LCards
          ref={addToRefs}
          imgsrc={glanzmanCover}
          imgalt={"Glanzman"}
          adress={"/library/Glanzman"}
          title={"فیبرینوزن"}
        />
        <LCards
          ref={addToRefs}
          imgsrc={WhatisHemoCover}
          imgalt={"What is hemophilia"}
          title={"هموفیلی چیست"}
          adress={"/library/WhatIsHemoPhilia"}
        />
      </div>
    </div>
  );
};

export default Library;
