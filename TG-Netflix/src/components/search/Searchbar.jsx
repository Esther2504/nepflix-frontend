import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { SearchIcon } from './Searchbar.styled';
import * as S from './Searchbar.styled';

export default function Searchbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const searchQuery = search.get('q');

  useEffect(() => {
    if (!location.pathname.includes('/search') && searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    } else if (!searchQuery) {
      navigate('/browse');
    }
  }, [searchQuery]);

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
      <S.Form role="search">
        <button>
          <SearchIcon alt="Search icon" />
        </button>
        <input
          type="search"
          onChange={debouncedHandleChange}
          placeholder="Enter film title.."
        />
      </S.Form>
    </>
  );
}
