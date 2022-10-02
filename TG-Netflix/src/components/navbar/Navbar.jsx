import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IoMdNotifications } from 'react-icons/io';
import { RiPencilLine, RiAccountCircleLine } from 'react-icons/ri';
import { BiHelpCircle} from 'react-icons/bi';

import Searchbar from './Searchbar';
import * as S from './Navbar.styled';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import arrow from '../../assets/arrow.png';

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
        <S.Container>
          <S.PrimaryNav>
            <NavLink to="browse">
              {' '}
              <img src={logo} alt="Netflix logo" />
            </NavLink>
            <S.Browse>
              Browse
              <img src={arrow} />
            </S.Browse>
            <ul>
              <img src={arrow} />
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
            </ul>
          </S.PrimaryNav>
          <S.SecondaryNav>
            <ul>
              <li>
                <Searchbar />
              </li>
              <li>
                <S.Notifications>
                  <IoMdNotifications size={30} />
                  <ul>
                    <img src={arrow} />
                    <li>No recent notifications</li>
                  </ul>
                </S.Notifications>
              </li>
              <li>
                {' '}
                <S.Account>
                  <img src={profile} alt="Profile icon" />
                  <img src={arrow} />
                  <ul>
                    <img src={arrow} />
                    <li>
                      <RiPencilLine size={20} />
                      <p>Manage Profiles</p>
                    </li>
                    <li>
                      <RiAccountCircleLine size={20} />
                      <p>Account</p>
                    </li>
                    <li>
                      <BiHelpCircle size={20} />
                      <p>Help Centre</p>
                    </li>
                    <hr />
                    <li>
                      <p>Sign out of Netflix</p>
                    </li>
                  </ul>
                </S.Account>
              </li>
            </ul>
          </S.SecondaryNav>
        </S.Container>
      </S.Nav>
      <S.VerticalSpacer />
    </>
  );
}
