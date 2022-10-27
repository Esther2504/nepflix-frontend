import React, { useRef, forwardRef, useEffect, useState } from "react";
import {
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
  VideoPlayer,
  VideoPlay,
  VideoControls,
  PlayButton,
  PlusCircle,
  ThumbsUp,
  RateIcons,
  VolumeIcon,
} from "../test/CallSmallModal.styled";
import Trailer from "./testTrailer.webm";

const CallSmallModal = forwardRef((props, forwardRef) => {
  const refSmallModal = useRef();
  const refVideoPlayer = useRef();
  const bg = props.children.props.src;
  const [bounds, setBounds] = useState(false);

  useEffect(() => {
    //Start/pause video on mouseover/mouseout smallmodal
    const videoSmall = refVideoPlayer.current;
    videoSmall.addEventListener("mouseover", (e) => {
      videoSmall.play();
    });
    videoSmall.addEventListener("mouseout", (e) => {
      videoSmall.pause();
      videoSmall.style.display = "none";
    });
    const refSM = refSmallModal.current;
    refSM.addEventListener("mouseover", (e) => {
      videoSmall.style.display = "block";
    });
  }, []);

  useEffect(() => {
    const refSM = refSmallModal.current;
    refSM.addEventListener("mouseover", (e) => {
      let leftBound = refSM.getBoundingClientRect().left;
      let rightBound = refSM.getBoundingClientRect().right;

      if (leftBound <= 20 && innerWidth - rightBound >= 20) {
        setBounds("left");
      } else if (leftBound > 20 && innerWidth - rightBound <= 20) {
        setBounds("right");
      } else {
        setBounds("center");
      }
    });
  }, [bounds]);

  return (
    <SmallModal ref={refSmallModal} bg={bg} bounds={bounds}>
      <SmallModalTop>
        <VideoPlayer
          muted
          src={Trailer}
          ref={refVideoPlayer}
          type="video/webm"
        />
      </SmallModalTop>
      <SmallModalBottom ref={forwardRef}>
        <VideoControls>
          <VideoPlay>
            <PlayButton />
            Play
          </VideoPlay>
          <PlusCircle />
          <ThumbsUp />
          <RateIcons />
          <VolumeIcon />
        </VideoControls>
      </SmallModalBottom>
    </SmallModal>
  )
});

export default CallSmallModal;
