import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
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
  InfoCon,
  AgeRes,
  Runtime,
} from './CallSmallModal.style';

import YouTube from 'react-youtube';

const CallModal = (props) => {
  const [sWidth, setsWidth] = useState(0);
  useEffect(() => {
    setsWidth(window.innerWidth);
  }, [sWidth]);

  const bg =
    'https://image.tmdb.org/t/p/original' + props.data.dataset.backdrop;
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
    width: '100%',
    height: '100%',

    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      end: 66,
      rel: 0,
      frameborder: '0',
    },
  };

  const runtime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const result = hours + 'h ' + min + 'm'
    return result;
  };
  return (
    <SmallModalContainer coords={coords} bg={bg} onClick={props.onClick}>
      <SmallModal coords={coords} bg={bg} sWidth={sWidth}>
        <SmallModalTop bg={bg}>
          {videoState && (
            <YouTube
              videoId={Trailer}
              opts={opts}
              style={{ height: 'inherit' }}
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
          <InfoCon>
            <AgeRes>{props.data.dataset.age_certificate}</AgeRes>
            <Runtime>{runtime(props.data.dataset.runtime)}</Runtime>
          </InfoCon>
        </SmallModalBottom>
      </SmallModal>
    </SmallModalContainer>
  );
};

export default CallModal;
