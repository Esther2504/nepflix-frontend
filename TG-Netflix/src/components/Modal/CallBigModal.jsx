import React, { useRef, forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PreviewModal from './PreviewModal';
import {
  ModalContainer,
  ModalContent,
  ModalPreview,
  CloseCircle,
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
} from './CallBigModal.styled';
import { closeModal, getMovieID } from '../../reducers/modalReducer';
import BigModalPlayer from "../player/BigModalPlayer";
import { useSearchParams } from 'react-router-dom';

const CallBigModal = forwardRef((movie, ref) => {
  //REF's
  const refMoreLikeThisWrapper = useRef();
  const modalRefContainer = useRef();
  //END REF's
  const dispatch = useDispatch();
  //STATE
  const [toggleViewMore, setToggleViewMore] = useState(false);
  const globalModalState = useSelector((state) => state.modal.modalState);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();
  const [directMovie, setDirectMovie] = useState();
  //END STATE

  const fetchDirectMovie = async () => {
    const directMovieID = browseMovieID.get('movieID');
    const data = await getMovieID(directMovieID);
    setDirectMovie(data);
  };
  
  //fetch data direct link
  useEffect(() => {
    if (browseMovieID.get('movieID')) {
      fetchDirectMovie();
    }
  }, []);
  
  if(directMovie){
    movie = directMovie;
  }
  // console.log(movie);
  //coords for big modal
  // const offset = document.querySelector('.banner-container').offsetHeight;
  const left = Math.round(globalModalState.coords.left) + 'px ';
  const top = Math.round(globalModalState.coords.top) + 'px';
  const coordsForBigModal = left + top;

  //Close modal button
  const handleClose = () => {
    setBrowseMovieID();
    dispatch(closeModal({ modalState: false, coords: [] }));
  };

  window.addEventListener('click', (e) => {
    if (e.target.className === modalRefContainer.current?.className) {
      setBrowseMovieID();
      dispatch(closeModal({ modalState: false, coords: [] }));
    }
  });

  //Toggle "more like this"
  const handleOnClickToggleMore = () => {
    setToggleViewMore(!toggleViewMore);
    if (!toggleViewMore) {
      refMoreLikeThisWrapper.current.style.height = 'auto';
      refMoreLikeThisWrapper.current.style.overflow = 'visible';
    } else if (toggleViewMore) {
      refMoreLikeThisWrapper.current.style.height = '90rem';
      refMoreLikeThisWrapper.current.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <ModalContainer ref={modalRefContainer}>
        <ModalContent coords={coordsForBigModal}>
          <CloseButton onClick={handleClose}>
            <CloseCircle />
          </CloseButton>
          <ModalPreview>
            <BigModalPlayer />
            <VideoInfoContainer>
              <VideoInfoContainerLeft>
                <MetaData>
                  <Rating>93% Match</Rating>
                  <ReleaseYear>{movie.release_date.slice(0, 4)}</ReleaseYear>
                  <MaturityRating></MaturityRating>
                  <Duration>
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </Duration>

                </MetaData>
                <Summary>{movie.overview}</Summary>
              </VideoInfoContainerLeft>
              <VideoInfoContainerRight>
                <Cast>
                  <span>Cast: </span>
                  {directMovie?.actors.join(', ')}
                </Cast>
                <Genres>
                  <span>Genres: </span>
                  {movie?.genres.join(', ')}
                </Genres>
                <Tags>
                  <span>This programme is: </span>{movie.keywords + ' '}
                </Tags>
              </VideoInfoContainerRight>
            </VideoInfoContainer>
            <MoreLikeThisContainer>
              <span>More Like This</span>
              <MoreLikeThisWrapper ref={refMoreLikeThisWrapper}>
                {movie.similar.map((data, index) => {
                  return <PreviewModal key={index} movie={data} />;
                })}
              </MoreLikeThisWrapper>
              <MoreLikeThisToggle
                onClick={handleOnClickToggleMore}
                style={
                  toggleViewMore === true
                    ? { transform: 'rotate(180deg)' }
                    : null
                }
              />
            </MoreLikeThisContainer>
            <AboutContainer>
              <AboutTitle>
                <h1>About: {movie.title}</h1>
              </AboutTitle>
              <Cast>
                <span>Cast: </span>
                {movie?.actors.join(', ')}
              </Cast>
              <Genres>
                <span>Genres: </span>
                {movie?.genres.join(', ')}
              </Genres>
              <Tags>
                <span>This programme is: </span> {movie.keywords + ""}
              </Tags>
              <MaturityRating>
                <span>Maturity Rating: </span>
                {movie.age_certificate}
              </MaturityRating>
            </AboutContainer>
          </ModalPreview>
        </ModalContent>
      </ModalContainer>
    </>
  );
});

export default CallBigModal;
