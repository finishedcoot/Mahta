import React from "react";
import Header from "../Header/Header";
import theatreClass from "../../../styles/Theatre.module.css";
import projector from "./img/projecto.svg";
import BlogCard from "./BlogCard";
import childView from "./img/childview.jpg";
import coworker from "./img/coworker.jpg";

const Theatre = () => {
  return (
    <div className={theatreClass.container}>
      <Header
        topicLogo={projector}
        topicTitle={"به تماشاخانه مهتا خوش آمدید!"}
        topic4={"با هم ببینیم"}
        topicDescribtion={
          "مهتا در اینجا ویدئو های آموزشی مختلفی که به ما کمک میکنند به زبان ساده و واضح با بیماری هموفیلی بیشتر آشنا بشویم را برای شما تهیه کرده. "
        }
      />
      <div className={theatreClass.card_holder}>
        <BlogCard imgsrc={coworker} title={"توضیح"} />
        <BlogCard imgsrc={childView} title={"توضیح"} />
        <BlogCard imgsrc={childView} title={"توضیح"} />
      </div>
    </div>
  );
};

export default Theatre;
