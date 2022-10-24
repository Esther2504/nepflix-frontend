import React, { useRef, useEffect, useState } from "react";
import Trailer from "../Modal/testTrailer.webm";
import PreviewModal from "../Modal/PreviewModal";
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
} from "../Modal/Modal.style";
import { TbRotate } from "react-icons/tb";

function Modal({movie}) {
  
  //REF's
  const modalRef = useRef();
  const modalRefContent = useRef();
  const modalRefVideo = useRef();
  const modalRefVideoSmall = useRef();
  const refMoreLikeThisWrapper = useRef();
  //END REF's

  //STATE
  const [toggleViewMore, setToggleViewMore] = useState(false);
  //END STATE

  useEffect(() => {
    //allways show, for dev purpose only
    modalRef.current.style.display = "block";

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
  const handleOnclick = () => {
    modalRef.current.style.display = "block";
    modalRefVideo.current.play();
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
        <ModalContent ref={modalRefContent}>
          <CloseButton onClick={handleClose}>
            <CloseCircle />
          </CloseButton>
          <ModalPreview>
            <VideoPlayer
              muted
              src={`https://www.youtube.com/embed/${movie.trailer}?controls=0&autoplay=1`}
              type="video/webm"
              allow="autoplay"
              ref={modalRefVideo}
            />
            <VideoControlsContainer>
              {console.log(movie.logo)}
              <VideoTitle src={movie.logo} />
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
                  <Duration>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</Duration>
                  <VidQuality>HD</VidQuality>
                  <AudDesc>Aud</AudDesc>
                </MetaData>
                <Summary>{movie.description}</Summary>
              </VideoInfoContainerLeft>
              <VideoInfoContainerRight>
                <Cast>
                  <span>Cast:</span>
                  {movie.actors.join(", ")}
                </Cast>
                <Genres>
                  <span>Genres:</span>
                  {movie.genres.join(", ")}
                </Genres>
                <Tags>
                  <span>This programme is:</span> Exciting, Funny
                </Tags>
              </VideoInfoContainerRight>
            </VideoInfoContainer>
            <MoreLikeThisContainer>
              <span>More Like This</span>
              <MoreLikeThisWrapper ref={refMoreLikeThisWrapper}>
                {movie.similar.map((data, index) => {
                  return <PreviewModal key={index} movie={data} />
                })}
              </MoreLikeThisWrapper>
              <MoreLikeThisToggle onClick={handleOnClickToggleMore} style={toggleViewMore === true ? {transform: 'rotate(180deg)'} : undefined}/>
            </MoreLikeThisContainer>
            <AboutContainer>
              <AboutTitle>
                <h1>About GoT: House Of The Dragon</h1>
              </AboutTitle>
              <Cast>
                <span>Cast:</span>
                {movie.actors.join(", ")}
              </Cast>
              <Genres>
                <span>Genres:</span>
                {movie.genres.join(", ")}
              </Genres>
              <Tags>
                <span>This programme is:</span> Exciting, Funny
              </Tags>
              <MaturityRating>
                <span>Maturity Rating:</span>
                {movie.age_certificate}
              </MaturityRating>
            </AboutContainer>
          </ModalPreview>
        </ModalContent>
      </ModalContainer>

      <SmallModal onClick={handleOnclick}>
        <SmallModalTop>
          <VideoPlayer
            frameborder="0"
            // muted
            src={`https://www.youtube.com/embed/${movie.trailer}?controls=0&mute=1`}
            type="video/webm"
            ref={modalRefVideoSmall}
          />
        </SmallModalTop>
        <SmallModalBottom></SmallModalBottom>
      </SmallModal>
    </>
  );
}

export default Modal;
