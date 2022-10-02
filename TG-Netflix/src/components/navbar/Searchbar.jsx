import * as S from './Searchbar.styled';
import icon from '../../assets/search_icon.png';

export default function Searchbar() {
  return (
    <>
      <S.Search>
        <button>
          <img src={icon} alt="Search icon" />
        </button>
        <input type="search" placeholder="Titles, people, genres" />
      </S.Search>
    </>
  );
}
