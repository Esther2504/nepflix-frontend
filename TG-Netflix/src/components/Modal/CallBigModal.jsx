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
import Player from '../player/Player';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../reducers/fetchReducer';

const CallBigModal = forwardRef((props, ref) => {
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

  //check if movie is in state
  // const moviesInState = useSelector((state) => state.netflix.movies);
  // const id = browseMovieID.get('movieID');
  // const movieInState = moviesInState.filter(
  //   (movie) => movie.id === (props.movieID || id)
  // );
  // useEffect(() => {
  //   if (!movieInState) {

  //     dispatch(getMovies(id));
  //   }
  // }, []);

  // const movieInfo = moviesInState.filter((movie) => movie.id === id);
  // console.log(movieInfo);

  const id = browseMovieID.get('movieID') * 1;
  const moviesInState = useSelector((state) => state.netflix.movies);

  const movieInfoAr = moviesInState.filter((movie) => movie.id === id);

  if(movieInfoAr.length === 0){
    dispatch(getMovies(parseInt(id)));
  }
  const movieInfo = movieInfoAr[0];
console.log(movieInfo);

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
            {/* <Player data={movieInfo} modal={true} /> */}
            <VideoInfoContainer>
              <VideoInfoContainerLeft>
                <MetaData>
                  <Rating>93% Match</Rating>
                  <ReleaseYear>
                    {movieInfo?.release_date.slice(0, 4)}
                  </ReleaseYear>
                  <MaturityRating></MaturityRating>
                  <Duration>
                    {Math.floor(movieInfo?.runtime / 60)}h{' '}
                    {movieInfo?.runtime % 60}m
                  </Duration>
                </MetaData>
                <Summary>{movieInfo?.overview}</Summary>
              </VideoInfoContainerLeft>
              <VideoInfoContainerRight>
                <Cast>
                  <span>Cast: </span>
                  {movieInfo?.actors.join(', ')}
                </Cast>
                <Genres>
                  <span>Genres: </span>
                  {movieInfo?.genres.join(', ')}
                </Genres>
                <Tags>
                  <span>This programme is: </span>
                  {movieInfo?.keywords + ' '}
                </Tags>
              </VideoInfoContainerRight>
            </VideoInfoContainer>
            <MoreLikeThisContainer>
              <span>More Like This</span>
              <MoreLikeThisWrapper ref={refMoreLikeThisWrapper}>
                {movieInfo?.similar.map((data, index) => {
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
                <h1>About: {movieInfo?.title}</h1>
              </AboutTitle>
              <Cast>
                <span>Cast: </span>
                {movieInfo?.actors.join(', ')}
              </Cast>
              <Genres>
                <span>Genres: </span>
                {movieInfo?.genres.join(', ')}
              </Genres>
              <Tags>
                <span>This programme is: </span> {movieInfo?.keywords + ''}
              </Tags>
              <MaturityRating>
                <span>Maturity Rating: </span>
                {movieInfo?.age_certificate}
              </MaturityRating>
            </AboutContainer>
          </ModalPreview>
        </ModalContent>
      </ModalContainer>
    </>
  );
});

export default CallBigModal;
