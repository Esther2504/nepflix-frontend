import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { SearchIcon } from './Searchbar.styled';
import * as S from './Searchbar.styled';

export default function Searchbar() {
  const [search, setSearch] = useSearchParams();
  const query = search.get('q');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.indexOf('/search') < 0 && query) {
      navigate(`/search?q=${query}`);
    } else if (!query) {
      navigate(`/browse`);
    }
  }, [query]);

  function handleChange(e) {
    setSearch({ q: e.target.value });
  }

  const debouncedHandleChange = useMemo(
    () => debounce(handleChange, 1000),
    [handleChange]
  );

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, [debouncedHandleChange]);

  return (
    <>
      <S.Container>
        <button>
          <SearchIcon />
        </button>
        <input
          type="search"
          onChange={debouncedHandleChange}
          placeholder="Enter film title.."
        />
      </S.Container>
    </>
  );
}
