import { NavLink } from 'react-router-dom';
import * as S from './NavbarAccount.styled';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import arrow from '../../assets/arrow.png';

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
          <img src={arrow} />
          <ul>
            <img src={arrow} />
            <li>
              <p>Manage Profiles</p>
            </li>
            <li>
              <p>Account</p>
            </li>
            <li>
              <p>Help Centre</p>
            </li>
            <hr />
            <li>
              <p>Sign out of Netflix</p>
            </li>
          </ul>
        </S.Menu>
      </S.Container>
    </>
  );
}
