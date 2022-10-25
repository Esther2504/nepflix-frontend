import React, { useEffect } from "react";
import { useRef, useState } from "react";
import {
  SmallModalContainer,
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
} from "./CallSmallModal.style";
import Trailer from "./testTrailer.webm";
import YouTube from "react-youtube"

const CallModal = (props) => {
  console.log(props.data.dataset);
  const bg =
    "https://image.tmdb.org/t/p/original" + props.data.dataset.backdrop;
  // const Trailer = props.data.dataset.video
  const left = props.data.coords.x;
  const top = props.data.coords.y;
  const width = props.data.coords.right - props.data.coords.x;
  const height = props.data.coords.bottom - props.data.coords.y;
  const coords = {
    left,
    top,
    width,
    height,
  };

  const refSmallModal = useRef();
  const refVideoPlayer = useRef();
  const [bounds, setBounds] = useState(false);
  const [videoState, setVideoState] = useState(false);

  console.log(Trailer);

  // useEffect(() => {
  //   //Start/pause video on mouseover/mouseout smallmodal
  //   const videoSmall = refVideoPlayer.current;
  //   videoSmall.addEventListener("mouseover", (e) => {
  //     videoSmall.play();
  //   });
  //   videoSmall.addEventListener("mouseout", (e) => {
  //     videoSmall.pause();
  //     videoSmall.style.display = "none";
  //   });
  //   const refSM = refSmallModal.current;
  //   refSM.addEventListener("mouseover", (e) => {
  //     videoSmall.style.display = "block";
  //   });
  // }, []);

  // Als de small modal verschijnt, duurt het nog twee seconden tot de video speelt
  if (props.hover) {
    setTimeout(function () {
      setVideoState(true);
    }, 1500);
  }

  const opts = {
    playerVars: {
        width: '20%',
        autoplay: 0,
        mute: 1,
        controls: 0,
        disablekb: 1,
        end: 66,
        rel: 0,
        frameborder: '0',
    }
}
  
  console.log(props.hover);
  console.log(videoState);

  return (
    <SmallModalContainer coords={coords} bg={bg}>
      <SmallModal coords={coords} bg={bg}>
        <SmallModalTop bg={bg}>
          {videoState && (
            // <VideoPlayer
            //   autoplay
            //   loop
            //   muted
            //   src={Trailer}
            //   ref={refVideoPlayer}
            //   type="video/webm"
            // />
            // <YouTube videoId="0IOsk2Vlc4o" opts={opts} />
            <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/0IOsk2Vlc4o?autoplay=1`}
            frameBorder="0"
          />
          )}
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
    </SmallModalContainer>
  );
};

export default CallModal;
