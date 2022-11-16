import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";
import Player from "../../components/player/Player";
import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { getMovies, getBrowse } from "../../reducers/fetchReducer";
import { addToList } from "../../reducers/likedReducer";

//import movieDetailsMock from '../../mock-data/movie_details_similar.mock.json'
// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt

export default function Discover({ banner, categories, movie }) {
  //STATE
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  const categoriesState = useSelector((state) => state.netflix.browse);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();


  //check if linked to a direct movie
  const getMovieID = browseMovieID.get("movieID");

  //open modal if linked to movieID
  useEffect(() => {
    if (getMovieID) dispatch(openModal({ modalState: true, coords }));
  }, []);

  const handleAddToMyList = (e) => {
    let r;

    categoriesState[0].forEach((categorie) => {
      r = categorie.movies.find((movie) => movie.id === movieID);
      if (r) {
        dispatch(addToList(r));
      }
      return;
    });
  };

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
  }, [categoriesState]);

  const openBigModal = () => {
    setBrowseMovieID({ movieID: movieID });
    dispatch(openModal({ modalState: true, coords }));
  };
  return (
    <>
      <div className="members-container">
        {categoriesState.length > 0 && <Player data={banner} modal={false} hovering={isHovering} />}
        {isHovering && (
          <CallSmallModal
            hover={isHovering}
            setIsHovering={setIsHovering}
            data={{ coords: coords, dataset: movieDetails }}
            onClick={openBigModal}
            movieID={movieID}
            handleAddToMyList={handleAddToMyList}
          />
        )}
        {globalModalState.modalState && <CallBigModal movieID={movieID} />}
        <div className="fade-container">
          {categoriesState.length > 0 && <LaneHandler categories={categories} movie={movie} />}
        </div>
        <Footer />
      </div>
    </>
  );
}
