import { Title, TitleWrapper } from './MyList.styled'
import Footer from '../../components/footer/footer';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import MovieCard from '../../components/movie-card/MovieCard';
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { openModal, closeModal } from "../../reducers/modalReducer";
import React, { useState, useEffect } from "react";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import { getMovies } from '../../reducers/fetchReducer';


export default function MyList() {

  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [browseMovieID, setBrowseMovieID] = useSearchParams();
  const movieDetails = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const [movieID, setMovieID] = useState();

  const getMovieID = browseMovieID.get('movieID');

  //add eventlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        console.log('sda')
        if (e.target.getAttribute("id")) {
          
          setMovieID(e.target.dataset.id);
          setDataset(film.dataset);
          setIsHovering(true);
          dispatch(getMovies(e.target.dataset.id))
          setCoords(e.target.getBoundingClientRect());
          dispatch(openModal({ modalState: false, coords: coords }));
        }
      });
    });
    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);
  // console.log(movieID)


  const openBigModal = () => {
    setBrowseMovieID({ movieID: movieID });
    dispatch(openModal({ modalState: true, coords }));
  };


  const liked = useSelector(state => state.liked.likedMovies);
  console.log(liked)

  return (
    <>
      <div className="padding-container">
        <TitleWrapper>
          <Title>My List</Title>
        </TitleWrapper>
        <GridContainer>

          {isHovering && (
            <CallSmallModal
              onMouseLeave={() => setIsHovering(false)}
              hover={isHovering}
              setIsHovering={setIsHovering}
              data={{ coords: coords, dataset: dataset, movie: movieID }}
              onClick={openBigModal}
            />
          )}
          {globalModalState.modalState && <CallBigModal  {...movieDetails} />}

          {liked.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />
          })};
        </GridContainer>
        <Footer />
      </div>
    </>
  );
}
