import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Searchbar from '../search/Searchbar';
import * as S from './Navbar.styled';
import logo from '../../assets/navbar-images/nepflix-logo.png';
import profile from '../../assets/navbar-images/profile-icon.png';
import arrowup from '../../assets/navbar-images/arrow-up.png';
import arrowdown from '../../assets/navbar-images/arrow-down.png';

export default function Navbar() {
  const [blackNavbar, setBlackNavbar] = useState(false);
  const [staticNavbar, setStaticNavbar] = useState(false);
  const location = useLocation();
  const activeStyle = {
    fontWeight: 'bold',
  };

  useEffect(() => {
    window.onscroll = () => {
      setBlackNavbar(window.pageYOffset === 0 ? false : true);
    };
  }, []);

  useEffect(() => {
    setStaticNavbar(location.pathname !== '/films' ? false : true);
  }, [location]);

  return (
    <>
      <S.Nav blackNavbar={blackNavbar} staticNavbar={staticNavbar}>
        <S.PrimaryNav>
          <NavLink to="browse">
            {' '}
            <img src={logo} alt="Nepflix logo" />
          </NavLink>
          <S.Browse>
            Browse
            <img src={arrowdown} />
          </S.Browse>
          <ul>
            <img src={arrowup} />
            <li>
              <NavLink
                to="browse"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="films"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Films
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-list"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                My List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="grid-layout"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                (Grid)
              </NavLink>
            </li>
          </ul>
        </S.PrimaryNav>
        <S.SecondaryNav>
          <ul>
            <li>
              <Searchbar />
            </li>
            <li>
              <S.Account>
                <img src={profile} alt="Profile" />
                <img src={arrowdown} />
                <ul>
                  <img className="arrow-up" src={arrowup} />
                  <li>
                    {/* <RiAccountCircleLine size={20} /> */}
                    <a href="/account">Account</a>
                  </li>
                  <li>
                    <a href="/">Sign out of Nepflix</a>
                  </li>
                </ul>
              </S.Account>
            </li>
          </ul>
        </S.SecondaryNav>
      </S.Nav>
    </>
  );
}
