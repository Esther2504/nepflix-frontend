import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../reducers/modalReducer';
import Player from '../../components/player/Player';
import LaneHandler from '../../components/lane/LaneHandler';
import Footer from '../../components/footer/footer';
import CallSmallModal from '../../components/Modal/CallSmallModal';
import CallBigModal from '../../components/Modal/CallBigModal';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovies, getBrowse} from "../../reducers/fetchReducer";

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
          dispatch(getMovies(e.target.dataset.id))
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
      <div className="members-container">
        <Player data={banner} modal={false} />
        {isHovering && (
          <CallSmallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: movieDetails }}
            onClick={openBigModal}
          />
        )}
        {globalModalState.modalState && <CallBigModal movieID={movieID} />}
        <div className="fade-container">
          <LaneHandler categories={categories} movie={movie} />
        </div>
        <Footer />
      </div>
    </>
  );
}
