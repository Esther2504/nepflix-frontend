import { NavLink } from 'react-router-dom';
import * as S from './NavbarAccount.styled';
import logo from '../../assets/navbar-images/nepflix-logo.png';
import profile from '../../assets/navbar-images/profile-icon.png';
import arrowdown from '../../assets/navbar-images/arrow-down.png';
import arrowup from '../../assets/navbar-images/arrow-up.png';

export default function NavbarAccount() {
  return (
    <>
      <S.Container>
        <NavLink to="/browse">
          {' '}
          <img src={logo} alt="Nepflix logo" />
        </NavLink>
        <S.Menu>
          <img src={profile} alt="Profile icon" />
          <img src={arrowdown} />
          <ul>
            <img src={arrowup} className="arrow-up" />
            <li>
              <NavLink to="/browse">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Sign out of Nepflix</NavLink>
            </li>
          </ul>
        </S.Menu>
      </S.Container>
    </>
  );
}
