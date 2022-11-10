import { Card } from './MovieCard.styled';
import logo from '../../assets/movie-card-images/n_logo.ico';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import { openModal, closeModal } from '../../reducers/modalReducer';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';


export default function MovieCard({ movie }) {
  const { backdrop_path, id, title } = movie;
  const logoArray = [logo, null];
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();


  function showLogo(logoArray) {
    return logoArray[/[6]/.test(id) ? 0 : 1];
  }

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
      <Card id="movie" data-backdrop={backdrop_path}
           data-id={id}>
        <img src={backdrop_path} alt={title} />
        <span>{title}</span>
        <img src={showLogo(logoArray)} />
      </Card>
    </>
  );
}
