import { useSearchParams } from 'react-router-dom';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import useFetch from '../../hooks/useFetch';
import MovieCard from '../../components/movie-card/MovieCard';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner-animation/Spinner';
import * as S from './Search.styled';

export default function Search() {
  const [search] = useSearchParams();
  const searchQuery = search.get('q');

  const { data, isLoading, error } = useFetch(
    `https://tg-nepflix.azurewebsites.net/search/movie?query=${searchQuery}`
  );
  const searchResults = data?.results;

  // remove the films that have a generic background image
  const filteredResults = searchResults?.filter(
    (result) =>
      result.backdrop_path !== 'https://images3.alphacoders.com/678/678085.jpg'
  );

  return (
    <>
      <div className="padding-container">
        <S.Container>
          {filteredResults !== undefined && filteredResults?.length !== 0 && (
            <GridContainer>
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
