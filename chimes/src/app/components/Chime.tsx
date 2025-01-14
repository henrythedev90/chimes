import React, { useRef, useEffect } from "react";
import * as Tone from "tone";
import gsap from "gsap";
import classes from "./Chime.module.css";

interface ChimeProps {
  note: string;
  onPlay: (note: string) => void;
}

const Chime: React.FC<ChimeProps> = ({ note, onPlay }) => {
  const chimeRef = useRef<HTMLDivElement>(null);

  // Handle mouse entering the chime
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (chimeRef.current) {
      const chimeRect = chimeRef.current.getBoundingClientRect();
      const chimeCenterX = chimeRect.left + chimeRect.width / 2;
      const mouseX = e.clientX;

      // Determine the direction to sway
      const swayDirection = mouseX < chimeCenterX ? -15 : 15; // Positive for right, negative for left

      // Animate the chime sway in the determined direction
      gsap.to(chimeRef.current, {
        rotation: swayDirection, // Rotate to the right (positive) or left (negative)
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  // Handle mouse leaving the chime (natural return)
  const handleMouseLeave = () => {
    if (chimeRef.current) {
      gsap.to(chimeRef.current, {
        rotation: 0, // Continue swaying back to normal position
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1, // Continue swaying
        yoyo: true, // Alternate direction
      });
    }
  };

  // Initial sway when component mounts (natural sway)
  useEffect(() => {
    if (chimeRef.current) {
      gsap.to(chimeRef.current, {
        rotation: 5,
        repeat: -1,
        yoyo: false,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={chimeRef}
        className={classes.chime}
        onMouseEnter={(e) => {
          handleMouseEnter(e);
          onPlay(note);
        }}
        onMouseLeave={handleMouseLeave}
      ></div>
      <p>{note}</p>
    </div>
  );
};

export default Chime;
