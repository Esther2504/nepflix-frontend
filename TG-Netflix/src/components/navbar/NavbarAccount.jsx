import { NavLink } from 'react-router-dom';
import * as S from './NavbarAccount.styled';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import kids from '../../assets/kids-icon.png';
import arrowdown from '../../assets/arrow-down.png';
import arrowup from '../../assets/arrow-up.png';

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
              <img src={kids} alt="Kids icon" />
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Manage Profiles</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <hr />
            <li>
              <a href="#">Sign out of Netflix</a>
            </li>
          </ul>
        </S.Menu>
      </S.Container>
    </>
  );
}
