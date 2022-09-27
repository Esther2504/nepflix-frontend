import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Navbar.styled';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';
import { RiPencilFill } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const activeStyle = {
    fontWeight: 'bold',
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
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
                <TbSearch size={30} />
              </li>
              <li>
                <IoMdNotifications size={30} />
              </li>
              <li>
                {' '}
                <S.Profile>
                  <img src={profile} alt="Profile icon" />
                  <AiFillCaretDown size={15} />
                  <ul>
                    <li>
                      <RiPencilFill size={20} /> Manage Profiles
                    </li>
                    <li>
                      <MdOutlineAccountCircle size={20} />
                      Account
                    </li>
                    <li>
                      <BiHelpCircle size={20} />
                      Help Centre
                    </li>
                    <hr />
                    <li>Sign out of Netflix</li>
                  </ul>
                </S.Profile>
              </li>
            </ul>
          </S.SecondaryNav>
        </S.Container>
      </S.Nav>
      <S.Spacer></S.Spacer>
    </>
  );
}
