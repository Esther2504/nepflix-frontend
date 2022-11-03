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
import YouTube from "react-youtube";

const CallModal = (props) => {
  const [sWidth, setsWidth] = useState(0);
  useEffect(() => {
    setsWidth(window.innerWidth);
  }, [sWidth]);

  console.log(props.data.dataset.id)

  const refVideoPlayer = useRef();
  const bg =
    "https://image.tmdb.org/t/p/original" + props.data.dataset.backdrop;
  // let Trailer = props.movie.trailer;
  let Trailer = "0IOsk2Vlc4o"
  const left = props.data.coords.x;
  const top = props.data.coords.y;
  const right = props.data.coords.right;
  const width = props.data.coords.right - props.data.coords.x;
  const height = props.data.coords.bottom - props.data.coords.y;
  const coords = {
    left,
    top,
    width,
    height,
    right,
  };

  const [videoState, setVideoState] = useState(false);

  // Als de small modal verschijnt, duurt het nog twee seconden tot de video speelt
  if (props.hover) {
    setTimeout(function () {
      setVideoState(true);
    }, 1500);
  }

  const opts = {
    width: "100%",
    height: "100%",

    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      end: 66,
      rel: 0,
      frameborder: "0",
    },
  };

  return (
    <SmallModalContainer coords={coords} bg={bg} onClick={props.onClick}>
      <SmallModal coords={coords} bg={bg} sWidth={sWidth}>
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
            // <YouTube videoId={Trailer} opts={opts} />
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
