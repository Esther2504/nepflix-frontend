import { NavLink } from 'react-router-dom';
import * as S from './NavbarAccount.styled';
import logo from '../../assets/navbar-images/netflix_logo.png';
import profile from '../../assets/navbar-images/profile-icon.png';
import kids from '../../assets/navbar-images/kids-icon.png';
import arrowdown from '../../assets/navbar-images/arrow-down.png';
import arrowup from '../../assets/navbar-images/arrow-up.png';

export default function NavbarAccount() {
  return (
    <>
      <S.Container>
        <NavLink to="/browse">
          {' '}
          <img src={logo} alt="Netflix logo" />
        </NavLink>
        <S.Menu>
          <img src={profile} alt="Profile icon" />
          <img src={arrowdown} />
          <ul>
            <img src={arrowup} className="arrow-up" />
            <li>
              <a href="/browse">Home</a>
            </li>
            <li>
              <a href="/">Sign out of Netflix</a>
            </li>
          </ul>
        </S.Menu>
      </S.Container>
    </>
  );
}
