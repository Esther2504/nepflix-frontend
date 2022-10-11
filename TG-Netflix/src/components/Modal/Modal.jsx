import React, { useRef, useEffect, useState } from "react";
import Trailer from "../modal/testTrailer.webm";
import PreviewModal from "../modal/PreviewModal";
import {
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
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
} from "../modal/Modal.style";

function Modal() {
  //REF's
  const modalRef = useRef();
  const modalRefContent = useRef();
  const modalRefVideo = useRef();
  const modalRefVideoSmall = useRef();
  const refMoreLikeThisWrapper = useRef();
  const modalRefSmall = useRef();
  //END REF's

  //STATE
  const [toggleViewMore, setToggleViewMore] = useState(false);
  const [offsetLeft, setoffsetLeft] = useState(0);
  const [offsetTop, setoffsetTop] = useState(0);
  //END STATE

  

  useEffect(() => {
    //allways show, for dev purpose only
    //modalRef.current.style.display = "block";

    //Start/pause video on mouseover/mouseout smallmodal
    const videoSmall = modalRefVideoSmall.current;
    videoSmall.addEventListener("mouseover", (e) => {
      videoSmall.play();
    });
    videoSmall.addEventListener("mouseout", (e) => {
      videoSmall.pause();
    });
  }, []);


  //Close modal when outside click
  window.onclick = (e) => {
    if (e.target.className === modalRef.current.className) {
      modalRef.current.style.display = "none";
      modalRefVideo.current.pause();
    }
  };

  //Close modal button
  const handleClose = () => {
    modalRef.current.style.display = "none";
    modalRefVideo.current.pause();
  };

  //Open modal
  const handleOnclick = (e) => {
    modalRef.current.style.display = "block";
    modalRefVideo.current.play();
    setoffsetLeft(e.currentTarget.getBoundingClientRect().left );
    setoffsetTop(e.currentTarget.getBoundingClientRect().top);
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
      <ModalContainer ref={modalRef}>
        <ModalContent ref={modalRefContent} offsetLeft={offsetLeft} offsetTop={offsetTop}>
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

      <SmallModal onClick={handleOnclick} ref={modalRefSmall}>
        <SmallModalTop>
          <VideoPlayer
            muted
            src={Trailer}
            type="video/webm"
            ref={modalRefVideoSmall}
          />
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
      <SmallModal onClick={handleOnclick} ref={modalRefSmall}>
        <SmallModalTop>
          <VideoPlayer
            muted
            src={Trailer}
            type="video/webm"
            ref={modalRefVideoSmall}
          />
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
    </>
  );
}

export default Modal;
