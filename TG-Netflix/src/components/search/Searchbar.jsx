import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { SearchIcon } from './Searchbar.styled';
import * as S from './Searchbar.styled';

export default function Searchbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const query = search.get('q');

  useEffect(() => {
    if (location.pathname.indexOf('/search') < 0 && query) {
      navigate(`/search?q=${query}`);
    } else if (location.pathname.indexOf('/search') > -1 && !query) {
      navigate(`/browse`);
    }
  }, [query, navigate]);

  // memoize query and set debounce time
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  function handleChange(e) {
    setSearch({ q: e.target.value });
  }

  // cleanup memoized query on unmount
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <S.Container>
        <button>
          <SearchIcon />
        </button>
        <input
          type="search"
          onChange={debouncedResults}
          placeholder="Enter film title.."
        />
      </S.Container>
    </>
  );
}
