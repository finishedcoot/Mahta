import React, { useState } from "react";
import style from "../../styles/Theatre.module.css";
import Header from "../../Components/Main/Header/Header";
import clips from "../../assets/data/clips.json";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
const Theatre = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentClip, setCurrentClip] = useState("");

  const startPlaying = (e) => {
    setIsPlaying(true);
    setCurrentClip((prev) => (prev = e.target.id));
  };
  const stopPlaying = (e) => {
    if (e.target.id === "modal") {
      setIsPlaying(false);
      setCurrentClip(null);
    }
  };
  const playingClip = clips.filter(
    (clip) => String(clip.id) === String(currentClip)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.container}
    >
      <Header
        topicLogo={"/statics/projecto.svg"}
        topicTitle={"به تماشاخانه مهتا خوش آمدید!"}
        topicDescribtion={
          "مهتا در اینجا ویدئو های آموزشی مختلفی که به ما کمک میکنند به زبان ساده و واضح با بیماری هموفیلی بیشتر آشنا بشویم را برای شما تهیه کرده. "
        }
      />
      {isPlaying && (
        <div onClick={stopPlaying} id="modal" className={style.modal}>
          <div className={style.playerContainer}>
            <ReactPlayer
              className="react-player"
              url={playingClip[0].clipUrl}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      <div className={style.clipsContainer}>
        {clips.map((clip) => (
          <div
            id={clip.id}
            className={`${style.clipCard} ${
              clip.id === 4 ? style.largClip : ""
            }`}
          >
            {clip.id === 4 ? (
              <div className={style.largVideoContainer}>
                <ReactPlayer
                  className="react-player"
                  url={clip.clipUrl}
                  light={clip.clipCover}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            ) : (
              <img
                id={clip.id}
                onClick={startPlaying}
                src={clip.clipCover}
                alt={clip.title}
                className={style.thumbnail}
              />
            )}

            <h3 id={clip.id} onClick={startPlaying}>
              {clip.title}
            </h3>
            <p>{clip.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Theatre;
