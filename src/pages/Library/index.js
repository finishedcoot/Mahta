import React from "react";

import style from "../../styles/Library.module.css";
import LCards from "../../Components/Main/Library/LCards";
import Header from "../../Components/Main/Header/Header";
import { motion } from "framer-motion";

import booksData from "../../assets/data/books.json";

const Library = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.container}
    >
      <Header
        topicLogo={"/statics/open-book.svg"}
        topicTitle={"به کتابخانه مهتا خوش آمدید!"}
        topic4={"باهم بخوانیم"}
        topicDescribtion={
          "انتشارات آموزشی برای بیماران و خانواده آن ها در زمینه بیماری هموفیلی، بیماری فون ویلبراند، اختلالات عملکرد پلاکت ها،اختلالات نادر انعقادی و زنان با اختلالات خونریزی دهنده"
        }
      />
      <div className={style.card_holder}>
        {booksData.map((book) => {
          return (
            <LCards
              key={book.id}
              title={book.title}
              imgsrc={book.img[0]}
              imgalt={book.title}
              adress={`/library/${book.url}`}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Library;
