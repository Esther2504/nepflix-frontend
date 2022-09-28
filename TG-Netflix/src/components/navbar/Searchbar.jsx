import { useState } from 'react';
import * as S from './Searchbar.styled';
import icon from '../../assets/search_icon.png';

export default function Searchbar() {
  const [openedSearch, setOpenedSearch] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setActivatedSearch(true);
  }

  return (
    <>
      <S.Search openedSearch={openedSearch}>
          <img src={icon} alt="Search icon" />
      </S.Search>
    </>
  );
}
