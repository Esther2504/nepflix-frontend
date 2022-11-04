import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import MovieCard from '../../components/movie-card/MovieCard';
import Footer from '../../components/footer/footer';
import * as S from './Search.styled';
import MockData from '../../mock-data/browse_categories_banner.mock.json';

export default function Search() {
  const data = MockData.categories[0].movies;
  const [search] = useSearchParams();
  const [hasMatch, setHasMatch] = useState(true);
  const searchQuery = search.get('q');
  const checkQuery = (searchQuery) => (movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  const searchResults = data.filter(checkQuery(searchQuery));

  useEffect(() => {
    searchResults.length > 0 ? setHasMatch(true) : setHasMatch(false);
  }, [searchQuery]);

  return (
    <>
      <div className="padding-container">
        <S.Container>
          {hasMatch ? (
            <GridContainer>
              {searchResults.map((movie, index) => {
                return <MovieCard key={index} movie={movie} />;
              })}
            </GridContainer>
          ) : (
            <S.NoMatch>
              <p> Your search for "{searchQuery}" did not have any matches.</p>
              <p>Try entering a film title.</p>
            </S.NoMatch>
          )}
        </S.Container>
        <Footer />
      </div>
    </>
  );
}
