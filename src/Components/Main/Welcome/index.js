import React from "react";
import ReactPlayer from "react-player/lazy";
import style from "../../../styles/Welcome.module.css";

import { useDispatch } from "react-redux";
import { animationEnded } from "../../../redux/reducers/StartAnimation";

import { motion } from "framer-motion";
const Welcome = () => {
  const dispatch = useDispatch();
  const ended = () => {
    setTimeout(dispatch(animationEnded(true)), 1000);
  };
  return (
    <motion.div
      key="welcome"
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={style.video_container}>
        <ReactPlayer
          url={"/statics/intro.mp4"}
          width={"100%"}
          height={"100%"}
          controls={false}
          muted={true}
          playing={true}
          onEnded={ended}
        />
      </div>
    </motion.div>
  );
};

export default Welcome;
