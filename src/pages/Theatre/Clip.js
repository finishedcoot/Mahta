import React from "react";
import style from "../../styles/Clip.module.css";
import clips from "../../assets/data/clips.json";
import ReactPlayer from "react-player";
const Clip = ({ id }) => {
  const clip = clips.filter((clip) => clip.id === id);
  return (
    <div className={style.modal}>
      <div className={style.playerContainer}>
        <ReactPlayer
          className="react-player"
          url={clip.clipUrl}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Clip;
