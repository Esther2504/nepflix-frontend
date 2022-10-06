import { NavLink, useNavigate } from 'react-router-dom';
import * as S from './NotFound.styled';
import logo from '../../assets/navbar-images/netflix_logo.png';

export default function NotFound() {
  const navigate = useNavigate();

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
          <button onClick={() => navigate('/browse')}>Netflix Home</button>
        </S.Message>
        <S.Error>
          {' '}
          <div>
            {' '}
            Error Code <span>NSES-404</span>
          </div>
        </S.Error>
        <S.Credit>
          <span>FROM: LOST IN SPACE</span>
        </S.Credit>
      </S.Container>
    </>
  );
}
