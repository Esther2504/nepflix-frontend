import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RiPencilLine, RiAccountCircleLine } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';

import Searchbar from './Searchbar';
import * as S from './Navbar.styled';
import { BellIcon } from './Navbar.styled';
import logo from '../../assets/navbar-images/netflix_logo.png';
import profile from '../../assets/navbar-images/profile-icon.png';
import kids from '../../assets/navbar-images/kids-icon.png';
import arrowup from '../../assets/navbar-images/arrow-up.png';
import arrowdown from '../../assets/navbar-images/arrow-down.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  const activeStyle = {
    fontWeight: 'bold',
  };

  return (
    <>
      <S.Nav isScrolled={isScrolled}>
        <S.PrimaryNav>
          <NavLink to="browse">
            {' '}
            <img src={logo} alt="Netflix logo" />
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
                to="lanes"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                (Lanes)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="modal"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                (Modal)
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
            <S.Children>
              <NavLink to="">Children</NavLink>
            </S.Children>
            <li>
              <S.Notifications>
                <BellIcon />
                <ul className="dropdown-text">
                  <img src={arrowup} />
                  <li>No recent notifications</li>
                </ul>
              </S.Notifications>
            </li>
            <li>
              {' '}
              <S.Account>
                <img src={profile} alt="Profile icon" />
                <img src={arrowdown} />
                <ul className="dropdown-text">
                  <img className="arrow-up" src={arrowup} />
                  <li>
                    <img src={kids} alt="Kids icon" />
                    <a href="#">Kids</a>
                  </li>
                  <li>
                    <RiPencilLine size={20} />
                    <a href="#">Manage Profiles</a>
                  </li>
                  <li>
                    <RiAccountCircleLine size={20} />
                    <a href="/account">Account</a>
                  </li>
                  <li>
                    <BiHelpCircle size={20} />
                    <a href="#">Help Centre</a>
                  </li>
                  <hr />
                  <li>
                    <a href="/">Sign out of Netflix</a>
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
