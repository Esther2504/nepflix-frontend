import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GridContainer } from "./GridLayout.styled";
import MovieCard from "../movie-card/MovieCard";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";
import CallBigModal from "../Modal/CallBigModal";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Card } from "../movie-card/MovieCard.styled";
import { getMovies, getBrowse } from "../../reducers/fetchReducer";

export default function GridLayout({ genre, setGenre, movie, categories }) {
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

  const loadedCategories = useSelector((state) => state.netflix.browse[0]);

  //check if linked to a direct movie
  const getMovieID = browseMovieID.get("movieID");

  let movies = loadedCategories;

  if (genre != "") {
    if (
      loadedCategories.find((item) => item?.name.toLowerCase() === `${genre}`)
    ) {
      movies = loadedCategories.find(
        (item) => item.name.toLowerCase() === `${genre}`
      );
    }

    if (
      !loadedCategories.find((item) => item?.name.toLowerCase() === `${genre}`)
    ) {
      const categories = genre;
      dispatch(getBrowse({ categories }));
    }
  }

  //open modal if linked to movieID
  useEffect(() => {
    if (getMovieID) dispatch(openModal({ modalState: true, coords }));
  }, []);

  //add evenlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
          setIsHovering(true);
          dispatch(getMovies(e.target.dataset.id));
          setMovieID(e.target.dataset.id);
          setCoords(e.target.getBoundingClientRect());
        }
      });
    });

    window.addEventListener("click", (e) => {
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
      {isHovering && (
        <CallSmallModal
          hover={isHovering}
          setIsHovering={setIsHovering}
          data={{ coords: coords, dataset: dataset, movie: movieID }}
          movieID={movieID}
          onClick={openBigModal}
        />
      )}
      {globalModalState.modalState && <CallBigModal movieID={movieID} />}
      <GridContainer>
        {movies?.movies?.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </GridContainer>
    </>
  );
}
