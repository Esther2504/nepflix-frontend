import * as S from './Searchbar.styled';
import { SearchIcon } from './Searchbar.styled';

export default function Searchbar() {
  return (
    <>
      <S.Search>
        <button>
          <SearchIcon />
        </button>
        <input type="search" placeholder="Titles, people, genres" />
      </S.Search>
    </>
  );
}
