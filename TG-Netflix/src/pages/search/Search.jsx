import { useSearchParams } from 'react-router-dom';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/movie-card/MovieCard';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner-animation/Spinner';
import * as S from './Search.styled';
import { useEffect } from 'react';
import CallSmallModal from "../../components/Modal/CallSmallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../reducers/modalReducer';


export default function Search() {
  const [search] = useSearchParams();
  const searchQuery = search.get('q');
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  const movieDetails = useSelector((state) => state.netflix.movies);
  const [browseMovieID, setBrowseMovieID] = useSearchParams();
  const { data, isLoading, error } = useFetch(
    `https://tg-nepflix.azurewebsites.net/search/movie?query=${searchQuery}`
  );
  const searchResults = data?.results;

  // remove the films that have a generic background image
  const filteredResults = searchResults?.filter(
    (result) =>
      result.backdrop_path !== 'https://images3.alphacoders.com/678/678085.jpg'
  );

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
  {isHovering && (
          <CallSmallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: movieDetails }}
            onClick={openBigModal}
          />
        )}
        {globalModalState.modalState && <CallBigModal {...movieDetails} />}
      <div className="padding-container">
        <S.Container>
          {filteredResults !== undefined && filteredResults?.length !== 0 && (
            <GridContainer>
              <S.Results>
                {filteredResults?.length !== 1
                  ? 'Search results'
                  : 'Search result'}{' '}
                for: <span>{searchQuery}</span>
              </S.Results>
           
              {filteredResults?.map((movie, id) => {
                return <MovieCard key={id} movie={movie} />;
              })}
            </GridContainer>
          )}

          <S.Alert>
            {isLoading && <Spinner />}
            {error && { error }}
            {filteredResults?.length === 0 && (
              <>
                <p>Your search for "{searchQuery}" did not have any matches.</p>
                <p>Try entering a film title.</p>
              </>
            )}
          </S.Alert>
        </S.Container>
        <Footer />
      </div>
    </>
  );
}
