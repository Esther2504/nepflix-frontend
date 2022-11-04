import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GridContainer } from "./GridLayout.styled";
import MovieCard from "../movie-card/MovieCard";
import CallModal from "../Modal/CallSmallModal";
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

  // console.log(moviegenre)

//   useEffect(() => {
// setGenre(moviegenre)
//   }, [moviegenre])

  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setTimeout(function () {
          setDataset(film.dataset);
          setIsHovering(true);
          setCoords(e.target.getBoundingClientRect());
          dispatch(
            openModal({ modalState: false, coords: coords, movie: movie })
          );
          }, 500)
        }
      });
    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  // console.log(dataset);

  const openBigModal = () => {
    dispatch(openModal({ modalState: true, coords }));
  };

    return (
    <>
      {isHovering && (
        <CallModal
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
