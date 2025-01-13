import React from "react";
import classes from "./Chime.module.css";

interface ChimeProps {
  note: string;
  onPlay: (note: string) => void;
}

const Chime: React.FC<ChimeProps> = ({ note, onPlay }) => {
  return (
    <div className={classes.chime} onMouseEnter={() => onPlay(note)}></div>
  );
};
export default Chime;
