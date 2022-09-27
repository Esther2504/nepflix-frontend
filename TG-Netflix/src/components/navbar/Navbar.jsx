import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './Navbar.styled'
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';
import { RiPencilFill } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  return (
    <>
      <Styled.Nav role="navigation">
        <Styled.Container>
          <Styled.PrimaryNav>
            <img src={logo} alt="Netflix logo" />

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Films</a>
              </li>
            </ul>
          </Styled.PrimaryNav>
          <Styled.SecondaryNav>
            <ul>
              <li>
                <TbSearch size={30} />
              </li>
              <li>
                <IoMdNotifications size={30} />
              </li>
              <li>
                {' '}
                <Styled.Profile>
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
                </Styled.Profile>
              </li>
            </ul>
          </Styled.SecondaryNav>
        </Styled.Container>
      </Styled.Nav>
      <Styled.Spacer></Styled.Spacer>
    </>
  );
}