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
  Error,
  AgeRes,
  MaturityRating
} from './CallBigModal.styled';
import { closeModal } from '../../reducers/modalReducer';
// import Player from "../player/Player";
import BigModalPlayer from '../player/BigModalPlayer';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../reducers/fetchReducer';
import { useNavigate } from 'react-router-dom';


const CallBigModal = (props) => {
  //REF's
  const refMoreLikeThisWrapper = useRef();
  const modalRefContainer = useRef();
  //END REF's
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //STATE
  const [toggleViewMore, setToggleViewMore] = useState(false);
  const globalModalState = useSelector((state) => state.modal.modalState);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();
  const [directMovie, setDirectMovie] = useState();
  const [search] = useSearchParams();
  const searchQuery = search.get('q');

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
  if (movieInfoAr.length === 0) {
    dispatch(getMovies(parseInt(id)));
  }
  const movieInfo = movieInfoAr[0];

  //coords for big modal
  // const offset = document.querySelector('.banner-container').offsetHeight;
  const left = Math.round(globalModalState.coords.left) + 'px ';
  const top = Math.round(globalModalState.coords.top) + 'px';
  const coordsForBigModal = left + top;

  //Close modal button
  const handleClose = () => {
    setBrowseMovieID();
    dispatch(closeModal({ modalState: false, coords: [] }));
    location.pathname.includes('/search') ? navigate(`/search?q=${searchQuery}`) : null ;
  };

  window.addEventListener('click', (e) => {
    if (e.target.className === modalRefContainer.current?.className) {
      setBrowseMovieID();
      dispatch(closeModal({ modalState: false, coords: [] }));
      location.pathname.includes('/search') ? navigate(`/search?q=${searchQuery}`) : null ;
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

  let keywords = [];
  for (let i = 0; i < movieInfo.keywords.length; i++) {
    keywords.push(movieInfo.keywords[i][0].toUpperCase() + movieInfo.keywords[i].slice(1))
  }

  let ageCertificate = movieInfo?.age_certificate;
  // Als age certificate niet bestaat dan is het een lege string.
  // Via onderstaande check wordt van de lege string "NR" gemaakt.
  if (!ageCertificate) {
    ageCertificate = "NR";
    // Als age certificate de letters PG- bevat, dan worden deze na onderstaande check eraf gehaald
  } else if (ageCertificate.includes("PG-")) {
    ageCertificate = ageCertificate.slice(3);
  }

  return (
    <>
      <ModalContainer ref={modalRefContainer}>
        <ModalContent coords={coordsForBigModal}>
          <CloseButton onClick={handleClose}>
            <CloseCircle />
          </CloseButton>
          {movieInfo && (
            <>
              <ModalPreview>
                {/* <Player data={movieInfo} modal={true} /> */}
                <BigModalPlayer data={movieInfo} modal={true} />
                <VideoInfoContainer>
                  <VideoInfoContainerLeft>
                    <MetaData>
                      {/* <Rating>93% Match</Rating> */}
                      <ReleaseYear>{movieInfo?.release_date.slice(0, 4)} 
                      </ReleaseYear>
                      <AgeRes>{ageCertificate}</AgeRes>
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
                      <span>Keywords: </span>
                      {keywords.join(', ')}
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
                    <span>Keywords: </span> {keywords.join(', ')}
                  </Tags>
                  <MaturityRating>
                    <span>Maturity Rating: </span>
                    {movieInfo?.age_certificate}
                  </MaturityRating>
                </AboutContainer>
              </ModalPreview>
            </>
          )}
          {!movieInfo && (
            <Error>Movie ID not found.</Error>
          )}
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default CallBigModal;
