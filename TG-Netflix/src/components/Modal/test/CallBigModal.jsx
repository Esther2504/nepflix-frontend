import React, { useRef, forwardRef, useState, useEffect } from "react";
import PreviewModal from "./PreviewModal";
import Trailer from "../test/testTrailer.webm";
import {
  ModalContainer,
  ModalContent,
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
  MetaData,
  Rating,
  ReleaseYear,
  MaturityRating,
  Duration,
  VidQuality,
  AudDesc,
  Cast,
  Genres,
  Tags,
  Summary,
  VideoInfoContainer,
  VideoInfoContainerLeft,
  VideoInfoContainerRight,
  MoreLikeThisWrapper,
  MoreLikeThisToggle,
  AboutContainer,
  AboutTitle,
} from "./CallBigModal.styled";

const CallBigModal = forwardRef((props, ref) => {
  //REF's
  const modalRef = useRef();
  const modalRefContent = useRef();
  const modalRefVideo = useRef();

  const refMoreLikeThisWrapper = useRef();
  //END REF's

  //STATE
  const [toggleViewMore, setToggleViewMore] = useState(false);
  //END STATE

  //Close modal when outside click
  window.onclick = (e) => {
    if (e.target.className === ref.current.className) {
      ref.current.style.display = "none";
      modalRefContent.current.style.display = "none";

    }
  };

  //Close modal button
  const handleClose = () => {
    ref.current.style.display = "none";
  };

  //Toggle "more like this"
  const handleOnClickToggleMore = () => {
    setToggleViewMore(!toggleViewMore);
    if (!toggleViewMore) {
      refMoreLikeThisWrapper.current.style.height = "auto";
      refMoreLikeThisWrapper.current.style.overflow = "visible";
    } else if (toggleViewMore) {
      refMoreLikeThisWrapper.current.style.height = "50rem";
      refMoreLikeThisWrapper.current.style.overflow = "hidden";
    }
  };

  return (
    <>
      <ModalContainer ref={ref}>
        <ModalContent ref={modalRefContent}>
          <CloseButton onClick={handleClose}>
            <CloseCircle />
          </CloseButton>
          <ModalPreview>
            <VideoPlayer
              muted
              src={Trailer}
              type="video/webm"
              ref={modalRefVideo}
            />
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
            </VideoControlsContainer>
            <VideoInfoContainer>
              <VideoInfoContainerLeft>
                <MetaData>
                  <Rating>93% Match</Rating>
                  <ReleaseYear>2022</ReleaseYear>
                  <MaturityRating></MaturityRating>
                  <Duration>1h 58m</Duration>
                  <VidQuality>HD</VidQuality>
                  <AudDesc>Aud</AudDesc>
                </MetaData>
                <Summary>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque at ex non metus consequat hendrerit. Sed euismod,
                  nibh sed interdum blandit, quam metus tempus libero, quis
                  vestibulum nisi leo at lacus.
                </Summary>
              </VideoInfoContainerLeft>
              <VideoInfoContainerRight>
                <Cast>
                  <span>Cast:</span> Pietje, Jantje, Loesje, Keesje
                </Cast>
                <Genres>
                  <span>Genres:</span> Period piece, Drama, Thriller
                </Genres>
                <Tags>
                  <span>This programme is:</span> Exciting, Funny
                </Tags>
              </VideoInfoContainerRight>
            </VideoInfoContainer>
            <MoreLikeThisContainer>
              <span>More Like This</span>

              <MoreLikeThisWrapper ref={refMoreLikeThisWrapper}>
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
                <PreviewModal />
              </MoreLikeThisWrapper>
              <MoreLikeThisToggle
                onClick={handleOnClickToggleMore}
                style={
                  toggleViewMore === true
                    ? { transform: "rotate(180deg)" }
                    : undefined
                }
              />
            </MoreLikeThisContainer>
            <AboutContainer>
              <AboutTitle>
                <h1>About GoT: House Of The Dragon</h1>
              </AboutTitle>
              <Cast>
                <span>Cast:</span> Pietje, Jantje, Loesje, Keesje
              </Cast>
              <Genres>
                <span>Genres:</span> Period piece, Drama, Thriller
              </Genres>
              <Tags>
                <span>This programme is:</span> Exciting, Funny
              </Tags>
              <MaturityRating>
                <span>Maturity Rating:</span> Depics violence, May cause fear
                and anxiety
              </MaturityRating>
            </AboutContainer>
          </ModalPreview>
        </ModalContent>
      </ModalContainer>
    </>
  );
});

export default CallBigModal;
