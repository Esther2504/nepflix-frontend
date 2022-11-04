import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../reducers/modalReducer';
import Player from '../../components/player/Player';
import LaneHandler from '../../components/lane/LaneHandler';
import Footer from '../../components/footer/footer';
import CallSmallModal from '../../components/Modal/CallModal';
import CallBigModal from '../../components/Modal/CallBigModal';
//import movieDetailsMock from '../../mock-data/movie_details_similar.mock.json'
// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt

export default function Discover({ banner, categories, movie }) {

  //STATE
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  //END STATE

  //add evenlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll('#movie');
    films.forEach((film) => {
      film.addEventListener('mouseenter', (e) => {
        if (e.target.getAttribute('id')) {
          setDataset(film.dataset);
          setIsHovering(true);
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
    dispatch(openModal({ modalState: true, coords }));
  };
 
  return (
    <>
      <div className="members-container">
        <Player data={banner} modal={false}/>
        {isHovering && (
          <CallSmallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: movieDetails}}
            onClick={openBigModal}
          />
        )}
        {globalModalState.modalState && <CallBigModal {...movieDetails} />}
        <div className="fadeContainer">
        <LaneHandler categories={categories} movie={movie} />
        </div>
        <Footer />
      </div>
    </>
  );
}
