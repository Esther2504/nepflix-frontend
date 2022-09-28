import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import * as S from './Navbar.styled';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import arrowdown from '../../assets/arrow_down.png';
import { IoMdNotifications } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';
import { RiPencilFill } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';

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
      <S.Nav role="navigation" isScrolled={isScrolled}>
        <S.Container>
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
                    <img src={arrowdown} />
                    <li>No recent notifications</li>
                  </ul>
                </S.Notifications>
              </li>
              <li>
                {' '}
                <S.Account>
                  <img src={profile} alt="Profile icon" />
                  <img src={arrowdown} />
                  <ul>
                    <img src={arrowdown} />
                    <li>
                      <RiPencilFill size={20} /> <p>Manage Profiles</p>
                    </li>
                    <li>
                      <MdOutlineAccountCircle size={20} />
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
      <S.VerticalSpacer></S.VerticalSpacer>
    </>
  );
}
