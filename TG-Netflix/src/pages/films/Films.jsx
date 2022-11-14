import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { openModal, closeModal } from "../../reducers/modalReducer";

import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallSmallModal from "../../components/Modal/CallSmallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import FilterMenu from "../../components/filterknop/FilterMenu";
import categoriesMock from "../../mock-data/browse_categories_banner.mock.json";
import GridLayout from "../../components/grid-layout/GridLayout";
import { openModal, closeModal } from "../../reducers/modalReducer";
import { useParams } from "react-router-dom";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { getMovies, getBrowse } from "../../reducers/fetchReducer";

// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt

export default function Films({ banner, categories, movie }) {
  //STATE
  const { moviegenre } = useParams();
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();
  const [genre, setGenre] = useState("");

  //END STATE

  let movies = categoriesMock.categories;

  const loadedCategories = useSelector((state) => state.netflix.browse[0]);

  // console.log(loadedCategories);

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

  // if (genre != "") {
  //   // Hier straks de films van het gekozen genre fetchen wanneer we de echte data gebruiken?

  //   const categories = genre
  //   dispatch(getBrowse({ categories }));

  //   // If/else statement is tijdelijk omdat de genres niet in de mockdata staan
  //   if (movies.find((item) => item.name === `${genre}`)) {
  //     movies = movies.find((item) => item.name === `${genre}`);
  //   } else {
  //     movies = movies.find((item) => item.name === `Latest`);
  //   }
  // }

  movies = movies.movies;

  let location = useLocation();

  // Om met een directe link naar een genrepagina te gaan & zodat de filter blijft bij refresh
  React.useEffect(() => {
    let path = window.location.href.slice(
      window.location.href.lastIndexOf("/")
    );

    if (path != "/films" || path.includes("MovieID")) {
      let genreName = path.slice(1);
      setGenre(genreName);
    } else {
      setGenre("");
    }
  }, [location]);

  return (
    <>
      <div className="members-container">
        <FilterMenu setGenre={setGenre} genre={genre} />
        {genre == "" ? (
          <>
            {isHovering && (
              <CallSmallModal
                onMouseLeave={() => setIsHovering(false)}
                hover={isHovering}
                data={{ coords: coords, dataset: movieDetails }}
                onClick={openBigModal}
                movieID={movieID}
              />
            )}
            {globalModalState.modalState && <CallBigModal movieID={movieID} />}
            <LaneHandler categories={categories} movie={movie} />
          </>
        ) : (
          <GridLayout
            genre={genre}
            setGenre={setGenre}
          />
        )}

        <Footer />
      </div>
    </>
  );
}
