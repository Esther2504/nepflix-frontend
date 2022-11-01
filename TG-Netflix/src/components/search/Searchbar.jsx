import * as S from './Searchbar.styled';
import { SearchIcon } from './Searchbar.styled';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Searchbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const query = search.get('q');

  function handleChange(event) {
    setSearch({ q: event.target.value });
  }

  useEffect(() => {
    if (query !== null) {
      navigate(`/search?q=${query}`);
    } 
    
    // else if (location.pathname === '/search' && query === null);
    // {
    //   navigate('/browse');
    // }
  }, [query]);

  console.log(query);

  return (
    <>
      <S.Search>
        <button type="submit">
          <SearchIcon />
        </button>

        <input
          type="search"
          value={query || ''}
          onChange={handleChange}
          placeholder="Titles, people, genres"
        />
      </S.Search>
    </>
  );
}
