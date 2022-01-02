import React, { useRef } from "react";
import style from "../../styles/HelpUs.module.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const HelpUs = () => {
  const player = useRef();
  const reload = () => {
    player.current.seekTo(4);
    console.log("hehe");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
      className={style.container}
    >
      <h1 className={style.helpMahta}>کمک به مهتا</h1>
      <div className={style.video_container}>
        <ReactPlayer
          ref={player}
          url={"/statics/intro.mp4"}
          width={"100%"}
          height={"100%"}
          onEnded={reload}
          controls={false}
          muted={true}
          playing={true}
        />
      </div>
      <img className={style.icon} src="/statics/heart.png" alt="donation" />
      <p className={style.explanation}>
        این کمک ها برای تشخیص و درمان بیماری های انعقاد خون (هموفیلی و
        ترومبوفیلی)، آموزش بیماران و عموم مردم، پیشگیری از تولد کودکان مبتلا و
        تحقیقات در زمینه این بیماری ها و غیره ..هزینه خواهد شد. حمایت های شما
        تأثیرات مثبت و ماندگاری در کیفیت زندگی این بیماران خواهد داشت.
      </p>
      <p className={style.accountNumber}>
        شماره حساب IR440540125702100099999004 بانک پارسیان شعبه توانیر
      </p>
      <p className={style.accountNumber}>
        شماره کارت بانکی <br /> 6221-0610-8001-3214 <br /> به نام موسسه خیریه
        مهتا
      </p>
      <h3>تماس با ما و امور داوطلبین</h3>
      <ul className={style.contact}>
        <li>
          <FontAwesomeIcon
            icon={faPhone}
            className={style.social_icons}
          ></FontAwesomeIcon>{" "}
          1840 8887 21 98+
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={style.social_icons}
          ></FontAwesomeIcon>
          mahta@mahta.org.ir
        </li>
        <li>
          <FontAwesomeIcon
            icon={faLocationArrow}
            className={style.social_icons}
          ></FontAwesomeIcon>
          ایران، تهران، خیابان ولیعصر کوچه ترانبده پلاک4
        </li>
      </ul>
    </motion.div>
  );
};

export default HelpUs;
