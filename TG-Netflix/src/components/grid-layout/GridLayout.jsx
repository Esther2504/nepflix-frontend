import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GridContainer } from "./GridLayout.styled";
import MovieCard from "../movie-card/MovieCard";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";
import CallBigModal from "../Modal/CallBigModal";
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

export default function GridLayout({ movies, genre, setGenre, movie, categories }) {
  const { moviegenre } = useParams();
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();

  //END STATE

  //check if linked to a direct movie
  const getMovieID = browseMovieID.get('movieID');

  //open modal if linked to movieID
  useEffect(() => {
    if (getMovieID) dispatch(openModal({ modalState: true, coords }));
  }, []);

  //add evenlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll('#movie');
    films.forEach((film) => {
      film.addEventListener('mouseenter', (e) => {
        if (e.target.getAttribute('id')) {
          setDataset(film.dataset);
          setIsHovering(true);
          setMovieID(e.target.dataset.id);
          setCoords(e.target.getBoundingClientRect());
        }
      });
    });

    window.addEventListener('click', (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  const openBigModal = () => {
    setBrowseMovieID({ movieID: movieID });
    dispatch(openModal({ modalState: true, coords }));
  };

    return (
    <>
      {/* {isHovering && (
        <CallSmallModal
          onMouseLeave={() => setIsHovering(false)}
          hover={isHovering}
          data={{ coords: coords, dataset: dataset, movie: movie }}
          onClick={openBigModal}
        />
      )}
      {globalModalState.modalState && <CallBigModal />} */}
      <GridContainer>
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </GridContainer>
    </>
  );
}
