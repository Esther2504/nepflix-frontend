import React, { useRef } from "react";
import Trailer from "../Modal/testTrailer.webm";
import {
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
  ModalContainer,
  ModalContent,
  ModalClose,
  ModalPreview,
  VideoPlayer,
  VideoControlsContainer,
  VideoTitle,
  VideoPlay,
  VideoControls,
  CloseCircle,
  PlayButton,
  PlusCircle,
  ThumbsUp,
  RateIcons,
  VolumeIcon,
  CloseButton,
  MoreLikeThisContainer,
  VideoInfoContainer,
} from "../Modal/Modal.style";


function Modal() {
  const modalRef = useRef();
  const modalRefContent = useRef();
  const modalRefVideo = useRef();
  
  window.onclick = (e) => {
    if ((e.target.className === modalRef.current.className)) {
      modalRef.current.style.display = "none";
      modalRefVideo.current.pause();
    }
  };

  const handleClose = () => {
    modalRef.current.style.display = "none";
    modalRefVideo.current.pause();
  };

  const handleOnclick = () => {
    modalRef.current.style.display = "block";
    modalRefVideo.current.play();
  };

  return (
    <>
      <ModalContainer ref={modalRef}>
        <ModalContent ref={modalRefContent}>
          <CloseButton onClick={handleClose}>
            <CloseCircle />
          </CloseButton>
          <ModalPreview>
            <VideoControlsContainer>
              <VideoTitle />
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
              <VideoInfoContainer>

              </VideoInfoContainer>
            </VideoControlsContainer>
            <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo}/>
            <MoreLikeThisContainer>

            </MoreLikeThisContainer>
          </ModalPreview>
        </ModalContent>
      </ModalContainer>
      <SmallModal onClick={handleOnclick}>
        <SmallModalTop></SmallModalTop>
        <SmallModalBottom></SmallModalBottom>
      </SmallModal>
    </>
  );
}

export default Modal;