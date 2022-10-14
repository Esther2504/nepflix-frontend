import React, { useState, useRef, forwardRef, useEffect } from "React";
import {
  Child,
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
} from "../test/CallModal.styled";
import Trailer from "../../modal/testTrailer.webm";

const CallModal = forwardRef((props, ref) => {
  const refSmallModal = useRef();
  const refVideoPlayer = useRef();

  useEffect(() => {
    //allways show, for dev purpose only
    //modalRef.current.style.display = "block";

    //Start/pause video on mouseover/mouseout smallmodal
    const videoSmall = refVideoPlayer.current;
    videoSmall.addEventListener("mouseover", (e) => {
      videoSmall.play();
    });
    videoSmall.addEventListener("mouseout", (e) => {
      videoSmall.pause();
    });
  }, []);


  const bg = props.children.props.src;
  const handleOnMouseOver = () => {
    refSmallModal.current.style.display = "block";
    refVideoPlayer.current.style.display = "block";
  };
  const handleOnMouseLeave = () => {
    //refSmallModal.current.style.display = 'none'
    refVideoPlayer.current.style.display = "none";
  };

  return (
    <Child
      ref={ref}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      <SmallModal ref={refSmallModal} bg={bg}>
        <SmallModalTop>
          <VideoPlayer muted src={Trailer} ref={refVideoPlayer} type="video/webm"/>
        </SmallModalTop>
        <SmallModalBottom>
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
    </Child>
  );
});

export default CallModal;
