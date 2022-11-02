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
    if (query && location.pathname !== './search') {
      navigate(`/search?q=${query}`);
    } 
    
    else if (!query) {
      navigate(`/browse`);
    }
  }, [query]);

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
