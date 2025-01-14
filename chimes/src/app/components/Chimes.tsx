"use client";
import React from "react";
import Chime from "./Chime";
import * as Tone from "tone";
import classes from "./Chimes.module.css";
import { NOTES } from "./notes_data";

const Chimes = () => {
  const handleHover = (note: string) => {
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(note, "8n");
    Tone.start();
    console.log(Tone);
  };
  return (
    <div className={classes.chimes_container}>
      {NOTES.map((note, index) => (
        <Chime key={index} note={note.note} onPlay={handleHover} />
      ))}
    </div>
  );
};
export default Chimes;
