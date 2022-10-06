import { NavLink } from 'react-router-dom';
import * as S from './NotFound.styled';
import logo from '../../assets/navbar-images/netflix_logo.png';

export default function NotFound() {
  return (
    <>
      <S.Container>
        <S.Navbar>
          <NavLink to="/">
            <img src={logo} alt="Netflix logo" />
          </NavLink>
        </S.Navbar>
        <S.Message>
          <h1>Lost your way?</h1>
          <p>
            Sorry, we can't find that page. You'll find loads to explore on the
            home page.
          </p>
          <button>Netflix Home</button>
        </S.Message>
        <S.Error>Error Code NSES-404</S.Error>
        <S.Credit>FROM LOST IN SPACE</S.Credit>
      </S.Container>
    </>
  );
}
