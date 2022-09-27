import React, { useRef } from "react";
import {
  SmallModal,
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
  ThumbsUp
} from "../Modal/Modal.style";
import Trailer from "../Modal/testTrailer.webm";


function Modal() {
  const modalRef = useRef();
  const modalRefContent = useRef();

  window.onclick = (e) => {
    if (e.target.className === modalRef.current.className) {
      modalRef.current.style.display = "none";
    }
  };

  const handleOnclick = (e) => {
    modalRef.current.style.display = "block";
  };

  return (
    <>
      <ModalContainer ref={modalRef}>
        <ModalContent ref={modalRefContent}>
          <ModalClose>
            <CloseCircle/>
          </ModalClose>
          <ModalPreview>
            <VideoControlsContainer>
              <VideoTitle />
              <VideoControls>
                <VideoPlay>
                  <PlayButton/>
                  Play
                </VideoPlay>
                <PlusCircle/>
                <ThumbsUp/>
              </VideoControls>
            </VideoControlsContainer>
            <VideoPlayer autoPlay muted src={Trailer} type="video/webm" />
          </ModalPreview>
        </ModalContent>
      </ModalContainer>
      <SmallModal onClick={handleOnclick}>Click me!</SmallModal>
    </>
  );
}

export default Modal;
