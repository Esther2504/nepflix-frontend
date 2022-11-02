import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import MovieCard from '../../components/movie-card/MovieCard';
import Footer from '../../components/footer/footer';
import * as S from './Search.styled';

export default function Search() {
  const [match, setMatch] = useState(false);
  const [search] = useSearchParams();
  const query = search.get('q');
  const movies = categoriesMock.categories[0].movies;

  const matchTitle = (query) => (movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase());

  useEffect(() => {
    if (movies.filter(matchTitle(query)).length > 0) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [query]);

  return (
    <>
      <div className="padding-container">
        <S.Container>
          {match ? (
            <GridContainer>
              {movies.filter(matchTitle(query)).map((movie, index) => {
                return <MovieCard key={index} movie={movie} />;
              })}
            </GridContainer>
          ) : (
            <>
              <S.NoMatch>
                <p> Your search for "{query}" did not have any matches.</p>
                <p>Try entering a film title.</p>
              </S.NoMatch>
            </>
          )}
        </S.Container>
        <Footer />
      </div>
    </>
  );
}
