import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";

import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallModal from "../../components/Modal/CallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import FilterMenu from "../../components/filterknop/FilterMenu";
import Lanes from "../lanes/lanes";
import Grid from "../grid/grid";
import browseMockData from "../../mock-data/browse_categories_banner.mock.json";
import movieDetailsMock from "../../mock-data/movie_details_similar.mock.json";
import { GridContainer } from "../../components/grid-layout/GridLayout.styled";
import MovieCard from "../../components/movie-card/MovieCard";
import categoriesMock from "../../mock-data/browse_categories_banner.mock.json";
import GridLayout from "../../components/grid-layout/GridLayout";

// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt

export default function Films({ banner, categories, movie }) {
  //STATE
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  //END STATE

  let movies = categoriesMock.categories;

  //add eventlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          console.log("hovered");
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

  if (genre != "") {
      // If/else statement is tijdelijk omdat de genres niet in de mockdata staan
    if (movies.find((item) => item.name === `${genre}`)) {
      movies = movies.find((item) => item.name === `${genre}`);
    } else {
      movies = movies.find((item) => item.name === `Popular`);
    }
  }

  movies = movies.movies;
  
  console.log(movies);

  return (
    <>
      <div className="members-container">
        <FilterMenu setGenre={setGenre} genre={genre} />
        {genre == "" ? (
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

            <LaneHandler categories={categories} movie={movie} />
          </>
        ) : (
          
            <GridLayout
              genre={genre}
              movies={movies}
              categories={categories}
              movie={movie}
            />
          
        )}

        <Footer />
      </div>
    </>
  );
}
