import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GridContainer } from "./GridLayout.styled";
import MovieCard from "../movie-card/MovieCard";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";
import CallBigModal from "../Modal/CallBigModal";

export default function GridLayout({ movies, genre, setGenre, movie, categories }) {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);

  const { moviegenre } = useParams();

  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
          setIsHovering(true);
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

  const openBigModal = () => {
    dispatch(openModal({ modalState: true, coords }));
  };
  
    return (
    <>
      {isHovering && (
        <CallSmallModal
          onMouseLeave={() => setIsHovering(false)}
          hover={isHovering}
          data={{ coords: coords, dataset: dataset, movie: movie }}
          onClick={openBigModal}
        />
      )}
      {globalModalState.modalState && <CallBigModal />}
      <GridContainer>
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </GridContainer>
    </>
  );
}
