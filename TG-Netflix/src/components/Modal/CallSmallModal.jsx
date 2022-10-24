import React, {useEffect} from "react"
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

const CallModal = (props) => {
  console.log(props.data.dataset);
  const bg = 'https://via.placeholder.com/150' //props.data.dataset.backdrop;
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

  return (
    <SmallModalContainer coords={coords} bg={bg}>
      <SmallModal>
        <SmallModalTop>
          <VideoPlayer loop muted src={Trailer} type="video/webm" />
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
